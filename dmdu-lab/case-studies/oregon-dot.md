---
layout: dmdu-lab
permalink: /dmdu-lab/case-studies/oregon-dot/
title: "Oregon DOT: Strategic-to-Predictive Process"
description: "How ODOT coupled VisionEval with TMIP-EMAT to stress-test thousands of futures for its 2023 Long Range Plan."
wide: true
---

## Part 1 &mdash; High-Level Summary

<table class="dl-summary-table">
  <tr><th>Agency</th><td>Oregon Department of Transportation (ODOT) &ndash; Transportation Emissions / Climate Office</td></tr>
  <tr><th>The headline</th><td>ODOT pioneered a dual-modeling paradigm for its 2023 Long Range Plan, coupling the strategic model VisionEval with TMIP-EMAT to stress-test thousands of futures &mdash; explicitly decoupling exploratory "what-if" visioning from rigid, tactical project funding, and establishing a formal institutional strategy to "plan to learn."</td></tr>
  <tr><th>Decisions supported</th><td>The 2023 Oregon Transportation Plan (OTP) Update (through 2050), the Statewide Transportation Strategy (STS) for GHG Reduction, and the multi-agency Every Mile Counts initiative</td></tr>
  <tr><th>Uncertainties considered</th><td>Market dynamics (fuel/electricity price volatility, ride-hailing costs); technological adoption rates (connected/autonomous vehicle penetration); socio-economic and behavioral shifts (telework permanence, demographics, regional income); programmatic policy effectiveness</td></tr>
  <tr><th>Models / tools used</th><td>VisionEval (VE-State and VE-RSPM) integrated with TMIP-EMAT (Exploratory Modeling and Analysis Tool)</td></tr>
  <tr><th>Status / year</th><td>Adopted July 2023, with ongoing operational monitoring through 2026</td></tr>
</table>

## Part 2 &mdash; The Detailed Brief

### The Challenge / Context

ODOT faces aggressive, legislatively mandated targets to cut transportation greenhouse gas
emissions to 80% below 1990 levels by 2050 &mdash; while addressing deep funding deficits and
prioritizing multi-modal investments across starkly different urban and rural landscapes.

Traditional "predict-then-act" forecasting fell short because it relies on a single, deterministic
baseline for economic growth and travel behavior. In an era disrupted by explosive telecommuting
shifts, rapid EV transitions, and AV ambiguity, building a 25-year plan around one "most likely"
future risked making multi-billion-dollar infrastructure investments fragile and vulnerable to
real-world volatility.

### Securing Stakeholder Buy-In

Around 2018, empirical data revealed Oregon was significantly off-track from its mid-century
climate mandates &mdash; the triggering event that forced leadership to acknowledge status-quo
planning assumptions were no longer viable.

To sell DMDU to non-technical stakeholders and executives, the technical team reframed the
narrative from *predicting a single future* to *managing risk and institutional flexibility*. They
introduced a clear separation between **Strategic Models** (open scenario screening, identifying
systemic uncertainty) and **Tactical Models** (project-level facility detail, legal certifications,
immediate dollar allocation). To make the math tangible, ODOT built "Transportation Personas" that
quantified how individual households across demographics would realistically experience these
uncertain futures.

<blockquote class="dl-pullquote-discussion">
  <strong>Discussion Question</strong>
  When you explicitly divided the analysis into "Strategic" vs. "Tactical" frameworks, did that
  immediately ease tensions with board members who are traditionally anxious to see specific local
  highway projects on a map? How hard was it to get leadership to accept that a strategic model
  must intentionally sacrifice local granular detail to achieve scenario breadth?
</blockquote>

### The DMDU Approach (Methodology)

ODOT shifted from a single "preferred alternative" to a highly interactive, exploratory sandbox.
While a strict XLRM framework wasn't explicitly advertised under that name, the approach mirrored
its principles:

