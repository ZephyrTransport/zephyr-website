---
layout: simple
title: "Leadership"
section: About
permalink: /about/leadership/
---

Zephyr is led by a volunteer Board of Directors and an Executive Director, with day-to-day programs carried out by member-driven [committees]({{ '/about/committees' | relative_url }}).

### Board of Directors
{: #board}

The Zephyr Board of Directors consists of nine members dedicated to advancing the organization's mission and long-term success. The board seeks to represent the full spectrum of the transportation analytics profession—including academia, public agencies, consultants, and technology vendors—and values diverse perspectives and experiences. To provide both continuity and fresh ideas, approximately one-third of the board is elected by the [Zephyr Membership]({{ '/membership' | relative_url }}) each spring to staggered terms.

Board as of July 2026:

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 z-name-tiles">
    {% for member in site.board_members %}
    <div class="col"><div class="z-name-tile z-board-tile">
        <a href="{{ member.linkedin }}" class="z-tile-linkedin" aria-label="{{ member.name }} on LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>
        <img src="{{ '/img/board/' | append: member.photo | relative_url }}" class="z-tile-photo" alt="{{ member.name }}"/>
        <strong>{{ member.name }}</strong>
        <span>{{ member.org }}</span>
        {% if member.role %}<span class="z-tile-role">{{ member.role }}</span>{% endif %}
    </div></div>
    {% endfor %}
</div>

### Executive Director
{: #executive-director}

<div class="z-inline-photo">
<img src="{{ '/img/joe_castiglione.jpg' | relative_url }}" width="220px" class="img-fluid rounded"/>
</div>

**Joe Castiglione** <a href="https://www.linkedin.com/in/joe-castiglione-7873aa11/" class="z-inline-linkedin" aria-label="Joe Castiglione on LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a> is the Executive Director of the Zephyr Foundation. With over 25 years of experience in transportation planning and travel demand forecasting, Joe is a leading national expert in designing and implementing advanced travel behavior models.

Prior to leading Zephyr, Joe served for a decade as the Deputy Director for Technology, Data & Analysis at the San Francisco County Transportation Authority (SFCTA). Throughout his career, he has been a driving force behind community-driven, transparent planning tools, notably managing the multi-agency ActivitySim project, an open-source, activity-based modeling platform. His pioneering research on urban congestion and the impacts of ride-hailing services has frequently informed critical infrastructure decisions across the San Francisco Bay Area and beyond.

<div class="clearfix"></div>

<div class="z-note-callout" markdown="1">
Zephyr is also grateful to the Founding Stakeholders and Instigators who helped establish the Foundation &mdash; read their story on [Our History]({{ '/about/history' | relative_url }}).
</div>
