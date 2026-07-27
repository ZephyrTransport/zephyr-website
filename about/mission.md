---
layout: simple
title: "Mission, Vision &amp; Values"
section: About
permalink: /about/mission/
vision:
  - We envision a profession in which researchers, practitioners, and industry partners work together to develop and implement travel analysis data, methods, models, and tools that are demonstrably more valuable, credible, transparent, tractable, reproducible, and usable&mdash;supporting decision-making that is inclusive and promotes equitable outcomes, shared prosperity, and sustainability.
values:
  - name: Respect
    description: We treat every member with professionalism, curiosity, and respect.
  - name: Collaboration
    description: We believe better solutions emerge through open exchange and shared effort.
  - name: Inclusion
    description: We welcome diverse perspectives, backgrounds, disciplines, and experience levels.
  - name: Integrity
    description: We communicate honestly, act ethically, and earn trust through transparency.
  - name: Technical Rigor
    description: We value evidence, reproducibility, sound methods, and continual improvement.
  - name: Community Stewardship
    description: We invest in the long-term health of the travel analysis community and the public good.
---

<section class="content-section text-left" id="mission">
    <div class="row">
        <div class="col-lg-12">
            <div class="z-mission-statement">
                <span class="z-mission-label">Mission</span>
                <p class="z-mission-eyebrow">Zephyr Foundation</p>
                <p>{{ site.mission }}</p>
            </div>

            <hr class="sub-section-heading-spacer">
            <h3>Vision</h3>
            {% for paragraph in page.vision %}
            <p class="z-vision-text">{{ paragraph }}</p>
            {% endfor %}

            <hr class="sub-section-heading-spacer">
            <h3>Values</h3>
            <div class="z-values-stage">
                <p class="z-zephyr-reveal" id="z-zephyr-reveal">You caught the Zephyr &#127788;&mdash;<span>values only mean something once they're in motion.</span></p>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 z-name-tiles" id="z-values-tiles">
                    {% for value in page.values %}
                    <div class="col"><div class="z-value-tile" data-value="{{ value.name }}">
                        <div class="z-value-tile-inner">
                            <div class="z-name-tile z-committee-tile z-value-front">
                                <strong>{{ value.name }}</strong>
                                <p>{{ value.description }}</p>
                            </div>
                            <div class="z-value-back"></div>
                        </div>
                    </div></div>
                    {% endfor %}
                </div>
                <div class="z-gust-overlay" id="z-gust-overlay" aria-hidden="true">
                    <span class="z-gust-leaf">&#127811;</span>
                    <span class="z-gust-leaf">&#127811;</span>
                    <span class="z-gust-leaf">&#127811;</span>
                    <span class="z-gust-leaf">&#127811;</span>
                    <span class="z-gust-leaf">&#127811;</span>
                    <span class="z-gust-leaf">&#127811;</span>
                </div>
            </div>

        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var tilesWrap = document.getElementById('z-values-tiles');
    var gustOverlay = document.getElementById('z-gust-overlay');
    var reveal = document.getElementById('z-zephyr-reveal');
    if (!tilesWrap) return;

    var tiles = tilesWrap.querySelectorAll('.z-value-tile');
    var required = tiles.length;
    var clicked = new Set();
    var resetTimer = null;
    var completing = false;

    function resetTiles() {
        clicked.clear();
        tilesWrap.classList.remove('z-puzzle-complete');
        tiles.forEach(function (t) { t.classList.remove('z-flipped'); });
    }

    function playWhistle() {
        try {
            var Ctx = window.AudioContext || window.webkitAudioContext;
            var ctx = new Ctx();
            var now = ctx.currentTime;

            function tone(freq, start, dur, peak) {
                var osc = ctx.createOscillator();
                var gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now + start);
                gain.gain.setValueAtTime(0, now + start);
                gain.gain.linearRampToValueAtTime(peak, now + start + 0.1);
                gain.gain.linearRampToValueAtTime(peak * 0.85, now + start + dur - 0.2);
                gain.gain.linearRampToValueAtTime(0, now + start + dur);
                osc.connect(gain).connect(ctx.destination);
                osc.start(now + start);
                osc.stop(now + start + dur + 0.05);
            }

            // classic two-note train horn chord, long blast then a short one
            tone(311.1, 0, 1.2, 0.18);
            tone(392.0, 0, 1.2, 0.14);
            tone(311.1, 1.4, 0.55, 0.16);
            tone(392.0, 1.4, 0.55, 0.12);
        } catch (e) { /* Web Audio unavailable - skip the whistle */ }
    }

    tiles.forEach(function (tile) {
        tile.addEventListener('click', function () {
            if (completing) return;
            clearTimeout(resetTimer);
            clicked.add(tile.getAttribute('data-value'));
            tile.classList.add('z-flipped');

            if (clicked.size >= required) {
                completing = true;
                setTimeout(function () {
                    tilesWrap.classList.add('z-puzzle-complete');
                }, 1000);
                setTimeout(function () {
                    playWhistle();
                    triggerGust();
                    setTimeout(function () {
                        resetTiles();
                        completing = false;
                    }, 1900); // let the leaves finish blowing past before flipping back
                }, 2000);
            } else {
                resetTimer = setTimeout(resetTiles, 4000);
            }
        });
    });

    function restartAnimation(el, className) {
        el.classList.remove(className);
        void el.offsetWidth;
        el.classList.add(className);
    }

    function triggerGust() {
        restartAnimation(tilesWrap, 'z-gust');
        if (gustOverlay) restartAnimation(gustOverlay, 'z-gust-active');

        if (reveal) {
            reveal.classList.add('z-visible');
            clearTimeout(reveal._hideTimer);
            reveal._hideTimer = setTimeout(function () {
                reveal.classList.remove('z-visible');
            }, 5500);
        }
    }
});
</script>
