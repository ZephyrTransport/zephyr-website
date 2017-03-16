---
layout: event
img: /img/conv-center-bikes.jpg
category: TRB
title: From Ad-Hoc to Organized
type: A TRB Workshop by Zephyr
day: Sunday January 8th 2017
time: 1:30 - 4:30 PM
place: Convention Center 145A
additional-msg: <b><u>Summary Notes Now Posted</b></u><br>Scroll down and click-thru to get a summary of take-aways that will help inform the future of Zephyr.
---

This workshop represents the next step in establishing the Zephyr Foundation, a rigorous, community-wide framework for improving travel analysis methods. Attendees will work in teams to develop scopes for specific projects that improve travel analysis in order to support better decision-making and the public good.  

# Projects Explored

The following is a list of the projects that were discussed at the workshop.  These are a selection and combination of the many submittals that we received and only represent possible projects.  The Zephyr Board will be in charge of selecting projects that the organization will pursue. Click-thru to read notes on what each team came up with at TRB.

<div class="card-deck">
    {% for project in site.trb17projects %}
  	<div class="col-md-5" style="height: 250px;">
    	<h4>{{ project.title }}</h4>
    	<p><small class="text-muted">{{ project.short-description }}
 		<a href="{{ project.url }}"><br>&raquo;&nbsp;Read&nbsp;More</a>
 		</small></p>
 		
    </div>
    <div class="faint_border"></div>
  	{% endfor %}
</div>





