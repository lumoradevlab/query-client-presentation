# Examples

Kotlin examples shown on the slides, written against the
[ComposeCleanArch](https://github.com/lumoradevlab/ComposeCleanArch) `:core:query` API.
They illustrate the patterns; they are not a compiled module.

| File | Slide | Shows |
|---|---|---|
| `WalletHooks.kt` | Polling | A read polled with `refetchInterval`, query keys in an object, and a buy mutation that invalidates every balance |
| `TickerHooks.kt` | Beyond REST | The same hook contract over a WebSocket price stream, with lifecycle-aware pause and resume |

`HookProvider`, `walletRepository` and `orderRepository` follow the ComposeCleanArch recipe: a repository per area,
exposed to hooks through `HookProvider`.
