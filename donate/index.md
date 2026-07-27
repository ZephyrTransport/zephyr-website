---
layout: simple
title: "Donations and Sponsorships"
permalink: /donate/
donations:
  - amt: 5
    color: "#b6e1f6;"
  - amt: 10
    color: "#b6f6e1;"
  - amt: 25
    color: "#d4f4b8;"
  - amt: 50
    color: "#ece1a9;"
  - amt: 100
    color: "#f4f8a3;"
  - amt: 250
    color: "#f7d5c0;"
  - amt: 500
    color: "#f4bdae;"
  - amt: 1000
    color: "#f4aeb4;"
  - amt: 2500
    color: "#f39f9f;"
sponsorship_tiers:
  - type: Visionary Partner
    price: "$100,000"
    benefits: 'Organizational benefits for ten years; preferential logo placement on website and verbal thanks at events; commemorative plaque.'
  - type: Leadership Circle
    price: "$25,000"
    benefits: "Commemorative plaque, preferential logo placement and verbal thanks at events."
---

Thank you for considering a gift to the Zephyr Foundation.  We welcome all donations large and small.

---

### Donate directly

Zephyr accepts donations by check or by credit card.

**By Check.** Checks can be made out to:

>Zephyr Foundation <br/>
>c/o CT Corp <br/>
>4701 Cox Road - Suite 285 <br/>
>Glen Allen, VA 23060-6802 <br/>

**By Credit Card**

Donate right now using a credit card. Just select a donation level below. We use the [Stripe](https://stripe.com) payment system, which means we never see your credit card number and thus cannot lose it.

<div class="striperow">
  {% for level in page.donations %}
    {% include donation.html %}
  {% endfor %}
</div>

---

### Become a Leadership Circle Sponsor
Contribute major support to help the Foundation build for our shared future by joining the Leadership Circle.  Admission is available at two tiers.

<div class="row row-cols-1 row-cols-sm-2 g-3 z-sponsorship-tiles">
    {% for tier in page.sponsorship_tiers %}
    <div class="col"><div class="z-sponsorship-tile">
        <div class="z-sponsorship-tile-type">{{ tier.type }}</div>
        <div class="z-sponsorship-tile-price">{{ tier.price }}</div>
        <p class="z-sponsorship-tile-benefits">{{ tier.benefits }}</p>
    </div></div>
    {% endfor %}
</div>

<br/>
To become a member of the Leadership Circle, contact a board member or [sponsorships@zephyrtransport.org](mailto:sponsorships@zephyrtransport.org).

---

*Thanks so much for considering support of the Zephyr Foundation!*

<!-- wake up. heroku server! -->
<img src="{{site.post_url}}wakeup" style="display:none">
