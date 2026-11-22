// Alles Baby – Landingpage: kleine Helfer, kein Tracking, keine externen Abrufe.
document.documentElement.classList.remove("no-js");

// Header bekommt beim Scrollen eine feine Trennlinie (Hysterese gegen Flattern, Styleguide Abschnitt 10)
(function () {
  var header = document.getElementById("header");
  if (!header) return;
  var ticking = false;
  function update() {
    var y = window.scrollY;
    if (y > 44) header.classList.add("scrolled");
    else if (y < 24) header.classList.remove("scrolled");
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();

// Sanftes Einblenden der Sektionen
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
