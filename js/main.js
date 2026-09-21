(function () {
  "use strict";

  var LANG_KEY = "kodama-language";
  var THEME_KEY = "kodama-theme";
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var overlay = document.querySelector(".nav-overlay");
  var panel = document.querySelector(".nav-panel");
  var desktopQuery = window.matchMedia("(min-width: 900px)");
  var formStatusKind = "";

  function currentLang() {
    return document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en";
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function t(key) {
    if (!window.KodamaI18n) return "";
    return window.KodamaI18n.get(currentLang(), key) || window.KodamaI18n.get("en", key);
  }

  function applyI18n() {
    var lang = currentLang();
    if (!window.KodamaI18n) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = window.KodamaI18n.get(lang, el.getAttribute("data-i18n"));
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = window.KodamaI18n.get(lang, el.getAttribute("data-i18n-placeholder"));
      if (value) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var value = window.KodamaI18n.get(lang, el.getAttribute("data-i18n-aria-label"));
      if (value) el.setAttribute("aria-label", value);
    });

    var page = document.documentElement.getAttribute("data-page") || "home";
    var title = window.KodamaI18n.get(lang, "meta." + page + ".title");
    var desc = window.KodamaI18n.get(lang, "meta." + page + ".description");
    if (title) document.title = title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle && title) ogTitle.setAttribute("content", title);
    if (ogDesc && desc) ogDesc.setAttribute("content", desc);

    var status = document.querySelector(".form-status");
    if (status && !status.hidden) {
      if (formStatusKind === "error") status.textContent = t("contact.errorGeneric");
      if (formStatusKind === "success") status.textContent = t("contact.success");
    }

    updateChromeAria();
  }

  function updateChromeAria() {
    if (toggle) {
      var open = nav && nav.classList.contains("is-open");
      toggle.setAttribute("aria-label", open ? t("ui.closeMenu") : t("ui.openMenu"));
    }

    var themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
      var light = currentTheme() === "light";
      themeBtn.setAttribute("aria-pressed", light ? "true" : "false");
      themeBtn.setAttribute("aria-label", light ? t("ui.themeToDark") : t("ui.themeToLight"));
    }

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === currentLang() ? "true" : "false");
    });
  }

  function setLanguage(lang) {
    var next = lang === "ar" ? "ar" : "en";
    document.documentElement.setAttribute("lang", next);
    document.documentElement.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch (e) {}
    applyI18n();
  }

  function setTheme(theme) {
    var next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute("content", next === "light" ? "#F7F8F6" : "#0B0D0F");
    updateChromeAria();
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }

  applyI18n();
  setTheme(currentTheme());

  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? t("ui.closeMenu") : t("ui.openMenu"));
    if (panel) {
      panel.setAttribute("aria-hidden", open || desktopQuery.matches ? "false" : "true");
    }
    var showOverlay = open && !desktopQuery.matches;
    document.body.style.overflow = showOverlay ? "hidden" : "";
    if (overlay) {
      overlay.classList.toggle("is-visible", showOverlay);
      overlay.hidden = !showOverlay;
    }
  }

  function closeMenu() {
    setMenu(false);
  }

  if (toggle && panel) {
    setMenu(false);

    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open") || desktopQuery.matches) return;
      if (!nav.contains(event.target) && !(overlay && overlay.contains(event.target))) {
        closeMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener("click", closeMenu);
    }

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", function (event) {
        if (event.matches) closeMenu();
      });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  var filters = document.querySelectorAll("[data-filter]");
  var projects = document.querySelectorAll("[data-category]");

  if (filters.length && projects.length) {
    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-filter");
        filters.forEach(function (item) {
          var active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });
        projects.forEach(function (card) {
          var match = value === "all" || card.getAttribute("data-category") === value;
          card.classList.toggle("is-hidden", !match);
        });
      });
    });
  }

  var form = document.querySelector(".inquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var status = form.querySelector(".form-status");
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      var valid = true;

      form.querySelectorAll(".field-error").forEach(function (node) {
        node.hidden = true;
        node.textContent = "";
      });

      function showError(field, key) {
        var error = field.parentElement.querySelector(".field-error");
        if (error) {
          error.hidden = false;
          error.textContent = t(key);
        }
        valid = false;
      }

      if (!name.value.trim()) showError(name, "contact.errorName");
      if (!email.value.trim()) {
        showError(email, "contact.errorEmail");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, "contact.errorEmailInvalid");
      }
      if (!message.value.trim()) showError(message, "contact.errorMessage");

      if (!status) return;

      status.hidden = false;
      if (!valid) {
        formStatusKind = "error";
        status.classList.add("is-error");
        status.textContent = t("contact.errorGeneric");
        return;
      }

      formStatusKind = "success";
      status.classList.remove("is-error");
      status.textContent = t("contact.success");
    });
  }
})();
