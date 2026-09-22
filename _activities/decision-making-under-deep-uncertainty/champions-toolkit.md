---
layout: simple
img: none
icon: none
category: Activities
title: DMDU Champions' Toolkit
description: This page provides resources for DMDU champions
front: True
permalink: /activities/decision-making-under-deep-uncertainty/champions-toolkit/
---

## Recommended Reading

- [Federal Highway Administration's Transportation Planning for Uncertain Times.](https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/fhwahep22031.pdf)

   - **Read for**: an assessment of transportation state of the practice in DMDU by some of the original thinkers behind the approach: Rob Lempert and Steven Popper

- [Exploratory Modeling for Policy Analysis - Steven Bankes](https://doi.org/10.1287/opre.41.3.435)

   - **Read for**: a new mindset on developing and using models to support decision making

- [The use of scenarios in transport modelling and appraisal - Charlene Rohr & Richard Batley](https://assets.publishing.service.gov.uk/media/6a0c3c82c75cc34a8ff8f4e6/use-of-scenarios-in-transport-modelling.pdf)

   - **Read for**: a high-level review of best practices for using scenarios to address uncertainty in transport modelling and appraisal, with a focus on the UK Department for Transport and European experience

## Communication Materials
Do you have slides, white papers, or other content that has been useful to describe planning under uncertainty? Share them here!

### Decisions for the Decade

This [game](https://www.climatecentre.org/games/2520/decisions-for-the-decade/) has been presented in several conferences and at individual agencies to great success. Example slides and summaries are below. 

The [slide deck prepared by the original game creators](https://www.slideserve.com/brick/decisions-for-the-decade-how-to-invest-in-a-climate-resilient-future) 

The [slide deck presented at MoMo 2025](https://drive.google.com/drive/u/0/folders/12HOeQRvI76HyEnYWZaW-1tKP291hwH9T) that walks through the game step by step, along with the game board


### TRB 2024 Annual Meeting - Future Uncertain Workshop

 - Participants: >100
 - Slides:
   - [Future Uncertain Workshop Slides](https://drive.google.com/file/d/1rvsSMSE-Z0hVVUc05ax5iH79AQmPo2h0/view)


### MoMo 2025 - Uncertainty Workshop

 - Participants: 60
 - Slides: 
   - [Decision Making Under Deep Uncertainty Presentation](https://zephyrtransport.org/assets/dmdu/MoMo25-DMDU.pdf)
   - [Decisions for the Decade Game Presentation](https://zephyrtransport.org/assets/dmdu/MoMo25-Decisions-For-The-Decade-Game.pdf)


### Boston MPO Uncertainty

 - Participants: ~30
 - [Slides](https://zephyrtransport.org/assets/dmdu/Boston-DftD-slides.pdf)
 - [Material List](https://zephyrtransport.org/assets/dmdu/Boston-DftD-materials.pdf) 


### WFRC Uncertainty
Coming soon...

## Software

### TMIP-EMAT (Exploratory Modeling and Analysis Tool)

#### Overview

TMIP-EMAT is an open-source Python framework developed under FHWA's Travel Model Improvement Program designed to bridge traditional travel forecasting models with DMDU methodologies. Rather than running a heavy regional model for just one or two scenarios, TMIP-EMAT automates experimental design across wide parameter spaces and builds machine-learning metamodels (surrogates). These surrogates rapidly approximate core model outputs, allowing planners to explore thousands of policy levers and uncertain future conditions in seconds.

#### Key Capabilities

 - **Automated Experimental Design:** Systematically samples deep uncertainties (e.g., remote work trends, AV adoption, fuel pricing) alongside local policy choices.
 - **Metamodel Acceleration:** Trains fast-running statistical surrogates on core model runs to eliminate computational bottlenecks during scenario exploration.
 - **Scenario Discovery & Policy Optimization:** Employs Patient Rule Induction Method (PRIM), CART decision trees, and directed search to uncover the exact conditions under which specific transportation plans succeed or fail.

#### Documentation & Source Links

 - Documentation & User Guide: [TMIP-EMAT Online Documentation](https://tmip-emat.github.io/)
 - Codebase & Examples: [TMIP-EMAT GitHub Repository](https://github.com/tmip-emat/tmip-emat)

TMIP-EMAT is not being actively supported by FHWA, but is in use. Responses to a 2024 survey of 14 users is [available here](https://docs.google.com/document/d/1l0vJ2wPVVDZ8GuRTMwf3ZwI7_QiVqFmrkyQ-0Gp9EDw/edit?tab=t.0#heading=h.9lpkdii4qrzf). 

### VisionEval

#### Overview

VisionEval is an open-source, multi-agency strategic planning framework built in R for rapid scenario evaluation and high-level policy analysis. Structurally designed as a "disaggregate demand / aggregate supply" system, VisionEval models synthetic households and travel behavior in detail without requiring computationally intensive network assignment. This lightweight architecture allows agencies to evaluate hundreds of land-use, pricing, technology, and investment combinations in minutes.

#### Key Capabilities

 - **Rapid Policy Screening:** Evaluates regional VMT, greenhouse gas emissions, vehicle fleet turnover, household costs, and equity impacts across wide scenario sets.
 - **Behavioral & Demographic Granularity:** Captures complex household demographic interactions and behavioral shifts without full-scale activity-based model runtime overhead.
 - **Ideal DMDU Testbed:** Serves as a fast-running standalone strategic tool or as a core model within TMIP-EMAT to filter scenario spaces before running full regional models.

#### Documentation & Source Links

 - Documentation & User Guide: [VisionEval User Guide](https://visioneval.github.io/docs/)
 - Codebase & Download: [VisionEval GitHub Repository](https://github.com/VisionEval/VisionEval)

