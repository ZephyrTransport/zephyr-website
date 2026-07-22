---
layout: simple
title: Mission, Vision, and Values
section: About
permalink: /about/mission/
---

<section class="content-section text-left" id="mission">
    <div class="row">
        <div class="col-lg-12">
            <div class="text-center">
                <img style="width:220px" src="{{ '/img/logo-small.png' | relative_url }}"/>
            </div>

            <div class="z-mission-statement">
                <span class="z-mission-label">Mission</span>
                <p>{{ site.mission }}</p>
            </div>

            <hr class="sub-section-heading-spacer">
            <h3>Vision</h3>
            {% for paragraph in site.vision %}
            <p class="z-vision-text">{{ paragraph }}</p>
            {% endfor %}

            <hr class="sub-section-heading-spacer">
            <h3>Values</h3>
            <div class="z-value-chips">
                {% for value in site.values %}
                <span class="z-value-chip">{{ value }}</span>
                {% endfor %}
            </div>

        </div>
    </div>
</section>
