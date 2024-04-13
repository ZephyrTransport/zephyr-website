---
layout: project
img: sf-plot.png
icon: TMIP_wheel_bw_transparent.png
category: Activities
title: TMIP Archive
description: Searchable archive of the TMIP mailing list archive, 2001-2023.
front: True
---

## TMIP Archive

<!-- Vue application gets inserted here -->
<div id="tmip-app"><i>Loading...</i></div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  import TmipArchiveApp from '/js/tmip-archive-app.js'
  createApp(TmipArchiveApp).mount('#tmip-app')
</script>

<noscript>
  <br/>
  <p><b style="background-color: yellow">
    Searching the TMIP archive requires JavaScript. Please enable JavaScript in your web browser to continue.
  </b></p>
</noscript>
