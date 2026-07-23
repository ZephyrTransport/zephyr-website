---
name: run-jekyll-site
description: Launch and preview this Jekyll site locally (bundle exec jekyll serve), including the fix for this machine's Ruby/Liquid version mismatch.
---

# Running this site locally

This repo is a Jekyll site pinned to old gems (`github-pages` gem pins
`jekyll` 3.9.0 / `liquid` 4.0.3) via the Gemfile. The installed Ruby on
this machine is 4.0, which removed `Object#tainted?`. Old `liquid`
still calls `obj.tainted?` on every variable render, so a plain
`bundle exec jekyll serve` or `build` crashes immediately with:

```
Liquid Exception: undefined method 'tainted?' for an instance of String in /_layouts/event.html
```

This is a local-toolchain issue, not a bug in the site's own code —
GitHub Pages builds this fine with its own pinned Ruby.

## Fix: RUBYOPT-injected shim

A `_plugins/*.rb` file does **not** work as a workaround here — for
unknown reasons this repo's `_plugins` directory is not picked up by
`bundle exec jekyll build/serve` on this machine (verified: gem
plugins listed under `--verbose` load fine, but files placed in
`_plugins/` are silently never `require`d, even though a manually
constructed `Jekyll::Site.new` in the same Ruby install does load
them). Don't burn time re-debugging that — use `RUBYOPT` instead,
which reliably runs before anything else:

```bash
cat > /tmp/taint_shim.rb << 'EOF'
class Object
  def tainted?
    false
  end unless method_defined?(:tainted?)
end
EOF

cd /d/GitHub/zephyr-website
RUBYOPT="-r/tmp/taint_shim.rb" /c/Ruby40-x64/bin/bundle exec jekyll serve --port 4444 --host 127.0.0.1 2>&1
```

Run that `serve` command with `run_in_background: true` via Bash (the
`--detach` flag does NOT work — `fork()` is unimplemented on this
Windows Ruby build, it raises `NotImplementedError`).

Then poll the output file for `Server address` before treating it as
ready, e.g.:

```bash
f="<task .output path>"
until grep -qE "Server address|Error" "$f" 2>/dev/null; do sleep 1; done
```

## After it's up

Auto-regeneration is on by default, so once the server is running,
just edit files — Jekyll rebuilds automatically on save (watch the
task's output for "Regenerating..."). **Don't kill and restart the
server for every subsequent preview** — reuse the already-running one
for the rest of the session; only relaunch if it actually crashed or
the session ended.

**Exception: `_config.yml` changes are never picked up by the
watcher** — this is standard Jekyll behavior, not specific to this
repo. If the user edits `_config.yml` (or you do) and says a change
"isn't showing up," that's the symptom — `TaskStop` the running serve
task and relaunch it (same `RUBYOPT` command as above) to reload
config. No need to re-diagnose; just restart.

View the site at `http://127.0.0.1:4444/` (or take a screenshot /
navigate to a specific page path with a browser tool).

Do not commit `/tmp/taint_shim.rb` or `RUBYOPT` usage into the repo
itself — this is a local machine workaround, not a project dependency
change.
