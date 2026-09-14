// Renders the "Next Event" banner (homepage) and "Next Event" / "Also
// Coming Up" section (/events/) from data embedded by
// _includes/next-event.html. Picking "next" happens here, in the
// browser, using the visitor's actual current date -- not at Jekyll
// build time -- so the page stays correct between rebuilds instead of
// freezing on whatever was next when the site was last pushed.
document.addEventListener('DOMContentLoaded', function () {
    var dataEl = document.getElementById('z-next-event-data');
    if (!dataEl) return;

    var fsep = dataEl.getAttribute('data-fsep');
    var rsep = dataEl.getAttribute('data-rsep');
    var windowDays = parseInt(dataEl.getAttribute('data-window-days'), 10) || 30;
    var compact = dataEl.getAttribute('data-compact') === 'true';
    var raw = dataEl.textContent.trim();

    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function isoDate(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

    var now = new Date();
    var todayIso = isoDate(now);
    var windowEndIso = isoDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + windowDays));

    var records = raw === '' ? [] : raw.split(rsep).filter(function (line) {
        return line !== '';
    }).map(function (line) {
        var f = line.split(fsep);
        return { url: f[0], title: f[1], dateIso: f[2], dayLabel: f[3], time: f[4], category: f[5] };
    });

    var upcoming = records.filter(function (r) { return r.dateIso >= todayIso; });
    upcoming.sort(function (a, b) { return a.dateIso < b.dateIso ? -1 : (a.dateIso > b.dateIso ? 1 : 0); });

    if (upcoming.length === 0) return;

    var next = upcoming[0];
    var rest = upcoming.slice(1);

    function icon(cls) {
        var i = document.createElement('i');
        i.className = cls;
        i.setAttribute('aria-hidden', 'true');
        return i;
    }

    if (compact) {
        var bannerMount = document.getElementById('z-next-event-banner-mount');
        if (!bannerMount) return;

        var banner = document.createElement('div');
        banner.className = 'z-next-event-banner';
        var container = document.createElement('div');
        container.className = 'container';

        container.appendChild(icon('fa-regular fa-calendar'));
        container.appendChild(document.createTextNode(' '));

        var strong = document.createElement('strong');
        strong.textContent = 'Next Event:';
        container.appendChild(strong);
        container.appendChild(document.createTextNode(' '));

        var link = document.createElement('a');
        link.href = next.url;
        link.textContent = next.title;
        container.appendChild(link);
        container.appendChild(document.createTextNode(' '));

        var dateSpan = document.createElement('span');
        dateSpan.className = 'z-next-event-banner-date';
        dateSpan.textContent = '— ' + next.dayLabel;
        container.appendChild(dateSpan);

        banner.appendChild(container);
        bannerMount.appendChild(banner);
        return;
    }

    var nextMount = document.getElementById('z-next-event-mount');
    if (nextMount) {
        var heading = document.createElement('div');
        heading.className = 'z-events-section-heading';
        heading.textContent = 'Next Event';
        nextMount.appendChild(heading);

        var card = document.createElement('div');
        card.className = 'z-next-event';

        if (next.category) {
            var badge = document.createElement('span');
            badge.className = 'z-event-badge';
            badge.textContent = next.category;
            card.appendChild(badge);
        }

        var h3 = document.createElement('h3');
        h3.className = 'z-next-event-title';
        var titleLink = document.createElement('a');
        titleLink.href = next.url;
        titleLink.textContent = next.title;
        h3.appendChild(titleLink);
        card.appendChild(h3);

        var meta = document.createElement('div');
        meta.className = 'z-next-event-meta';

        var dateItem = document.createElement('span');
        dateItem.appendChild(icon('fa-regular fa-calendar'));
        dateItem.appendChild(document.createTextNode(' ' + next.dayLabel));
        meta.appendChild(dateItem);

        if (next.time) {
            var timeItem = document.createElement('span');
            timeItem.appendChild(icon('fa-regular fa-clock'));
            timeItem.appendChild(document.createTextNode(' ' + next.time));
            meta.appendChild(timeItem);
        }

        card.appendChild(meta);

        var btn = document.createElement('a');
        btn.className = 'btn btn-z';
        btn.href = next.url;
        btn.textContent = 'View Details';
        card.appendChild(btn);

        nextMount.appendChild(card);
    }

    var upcomingMount = document.getElementById('z-upcoming-mount');
    if (upcomingMount) {
        var withinWindow = rest.filter(function (r) { return r.dateIso <= windowEndIso; });
        if (withinWindow.length > 0) {
            var monthWrap = document.createElement('div');
            monthWrap.className = 'z-upcoming-month';

            var label = document.createElement('div');
            label.className = 'z-upcoming-month-label';
            label.textContent = 'Also Coming Up in the Next ' + windowDays + ' Days';
            monthWrap.appendChild(label);

            var tiles = document.createElement('div');
            tiles.className = 'z-upcoming-tiles' + (withinWindow.length === 1 ? ' single' : '');

            withinWindow.forEach(function (r) {
                var tile = document.createElement('div');
                tile.className = 'z-upcoming-tile';

                var dateDiv = document.createElement('div');
                dateDiv.className = 'z-event-date';
                dateDiv.textContent = r.dayLabel;
                tile.appendChild(dateDiv);

                var titleDiv = document.createElement('div');
                titleDiv.className = 'z-event-title';
                var a = document.createElement('a');
                a.href = r.url;
                a.textContent = r.title;
                titleDiv.appendChild(a);
                tile.appendChild(titleDiv);

                tiles.appendChild(tile);
            });

            monthWrap.appendChild(tiles);
            upcomingMount.appendChild(monthWrap);
        }
    }
});
