// Vanilla JS (no jQuery). Bootstrap 5's JS (loaded via bootstrap.bundle.min.js)
// already handles dropdowns/collapse declaratively via data-bs-* attributes;
// this file only covers the site's own custom interactions.

// Remember each page's scroll position (per tab) so that clicking a
// "Back to ..." / "Return to ..." link (.z-program-hub-link) lands where
// the visitor left off, while top-nav links always land at the top like
// a normal page load. A link only restores scroll if it was actually
// clicked from a .z-program-hub-link — arriving via nav, a bookmark, or
// browser back/forward does not set that flag, so no restore happens.
(function () {
    var scrollKey = 'z-scroll:' + window.location.pathname;
    var restoreFlagKey = 'z-restore:' + window.location.pathname;

    window.addEventListener('load', function () {
        if (sessionStorage.getItem(restoreFlagKey)) {
            sessionStorage.removeItem(restoreFlagKey);
            var saved = sessionStorage.getItem(scrollKey);
            if (saved !== null) {
                window.scrollTo(0, parseInt(saved, 10));
            }
        }
    });

    window.addEventListener('pagehide', function () {
        sessionStorage.setItem(scrollKey, window.scrollY);
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.z-program-hub-link a').forEach(function (link) {
            link.addEventListener('click', function () {
                sessionStorage.setItem('z-restore:' + link.pathname, '1');
            });
        });
    });
})();

document.addEventListener('DOMContentLoaded', function () {
    // Smooth-scroll for same-page hash links (e.g. "/#home"). Nav items that
    // carry .page-scroll but point at a real page (e.g. "/events") have no
    // "#" in their href and are left to navigate normally.
    document.querySelectorAll('a.page-scroll').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            var href = anchor.getAttribute('href') || '';
            var hashIndex = href.indexOf('#');
            if (hashIndex === -1) return;

            var targetId = href.slice(hashIndex + 1);
            var target = targetId ? document.getElementById(targetId) : null;
            var pathPart = href.slice(0, hashIndex);
            var onCurrentPage = pathPart === '' || pathPart === window.location.pathname;

            if (target && onCurrentPage) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Close the mobile nav when a real link is clicked (but not a dropdown
    // toggle, which should open its submenu instead of collapsing the nav).
    var navCollapseEl = document.getElementById('bs-example-navbar-collapse-1');
    if (navCollapseEl && window.bootstrap) {
        var navCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });
        navCollapseEl.querySelectorAll('a:not(.dropdown-toggle)').forEach(function (link) {
            link.addEventListener('click', function () {
                if (navCollapseEl.classList.contains('show')) {
                    navCollapse.hide();
                }
            });
        });
    }
});
