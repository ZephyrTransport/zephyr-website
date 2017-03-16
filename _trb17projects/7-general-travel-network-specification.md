---
layout: project
img: TRB2017-Workshop-NetworkSpecificationTable.jpg
category: Project TRB Workshop 2017
title: General Travel Network Specification
short-description: This team explored what it would take for Zephyr to support a standardized network format.
description: Much like Google standardized the data format for current (and archived) transit networks, the travel modeling community needs a standardized way of coding, using, and sharing travel network scenarios – past, current and future. Generalized network specifications would reduce staff training time, scenario development time, and consultant costs. This group will roadmap what a Zephyr-supported data standard development process would look like using a general travel network specification as a specific example.
latest-update: As discussed at the 2017 TRB Annual Meeting
---

The inordinate amount of time required to develop the network by MPO’s needs to be resolved.

Currently there are too many different solutions, inelegant solutions, non transferrable solutions to the same problem.

## What are the steps to take to create a generalized standard?

### Convene stakeholders to identify requirements
Data model that has capability of storing current, past, and future conditions [including variants on the future] and good capabilities for switching between scenarios.  Should have versioning abilities at very least, which can evolve to scenarios.

Must be sharing-oriented.  Could greatly augment ability to visualize results.

What resolution will it support:  micro vs macro? Dynamic? 
What schema?  node-link? intersection geometry? signalization?

### Identify Existing Solutions
OpenStreetMap

Jellyfish project: Queensland university attempted a master network for Australia

Examine where the time-consuming steps are in the current work flows.

### Standardize Network Vocabulary

Decide on:

- Vocabulary: standard naming conventions

Focus on static assignment as first pass.

Leverage existing popular standards when possible [ e.g. GTFS, OSM ]

Need some sort of "WOW" factor for phase I that this lacks.

### Standardize Network Schema

Decide on:  

- directed or reversible links
- Schema: Minimum set of fields 
- set of 3-5 data formats that Zephyr can support APIs for and create data validators to check network topology

Reference research on existing formats and solutions.

### Develop network management strategy

Develop capabilities for:
- Diff-able networks
- Scenario development
- Version control/flow standards
- Projects/master metworks

## Who should be involved ?

Involvement should include vendors, consultants, and owners

Make sure there is a variety of players to ensure different ways of thinking

## Relative priority

We believe this could be a quick win.


