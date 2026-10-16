/*
 * Example for the Query Client talk — the hook pattern over a WebSocket price stream.
 * Illustrative: not part of a build.
 */
package example.hooks

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import java.math.BigDecimal
import kotlinx.coroutines.flow.StateFlow

data class Ticker(val symbol: String, val price: BigDecimal)

/** One app-wide socket, multiplexed per symbol. Provided once at the app root. */
interface PriceStream {
    fun prices(symbol: String): StateFlow<Ticker?>
    fun pause()
    fun resume()
}

val LocalPriceStream = staticCompositionLocalOf<PriceStream> {
    error("PriceStream not provided")
}

/** Same contract as useQuery for the screen: call a hook, get a value. The source is a socket. */
@Composable
fun useTickerPrice(symbol: String): Ticker? {
    val stream = LocalPriceStream.current
    val ticker by remember(symbol) { stream.prices(symbol) }.collectAsStateWithLifecycle()
    return ticker
}

/** Called once at the app root: the socket sleeps in the background and reconnects on return. */
@Composable
fun usePriceStreamLifecycle() {
    val stream = LocalPriceStream.current
    val lifecycleOwner = LocalLifecycleOwner.current

    DisposableEffect(lifecycleOwner) {
        val observer = LifecycleEventObserver { _, event ->
            when (event) {
                Lifecycle.Event.ON_START -> stream.resume()
                Lifecycle.Event.ON_STOP -> stream.pause()
                else -> Unit
            }
        }
        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose { lifecycleOwner.lifecycle.removeObserver(observer) }
    }
}
