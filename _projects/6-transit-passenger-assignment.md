---
layout: simple
img: none
icon: fa-train  
category: Activities
title: Fast-Trips
description: An open-source person-based dynamic transit assignment tool.
front: True
---

Fast-Trips is a bleeding edge, open-source person-based dynamic transit assignment tool that addresses an urgent need in many urban areas to measure and estimate benefits of projects that address transit congestion and reliability.

As an open source tool licensed under a permissive license, it can also serve as a testbed environment for researchers but can also be leveraged by commercial vendors to add the technology to their products.  

**Meeting Announcement**

The Fast-Trips Project Management Group [will meet at the TRB Annual Meeting](/events/2019-jan-fasttrips-pmg) in Washington DC.

  - Mon Jan 14th 10:30-12:00  
  - Eastern Market (M3) / Marriott Marquis in Washington DC.  

*Note that seating may be limited and will be prioritized for PMG members*

## Governance 

This project is overseen by a board-approved Project Management Group (PMG) as follows:
 - Lisa Zorn, Metropolitan Transportation Commission (chair and board representative)
 - Bhargava Sana, SFCTA  
 - Joe Flood, DVRPC  
 
 *More to come!* 

## Progress

**Project Website**: [fast-trips.mtc.ca.gov](fast-trips.mtc.ca.gov)  
**Main Github Repository**: [github.com/bayareametro/fast-trips](github.com/bayareametro/fast-trips)  
**Associated Github Repositories**: [github.com/fast-trips](github.com/fast-trips), includes tutorials and learning materials. 

## Background

Fast-trips was originally developed by Alireza Khani, Mark Hickman and others at the University of Arizona and was implemented in the Sacramento region as part of the SHRP2 C10B research project.

Fast-Trips has been implemented in Austin TX by the University of Texas Center for Transportation Research and in the Twin Cities by the University  of Minnesota (all led by Dr. Alireza Khani).

A tri-agency project team (led by the Metropolitan Transportation Commission and joined by PSRC and SFCTA) forked the project in 2013sh, refactored it into mainly Python and implemented it in the Bay Area and Puget Sound regions as part of a SHRP2-C10 Implementation Assistance Program (IAP) project.  

At the termination of the C10 IAP project, the project management team voted to apply to the Zephyr Foundation for them to be the new home for the python-based Fast-Trips project.

## Approach

This tentative workplan was developed at the conclusion of the C10 IAP project.  The plan of work should process along several tracks.  Tracks will have velocities based on their relative priority, but progress on one track should not necessarily block or substitute progress on another.

**Track I: Major Software Engineering for Performance**

 - Fast-Trips runtime and memory palatable to be used as a planning tool  
 - Fast-Trips runtime and memory palatable to be used within demand model  

**Track II: Usability Improvements**

 - Increase robustness / reduce fragility; fix bugs and increase test-coverage  
 - Extensive documentation and example problems  
 - Run summary tools  
 - Model calibration tools  
 - User interface that planners could use  

**Track III: Algorithm Improvements (priority: high)**

 - Create containerized testing framework with supporting data in order to analyze algorithm improvements and performance.  
 - Implement time of day flexibility framework  
 - Test link-based approach (i.e. recursive logit)   
 - Develop methods for stochastic supply  
 - Test decision-tree-based or random-forest approach (for example…)  

**Track IV: Feature Implementation**

 - Skimming  
 - [ rest probably dependent on Track III ]

**Track V: Calibration to Bay Area**

 - useful as a transit planning tool when fed an OD matrix  
 - good enough for planning studies using CHAMP or TM2 as input  


## Feedback + Involvement

Feedback or requests to be involved can be sent to to the GTFS-ride chair: [fast-trips@zephyrtransport.org](mailto://fast-trips@zephyrtransport.org).