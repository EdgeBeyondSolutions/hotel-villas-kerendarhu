(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };
  var escHTML = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "] failed:", e); } }

  /* ---------------- Mounts (idempotent) ---------------- */

  function mountRooms() {
    var target = $("[data-rooms]");
    if (!target || target.children.length > 0 || !data.rooms) return;
    target.innerHTML = data.rooms.map(function (r) {
      return (
        '<article class="card room-card" data-reveal>' +
          '<div class="card-img-wrap"><img src="' + escHTML(r.photo) + '" alt="' + escHTML(r.name) + '" loading="lazy" decoding="async"></div>' +
          '<div class="card-body">' +
            "<h3>" + escHTML(r.name) + "</h3>" +
            "<p>" + escHTML(r.desc) + "</p>" +
            '<div class="card-tags">' + r.tags.map(function (t) { return '<span class="tag">' + escHTML(t) + "</span>"; }).join("") + "</div>" +
            '<div class="card-price"><span class="from">Desde</span><span class="amount">$' + r.from + " MXN</span></div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function mountAmenities() {
    var target = $("[data-amenities]");
    if (!target || target.children.length > 0 || !data.amenities) return;
    var icons = {
      wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8.5c5.5-5 14.5-5 20 0"/><path d="M5.5 12.5c3.8-3.3 9.2-3.3 13 0"/><path d="M9 16.5c1.8-1.5 4.2-1.5 6 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg>',
      parking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 16V7h3.5a2.5 2.5 0 0 1 0 5H9"/></svg>',
      kitchen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 3v6a4 4 0 0 0 8 0V3"/><path d="M8 9v12"/><path d="M17 3v18"/><path d="M14 8c0-2.8 1.3-5 3-5s3 2.2 3 5-1.3 5-3 5"/></svg>',
      coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3c0 1-1 1-1 2s1 1 1 2M12 3c0 1-1 1-1 2s1 1 1 2"/></svg>',
      tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
      invoice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h10v18l-2.5-1.5L12 21l-2.5-1.5L7 21Z"/><path d="M9 8h6M9 12h6"/></svg>',
      terrace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
      pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',
    };
    target.innerHTML = data.amenities.map(function (a, i) {
      return (
        '<div class="amenity" data-reveal data-reveal-delay="' + (i % 4) + '">' +
          '<span class="ic">' + (icons[a.icon] || "") + "</span>" +
          "<span>" + escHTML(a.label) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  function mountExperiences() {
    var target = $("[data-experiences]");
    if (!target || target.children.length > 0 || !data.experiences) return;
    target.innerHTML = data.experiences.map(function (e) {
      return (
        '<article class="exp-card card">' +
          '<div class="card-img-wrap"><img src="' + escHTML(e.photo) + '" alt="' + escHTML(e.title) + '" loading="lazy" decoding="async"></div>' +
          '<div class="card-body"><h3>' + escHTML(e.title) + "</h3><p>" + escHTML(e.desc) + "</p></div>" +
        "</article>"
      );
    }).join("");
  }

  function mountTestimonials() {
    var target = $("[data-testimonials]");
    if (!target || target.children.length > 0 || !data.testimonials) return;
    target.innerHTML = data.testimonials.map(function (t) {
      return (
        '<div class="testi-card" data-reveal>' +
          '<div class="testi-stars" aria-hidden="true">★★★★★</div>' +
          '<p class="quote">“' + escHTML(t.quote) + '”</p>' +
          '<div class="testi-who"><strong>' + escHTML(t.name) + "</strong><span>" + escHTML(t.detail) + "</span></div>" +
        "</div>"
      );
    }).join("");
  }

  function mountFaqs() {
    var target = $("[data-faqs]");
    if (!target || target.children.length > 0 || !data.faqs) return;
    target.innerHTML = data.faqs.map(function (f, i) {
      return (
        '<div class="faq-item" data-open="false">' +
          '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
            "<span>" + escHTML(f.q) + '</span><span class="plus" aria-hidden="true"></span>' +
          "</button>" +
          '<div class="faq-a" id="faq-a-' + i + '"><p>' + escHTML(f.a) + "</p></div>" +
        "</div>"
      );
    }).join("");
  }

  function mountTicker() {
    var track = $("[data-ticker]");
    if (!track || track.children.length > 0 || !data.ticker) return;
    track.innerHTML = data.ticker.map(function (t) { return "<span>" + escHTML(t) + '</span><span class="dot">✦</span>'; }).join("");
  }

  function mountNav() {
    var target = $("[data-nav-links]");
    if (!target || target.children.length > 0 || !data.nav) return;
    target.innerHTML = data.nav.map(function (n) {
      return '<a class="nav-link" href="' + n.href + '">' + escHTML(n.label) + "</a>";
    }).join("");
    var mobile = $("[data-nav-mobile-links]");
    if (mobile && mobile.children.length === 0) {
      mobile.innerHTML = data.nav.map(function (n) {
        return '<a href="' + n.href + '">' + escHTML(n.label) + "</a>";
      }).join("");
    }
  }

  function mountBrandBits() {
    $$("[data-brand-name]").forEach(function (el) { el.textContent = data.name || ""; });
    $$("[data-brand-tagline]").forEach(function (el) { el.textContent = data.tagline || ""; });
    $$("[data-brand-phone]").forEach(function (el) { el.textContent = data.phoneDisplay || ""; });
    $$("[data-brand-address]").forEach(function (el) { el.textContent = data.address || ""; });
    var year = $("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
    var waHref = "https://wa.me/" + data.whatsappNumber + "?text=" + encodeURIComponent("Hola, vengo de la página de " + data.name + ". Quisiera consultar disponibilidad de habitación ✨");
    $$("[data-wa-link]").forEach(function (el) { el.setAttribute("href", waHref); });
  }

  /* ---------------- Nav behavior ---------------- */

  function initNav() {
    var nav = $(".nav");
    if (!nav) return;
    var onScroll = function () { nav.classList.toggle("is-scrolled", scrollY > 60); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var burger = $("[data-nav-burger]");
    var mobile = $("[data-nav-mobile]");
    if (burger && mobile) {
      burger.addEventListener("click", function () {
        var open = mobile.getAttribute("data-open") === "true";
        mobile.setAttribute("data-open", open ? "false" : "true");
        burger.classList.toggle("is-open", !open);
        document.body.style.overflow = open ? "" : "hidden";
      });
      $$("a", mobile).forEach(function (a) {
        a.addEventListener("click", function () {
          mobile.setAttribute("data-open", "false");
          burger.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      });
    }
  }

  function initSmoothAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navOffset = 76;
      window.scrollTo({
        top: el.getBoundingClientRect().top + scrollY - navOffset,
        behavior: reduced ? "auto" : "smooth",
      });
    });
  }

  /* ---------------- Reveals ---------------- */

  function initReveals() {
    var els = $$("[data-reveal]");
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-revealed"); io.unobserve(e.target); }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -2% 0px" });
    els.forEach(function (el) { io.observe(el); });

    setTimeout(function () {
      $$("[data-reveal]:not(.is-revealed)").forEach(function (el) {
        if (el.getBoundingClientRect().top < innerHeight) el.classList.add("is-revealed");
      });
    }, 6000);
  }

  /* ---------------- Tilt ---------------- */

  function initTilt() {
    if (!fineHover) return;
    $$(".room-card, .exp-card").forEach(function (card) {
      var MAX = 6, tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
      card.classList.add("has-tilt");
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        tx = -py * MAX; ty = px * MAX;
        if (!raf) raf = requestAnimationFrame(loop);
      });
      card.addEventListener("mouseleave", function () { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); });
      function loop() {
        cx += (tx - cx) * 0.15; cy += (ty - cy) * 0.15;
        card.style.setProperty("--rx", cx.toFixed(2) + "deg");
        card.style.setProperty("--ry", cy.toFixed(2) + "deg");
        raf = (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) ? requestAnimationFrame(loop) : null;
      }
    });
  }

  /* ---------------- Count up ---------------- */

  function initCountUp() {
    $$("[data-count-to]").forEach(function (el) {
      var target = parseFloat(el.dataset.countTo);
      var decimals = (el.dataset.countTo.split(".")[1] || "").length;
      var obj = { v: 0 };
      var trigger = function () {
        if (window.gsap) {
          gsap.to(obj, { v: target, duration: 1.3, ease: "power2.out", onUpdate: function () { el.textContent = obj.v.toFixed(decimals); } });
        } else {
          el.textContent = target.toFixed(decimals);
        }
      };
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { trigger(); io.unobserve(e.target); } });
      }, { threshold: 0.05 });
      io.observe(el);
    });
  }

  /* ---------------- Marquee ---------------- */

  function initMarquee() {
    var track = $("[data-marquee]");
    if (!track) return;
    var clone = track.cloneNode(true);
    clone.removeAttribute("data-marquee");
    track.parentNode.appendChild(clone);
    if (window.gsap) {
      var distance = track.scrollWidth;
      var speed = 46;
      gsap.to([track, clone], {
        x: -distance, duration: distance / speed, ease: "none", repeat: -1,
        modifiers: { x: gsap.utils.unitize(function (x) { return parseFloat(x) % distance; }) },
      });
    }
  }

  /* ---------------- Scroll progress ---------------- */

  function initScrollProgress() {
    var bar = $("[data-scroll-progress]");
    if (!bar) return;
    var raf = null;
    function update() {
      var max = document.documentElement.scrollHeight - innerHeight;
      var pct = max > 0 ? scrollY / max : 0;
      bar.style.transform = "scaleX(" + pct + ")";
      raf = null;
    }
    window.addEventListener("scroll", function () { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
  }

  /* ---------------- Hero parallax ---------------- */

  function initHeroParallax() {
    if (!window.gsap || !window.ScrollTrigger || reduced) return;
    var bg = $(".hero-bg img");
    if (!bg) return;
    gsap.to(bg, {
      yPercent: 14, scale: 1.12, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  }

  /* ---------------- FAQ accordion ---------------- */

  function initFaq() {
    document.addEventListener("click", function (e) {
      var q = e.target.closest(".faq-q");
      if (!q) return;
      var item = q.closest(".faq-item");
      var answer = $(".faq-a", item);
      var open = item.getAttribute("data-open") === "true";
      $$(".faq-item").forEach(function (other) {
        if (other !== item) {
          other.setAttribute("data-open", "false");
          $(".faq-q", other).setAttribute("aria-expanded", "false");
          $(".faq-a", other).style.maxHeight = null;
        }
      });
      item.setAttribute("data-open", open ? "false" : "true");
      q.setAttribute("aria-expanded", open ? "false" : "true");
      answer.style.maxHeight = open ? null : answer.scrollHeight + "px";
    });
  }

  /* ---------------- Multi-step booking form ---------------- */

  function initBookingForm() {
    var form = $("[data-booking-form]");
    if (!form) return;
    var panels = $$(".form-panel", form);
    var dots = $$(".form-step-dot", form);
    var step = 0;

    function render() {
      panels.forEach(function (p, i) { p.classList.toggle("is-active", i === step); });
      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === step);
        d.classList.toggle("is-done", i < step);
      });
    }
    render();

    $$("[data-next]", form).forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (step === 0) {
          var checkin = $("[name=checkin]", form);
          if (checkin && !checkin.reportValidity()) return;
        }
        step = Math.min(step + 1, panels.length - 1);
        render();
      });
    });
    $$("[data-prev]", form).forEach(function (btn) {
      btn.addEventListener("click", function () { step = Math.max(step - 1, 0); render(); });
    });

    $$(".choice", form).forEach(function (choice) {
      choice.addEventListener("click", function () {
        var input = $("input", choice);
        if (!input) return;
        $$('.choice input[name="' + input.name + '"]', form).forEach(function (i) {
          i.closest(".choice").classList.remove("is-active");
        });
        input.checked = true;
        choice.classList.add("is-active");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var fd = new FormData(form);
      var nombre = (fd.get("nombre") || "").toString().trim();
      var checkin = fd.get("checkin");
      var checkout = fd.get("checkout");
      var huespedes = fd.get("huespedes") || "1";
      var motivo = fd.get("motivo") || "una escapada";
      var contacto = (fd.get("contacto") || "").toString().trim();

      var msg = "Hola, soy " + (nombre || "un viajero") + ". Me interesa hospedarme en " + (data.name || "Villas Kerendarhú") +
        (checkin ? " del " + checkin : "") + (checkout ? " al " + checkout : "") +
        ", para " + huespedes + " persona(s). Es para " + motivo + ".";
      if (contacto) msg += " Mis datos de contacto: " + contacto + ".";

      var href = "https://wa.me/" + data.whatsappNumber + "?text=" + encodeURIComponent(msg);
      form.classList.add("is-sent");
      var link = $("[data-wa-final]", form);
      if (link) link.setAttribute("href", href);
      setTimeout(function () { window.open(href, "_blank", "noopener"); }, 500);
    });
  }

  /* ---------------- Boot ---------------- */

  function boot() {
    safe(mountNav, "mountNav");
    safe(mountBrandBits, "mountBrandBits");
    safe(mountRooms, "mountRooms");
    safe(mountAmenities, "mountAmenities");
    safe(mountExperiences, "mountExperiences");
    safe(mountTestimonials, "mountTestimonials");
    safe(mountFaqs, "mountFaqs");
    safe(mountTicker, "mountTicker");

    safe(initNav, "initNav");
    safe(initSmoothAnchors, "initSmoothAnchors");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initCountUp, "initCountUp");
    safe(initScrollProgress, "initScrollProgress");
    safe(initFaq, "initFaq");
    safe(initBookingForm, "initBookingForm");

    if (window.gsap && window.ScrollTrigger) {
      try { gsap.registerPlugin(ScrollTrigger); } catch (_) {}
      safe(initMarquee, "initMarquee");
      safe(initHeroParallax, "initHeroParallax");
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
