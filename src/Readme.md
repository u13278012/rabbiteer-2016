# src
In this folder you find the **Server Side** code. Code here is written in ES6 and downcompiled
with *Babel*. 

## Files

| File | What for? |
|------|-----------|
| `index` | This is the entry point. It creates a `Server` and starts listening for connections from the browser |
| `server` | This is the main server class. It listens for connections and serves files and the API |
| `debugsupport` | This file contains some routines that support debugging. It spawns `gulp` in the background, which watches for file changes |

