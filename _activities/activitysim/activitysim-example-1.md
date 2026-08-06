---
layout: simple
img: none
icon: logos/activitysim_logo_light.jpg
title: "Production & Near-Production Implementations"
description: SANDAG and SEMCOG's ActivitySim implementations.
front: True
permalink: /activities/activitysim/activitysim-example-1/
---

## San Diego Association of Governments

The San Diego Association of Governments (SANDAG) has implemented its ActivitySim-based model for the MPO’s 2025 long-range plan update. The move to ActivitySim allows SANDAG to enhance its travel model with additional choice models, such as vehicle type and transit pass ownership. This means a model that better estimates emissions and also can respond to actual or proposed policy changes, such as subsidized transit passes. The new model is called [ABM3](https://sandag.github.io/ABM/) and is based on [ActivitySim version 1.4.0](https://github.com/ActivitySim/activitysim/releases/tag/v1.4.0). As part of the update, SANDAG has re-estimated several choice models with local survey data using ActivitySim’s estimation mode.

## Southeast Michigan Council of Governments

SEMCOG, the MPO for the Detroit region, started its first activity-based model development with ActivitySim framework in 2019, aiming to improve its modeling capabilities for a wide variety of scenario and policy analysis. By 2023, SEMCOG completed its Phase II ABM development, implementing a two-zone ActivitySim structure for the region. Local surveys were used to estimate auto ownership, tour destination choice, and time-of-day choice models. More details can be found on SEMCOG’s [Phase II model specification](https://semcog.github.io/TDM_ActSim/SEMCOG_ABM_Model_Description.pdf) and [the model calibration/validation report](https://semcog.github.io/TDM_ActSim/SEMCOG_ABM_Calibration_And_Validation.pdf).

While SEMCOG’s trip-based model is still the production model for supporting SEMCOG’s transportation project alternatives and air quality conformity analysis, SEMCOG staff has been evaluating the newly developed ABM in order to transition from the trip-based model for SEMCOG’s next long-range plan. As of Spring 2024, SEMCOG has conducted a few in-house sensitivity analysis of the ABM based on different sets of population inputs. Several areas have been identified for further enhancement, such as transit pass eligibility and estimation.
