/*
 * Example for the Query Client talk — a polled read plus a write that refreshes it.
 * Written against the ComposeCleanArch :core:query API. Illustrative: not part of a build.
 */
package example.hooks

import androidx.compose.runtime.Composable
import androidx.hilt.navigation.compose.hiltViewModel
import dev.lumora.composearch.core.query.LocalQueryClient
import dev.lumora.composearch.core.query.MutationOptions
import dev.lumora.composearch.core.query.MutationResult
import dev.lumora.composearch.core.query.QueryOptions
import dev.lumora.composearch.core.query.QueryResult
import dev.lumora.composearch.core.query.useMutation
import dev.lumora.composearch.core.query.useQuery
import java.math.BigDecimal
import kotlin.time.Duration.Companion.minutes
import kotlin.time.Duration.Companion.seconds

/** Domain models. Money is BigDecimal, never Double. */
data class WalletBalance(val symbol: String, val amount: BigDecimal)
data class BuyRequest(val symbol: String, val amount: BigDecimal)
data class Order(val id: String, val symbol: String, val amount: BigDecimal)

/** Query keys live next to the Api, so hooks and invalidation share one definition. */
object WalletKeys {
    fun balance(symbol: String, market: String = "spot"): String = "wallet.balance.$symbol.$market"

    /** Regex for invalidateMatching: every balance, whatever the symbol. */
    const val ALL_BALANCES = "wallet\\.balance\\..*"
}

/**
 * A balance that stays live while the screen is visible.
 *
 * - served from cache for 30s, so several screens showing it share one request;
 * - kept for 1 min after the last screen leaves;
 * - polled every 15s, only while the screen is STARTED.
 */
@Composable
fun useWalletBalance(
    symbol: String,
    market: String = "spot",
    enabled: Boolean = true,
): QueryResult<WalletBalance> {
    val provider = hiltViewModel<HookProvider>()

    return useQuery(
        key = WalletKeys.balance(symbol, market),
        fetcher = { provider.walletRepository.getBalance(symbol, market) },
        options = QueryOptions(
            enabled = enabled && symbol.isNotEmpty(),
            staleTime = 30.seconds.inWholeMilliseconds,
            cacheTime = 1.minutes.inWholeMilliseconds,
            refetchInterval = 15.seconds.inWholeMilliseconds,
        ),
    )
}

/**
 * A buy. Single-flight (a double tap submits once), never retried on 4xx, and on success
 * every balance query refetches — no screen has to tell another one to reload.
 */
@Composable
fun useBuy(): MutationResult<BuyRequest, Order> {
    val provider = hiltViewModel<HookProvider>()
    val queryClient = LocalQueryClient.current

    return useMutation(
        mutationFn = { request -> provider.orderRepository.buy(request) },
        options = MutationOptions(
            onSuccess = { queryClient.invalidateMatching(WalletKeys.ALL_BALANCES) },
        ),
    )
}
