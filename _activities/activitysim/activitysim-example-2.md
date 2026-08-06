---
layout: simple
img: none
icon: logos/activitysim_logo_light.jpg
title: "Legacy Model Transitions"
description: Atlanta Regional Commission and NCRTPB's transitions from legacy models to ActivitySim.
front: True
permalink: /activities/activitysim/activitysim-example-2/
---

## Atlanta Regional Commission

ARC began a prototype implementation of ActivitySim for the Atlanta region a few years ago. This plan provided a path to implementing, prototyping, and testing the ActivitySim framework at ARC. ARC is able to take advantage of the ActivitySim “One Build – Many Deployments” philosophy, which means that the ActivitySim code base is designed to be geographically agnostic until implemented through configuration files. Thus, each region that adopts ActivitySim will benefit from improvements made in other regions with minimal effort.

For ARC-specific model implementation, the agency established [its own ActivitySim repository on GitHub](https://github.com/atlregional/arc-activitysim). Following the ideal of “One Build – Many Deployments,” ARC has little to no customized model components stored in its repository. All software documentation are kept in the project GitHub repository along with the YAML and CSV configuration files.

ARC implemented each model component in the ActivitySim workflow sequentially. This includes fully developing, calibrating, and testing before moving onto the next model in the ActivitySim workflow. This ensures that ARC works through the model flow in a way where each model component is calibrated and tested based on the calibrated outputs of upstream components and the existing ARC CT-RAMP ABM implementation. This gets repeated for each model component sequentially until the model system is complete. The figure to the left illustrates a simplified version of the ARC CT-RAMP to ActivitySim transitional workflow.

For more information, contact [Guy Rousseau](mailto:grousseau@atlantaregional.com), Travel Surveys and Transportation Model Development & Applications Manager.

## National Capital Region Transportation Planning Board

When the NCRTPB began developing its next-generation travel demand model in 2018, they began with ActivitySim. Their goal is to create a simplified activity-based travel model (ABM), known as the Gen3 Travel Model. The benefit of moving to an ABM is expected to be the new modeling capabilities that the Gen3 Model should provide, such as performing equity analyses and estimating the likely travel response to transportation pricing policies.

NCRTPB staff has divided this project into three phases. The goal of Phase 1 was to estimate and calibrate some of the submodels that make up ActivitySim, and thus, the Gen3 Model, and to develop a prototype model that could be used by staff for testing. Phase 1 was completed in 2023, with [documentation available here](https://www.mwcog.org/transportation/data-and-tools/modeling/developmental-travel-model/). The goal of Phase 2 – which should be completed in the first quarter of 2024 – is to perform further model estimation and calibration, and to develop a travel model that could be used for production modeling work in the region.

The Gen3, Phase 2 Model is now meeting or exceeding the validation metrics of the previous Gen2 Model, and version 1.0 of the Gen3 Model has been approved by NCRTPB staff. Phase 3 consists of usability testing, conducted by NCRTPB staff, which is designed to ensure that the model is ready for production use. Once the Gen3 Model has been deemed ready for use, staff will provide training on the new model to the metropolitan Washington modeling community and will begin using the model in production work, for studies such as scenario studies and air quality conformity analyses. The Metropolitan Washington Council of Governments (MWCOG) is the administrative agent for the NCRTPB.
