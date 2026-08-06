---
layout: simple
img: none
icon: logos/activitysim_logo_light.jpg
category: Activities
pillars: [community, standards]
order: 20
title: ActivitySim
description: Open-source, activity-based travel behavior modeling software built and maintained by a consortium of planning agencies.
front: True
permalink: /activities/activitysim/
hide-title: true
lead: "Joe Castiglione"
contact: "admin@activitysim.org"
contact_url: "mailto:admin@activitysim.org"

# domain is used for programmatic logo gathering
# url is the link included on card
activitysim_members:
  - name: Atlanta Regional Commission (Atlanta)
    domain: atlantaregional.org
    url: https://atlantaregional.org/
  - name: Central Transportation Planning Staff (Boston)
    domain: ctps.org
    url: https://www.ctps.org/
  - name: Chicago Metropolitan Agency for Planning (Chicago)
    domain: cmap.illinois.gov
    url: https://www.cmap.illinois.gov/
  - name: Maricopa Association of Governments (Phoenix)
    domain: azmag.gov
    url: https://azmag.gov/
  - name: Metropolitan Council (Minneapolis/St.Paul)
    domain: metrocouncil.org
    url: https://metrocouncil.org/
  - name: Metropolitan Transportation Commission (San Francisco Bay Area)
    domain: mtc.ca.gov
    url: https://mtc.ca.gov/
  - name: National Capital Region Transportation Planning Board (Washington, DC)
    domain: mwcog.org
    url: https://www.mwcog.org/tpb/
  - name: Metro (Portland, OR)
    domain: metro.org
    url: https://www.oregonmetro.gov//
  - name: Puget Sound Regional Council (Seattle)
    domain: psrc.org
    url: https://www.psrc.org/
  - name: San Diego Association of Governments (San Diego)
    domain: sandag.org
    url: https://www.sandag.org/
  - name: San Francisco County Transportation Authority (San Francisco)
    domain: sfcta.org
    url: https://www.sfcta.org/
  - name: Southeast Michigan Council of Governments (Detroit)
    domain: semcog.org
    url: https://www.semcog.org/
  - name: TransLink (Vancouver, BC)
    domain: translink.ca
    url: https://www.translink.ca/
  - name: Transport for New South Wales (Sydney, NSW)
    domain: transport.nsw.gov.au
    url: https://www.transport.nsw.gov.au/
  - name: Victoria Department of Transport and Planning (Melbourne, VIC)
    domain: vic.gov.au
    url: https://www.vic.gov.au/department-transport-and-planning
---

<img src="{{ '/img/logos/activitysim_logo_light.jpg' | relative_url }}" alt="ActivitySim" class="z-activitysim-page-logo mb-4"/>

The mission of the ActivitySim project is to create and maintain advanced, open-source, activity-based travel behavior modeling software based on best software development practices. 

## Partners

The ActivitySim project is led by a consortium of Metropolitan Planning Organizations (MPOs), Departments of Transportation (DOTs), and other transportation planning agencies. The consortium provides technical direction and resources to support project development. All member agencies make an annual contribution of $35,000US to the effort and help to make decisions about development priorities. New member agencies are welcome to join the consortium. To learn more about joining the consortium, [contact us](mailto:admin@activitysim.org).

### List of All Consortium Members

<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 z-member-list">
    {% for member in page.activitysim_members %}
    <div class="col"><div class="z-member-tile"><img class="z-member-tile-logo" src="https://www.google.com/s2/favicons?sz=128&domain={{ member.domain }}" alt="" onerror="this.remove()">{{ member.name }}<a class="z-member-tile-www" href="{{ member.url }}" target="_blank" rel="noopener" aria-label="{{ member.name }} website"><i class="fa-solid fa-globe" aria-hidden="true"></i></a></div></div>
    {% endfor %}
</div>

## Open-Source Code

Please visit ActivitySim’s [Github page](https://github.com/ActivitySim/activitysim). This page captures ongoing work and development plus decisions and conversations related to the development of ActivitySim. The GitHub issues and milestones are commonly tied to development work and are linked when possible to programmed work efforts. You can also check out our industry presentations and affiliated packages.

Also visit our [FAQ page]({{ '/activities/activitysim/activitysim-faq' | relative_url }}).

## ActivitySim Implementations

ActivitySim is already being put to work across the U.S. and around the world as a better way to model travel behavior, grouped into three examples below. And if you’re an ActivitySim user, we’d love to hear what you’re doing with it. [Contact us!](mailto:admin@activitysim.org)

<div class="row row-cols-1 row-cols-md-3 g-4 z-implementation-list">
    <div class="col">
        <div class="card h-100 z-program-card">
            <div class="card-body text-center position-relative">
                <h3 class="card-title h5"><a href="{{ '/activities/activitysim/activitysim-example-1' | relative_url }}" class="stretched-link">Production &amp; Near-Production Implementations</a></h3>
                <p class="card-text">SANDAG, SEMCOG</p>
                <p class="z-program-card-hint">Click for details &raquo;</p>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100 z-program-card">
            <div class="card-body text-center position-relative">
                <h3 class="card-title h5"><a href="{{ '/activities/activitysim/activitysim-example-2' | relative_url }}" class="stretched-link">Legacy Model Transitions</a></h3>
                <p class="card-text">Atlanta Regional Commission, National Capital Region Transportation Planning Board</p>
                <p class="z-program-card-hint">Click for details &raquo;</p>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100 z-program-card">
            <div class="card-body text-center position-relative">
                <h3 class="card-title h5"><a href="{{ '/activities/activitysim/activitysim-example-3' | relative_url }}" class="stretched-link">Statewide &amp; Multi-Agency Collaboratives</a></h3>
                <p class="card-text">State of Oregon</p>
                <p class="z-program-card-hint">Click for details &raquo;</p>
            </div>
        </div>
    </div>
</div>
