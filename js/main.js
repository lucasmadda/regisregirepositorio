/* RÉGIS REGI · PORTFÓLIO 2026 */

(function () {
  "use strict";

  /* ---------- timecode a 24fps no topo ---------- */

  var tcEl = document.getElementById("timecode");
  if (tcEl) {
    var start = performance.now();
    var pad = function (n) { return String(n).padStart(2, "0"); };

    var tick = function (now) {
      var elapsed = (now - start) / 1000;
      var frames = Math.floor((elapsed % 1) * 24);
      var s = Math.floor(elapsed) % 60;
      var m = Math.floor(elapsed / 60) % 60;
      var h = Math.floor(elapsed / 3600) % 24;
      tcEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s) + ":" + pad(frames);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- reveal ao rolar ---------- */

  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- timeline: playhead + clipes entram quando visível ---------- */

  var nle = document.getElementById("nle");

  if (nle && "IntersectionObserver" in window) {
    var nleObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          nle.classList.add("playing");
          nleObserver.disconnect();
        }
      });
    }, { threshold: 0.35 });

    nleObserver.observe(nle);
  } else if (nle) {
    nle.classList.add("playing");
  }
})();
