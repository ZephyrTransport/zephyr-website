---
layout: simple
icon: logos/TMIP_wheel_bw_transparent.png
title: TMIP Archive
description: Searchable archive of the TMIP mailing list archive, 2001-2023.
front: True
permalink: /activities/travel-model-improvement-program/archive/
---

<!-- Vue application gets inserted here -->

<div id="app"><i>Loading...</i></div>

<link rel="stylesheet" crossorigin href="{{ '/tmip-archive-assets/index.css' | relative_url }}" />
<script type="module" crossorigin src="{{ '/tmip-archive-assets/index.js' | relative_url }}"></script>

<noscript>
  <br/><p>
  <b style="background-color: yellow">
  Accessing the TMIP archive requires JavaScript. Please enable JavaScript in your web browser to continue.
  </b></p>
</noscript>

<script>
(function () {
  var q = new URLSearchParams(window.location.search).get('q');
  if (!q) return;

  var tries = 0;
  var poll = setInterval(function () {
    tries++;
    var input = document.querySelector('#app input[placeholder="Search..."]');
    if (input) {
      clearInterval(poll);
      input.value = q;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    } else if (tries > 100) {
      clearInterval(poll);
    }
  }, 100);
})();
</script>

<!-- END Vue application -------------- -->