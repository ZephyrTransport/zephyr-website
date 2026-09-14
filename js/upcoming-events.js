// Renders the event-card.html-style "upcoming events" lists embedded by
// _includes/upcoming-events.html (used on the TMIP, Learning Sessions,
// and MoMo Conference activity pages). Which events actually still
// count as "upcoming" is decided here, in the browser, using the
// visitor's real current date -- not at Jekyll build time -- so the
// list stays correct between rebuilds instead of continuing to show an
// event that's already passed. Mirrors js/next-event.js.
document.addEventListener('DOMContentLoaded', function () {
    var dataEls = document.querySelectorAll('[id^="z-upcoming-events-data-"]');
    if (!dataEls.length) return;

    function pad(n) { return (n < 10 ? '0' : '') + n; }
    var now = new Date();
    var todayIso = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());

    function icon(cls) {
        var i = document.createElement('i');
        i.className = cls;
        i.setAttribute('aria-hidden', 'true');
        return i;
    }

    dataEls.forEach(function (dataEl) {
        var uid = dataEl.id.slice('z-upcoming-events-data-'.length);
        var mount = document.getElementById('z-upcoming-events-mount-' + uid);
        if (!mount) return;

        var fsep = dataEl.getAttribute('data-fsep');
        var rsep = dataEl.getAttribute('data-rsep');
        var count = parseInt(dataEl.getAttribute('data-count'), 10) || 3;
        var eyebrow = dataEl.getAttribute('data-eyebrow') || '';
        var emptyMessage = dataEl.getAttribute('data-empty-message') || 'No upcoming sessions scheduled right now.';
        var raw = dataEl.textContent.trim();

        var records = raw === '' ? [] : raw.split(rsep).filter(function (line) {
            return line !== '';
        }).map(function (line) {
            var f = line.split(fsep);
            return { url: f[0], title: f[1], dateIso: f[2], dayLabel: f[3], time: f[4], category: f[5] };
        });

        var upcoming = records.filter(function (r) { return r.dateIso >= todayIso; });
        upcoming.sort(function (a, b) { return a.dateIso < b.dateIso ? -1 : (a.dateIso > b.dateIso ? 1 : 0); });
        var shown = upcoming.slice(0, count);

        if (shown.length === 0) {
            var p = document.createElement('p');
            p.className = 'z-empty-state';
            var em = document.createElement('em');
            em.textContent = emptyMessage;
            p.appendChild(em);
            mount.appendChild(p);
            return;
        }

        shown.forEach(function (r, idx) {
            var card = document.createElement('div');
            card.className = 'z-next-event';

            if (idx === 0 && eyebrow) {
                var eyebrowDiv = document.createElement('div');
                eyebrowDiv.className = 'z-next-event-eyebrow';
                eyebrowDiv.textContent = eyebrow;
                card.appendChild(eyebrowDiv);
            }

            if (r.category) {
                var badge = document.createElement('span');
                badge.className = 'z-event-badge';
                badge.textContent = r.category;
                card.appendChild(badge);
            }

            var h3 = document.createElement('h3');
            h3.className = 'z-next-event-title';
            var a = document.createElement('a');
            a.href = r.url;
            a.textContent = r.title;
            h3.appendChild(a);
            card.appendChild(h3);

            var meta = document.createElement('div');
            meta.className = 'z-next-event-meta';

            var dateSpan = document.createElement('span');
            dateSpan.appendChild(icon('fa-regular fa-calendar'));
            dateSpan.appendChild(document.createTextNode(' ' + r.dayLabel));
            meta.appendChild(dateSpan);

            if (r.time) {
                var timeSpan = document.createElement('span');
                timeSpan.appendChild(icon('fa-regular fa-clock'));
                timeSpan.appendChild(document.createTextNode(' ' + r.time));
                meta.appendChild(timeSpan);
            }

            card.appendChild(meta);

            var btn = document.createElement('a');
            btn.className = 'btn btn-z';
            btn.href = r.url;
            btn.textContent = 'View Details';
            card.appendChild(btn);

            mount.appendChild(card);
        });
    });
});
