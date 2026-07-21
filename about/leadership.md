---
layout: simple
title: "Leadership"
section: About
permalink: /about/leadership/
---

Zephyr is led by a volunteer Board of Directors and supported by an engaged community of leaders who helped establish and continue to advance the Foundation.

### <i class="fa fa-institution" style="color:#{{ site.highlight-color }}" aria-hidden="true"></i> Board of Directors
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

### <i class="fa fa-user-tie" style="color:#{{ site.highlight-color }}" aria-hidden="true"></i> Executive Director
{: #executive-director}

<div style="float:right; margin: 5px 0 1rem 1.5rem;">
<img src="{{ '/img/joe_castiglione.jpg' | relative_url }}" width="220px" class="img-fluid rounded"/>
</div>

**Joe Castiglione** <a href="https://www.linkedin.com/in/joe-castiglione-7873aa11/" class="z-inline-linkedin" aria-label="Joe Castiglione on LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a> is the Executive Director of the Zephyr Foundation. With over 25 years of experience in transportation planning and travel demand forecasting, Joe is a leading national expert in designing and implementing advanced travel behavior models.

Prior to leading Zephyr, Joe served for a decade as the Deputy Director for Technology, Data & Analysis at the San Francisco County Transportation Authority (SFCTA). Throughout his career, he has been a driving force behind community-driven, transparent planning tools, notably managing the multi-agency ActivitySim project, an open-source, activity-based modeling platform. His pioneering research on urban congestion and the impacts of ride-hailing services has frequently informed critical infrastructure decisions across the San Francisco Bay Area and beyond.

<div class="clearfix"></div>

### <i class="fa fa-handshake" style="color:#{{ site.highlight-color }}" aria-hidden="true"></i> Committees
{: #committees}

Beyond the Board and Executive Director, Zephyr's day-to-day work is carried out by member-driven committees. No board seat is required &mdash; any member can get involved.

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 z-name-tiles">
    {% for committee in site.committees %}
    <div class="col"><div class="z-name-tile z-committee-tile">
        <strong>{{ committee.name }}</strong>
        <p>{{ committee.description }}</p>
    </div></div>
    {% endfor %}
</div>

Interested in joining a committee? Email [membership@zephyrtransport.org](mailto:membership@zephyrtransport.org) to get involved.

### <i class="fa fa-users" style="color:#{{ site.highlight-color }}" aria-hidden="true"></i> Founding Stakeholders
{: #stakeholders}

Industry leaders who volunteered to help establish the Zephyr Foundation by providing early guidance, shaping the organization's initial direction, and electing its inaugural Board of Directors. Their participation reflects their individual expertise and commitment to advancing the transportation analytics profession. Organizational affiliations are provided for identification purposes only and do not imply endorsement or official representation by their employer or institution.

<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-2 z-name-tiles">
    {% for person in site.founding_stakeholders %}
    <div class="col"><div class="z-name-tile"><strong>{{ person.name }}</strong><span>{{ person.org }}</span></div></div>
    {% endfor %}
</div>

### <i class="fa fa-rocket" style="color:#{{ site.highlight-color }}" aria-hidden="true"></i> Instigators
{: #instigators}

The individuals who helped transform years of conversations into action. Starting with ideas shared at Transportation Research Board Annual Meetings, this group took the initiative to build the foundation, community, and momentum that became Zephyr.

<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-2 z-name-tiles">
    {% for person in site.instigators %}
    <div class="col"><div class="z-name-tile"><strong>{{ person }}</strong></div></div>
    {% endfor %}
</div>
