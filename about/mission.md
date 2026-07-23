---
layout: simple
title: "Mission, Vision &amp; Values"
section: About
permalink: /about/mission/
---

<section class="content-section text-left" id="mission">
    <div class="row">
        <div class="col-lg-12">
            <div class="z-mission-statement">
                <span class="z-mission-label">Mission</span>
                <p class="z-mission-eyebrow">The Zephyr Foundation</p>
                <p>{{ site.mission }}</p>
            </div>

            <hr class="sub-section-heading-spacer">
            <h3>Vision</h3>
            {% for paragraph in site.vision %}
            <p class="z-vision-text">{{ paragraph }}</p>
            {% endfor %}

            <hr class="sub-section-heading-spacer">
            <h3>Values</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 z-name-tiles">
                {% for value in site.values %}
                <div class="col"><div class="z-name-tile z-committee-tile z-value-tile">
                    <strong>{{ value.name }}</strong>
                    <p>{{ value.description }}</p>
                </div></div>
                {% endfor %}
            </div>

        </div>
    </div>
</section>
