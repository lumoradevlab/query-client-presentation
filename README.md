# Query Client Architecture for Jetpack Compose — Team Presentation

A Persian (RTL) presentation that teaches the **Query Client** architecture: screens with no ViewModels, where
server state goes through a hand-rolled, React-Query-style cache (`useQuery` / `useMutation` / `QueryContent`).

It starts where the idea comes from — React Query on the web — then shows the same problem in Android, how the idea
maps onto Compose, how the engine works (with live simulators), the traps a naive version falls into, and how the
team builds features with it, using [ComposeCleanArch](https://github.com/lumoradevlab/ComposeCleanArch) as the
reference implementation.

**Live:** https://lumoradevlab.github.io/query-client-presentation/

---

## Running it

No build step and no dependencies. Open the live link, or open `index.html` in Chrome.

If the speaker-notes window does not sync when opened from disk, serve the folder instead:

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

### Presenting

| Key | Action |
|---|---|
| `→` `↓` `Space` `PgDn` | Next slide (works with most clickers) |
| `←` `↑` `PgUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `N` | Open the speaker-notes window (stays in sync, has a timer) |
| `T` | Toggle dark / light theme |
| `+` `−` `0` | Larger / smaller / reset text |
| `F` | Fullscreen |
| `?` | Shortcut help |

The deck is a fixed 1600×900 canvas that scales to any screen. `#12` in the URL opens slide 12.

**Two-screen setup:** put the deck on the projector, press `N`, and drag the notes window to your laptop.
Navigate from either window.

---

## Outline (43 slides)

The talk follows one path: the destination first, then where the idea comes from, the same problem in Android, the
shared "box" that fixes it, the box's rules one at a time, the traps, and how to build with it.

| # | Section | Contents |
|---|---|---|
| 1–3 | Intro | Cover, agenda, today's destination in one sentence (box, key, QueryClient) |
| 4–7 | **Where it comes from** | The Redux-era problem; React Query's idea (server state is a cache); why it fits Compose |
| 8–11 | **The problem** | MVVM vs hooks for the same screen; two screens, two copies; server state ≠ client state |
| 12–19 | **The idea, in Compose** | One shared box (QueryEntry); key and QueryClient; React Query → ComposeCleanArch mapping; `useQuery` / `useMutation` / `QueryContent`; data flow; modules; sealed `QueryState` |
| 20–31 | **The engine** | Rule 1 staleTime; rule 2 observers and cacheTime; cache lifecycle simulator; rule 3 fetch and de-duplication; de-duplication simulator; mutations + invalidate; retry-policy explorer; out-of-order response simulator (epochs); polling; WebSocket hooks; Room tier |
| 32–34 | **Traps** | What a naive implementation gets wrong; double-tap mutation simulator |
| 35–43 | **Getting started** | When a state holder still belongs; hard rules; 8-step feature recipe; cheat sheet; testing; hands-on exercise; recap; Q&A |

### Interactive simulators

1. **Cache lifecycle**: open and close screens, advance the clock, and invalidate to see fresh → stale → evicted.
2. **De-duplication**: three screens mount at once and make 3 requests without the cache, or 1 with it.
3. **Retry policy**: pick an error (IOException, 408, 5xx, 4xx, 429) to see what reads and writes do.
4. **Out-of-order responses**: step through a slow poll racing an invalidation, naive vs epochs.
5. **Double tap**: tap "Buy" quickly to get duplicate orders in the naive version and a single order with single-flight.

---

## Files

```
index.html        the deck: slides, styles, simulators
notes.html        speaker-notes window
notes-data.js     speaker notes per slide (Persian), with suggested timings
examples/         Kotlin examples shown on the slides
```

To edit a slide, change its `<section>` in `index.html`. To edit its notes, change the entry with the same `id` in
`notes-data.js`.

## Theme

The deck uses **Nocturne**, the palette from [parisaghader.org](https://parisaghader.org): ground `#161826`, surface
`#232532`, accent `#9184d9`, with a light variant. Type is Inter (Latin), Vazirmatn (Persian) and JetBrains Mono (code).

---

## Presenter

**Parisa Hazhir Ghader** · Senior Mobile Engineer · [parisaghader.org](https://parisaghader.org)
