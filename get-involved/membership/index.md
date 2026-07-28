---
layout: simple
title: "Membership"
section: Get Involved
permalink: /get-involved/membership/
membership_tiers:
  - type: Standard
    price: "$200"
    suffix: "/yr"
    note: Open to all
  - type: Student
    price: "$25"
    suffix: "/yr"
    note: Degree-seeking program
  - type: Young Professional
    price: "$25"
    suffix: "/yr"
    note: Under 30
  - type: Organizational
    price: "$2,000"
    suffix: "/yr"
    note: or $10,000 / 5 yrs
---

<div class="z-inline-photo">
<img src="{{ '/img/photos/reception.jpg' | relative_url }}" width="320px" class="img-fluid rounded"/>
<p style="text-align:right; font-size:0.85rem; color:#666;"><i>The Zephyr reception at the TRB Annual Meeting</i></p>
</div>

Members are the heart of the Zephyr Foundation. As a member, you:

- **Vote** in Board of Directors elections and help shape Zephyr's future.
- **Receive** discounted registration for Zephyr conferences, workshops, and events.
- **Connect** with a community of travel analysis professionals working together to improve the practice.
- **Contribute** to open-source software, data standards, and community initiatives by joining a [committee]({{ '/about/committees' | relative_url }}) or an [activity]({{ '/get-involved/activities' | relative_url }}).

See the [Bylaws]({{ '/about/policies/bylaws' | relative_url }}) for governance details and the [Terms of Membership]({{ '/about/policies/terms-of-membership' | relative_url }}) for the full agreement.

<br style="clear:both" />

## Membership Options

<div class="z-membership-tiles">
    {% for tier in page.membership_tiers %}
    <div class="z-membership-tile">
        <div class="z-membership-tile-type">{{ tier.type }}</div>
        <div class="z-membership-tile-price">{{ tier.price }}<span>{{ tier.suffix }}</span></div>
        <div class="z-membership-tile-note">{{ tier.note }}</div>
    </div>
    {% endfor %}
</div>

Organizations, institutions, and public agencies can join too, and can pass along member benefits to their staff. [Contact us](mailto:membership@zephyrtransport.org) to set that up (Zephyr can send an invoice).

## How to Join or Renew

Select an option below and pay by credit card via [Stripe](https://stripe.com). We never see or store your card number. All members must agree to the [Terms of Membership]({{ '/about/policies/terms-of-membership' | relative_url }}).

Prefer another payment option? Email [membership@zephyrtransport.org](mailto:membership@zephyrtransport.org) to arrange payment by check, bank transfer, or invoice.

Already a member? Visit the [Stripe Customer Portal](https://billing.stripe.com/p/login/3cs6pRfp0aIR0Qo4gg) to update your membership or payment information.

<div class="z-stripe-wide">
<div>
<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1Mk9GoCdFkr743p9Ge2LiXYD"
publishable-key="pk_live_qT7xpgL72eNH765lj0s9EaT4">
</stripe-pricing-table>
</div>
</div>

<br/>
Thank you for being part of Zephyr. Together we're building an open, collaborative community advancing transportation data, analysis, and modeling.

<!-- wake up. heroku server! -->
<img src="{{site.post_url}}wakeup" style="display:none">

{% include home-link.html %}
