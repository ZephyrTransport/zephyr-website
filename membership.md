---
layout: redirect
title: "Membership"
subTitle: "Become a member to support Zephyr!"
---

<br/>
<img src="/img/logo-small.png" width="150px" style="float:left; margin-right:20px;" />
<br/>
# Join Zephyr Today!

<br/>
<br/>
<br/>

---

<div style="float:right; margin: 5px 10px;">
<img src="/img/reception.jpg" width="400px" />
<h5 style="text-align:right;"><i>The Zephyr reception at the 2017 TRB Annual Meeting</i></h5>
</div>

Members are at the heart of the Zephyr Foundation’s organizational structure (see Article I of our [Bylaws](/bylaws)...we're not joking).  Members are responsible for electing the Board of Directors and play a key role in supporting the organizational core through volunteership and guidance as well as their membership dues.

This structure was selected based on extensive consultation within our community as well as research on similar organizations in other fields and has the following advantages:
- Allows the foundation to undertake shared “backbone” support roles for the industry rather than relying on project- or program-specific grants which tend to ebb and flow.
- Priorities are responsive to both grassroots (member) needs as well as strategic (top-down) priorities.
- Shared ownership of the Foundation by the community creates buy-in.

By joining today, you will help us build a tight-knit community of motivated travel analysis professionals, working together to improving our industry.

*Scroll down to join today!!!*

### Who Can Be a Member?

Any individual shall be eligible for membership if they have paid their dues and agree to abide by terms of membership. Any member reported to the Executive Committee for violating the [Terms of Membership](/terms-of-membership) shall have their membership suspended and potentially revoked upon confirmation of a violation.
- *Report violations of [terms of membership](/terms-of-membership) to [membership@zephyrtransport.org](mailto:membership@zephyrtransport.org)*

Institutions, corporations, and public agencies can also be members and pass along some of the member benefits to their own members or employees.  See below for details about each.

### Individual Membership

Benefits for individual members include:
- Vote in board elections
- Commemorative laptop decal!
- Preferential and discounted event registration
- Eligible to participate in project committees

**Type** | **Annual Dues** | **Notes**
--- | --- | ---
Standard | $200 | Open to all!
Student | $25 | Must be in a degree-seeking program in a related field.
Youth   | $25 | Under thirty at the time of application.

*Scroll down to join today!!!*

### Public Agencies

Benefits for public agency membership include
- Vote in board elections
- Commemorative laptop decals and plaque
- Preferential and discounted event registration for employees
- Website listing

Agency memberships are priced according to the population "service area" in which your agency has jurisdiction:

<br/>

|**Size** | **Annual Dues** |**Service Area** |
|---------|------------------|-------------------------|
**Small:** | $2,500 | < 500,000 service area
**Medium:&nbsp;&nbsp;** |$5,000 | 500,000 - 1 million service area&nbsp;&nbsp;
**Large:** |	$10,000 | > 1 million service area

<br/>

Please contact us at [membership@zephyrtransport.org](mailto:membership@zephyrtransport.org) so we can discuss the best way to get your agency on board. Zephyr can even send you an invoice.

**Some agencies that are unable to pay for a membership should consider a [Zephyr Subscription](/subscriptions) instead.**

### Businesses and Institutions

Benefits for business and institutional members include
- Vote in board elections
- Commemorative laptop decals and plaque
- Preferential and discounted event registration for employees
- Website listing

Business and institutional membership is available through the following self-selected tiers:

<br/>

| **Size** | **Annual Dues** |
|---------|------------------|
| **Supporting:** | $5,000 |
| **Sustaining:&nbsp;&nbsp;** | $10,000 |
|  **Leadership:** |	$25,000 |

<br/>

Please contact us at [membership@zephyrtransport.org](mailto:membership@zephyrtransport.org) so we can discuss the best way to get your business or institution on board. Zephyr can even send you an invoice.

## How to become a member

You can sign up right now using your credit card, but other options are available below.

**All individual members must agree to the [Zephyr Terms of Membership](/terms-of-membership).**

We'll need your name, email, and a valid credit/debit card info to process your membership.  We use the [Stripe](https://stripe.com) payment system, which means we never see your credit card number and thus cannot lose it.

#### Other payment options
If you prefer to pay by check, please send a check and a signed copy of the [Zephyr Terms of Membership](/terms-of-membership) to:
>Zephyr Foundation
>c/o CT Corp
>4701 Cox Road - Suite 285
>Glen Allen, VA 23060-6802

To do a bank transfer or request an invoice, please email: [membership@zephyrtransport.org](mailto:membership@zephyrtransport.org)

<!-- stripe -->

---

### To join today using a credit card, select from the membership options below:

<div class="striperow">
  {% for product in site.memberships %}
    {% include item.html %}
  {% endfor %}
</div>

<br/>
Thanks for considering joining Zephyr. We look forward to building great things with you!


<br/><br/><br/><br/><br/>

<!-- Hide form until terms are approved -->

<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
<script>
    $(document).ready(function(){
        $("#terms-1").click(function (){
            if ($("#terms-1").prop("checked")){
                $("#stripe-1").show();
            }else{
                $("#stripe-1").hide();
            }
        });

    $(document).ready(function(){
        $("#terms-2").click(function (){
            if ($("#terms-2").prop("checked")){
                $("#stripe-2").show();
            }else{
                $("#stripe-2").hide();
            }
        });
    });
});
</script>