<div class="dl-xlrm-grid">
  <div class="dl-xlrm-box">
    <h4>Exogenous Uncertainties (X)</h4>
    <ul>
      <li>AV/CV deployment speeds</li>
      <li>Long-term telework rates</li>
      <li>Energy pricing</li>
      <li>Ride-hailing economics</li>
    </ul>
  </div>
  <div class="dl-xlrm-box">
    <h4>Policy Levers (L)</h4>
    <ul>
      <li>Land-use density</li>
      <li>Pricing strategies</li>
      <li>Active travel / transit supply expansion</li>
      <li>ITS &amp; travel demand management</li>
    </ul>
  </div>
  <div class="dl-xlrm-box">
    <h4>Metrics (M)</h4>
    <ul>
      <li>Per-capita VMT</li>
      <li>GHG emissions</li>
      <li>Household transit operating costs</li>
      <li>Statewide Equity Index</li>
    </ul>
  </div>
</div>

Instead of relying purely on a handful of static, qualitative narrative scenarios, ODOT used
computational exploratory modeling via TMIP-EMAT to automate and assess thousands of parameter
combinations, identifying the boundary conditions where policies would succeed or fail.

### Technical Implementation

The heavy lifting was handled by the open-source **VisionEval** framework, which relies on a
"disaggregate demand / aggregate supply" structure. Because it processes synthetic populations
without requiring computationally intensive, explicit network routing, its runtimes are
exceptionally fast &mdash; fast enough to seamlessly overlay the **TMIP-EMAT** interface and
execute a massive exploratory sweep of thousands of scenarios that would be impossible with a
traditional, cumbersome travel demand model.

<blockquote class="dl-pullquote-discussion">
  <strong>Discussion Question</strong>
  Many agencies struggle with the technical learning curve of TMIP-EMAT. Did you face computing,
  staffing, or data-extraction bottlenecks when analyzing thousands of runs? If you were advising
  another DOT on scaling up VisionEval + EMAT, what's the one data-pipeline lesson you wish you'd
  known before starting?
</blockquote>

### Results &amp; Outcomes

The exploratory sweep yielded a major finding: under baseline trend conditions, the potential
range of future GHG emissions under deep uncertainty did **not** encompass the targets established
by the STS Vision. That empirical gap proved passive adaptation would fail, prompting the formal
adoption of aggressive, legally backed targets in the 2023 OTP &mdash; including a mandated 20%
reduction in passenger VMT per capita and a 77% reduction in CO&#8322;e per mile by 2050.

Crucially, it changed the institutional conversation by transforming the long-range plan into an
adaptive "plan to learn" document: strategic monitoring benchmarks at the operational level let
the agency flag when an uncertainty is drifting outside anticipated bounds &mdash; signaling
exactly when to refine policy levers.

<blockquote class="dl-pullquote-discussion">
  <strong>Discussion Question</strong>
  We are in 2026, roughly three years post-adoption of the OTP. Has this "plan to learn" and
  "monitoring at the operational level" strategy triggered any real-world policy pivots yet? How
  are you tracking and feeding real-world emissions and VMT data back into the strategic loop?
</blockquote>

### Resources &amp; Links

