---
layout: simple
img: none
icon: fa-route
category: Activities
pillars: [standards]
order: 40
title: Network Data Standard and Management Tools
description: Open data specifications and tools&mdash;like GMNS and NetworkWrangler&mdash;for building and sharing routable travel model networks.
front: True
permalink: /activities/network-standard-and-tools/
---

## Network Data Standard: GMNS

The purpose of the General Modeling Network Specification (GMNS) is to develop data format specifications for modeling networks that will work across software platforms and regions.  GMNS is necessary to help facilitate seamless integration of tools and ideas in travel modeling, as well as the integration of tools and ideas developed in adjacent fields.  GMNS provides a uniform format for sharing routable road network files that is both human- and machine-readable.

GMNS (through version v0.96) was developed under the auspices of the Zephyr Foundation, with support from the Federal Highway Administration (FHWA), and is intended to facilitate the sharing of tools and data sources by modelers. It is designed to be used in multi-resolution and multi-modal static and dynamic transportation planning and operations models with time-varying networks.

From 2018-2024, the GMNS Project Management Committee has defined GMNS requirements, evaluated existing solutions, and drafted, disseminated, and revised the GMNS specification, which can be found [here](https://zephyr-data-specs.github.io/GMNS/).

An introduction to GMNS can be found here: [General Modeling Network Specification: A Specification for Sharing Routable Road Networks](https://trid.trb.org/view/1909441)

## Network Management Tools

Community members and researchers have begun to develop an ecosystem of tools to facilitate use of GMNS, including:

- [NetworkWrangler](https://github.com/network-wrangler) - NetworkWrangler is a suite of tools for defining, creating and building network scenarios, starting from a base network and adding a series of project cards (network diffs) to create future networks and variants.

- [OSM2GMNS](https://github.com/jiawlu/OSM2GMNS) – osm2gmns is an open-source Python package that enables users to conveniently obtain and manipulate any networks from OpenStreetMap (OSM). With a single line of Python code, users can obtain and model drivable, bikeable, walkable, railway, and aeroway networks for any region in the world, and output networks to csv files in GMNS format for seamless data sharing and research collaboration.

- [Path4GMNS](https://github.com/jdlph/Path4GMNS) - Path4GMNS is an open-source, cross-platform, lightweight, and fast Python path engine for networks encoded in GMNS. Besides finding static shortest paths for simple analyses, its main functionality is to provide an efficient and flexible framework for column-based (path-based) modeling and applications in transportation (e.g., activity-based demand modeling).

A small, multimodal demonstration network can be found [here](https://github.com/zephyr-data-specs/GMNS/tree/main/examples/Cambridge_Multimodal_Network).

## Project Management Committee (PMC)

In 2024, a new Project Management Committee (PMC) formed to bring GMNS and NetworkWrangler together.

* PMC Google group: [gmns-pmc@](https://groups.google.com/a/zephyrtransport.org/g/gmns-pmc/about)
* Google Drive: Z-Projects > [Network Data Standard and Management Tools](https://drive.google.com/drive/folders/1XZjuY9qw-HgMjx5g-rEZvrn6K2z-g9_X?usp=sharing)

## Feedback + Involvement

To learn more about this project, please reach out to the google group, [gmns@](https://groups.google.com/a/zephyrtransport.org/g/gmns/about).
