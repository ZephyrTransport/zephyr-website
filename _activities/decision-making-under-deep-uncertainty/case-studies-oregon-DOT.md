---
layout: simple
img: none
icon: none
category: Activities
title: Oregon DOT DMDU Case Study
description: An overview of the Oregon DOT DMDU case study
front: False
permalink: /activities/decision-making-under-deep-uncertainty/case-studies-oregon-DOT/
---
## Part 1: High-Level Summary
 - **Agency / Organization:** Oregon Department of Transportation (ODOT) – Transportation Emissions / Climate Office.
 - **The Headline:** ODOT pioneered a dual-modeling paradigm for its 2023 Long Range Plan, coupling the strategic model VisionEval with TMIP-EMAT to stress-test thousands of futures. This explicitly decoupled exploratory "what-if" visioning from rigid, tactical project funding—establishing a formal institutional strategy to "plan to learn".
 - **Decisions Supported:** The 2023 Oregon Transportation Plan (OTP) Update (looking out to 2050), the Statewide Transportation Strategy (STS) for GHG Reduction, and the multi-agency Every Mile Counts initiative.
 - **Uncertainties Considered:**
   - Market dynamics (fuel and electricity price volatility, ride-hailing/ridesharing costs).
   - Technological adoption rates (highly connected and fully autonomous vehicle market penetration).
   - Socio-economic and behavioral shifts (teleworking permanence, demographic shifts, and regional income growth).
   - Programmatic policy effectiveness.
 - **Models / Tools Used:**
   - **VisionEval** (VE-State and VE-RSPM) integrated with
   - **TMIP-EMAT** (Exploratory Modeling and Analysis Tool).
- **Status / Year:** Adopted July 2023 (With ongoing operational monitoring through 2026).

## Part 2: The Detailed Brief
 - **The Challenge / Context**
ODOT is faced with aggressive, legislatively mandated targets to slash transportation greenhouse gas emissions to 80% below 1990 levels by 2050. Concurrently, they must address deep funding deficits and prioritize multi-modal investments across starkly different urban and rural landscapes.

   Traditional "predict-then-act" forecasting models fell short because they rely heavily on a single, deterministic baseline for economic growth and travel behavior. In an era disrupted by explosive telecommuting shifts, rapid electric vehicle (EV) transitions, and autonomous vehicle (AV) ambiguity, building a 25-year plan around a single "most likely" future risked making multi-billion-dollar infrastructure investments fragile and highly vulnerable to real-world volatility.
 - **Securing Stakeholder Buy-In**
The ultimate catalyst occurred around 2018 when empirical data revealed Oregon was significantly off-track from meeting its mid-century climate mandates. This triggering event forced leadership to acknowledge that status-quo planning assumptions were no longer viable.

   To "sell" DMDU to non-technical stakeholders and executives, the technical team reframed the narrative from predicting a single future to managing risk and institutional flexibility. They introduced a clear separation between Strategic Models (designed for open scenario screening and identifying systemic uncertainty) and Tactical Models (designed for project-level facility detail, legal certifications, and immediate dollar allocation). To make the math tangible, ODOT utilized "Transportation Personas," which quantified and visualized how individual households across various demographics would realistically experience these uncertain futures.

<blockquote class="z-pullquote">
Discussion Question:
“When you explicitly divided the analysis into 'Strategic' vs 'Tactical' frameworks, did that immediately ease tensions with board members who are traditionally anxious to see specific local highway projects on a map? How hard was it to get leadership to accept that a strategic model must intentionally sacrifice local granular detail to achieve scenario breadth?”
</blockquote>

 - **The DMDU Approach (Methodology)**
ODOT shifted away from a single "preferred alternative" to a highly interactive, exploratory sandbox. While a strict XLRM framework wasn’t explicitly advertised under that name, the approach mirrored its principles:

   - **Exogenous Uncertainties (X):** AV/CV deployment speeds, long-term telework rates, energy pricing, and ride-hailing economics.
   - **Policy Levers (L):** Land-use density, pricing strategies, active travel/transit supply expansion, intelligent transportation systems (ITS), and travel demand management (TDM).
   - **Metrics (M):** Per capita Vehicle Miles Traveled (VMT), GHG emissions, household transit operating costs, and a custom Statewide Equity Index.
Instead of relying purely on a handful of static, qualitative narrative scenarios, ODOT utilized computational exploratory modeling via TMIP-EMAT to automate and assess thousands of parameter combinations, identifying the boundary conditions where their policies would succeed or fail.
 - **Technical Implementation**
The technical heavy lifting was handled by the open-source VisionEval framework. Structurally, VisionEval relies on a "disaggregate demand/aggregate supply" setup. Because it processes synthetic populations but handles travel without requiring computationally intensive, explicit network routing, its runtimes are exceptionally fast. This speed allowed the team to seamlessly overlay the TMIP-EMAT interface, executing a massive exploratory sweep of thousands of scenarios that would be impossible with a traditional, cumbersome travel demand model.

<blockquote class="z-pullquote">
Discussion Question:
“Many agencies struggle with the technical learning curve of TMIP-EMAT. Did you face computing, staffing, or data extraction bottlenecks when analyzing thousands of runs? If you were advising another DOT on scaling up VisionEval + EMAT, what is the one data pipeline lesson you wish you knew before starting?”
</blockquote>

 - **Results & Outcomes**