- [Oregon Transportation Emissions website](https://www.oregontransportationemissions.com/)
- [2023 Oregon Transportation Plan (OTP) hub](https://www.oregon.gov/odot/planning/pages/plans.aspx)
- [VisionEval open-source project documentation](https://visioneval.github.io/docs/conceptprimer.html)
- [Oregon Greenhouse Gas white paper (ODOT Modeling Steering Committee)](https://www.google.com/search?q=https%3A%2F%2Fwww.oregon.gov%2Fodot%2FPlanning%2FDocuments%2FGreenhouse_Gas_White_Paper.pdf)
- [Tara's presentation at TRB AM Future Uncertain workshop](https://drive.google.com/file/d/1xpsCb92Btyq-YlEV2iNT5clwl3r6D6TF/view)

## Part 3 &mdash; Community Assessment &amp; Retrospective

### What Worked Well

VisionEval's execution speed was an undeniable win, enabling computational exploratory modeling at
true statewide scale. Translating abstract statistical uncertainty into granular "Transportation
Personas" was highly effective for public engagement and executive digestion, preventing
stakeholders from getting bogged down in defensive modeling arguments.

### Current Limitations

Because VisionEval sacrifices spatial and explicit network-routing detail to preserve rapid
scenario runtimes, it can't evaluate facility-level bottlenecks or specific corridor project
configurations &mdash; creating an ongoing analytical handoff challenge when moving from
macro-level "low-regret" strategic findings down to project-specific tactical funding selections.

<blockquote class="dl-pullquote-discussion">
  <strong>Discussion Question</strong>
  What's been the hardest part of managing the analytical handoff between your strategic
  exploratory insights (VisionEval) and your tactical travel demand models (like SWIM) when
  regional planners request project-level backing? Do the two datasets ever feel like they're
  speaking different languages to local stakeholders?
</blockquote>

### The Next Frontier

ODOT's next milestone is refining the operational monitoring feedback loop so real-world trend
variances automatically trigger pre-planned strategic policy shifts. The 2023 update introduced a
Statewide Equity Index to map demographic vulnerability; deeply embedding and automating complex
equity and distributional metrics directly into the automated TMIP-EMAT sweep remains a top
priority for future iterations.

<details class="dl-appendix">
  <summary>For facilitators &mdash; ODOT Interview Guide (5 questions)</summary>
  <div class="dl-appendix-body">
    <ol>
      <li>
        <strong>Navigating the "Strategic vs. Tactical" dynamic.</strong> In your initial notes,
        you highlighted a critical distinction between strategic models (which sacrifice detail to
        run more scenarios) and tactical models (required for funding allocation and legal
        certifications). How did you structurally introduce this two-tiered framework to
        leadership, and did it reduce friction with stakeholders anxious to see hyper-local
        project details on a map?
      </li>
      <li>
        <strong>Operationalizing "plan to learn."</strong> A foundational pillar of your approach
        is monitoring performance at the operational level to identify and refine policies as
        uncertainties unfold. Now that we're a few years past the July 2023 adoption of the OTP
        Update, how is this monitoring loop functioning in practice? Have any real-world
        indicators triggered a policy pivot or model refinement yet?
      </li>
      <li>
        <strong>Confronting the emissions gap.</strong> The exploratory modeling demonstrated that
        the potential range of future GHG emissions under deep uncertainty did not actually
        encompass the STS Vision targets. When you presented this empirical gap to
        decision-makers, how did they respond &mdash; defensive skepticism about the models, or a
        catalyst for more aggressive, low-regret policy levers?
      </li>
      <li>
        <strong>Scaling VisionEval for deep uncertainty.</strong> You used VisionEval as your core
        strategic model against market, socio-economic, and program-effectiveness uncertainties.
        For other state DOTs looking to replicate your success, what were the primary
        data-pipeline or staffing constraints you encountered scaling VisionEval to explore such a
        wide envelope of scenarios?
      </li>
      <li>
        <strong>Institutionalizing DMDU for future planning cycles.</strong> Looking back at the
        entire 2023 OTP Update process, what's been the biggest institutional win regarding how
        ODOT views risk? Is exploratory modeling now a permanent fixture for future planning
        cycles, or is there still work to embed DMDU into the agency's core culture?
      </li>
    </ol>
    <p><strong>Pro-tip for the conversation:</strong> use Question 1 as the icebreaker. Agencies
    everywhere struggle with engineers wanting to use massive, slow travel demand models for
    high-level exploratory planning &mdash; hearing exactly how ODOT drew the line between
    "strategic scenario exploration" and "tactical project delivery" tends to be the most valuable
    part of the conversation for the rest of the DMDU community.</p>
  </div>
</details>
