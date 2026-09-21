(function () {
  "use strict";
  try {
    var theme = localStorage.getItem("kodama-theme");
    var lang = localStorage.getItem("kodama-language");
    if (theme !== "light" && theme !== "dark") theme = "dark";
    if (lang !== "ar" && lang !== "en") lang = "en";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
  }
})();
