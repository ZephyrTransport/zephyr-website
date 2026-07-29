---
layout: project
title: Get Involved
subTitle: Ways to plug into the Zephyr community
img: banners/banner-social-standing-duotone.jpg
img-position: center 45%
section: Get Involved
permalink: /get-involved/
---

<section class="content-section text-left" id="get-involved-hub">
    <div class="row">
        <div class="col-lg-12">
            <p>Zephyr is a community effort, and there's more than one way to plug in &mdash; whether you want to support the organization directly, help run it, work on a specific project, or just join the conversation.</p>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 z-implementation-list">
                        <div class="col">
                            <div class="card h-100 z-program-card">
                                <div class="card-body text-center position-relative">
                                    <h3 class="card-title h5"><a href="{{ '/get-involved/membership' | relative_url }}" class="stretched-link">Become a Member</a></h3>
                                    <p class="card-text">Join Zephyr, vote in board elections, and support our work</p>
                                    <p class="z-program-card-hint">Click for details &raquo;</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 z-program-card">
                                <div class="card-body text-center position-relative">
                                    <h3 class="card-title h5"><a href="{{ '/about/committees' | relative_url }}" class="stretched-link">Join a Committee</a></h3>
                                    <p class="card-text">Help run Zephyr at the organization level</p>
                                    <p class="z-program-card-hint">Click for details &raquo;</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 z-program-card">
                                <div class="card-body text-center position-relative">
                                    <h3 class="card-title h5"><a href="{{ '/get-involved/activities' | relative_url }}" class="stretched-link">Join an Activity</a></h3>
                                    <p class="card-text">Contribute to a specific project, tool, or standard</p>
                                    <p class="z-program-card-hint">Click for details &raquo;</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 z-program-card">
                                <div class="card-body text-center position-relative">
                                    <h3 class="card-title h5"><a href="{{ '/get-involved/forum' | relative_url }}" class="stretched-link">Join the Zephyr Forum</a></h3>
                                    <p class="card-text">Ask questions and connect with the community on Discord</p>
                                    <p class="z-program-card-hint">Click for details &raquo;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5" id="follow-on-social-media">
                <div class="col-lg-12">
                    <h2>Connect with Zephyr</h2>
                    <p>Prefer to follow along rather than sign up? Here's where Zephyr shows up online.</p>
                    <div class="row row-cols-1 row-cols-sm-2 g-3">
                        {% for social in site.social %}
                        <div class="col">
                            <a href="{{ social.url }}" class="z-social-list-item" target="_blank" rel="noopener">
                                <i class="fab fa-{{ social.title }} z-social-list-icon" aria-hidden="true"></i>
                                <span>
                                    <strong>{{ social.label }}</strong>
                                    <span class="z-social-list-desc">{{ social.description }}</span>
                                </span>
                            </a>
                        </div>
                        {% endfor %}
                        <div class="col">
                            <a href="http://eepurl.com/ccQL7z" class="z-social-list-item" target="_blank" rel="noopener">
                                <i class="fa fa-envelope z-social-list-icon" aria-hidden="true"></i>
                                <span>
                                    <strong>Email Newsletter</strong>
                                    <span class="z-social-list-desc">Occasional email updates on Zephyr news and events.</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{% include home-link.html %}
