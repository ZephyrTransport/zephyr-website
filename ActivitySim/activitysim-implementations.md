---
layout: simple
img: none
icon: activitysim_logo_light.jpg
title: ActivitySim Implementations
description: Status of various ActivitySim implementations.
front: True
---

## ActivitySim in the World

This page highlights real-world implementations of the ActivitySim model around the world. To share your story with the ActivitySim community, [contact us!](mailto:admin@activitysim.org)

### San Diego Association of Governments

The San Diego Association of Governments (SANDAG) has implemented its ActivitySim-based model for the MPO’s 2025 long-range plan update. The move to ActivitySim allows SANDAG to enhance its travel model with additional choice models, such as vehicle type and transit pass ownership. This means a model that better estimates emissions and also can respond to actual or proposed policy changes, such as subsidized transit passes. The new model is called [ABM3](https://sandag.github.io/ABM/) and is based on [ActivitySim version 1.4.0](https://github.com/ActivitySim/activitysim/releases/tag/v1.4.0). As part of the update, SANDAG has re-estimated several choice models with local survey data using ActivitySim’s estimation mode.

### Southeast Michigan Council of Governments

SEMCOG, the MPO for the Detroit region, started its first activity-based model development with ActivitySim framework in 2019, aiming to improve its modeling capabilities for a wide variety of scenario and policy analysis. By 2023, SEMCOG completed its Phase II ABM development, implementing a two-zone ActivitySim structure for the region. Local surveys were used to estimate auto ownership, tour destination choice, and time-of-day choice models. More details can be found on SEMCOG’s [Phase II model specification](https://semcog.github.io/TDM_ActSim/SEMCOG_ABM_Model_Description.pdf) and [the model calibration/validation report](https://semcog.github.io/TDM_ActSim/SEMCOG_ABM_Calibration_And_Validation.pdf).

While SEMCOG’s trip-based model is still the production model for supporting SEMCOG’s transportation project alternatives and air quality conformity analysis, SEMCOG staff has been evaluating the newly developed ABM in order to transition from the trip-based model for SEMCOG’s next long-range plan. As of Spring 2024, SEMCOG has conducted a few in-house sensitivity analysis of the ABM based on different sets of population inputs. Several areas have been identified for further enhancement, such as transit pass eligibility and estimation.

### Atlanta Regional Commission

ARC began a prototype implementation of ActivitySim for the Atlanta region a few years ago. This plan provided a path to implementing, prototyping, and testing the ActivitySim framework at ARC. ARC is able to take advantage of the ActivitySim “One Build – Many Deployments” philosophy, which means that the ActivitySim code base is designed to be geographically agnostic until implemented through configuration files. Thus, each region that adopts ActivitySim will benefit from improvements made in other regions with minimal effort.

For ARC-specific model implementation, the agency established [its own ActivitySim repository on GitHub](https://github.com/atlregional/arc-activitysim). Following the ideal of “One Build – Many Deployments,” ARC has little to no customized model components stored in its repository. All software documentation are kept in the project GitHub repository along with the YAML and CSV configuration files.

ARC implemented each model component in the ActivitySim workflow sequentially. This includes fully developing, calibrating, and testing before moving onto the next model in the ActivitySim workflow. This ensures that ARC works through the model flow in a way where each model component is calibrated and tested based on the calibrated outputs of upstream components and the existing ARC CT-RAMP ABM implementation. This gets repeated for each model component sequentially until the model system is complete. The figure to the left illustrates a simplified version of the ARC CT-RAMP to ActivitySim transitional workflow.

For more information, contact [Guy Rousseau](mailto:grousseau@atlantaregional.com), Travel Surveys and Transportation Model Development & Applications Manager.

### National Capital Region Transportation Planning Board

When the NCRTPB began developing its next-generation travel demand model in 2018, they began with ActivitySim. Their goal is to create a simplified activity-based travel model (ABM), known as the Gen3 Travel Model. The benefit of moving to an ABM is expected to be the new modeling capabilities that the Gen3 Model should provide, such as performing equity analyses and estimating the likely travel response to transportation pricing policies.

NCRTPB staff has divided this project into three phases. The goal of Phase 1 was to estimate and calibrate some of the submodels that make up ActivitySim, and thus, the Gen3 Model, and to develop a prototype model that could be used by staff for testing. Phase 1 was completed in 2023, with [documentation available here](https://www.mwcog.org/transportation/data-and-tools/modeling/developmental-travel-model/). The goal of Phase 2 – which should be completed in the first quarter of 2024 – is to perform further model estimation and calibration, and to develop a travel model that could be used for production modeling work in the region.

The Gen3, Phase 2 Model is now meeting or exceeding the validation metrics of the previous Gen2 Model, and version 1.0 of the Gen3 Model has been approved by NCRTPB staff. Phase 3 consists of usability testing, conducted by NCRTPB staff, which is designed to ensure that the model is ready for production use. Once the Gen3 Model has been deemed ready for use, staff will provide training on the new model to the metropolitan Washington modeling community and will begin using the model in production work, for studies such as scenario studies and air quality conformity analyses. The Metropolitan Washington Council of Governments (MWCOG) is the administrative agent for the NCRTPB.

### State of Oregon

As of early 2024, the Oregon Modeling Statewide Collaborative (OMSC) is moving forward on a statewide joint ActivitySim estimation across all eight MPOs in Oregon that use State of Oregon resources for modeling support. (Two of the 10 MPOs within Oregon are supported by Washington State.)

This joint estimation will be based on the 2023-2024 Oregon Statewide travel survey, and will build on the [SANDAG](https://github.com/SANDAG/ABM) ActivitySim model implementation.

The final design for the OMSC’s joint estimation approach should be finalized by April 2024. As the OMSC moves into estimation and putting ActivitySim to use, [the code will be stored here](https://github.com/OrMSC).

As Oregon’s project progresses, the content here will be updated with more current resources and information.
