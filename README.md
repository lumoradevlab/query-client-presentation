# Query Client Architecture for Jetpack Compose — a three-session course

A Persian (RTL) course that teaches the **Query Client** architecture: screens with no ViewModels, where server
state goes through a shared, React-Query-style cache (`useQuery` / `useMutation` / `QueryContent`).
[ComposeCleanArch](https://github.com/lumoradevlab/ComposeCleanArch) is the reference implementation.

**Live:** https://lumoradevlab.github.io/query-client-presentation/

| Session | Title | Status | Contents |
|---|---|---|---|
| 1 | **The idea** | Ready · [open](https://lumoradevlab.github.io/query-client-presentation/session-1/) | Three phones, three copies; server data is a copy; the web had this first (React Query); why Compose fits; one shared box (QueryEntry), its key, QueryClient; before/after; the three tools; QueryState; useMutation; where each piece lives |
| 2 | **The engine** | Coming | staleTime, observers and cacheTime, one request at a time, invalidate, retry, late responses, live data; the interactive simulators; testing the engine |
| 3 | **Building** | Coming | The architecture around the engine, where a ViewModel still belongs, the rules, the recipe, building a feature together |

Each session is about 45 minutes, opens with a recap and the one-sentence destination, and ends with a bridge to
the next session.

---

## Presenting

No build step. Open a session in Chrome.

| Key | Action |
|---|---|
| `→` `↓` `Space` `Enter` / click | Next build step, then next slide |
| `←` `↑` `Backspace` | Previous step / slide |
| `Home` / `End` | First / last slide |
| `N` | Speaker-notes window (synced, shows the build step and a timer) |
| `F` | Fullscreen |

Slides build step by step: diagrams, code highlights and captions appear on each `→`, so you control the reveal.
`#5` in the URL opens slide 5.

If the notes window does not sync when opened from disk, serve the folder instead:

```bash
python3 -m http.server 8000      # then open http://localhost:8000/session-1/
```

## Files

```
index.html              landing page with the three sessions
session-1/              Session 1 deck, speaker notes window, notes per slide
examples/               Kotlin examples shown on the slides
archive/v1/             the first single-deck draft, kept for reference
```

## Theme

**Nocturne**, the palette from [parisaghader.org](https://parisaghader.org), in a single dark keynote style. Type is
Inter (Latin), Vazirmatn (Persian) and JetBrains Mono (code).

---

**Parisa Hazhir Ghader** · Senior Mobile Engineer · [parisaghader.org](https://parisaghader.org)
