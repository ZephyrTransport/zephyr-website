---
layout: simple
title: "Search"
permalink: /search/
---

<div class="z-search-box">
    <input type="search" id="z-search-input" placeholder="Search activities, events, about pages, and more&hellip;" autocomplete="off" aria-label="Search the site"/>
</div>

<p class="z-search-archive-hint">Looking for a message in the TMIP mailing list archive (2001&ndash;2023)? <a id="z-search-archive-link" href="{{ '/activities/travel-model-improvement-program/archive/' | relative_url }}">Search the TMIP Archive</a>, or <a href="{{ '/activities/travel-model-improvement-program/archive/#/webinars' | relative_url }}">browse TMIP webinars</a>.</p>

<p id="z-search-status" class="z-search-status"></p>
<div id="z-search-results" class="z-search-results"></div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('z-search-input');
    var statusEl = document.getElementById('z-search-status');
    var resultsEl = document.getElementById('z-search-results');
    var archiveLink = document.getElementById('z-search-archive-link');
    var archiveLinkBase = archiveLink.getAttribute('href');
    var index = null;
    var debounceTimer = null;

    function updateArchiveLink(query) {
        archiveLink.href = query ? archiveLinkBase + '?q=' + encodeURIComponent(query) : archiveLinkBase;
    }

    fetch('{{ "/search.json" | relative_url }}')
        .then(function (r) { return r.json(); })
        .then(function (data) {
            index = data.map(function (item) {
                return {
                    title: item.title,
                    url: item.url,
                    section: item.section,
                    content: (item.content || '').replace(/\s+/g, ' ').trim()
                };
            });
            statusEl.textContent = '';

            var params = new URLSearchParams(window.location.search);
            var q = params.get('q');
            if (q) {
                input.value = q;
                updateArchiveLink(q);
                runSearch(q);
            }
        })
        .catch(function () {
            statusEl.textContent = 'Search index failed to load. Try refreshing the page.';
        });

    function escapeHtml(s) {
        return s.replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function excerptFor(content, term) {
        if (!term) return content.slice(0, 160);
        var idx = content.toLowerCase().indexOf(term.toLowerCase());
        if (idx === -1) return content.slice(0, 160);
        var start = Math.max(0, idx - 60);
        var end = Math.min(content.length, idx + term.length + 100);
        return (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
    }

    function highlight(text, term) {
        var escaped = escapeHtml(text);
        if (!term) return escaped;
        var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
        return escaped.replace(re, '<mark>$1</mark>');
    }

    function score(item, terms) {
        var titleLower = item.title.toLowerCase();
        var contentLower = item.content.toLowerCase();
        var s = 0;
        terms.forEach(function (term) {
            if (!term) return;
            if (titleLower === term) s += 50;
            if (titleLower.indexOf(term) !== -1) s += 20;
            var contentMatches = contentLower.split(term).length - 1;
            s += Math.min(contentMatches, 10) * 2;
        });
        return s;
    }

    function runSearch(query) {
        if (!index) return;
        query = query.trim();
        if (!query) {
            resultsEl.innerHTML = '';
            statusEl.textContent = '';
            return;
        }

        var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        var scored = index.map(function (item) {
            return { item: item, score: score(item, terms) };
        }).filter(function (s) { return s.score > 0; });

        scored.sort(function (a, b) { return b.score - a.score; });

        if (scored.length === 0) {
            statusEl.textContent = 'No results for “' + query + '”.';
            resultsEl.innerHTML = '';
            return;
        }

        statusEl.textContent = scored.length + ' result' + (scored.length === 1 ? '' : 's') + ' for “' + query + '”';

        resultsEl.innerHTML = scored.slice(0, 30).map(function (s) {
            var item = s.item;
            var excerpt = excerptFor(item.content, terms[0]);
            return '<div class="z-search-result">' +
                (item.section ? '<span class="z-event-badge z-search-section">' + escapeHtml(item.section) + '</span>' : '') +
                '<h3 class="z-search-result-title"><a href="' + item.url + '">' + highlight(item.title, terms[0]) + '</a></h3>' +
                '<p class="z-search-result-excerpt">' + highlight(excerpt, terms[0]) + '</p>' +
                '</div>';
        }).join('');
    }

    input.addEventListener('input', function () {
        clearTimeout(debounceTimer);
        var q = input.value;
        updateArchiveLink(q);
        debounceTimer = setTimeout(function () { runSearch(q); }, 150);
    });

    input.focus();
});
</script>
