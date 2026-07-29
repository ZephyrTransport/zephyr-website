---
layout: simple
title: "Join an Activity"
section: Get Involved
permalink: /get-involved/activities/
---

Zephyr's activities are project- and topic-focused groups working on specific tools, standards, and initiatives &mdash; a great fit if you'd rather contribute to a specific effort than serve on an organization-level committee. Find one below and reach out to get involved, or click through for the full details.

Getting involved in an activity requires current Zephyr membership &mdash; not a member yet? [Join here]({{ '/get-involved/membership' | relative_url }}) first.

<div class="table-responsive">
<table class="table table-striped align-middle z-activities-table">
    <thead>
        <tr>
            <th scope="col">Activity</th>
            <th scope="col">Description</th>
            <th scope="col">Contact</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        {% assign programs_list = site.activities | where_exp: "program", "program.path contains '/index.'" | sort: "order" %}
        {% for program in programs_list %}
        <tr>
            <td><strong>{{ program.title }}</strong></td>
            <td>{{ program.description }}</td>
            <td>
                {% if program.lead %}{{ program.lead }}<br>{% endif %}
                {% if program.contact_url %}
                <a href="{{ program.contact_url }}">{{ program.contact }}</a>
                {% elsif program.lead == nil %}
                &mdash;
                {% endif %}
            </td>
            <td><a href="{{ program.url | relative_url }}" class="btn btn-sm btn-z">More Info</a></td>
        </tr>
        {% endfor %}
    </tbody>
</table>
</div>

Prefer to get involved at the organization level instead? Check out our [committees]({{ '/about/committees' | relative_url }}).

{% include home-link.html %}
