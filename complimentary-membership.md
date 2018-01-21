---
layout: simple
title: "Complimentary Membership"
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

## Complimentary Membership

As a **Zephyr founding stakeholder** you are entitled to a one year complimentary individual membership to the Zephyr Foundation.

All members must agree to the [Terms of Membership](/terms-of-membership) in order to become a member.

<br/>

## How to become a member

You can sign up right now!

We'll need your name and email address, in addition to your agreement to the Terms of membership below.

<div class="striperow">

<div class="stripecol stripecol-33">
  <div class="card">
    <div class="card-image">
      <img class="img-responsive"
           src="/img/steam-locomotive.jpg"
           alt="Complimentary membership">
    </div><!-- card image -->

    <div class="card-content">
      <span class="card-title">Complimentary Membership</span>
      <span class="card-subtitle">Free: $0</span>
      One-year complimentary membership to the Zephyr Foundation
    </div><!-- card content -->

    <div class="card-action">

      <form id="form-complementary" method="POST">
        <input id="terms"
               type="checkbox"
               name="terms">&nbsp;I agree to abide by the<br/>
        <a href="/terms-of-membership">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms of Membership</a><br/>
      </form>

      <form class="terms-form"
            id="form-details"
            action="{{site.post_url}}free"
            method="POST">
        <br/>

        <input name="customer_name" value="" style="width:100%" placeholder="Your full name" required><br/><br/>

        <input name="email" value="" style="width:100%" placeholder="Email address" required><br/><br/>

        <input name="amount" value="0" type="hidden">

        <input name="terms" value="Agreed" type="hidden"><br/><br/>

        <input name="description" value="One-year complimentary membership" type="hidden">

        <input type="submit" value="Register">
      </form>

    </div><!-- card actions -->
  </div>
</div>

</div>

<br/>

Thank you for considering joining Zephyr. We look forward to building great things with you!

<br/><br/><br/><br/><br/>

<!-- Hide form until terms are approved -->

<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
<script>
    $(document).ready(function(){
        $("#terms").click(function (){
            if ($("#terms").prop("checked")){
                $("#form-details").show();
            }else{
                $("#form-details").hide();
            }
        });
});
</script>
