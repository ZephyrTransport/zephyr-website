---
layout: simple
img: none
icon: activitysim_logo_light.jpg
title: ActivitySim FAQs
description: Frequently asked questions.
front: True
---

## ActivitySim Frequently Asked Questions

- Can a user exploit security flaws present in ActivitySim to gain unauthorized access to agency computer systems?
  - ActivitySim is NOT a public facing tool or service because it is designed specifically to allow arbitrary code execution.  Models can be built to use any Python code.   ActivitySim must be run on a machine where all the users able to access the tool are trusted users, and all files accessible and run by ActivitySim come from a trusted source.
 
- Can a malicious outside actor create new security vulnerabilities by adding code to ActivitySim, which then may create security vulnerabilities in agency computer systems when ActivitySim is installed?
  - It is very unlikely that a malicious outside actor can create new security vulnerabilities by adding code to ActivitySim.  While we do accept pull requests from the public, the frequency of those PRs is extremely low, and these outside PRs are usually simple (e.g. fixing a typo in documentation), so security-focused reviews have typically not been necessary.
  - A larger risk comes from ActivitySim’s dependencies.  To run the tool, it is necessary to install a significant number of other public open source software libraries, including numpy, pandas, xarray, and others.  In theory, any one of these dependencies could contain a significant software vulnerability.  This kind of vulnerability has been found in the past (e.g. https://nvd.nist.gov/vuln/detail/cve-2021-44228). The potential presence of these vulnerabilities is well known and is basically unavoidable.  It is beyond the scope or capabilities of the ActivitySim consortium to review dependencies for such risks. In practice, the bulk of these open-source dependencies are so widely used and reviewed that it is unlikely that a malicious actor could insert bad code in them and go undetected for long.  Moreover, nearly all such risks can also be effectively mitigated by running ActivitySim in an isolated container (e.g. Docker) that has no access to other parts of the system when it runs.  This sandboxing is an easy way to protect against malicious attackers using our dependency stack as an entry point into your systems.
