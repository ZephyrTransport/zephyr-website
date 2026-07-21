---
layout: dmdu-lab
permalink: /dmdu-lab/concepts/
title: "Concepts: The Four Challenge Areas"
description: "Where DMDU asks travel forecasting to change, and why."
---

The Zephyr DMDU Initiative originated as the Uncertainty/DMDU initiative under the TRB AEP50
Travel Forecasting Committee ([committee site](https://sites.google.com/view/trbtravelforecasting/dmdu)).
It's led by **Marty Milkovits**, Director of Modeling at the Boston Region MPO, and
**Flavia Tsang**, Survey Program Manager at MTC.

The AEP50 DMDU initiative organized the work into four core challenge areas &mdash; identifying
uncertainty, exploring it computationally, making sense of the results, and getting those results
into an actual planning process. Each is a standing invitation for contributions from the field.

<hr class="dl-divider" />

## 1. Identifying uncertainty areas and ranges

This challenge area answers the question **"where do we begin?"** Most transportation planners
and modelers won't need much convincing that there is uncertainty in every aspect of a forecast.
The harder problem is that, depending on what is being evaluated, some uncertainties are far more
relevant than others.

<blockquote class="dl-pullquote">
  Modelers need strategies to push their imaginations in defining scenarios &mdash; including
  cases where policies and projects fail &mdash; to discover 'worst-case' conditions.
</blockquote>

Planners and modelers need guidance on how to home in on the relevant uncertainties based on the
projects and policies under evaluation and how they will be measured, while guarding against an
insufficient exploration of assumptions. That can even mean exploring "black swan" scenarios to
move thinking beyond the constraints of existing tools.

Uncertainties that can be modeled get translated into ranges for analysis: at minimum, a set of
bounds or cases to be tested; if the uncertainty is well-characterized rather than deep, a
probability distribution can support risk-assessment outputs like confidence intervals. This area
also considers how those ranges should be updated as new information arrives &mdash; in effect,
**a Bayesian approach to setting and refining uncertainty distributions alongside an exploratory
one.**

<div class="dl-callout">
  <h4>Potential Contributions</h4>
  <ul>
    <li>Catalog of uncertainty variables and ranges tested by planning agencies</li>
    <li>Uncertainties deemed relevant but not well handled by existing modeling tools</li>
    <li>Guidance and references for defining uncertainty bounds and translating them into model parameters</li>
    <li>Description, guidance, and examples of how updated information can modify uncertainty distributions</li>
    <li>Guidance on evaluating whether a given model is suitable for testing a given uncertainty</li>
  </ul>
</div>

## 2. Exploring uncertainty space with quantitative analysis

The historic focus on model accuracy as a predictive tool has worked against models' ability to
operate exploratory. Longer run times and manual setup make running even a modest exploratory
sample of 50&ndash;100 experiments feel daunting. This area examines the practical obstacles to
implementation: computational power, software compatibility, archive capacity.

[TMIP-EMAT](https://tmip-emat.github.io/) was built to run large travel demand models across an
uncertainty space, though it takes real investment to integrate. [VisionEval](https://visioneval.github.io/)
is a strategic tool platform that can be stood up with much lower overhead than a traditional
travel demand model. Because agencies use these tools in different combinations &mdash;
independently, together, or as part of a structured narrowing of scenarios &mdash; a cohesive
reference for new and existing users is valuable.

<div class="dl-callout">
  <h4>Potential Contributions</h4>
  <ul>
    <li>A reference / user group of TMIP-EMAT users: core model structure, uncertainty application, lessons learned, contacts</li>
    <li>A survey of practices using VisionEval or other strategic tools alongside more complex travel demand models</li>
    <li>A catalog of how tools are combined in practice (e.g. short-term operational analysis paired with longer-term strategic analysis)</li>
  </ul>
  <h4 style="margin-top:1rem;">References</h4>
  <ul>
    <li>TMIP-EMAT &mdash; <a href="https://tmip-emat.github.io/">documentation</a>, <a href="https://github.com/tmip-emat/tmip-emat">TMIP repo</a>, <a href="https://github.com/camsys/emat/tree/cloud">active fork</a></li>
  </ul>
</div>

## 3. Visualizing and analyzing results

After the effort of defining uncertainty and running many model iterations, the field needs new
approaches to support analysis and call attention to key outcomes.

<blockquote class="dl-pullquote">
  There is useful information in examining the shape of the distribution of outcomes, identifying
  tipping points, and describing best and worst case scenarios.
</blockquote>

It's important to resist collapsing everything into a single aggregate value &mdash; doing so
masks decisions about how impacts are prioritized (which may vary by stakeholder group), imposes
an implicit risk assessment, and asserts a relationship between impacts that may not hold. Equity
concerns belong squarely in this challenge area: within an equity population, groups may fare very
differently across the range of uncertainties being modeled.

<div class="dl-callout">
  <h4>Potential Contributions</h4>
  <ul>
    <li>Example visualizations and source code for presenting varying inputs against many outputs</li>
    <li>Procedures and guidelines for highlighting key results (best case, worst case, Pareto optimal)</li>
  </ul>
  <h4 style="margin-top:1rem;">References</h4>
  <ul>
    <li>Lempert, R.J. <a href="https://doi.org/10.1038/s41558-021-01165-9">Measuring global climate risk</a>. Nat. Clim. Chang. 11, 805&ndash;806 (2021).</li>
  </ul>
</div>

## 4. Translating results into useful inputs to a planning process

The key question here is how to demonstrate the value and feasibility of DMDU to planning
agencies and regulators &mdash; the organizational challenge, not the technical one.

The FHWA report *Transportation Planning for Uncertain Times* highlights several pitfalls to
implementing DMDU inside MPO organizations, and makes a compelling case for how a
"Deliberation with Analysis" mechanism not only improves plans but **builds legitimacy in modeling
practice.** One path to that legitimacy: an interaction between planners and models where the
story is developed through iteration &mdash; exploration and refinement across uncertainty
dimensions and boundaries, not a single pass.

This area may also survey how planning agencies consider other forecast horizons to manage
uncertainty, and what works best in a Long Range Transportation Plan (LRTP) context.

<div class="dl-callout">
  <h4>Potential Contributions</h4>
  <ul>
    <li>Approaches and lessons learned for communicating uncertain forecasts to stakeholders used to point predictions &mdash; drawing on fields that already forecast with uncertainty, like weather or financial returns</li>
    <li>Examples where modeling uncertainty brought a more diverse set of stakeholders into the process</li>
    <li>Case studies where the planning process incorporated uncertainty early (needs assessment) or as a stress-test on preferred alternatives</li>
    <li>A survey of approaches to mid-range forecasts that complement an LRTP</li>
  </ul>
  <h4 style="margin-top:1rem;">References</h4>
  <ul>
    <li>NCHRP 08-154, <em>Guidance for Agencies to Incorporate Uncertainty into Long-Range Transportation Planning</em></li>
  </ul>
</div>

<div class="dl-note">
  See these challenge areas at work: <a href="{{ '/dmdu-lab/case-studies/oregon-dot/' | relative_url }}">read how Oregon DOT applied them</a> to its 2023 Long Range Plan.
</div>
