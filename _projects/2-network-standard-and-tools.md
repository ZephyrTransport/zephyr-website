---
layout: simple
img: none
icon: fa-route
category: Activities
title: Network Data Standard and Management Tools
description:  Datasets of standardized input and observed data in order to facilitate the testing of and compare the performance of various algorithms, approaches, or parameters.
front: True
---

## GMNS

The purpose of the General Model Network Specification (GMNS) is to develop data format specifications for modeling networks that will work across software platforms and regions.  GMNS is necessary to help facilitate seamless integration of tools and ideas in travel modeling, as well as the integration of tools and ideas developed in adjacent fields.  GMNS provides a uniform format for sharing routable road network files that is both human- and machine-readable.

GMNS was developed under the auspices of the Zephyr Foundation, with support from the Federal Highway Administration (FHWA), and is intended to facilitate the sharing of tools and data sources by modelers. It is designed to be used in multi-resolution and multi-modal static and dynamic transportation planning and operations models with time-varying networks.

Over the past 6 years, the GMNS Project Management Committee has define GMNS requirement, evaluated existing solutions, and drafted, disseminated, and revised the GMNS specification, which can be found [here](https://github.com/zephyr-data-specs/GMNS).

An introduction to GMNS can be found here: [General Modeling Network Specification: A Specification for Sharing Routable Road Networks](https://trid.trb.org/view/1909441)

Community members and researchers have begun to develop an ecosystem of tools to facilitate use of GMNS, include:

- [OSM2GMNS](https://github.com/jiawlu/OSM2GMNS) – osm2gmns is an open-source Python package that enables users to conveniently obtain and manipulate any networks from OpenStreetMap (OSM). With a single line of Python code, users can obtian and model drivable, bikeable, walkable, railway, and aeroway networks for any region in the world, and output networks to csv files in GMNS format for seamless data sharing and research collaboration.

- [Path4GMNS](https://github.com/jdlph/Path4GMNS) - Path4GMNS is an open-source, cross-platform, lightweight, and fast Python path engine for networks encoded in GMNS. Besides finding static shortest paths for simple analyses, its main functionality is to provide an efficient and flexible framework for column-based (path-based) modeling and applications in transportation (e.g., activity-based demand modeling).

A small, multimodal demonstration network can be found [here](https://github.com/zephyr-data-specs/GMNS/tree/development/Small_Network_Examples/Cambridge_Multimodal_Network).

## Feedback + Involvement

Feedback or requests to be involved can be sent to to the GNFS chair: [gmns@zephyrtransport.org](mailto:gmns@zephyrtransport.org).
