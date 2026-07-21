---
layout: dmdu-lab
permalink: /dmdu-lab/community/
title: "Community"
description: "Book clubs, champions' resources, and upcoming workshops for practitioners working through this together."
---

## Upcoming Workshops

{% assign dmdu_event = site.events | where: "title", "International Perspectives on Uncertainty Planning" | first %}
{% if dmdu_event %}
<div class="dl-card dl-card-featured">
  <span class="dl-tag">Zephyr Learning Session</span>
  <h3><a href="{{ dmdu_event.url | relative_url }}">{{ dmdu_event.title }}</a></h3>
  <p>{% if dmdu_event.day %}{{ dmdu_event.day }}{% else %}{{ dmdu_event.date | date: "%B %-d, %Y" }}{% endif %}</p>
</div>
{% else %}
<div class="dl-card dl-card-coming-soon">
  <span class="dl-tag dl-tag-muted">Coming soon</span>
  <h3>International Perspectives on Uncertainty Planning</h3>
  <p>Details are being finalized &mdash; check back soon.</p>
</div>
{% endif %}

<div class="dl-note" style="margin-top:1rem;">More workshops and resources are in progress &mdash; including Momo '27's planned uncertainty-exchange tutorial. Check back, or <a href="http://eepurl.com/ccQL7z">join the mailing list</a> to hear about them first.</div>

<hr class="dl-divider" />

## Book Club

The DMDU initiative hosts informal "book clubs" where we dive into reports, papers, and other
publications related to transportation and uncertainty &mdash; a chance to discuss ideas in an
open, casual setting, sometimes even with the authors. Have a suggestion for what we should read
next? [Reach out](http://eepurl.com/ccQL7z) &mdash; we'd love to hear your ideas.

<div class="dl-callout">
  <h4>Next Up</h4>
  <p><em>Escape from Model Land</em>, Erica Thompson</p>
</div>

### Past Book Clubs

<div class="dl-timeline-item">
  <h3>Planning for Uncertain Transportation Futures: Metropolitan Planning Organizations, Emerging Technologies, and Adaptive Transport Planning</h3>
  <p>Three of the paper's authors &mdash; Devon McAslan, Lisa Kenney, and Farah Najar Arevalo &mdash; joined us to discuss their Adaptive Transportation Planning framework, which structures uncertainty planning and policy actions into three approaches: Anticipatory Governance, Responsible Innovation, and Long-Range Planning. The framework helps MPOs better understand and organize responses to deep uncertainty.</p>
  <p><a href="https://www.sciencedirect.com/science/article/pii/S2590198224000411?via%3Dihub">Read the paper on ScienceDirect</a></p>
</div>

<div class="dl-timeline-item">
  <h3>FHWA Report: Transportation for Uncertain Times</h3>
  <p>Marty Milkovits and Flavia Tsang led a book club centered on the <a href="https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/fhwahep22031.pdf">Federal Highway Administration's Transportation Planning for Uncertain Times</a>, using the report's framing to discuss DMDU methods and tools, then reconnecting regularly to share experiences.</p>
  <ul>
    <li><span class="dl-timeline-date">March 7, 2024</span> &mdash; Theory (Chapters 1 &amp; 2) &middot; <a href="https://docs.google.com/document/d/1075AU0-vUJXokF0a3WfueeuiZFiGm-MXXoNuEz7_E-s/edit?usp=sharing">summary</a></li>
    <li><span class="dl-timeline-date">May 9, 2024</span> &mdash; Applications (Chapters 3 &amp; 4) &middot; <a href="https://docs.google.com/document/d/1j7kUQTMxQv3xuGzv7zJPYqZ9hncUjhubDTy1ABsXqy4/edit?usp=sharing">summary</a></li>
    <li><span class="dl-timeline-date">July 11, 2024</span> &mdash; Bringing It Home (Chapter 5 &amp; Summary Questions) &middot; <a href="https://docs.google.com/document/d/1aLedPBtf2AmvxbSzFfTnGEGwkePn3zuPHnX6AE058B8/edit?usp=sharing">summary</a></li>
  </ul>
</div>

<hr class="dl-divider" />

## Champions' Toolkit

Resources for anyone advocating for DMDU inside their own agency.

### Recommended Reading

<div class="dl-callout">
  <p><strong><a href="https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/fhwahep22031.pdf">Federal Highway Administration's Transportation Planning for Uncertain Times</a></strong><br />
  Read for: an assessment of transportation state-of-the-practice in DMDU by two of the approach's
  original thinkers, Rob Lempert and Steven Popper.</p>
</div>

<div class="dl-callout">
  <p><strong><a href="https://doi.org/10.1287/opre.41.3.435">Exploratory Modeling for Policy Analysis</a></strong> &mdash; Steven Bankes<br />
  Read for: a new mindset on developing and using models to support decision making.</p>
</div>

### Communication Materials

Do you have slides, white papers, or other content that's been useful for explaining planning
under uncertainty? [Share them with us.](http://eepurl.com/ccQL7z)

<div class="dl-timeline-item">
  <h3><a href="https://www.climatecentre.org/games/2520/decisions-for-the-decade/">Decisions for the Decade</a></h3>
  <p>This game has been presented at several conferences and individual agencies to great success.</p>
</div>

<div class="dl-timeline-item">
  <h3>TRB 2024 Annual Meeting &mdash; Future Uncertain Workshop</h3>
  <p>&gt;100 participants &middot; <a href="https://drive.google.com/file/d/1rvsSMSE-Z0hVVUc05ax5iH79AQmPo2h0/view">slides</a></p>
</div>

<div class="dl-note">More champions' resources &mdash; including materials from the Momo 2025 Uncertainty Workshop and agency-specific playbooks &mdash; are being compiled.</div>
