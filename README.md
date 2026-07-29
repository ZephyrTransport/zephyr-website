# zephyr-website
Homepage for the website for the [Zephyr Foundation for Advancing Travel Analysis Methods](http://zephyrtransport.org/)

This is a Jekyll site, built natively by GitHub Pages from the `gh-pages` branch — pushes there go live immediately, so do redesign/content work on a separate branch.

## Local preview

```
bundle install
RUBYOPT="-r./.jekyll_ruby_compat_shim.rb" bundle exec jekyll serve
```

The `Gemfile` pins the `github-pages` gem so the local build matches GitHub's production Jekyll version exactly. On Ruby 3.2+, that pinned version needs the `RUBYOPT` shim above — it patches a `String#tainted?` call that Liquid 4.0.3 still makes but Ruby removed. It only affects the local process (GitHub's remote build runs an older Ruby where this still works), so it's safe to leave out of the Gemfile.

## Site structure

Top-level content lives in lowercase folders, one per section: `about/`, `zephies/`, `events/`, `activities/`, `donate/`, `membership/`. Every page pins its own URL with a `permalink:` front-matter key, so folder/file names are just organization — moving or renaming a file never changes its URL as long as the `permalink:` moves with it.

`_activities/` is a Jekyll collection: one subfolder per activity (e.g. `_activities/travel-model-improvement-program/`), with that folder's `index.md` as the activity's "tile" page. `activities/index.html` builds the grid on `/activities/` by selecting collection docs whose path ends in `/index.*` (so sub-pages like FAQs or archives don't get their own tile) and sorting by each page's `order:` front-matter value — reorder tiles by editing that number, not by renaming folders.

`archive/` holds retired content excluded from the build (see `exclude:` in `_config.yml`) — kept for history, not published.
