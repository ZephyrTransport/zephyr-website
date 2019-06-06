---
layout: simple
title: "Opportunities"
subTitle: "Jobs, Fellowships, Internships"
---

### Jobs

<table>
<thead>
<tr>
  <th>Title</th>
  <th>Institution</th>
  <th>Location</th>
  <th>Closing</th>
</tr>
</thead>
{% for opp in site.data.opportunities %}{% if opp.post %}{% if opp.type == 'job'%}
<tr>
   <td><a href='{{ opp.link }}'>{{ opp.name }}</a></td>
   <td>{{ opp.institution }}</td>
   <td>{{ opp.location }}</td>
   <td>{{ opp.closing }}</td>
</tr>
{% endif %}{% endif %}{% endfor %}
</table>

### Internships

<table>
<thead>
<tr>
  <th>Title</th>
  <th>Institution</th>
  <th>Location</th>
  <th>Closing</th>
</tr>
</thead>
{% for opp in site.data.opportunities %}{% if opp.post %}{% if opp.type == 'internship'%}
<tr>
   <td><a href='{{ opp.link }}'>{{ opp.name }}</a></td>
   <td>{{ opp.institution }}</td>
   <td>{{ opp.location }}</td>
   <td>{{ opp.closing }}</td>
</tr>
{% endif %}{% endif %}{% endfor %}
</table>

### Fellowships

<table>
<thead>
<tr>
  <th>Title</th>
  <th>Institution</th>
  <th>Location</th>
  <th>Closing</th>
</tr>
</thead>
{% for opp in site.data.opportunities %}{% if opp.post %}{% if opp.type == 'fellowship'%}
<tr>
   <td><a href='{{ opp.link }}'>{{ opp.name }}</a></td>
   <td>{{ opp.institution }}</td>
   <td>{{ opp.location }}</td>
   <td>{{ opp.closing }}</td>
</tr>
{% endif %}{% endif %}{% endfor %}
</table>

<br/>
<p>If you would like to post a position or opportunity, please email <a href='mailto://info@zephyrtransport.org'>info@zephyrtransport.org</a>.