The exploratory sweep yielded a major finding: under baseline trend conditions, the potential range of future GHG emissions under deep uncertainty did not encompass the targets established by the state's Statewide Transportation Strategy (STS) Vision. This empirical gap proved that passive adaptation would fail, prompting the formal adoption of aggressive, legally backed targets in the 2023 OTP—including a mandated 20% reduction in passenger VMT per capita and a 77% reduction in $CO_2e$ per mile by 2050.

Crucially, it changed the institutional conversation by transforming the long-range plan into an adaptive "plan to learn" document. By setting up strategic monitoring benchmarks at the operational level, the agency can now explicitly flag when an uncertainty is drifting outside anticipated bounds, signaling exactly when to refine policy levers.

<blockquote class="z-pullquote">
Discussion Question:
“We are in 2026, roughly three years post-adoption of the OTP. Has this 'plan to learn' and 'monitoring at the operational level' strategy triggered any real-world policy pivots yet? How are you tracking and feeding real-world emissions and VMT data back into the strategic loop?”
</blockquote>

 - **Resources & Links**
   - [Oregon Transportation Emissions Website](https://www.oregontransportationemissions.com/)
   - [2023 Oregon Transportation Plan (OTP) Hub](https://www.oregon.gov/odot/planning/pages/plans.aspx)
   - [VisionEval Open Source Project Documentation](https://visioneval.github.io/docs/conceptprimer.html)
   - [Oregon Greenhouse Gas White Paper (ODOT Modeling Steering Committee)](https://www.google.com/search?q=https%3A%2F%2Fwww.oregon.gov%2Fodot%2FPlanning%2FDocuments%2FGreenhouse_Gas_White_Paper.pdf)
   - [Tara’s presentation at TRB AM Future Uncertain workshop](https://drive.google.com/file/d/1xpsCb92Btyq-YlEV2iNT5clwl3r6D6TF/view)

## Part 3: Community Assessment & Retrospective
 - **What Worked Well (The Wins)**
The lightning-fast execution speed of VisionEval was an undeniable win, enabling the deployment of computational exploratory modeling at a true statewide scale. Furthermore, translating abstract statistical uncertainty into granular "Transportation Personas" was highly effective for public engagement and executive digestion, preventing stakeholders from getting bogged down in defensive modeling arguments.
 - **Current Limitations (The Hurdles)**
Because VisionEval sacrifices spatial and explicit network routing detail to preserve rapid scenario runtimes, it cannot evaluate facility-level bottlenecks or specific corridor project configurations. This creates an ongoing analytical handoff challenge when moving from macro-level "low-regret" strategic policy findings down to project-specific tactical funding selections.

<blockquote class="z-pullquote">
Discussion Question:
“What has been the hardest part of managing the analytical handoff between your strategic exploratory insights (VisionEval) and your tactical travel demand models (like SWIM) when regional planners request project-level backing? Do the two datasets ever feel like they are speaking different languages to local stakeholders?”
</blockquote>

 - **The Next Frontier** 
ODOT's next milestone is refining the operational monitoring feedback loop to ensure that real-world trend variances automatically trigger pre-planned strategic policy shifts. Additionally, while the 2023 update introduced a Statewide Equity Index to map demographic vulnerability, deeply embedding and automating complex equity and distributional metrics directly into the automated TMIP-EMAT exploratory sweep remains a top priority for future iterations.

## ODOT Interview Guide: 5 Strategic Questions for Alex & Tara
1. **Navigating the "Strategic vs. Tactical" Dynamic**
“In your initial notes, you highlighted a critical distinction between strategic models (which sacrifice detail to run more scenarios) and tactical models (which are required for funding allocation and legal certifications). How did you structurally introduce this two-tiered framework to leadership, and did it help reduce friction with stakeholders who are traditionally anxious to see hyper-local project details on a map?”
2. **Operationalizing the "Plan to Learn" Concept**
“A foundational pillar of your approach is establishing an explicit learning step by monitoring performance at the operational level to directly identify and refine policies as uncertainties unfold. Now that we are a few years past the July 2023 adoption of the Oregon Transportation Plan Update, how is this monitoring loop functioning in practice? Have any real-world indicators triggered a policy pivot or model refinement yet?”
3. **Confronting the Emissions Gap**
“The exploratory modeling demonstrated that the potential range of future GHG emissions under deep uncertainty did not actually encompass the targets in the STS Vision. When you presented this empirical gap to decision-makers, how did they respond? Did it spark defensive skepticism about the models, or did it successfully catalyze the conversation around more aggressive, low-regret policy levers?”
4. **Scaling VisionEval for Deep Uncertainty**
“You utilized VisionEval as your core strategic model to test against market, socio-economic, and program effectiveness uncertainties. For other state DOTs looking to replicate your success, what were the primary data-pipeline or staffing constraints you encountered when scaling VisionEval to explore such a wide envelope of scenarios?”
5. **Institutionalizing DMDU for Future Planning Cycles**
“Looking back at the entire process for the 2023 Oregon Transportation Plan Update, what has been the biggest institutional win regarding how ODOT views risk? Is exploratory modeling now seen as a permanent fixture for future planning cycles, or is there still work to be done to fully embed DMDU into the agency's core culture?”

**Pro-Tip for the Conversation**
Use Question 1 as your icebreaker. Agencies all over the country struggle with engineers wanting to use massive, slow travel demand models for high-level exploratory planning. Hearing exactly how ODOT drew the boundary line between "strategic scenario exploration" and "tactical project delivery" will yield an incredibly valuable case study for the entire DMDU community.
