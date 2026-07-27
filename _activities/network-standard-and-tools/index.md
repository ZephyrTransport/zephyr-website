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

The General Modeling Network Specification (GMNS) defines data format specifications for modeling networks that work across software platforms and regions. GMNS facilitates seamless integration of tools and ideas in travel modeling, as well as tools and ideas developed in adjacent fields. It provides a uniform format for sharing routable road network files that is both human- and machine-readable.

GMNS (through version v0.96) was developed under the auspices of the Zephyr Foundation, with support from the Federal Highway Administration (FHWA), and is intended to facilitate the sharing of tools and data sources by modelers. It is designed to be used in multi-resolution and multi-modal static and dynamic transportation planning and operations models with time-varying networks.

From 2018 to 2024, the original GMNS Project Management Committee defined GMNS requirements, evaluated existing solutions, and drafted, disseminated, and revised the GMNS specification, which can be found [here](https://zephyr-data-specs.github.io/GMNS/).

An introduction to GMNS can be found here: [General Modeling Network Specification: A Specification for Sharing Routable Road Networks](https://trid.trb.org/view/1909441)

## Network Management Tools

Community members and researchers have developed an ecosystem of tools to facilitate use of GMNS, including:

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 z-resource-list">
    <div class="col">
        <div class="card h-100 z-program-card z-resource-card z-tool-card">
            <div class="card-body text-center position-relative">
                <div class="z-program-card-icon mb-3"><i class="fa-solid fa-diagram-project fa-3x" aria-hidden="true"></i></div>
                <h3 class="card-title h5">NetworkWrangler</h3>
                <p class="card-text">A suite of tools for defining, creating, and building network scenarios &mdash; starting from a base network and layering project cards (network diffs) to create future networks and variants.</p>
                <div class="z-resource-card-links mt-auto">
                    <a href="https://github.com/network-wrangler" class="stretched-link">Visit the GitHub org&nbsp;&raquo;</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100 z-program-card z-resource-card z-tool-card">
            <div class="card-body text-center position-relative">
                <div class="z-program-card-icon mb-3"><i class="fa-solid fa-earth-americas fa-3x" aria-hidden="true"></i></div>
                <h3 class="card-title h5">OSM2GMNS</h3>
                <p class="card-text">An open-source Python package for obtaining and converting OpenStreetMap networks &mdash; drivable, bikeable, walkable, railway, and aeroway &mdash; into GMNS-formatted files with a single line of code.</p>
                <div class="z-resource-card-links mt-auto">
                    <a href="https://github.com/jiawlu/OSM2GMNS" class="stretched-link">View on GitHub&nbsp;&raquo;</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100 z-program-card z-resource-card z-tool-card">
            <div class="card-body text-center position-relative">
                <div class="z-program-card-icon mb-3"><i class="fa-solid fa-bolt fa-3x" aria-hidden="true"></i></div>
                <h3 class="card-title h5">Path4GMNS</h3>
                <p class="card-text">An open-source, cross-platform Python path engine for GMNS networks, offering fast shortest-path routing plus a framework for column-based (path-based) modeling and demand applications.</p>
                <div class="z-resource-card-links mt-auto">
                    <a href="https://github.com/jdlph/Path4GMNS" class="stretched-link">View on GitHub&nbsp;&raquo;</a>
                </div>
            </div>
        </div>
    </div>
</div>

A small, multimodal demonstration network can be found [here](https://github.com/zephyr-data-specs/GMNS/tree/main/examples/Cambridge_Multimodal_Network).

## Project Management Committee (PMC)

In 2024, a new, expanded Project Management Committee (PMC) formed, succeeding the original GMNS-only committee, to bring GMNS and NetworkWrangler together under shared governance.

* PMC Google group: [gmns-pmc@](https://groups.google.com/a/zephyrtransport.org/g/gmns-pmc/about)
* Google Drive: Z-Projects > [Network Data Standard and Management Tools](https://drive.google.com/drive/folders/1XZjuY9qw-HgMjx5g-rEZvrn6K2z-g9_X?usp=sharing)

## Feedback + Involvement

To learn more about this project, please reach out to the google group, [gmns@](https://groups.google.com/a/zephyrtransport.org/g/gmns/about).
