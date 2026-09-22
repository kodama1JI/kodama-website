(function () {
  "use strict";

  var VIEWS = ["overview", "analytics", "insights", "reports", "goals", "activity", "settings"];
  var SERIES = {
    7: { score: 78, goals: 4, done: 23, week: [42, 55, 48, 70, 66, 74, 78], revenue: [12, 14, 13, 18, 17, 21, 20], activity: [30, 48, 62, 44, 58, 36, 22] },
    30: { score: 71, goals: 6, done: 86, week: [40, 44, 51, 49, 60, 58, 71], revenue: [10, 12, 11, 15, 16, 18, 19], activity: [28, 36, 52, 40, 46, 33, 20] }
  };
  var COPY = {
    en: {
      brand: "INSIGHT", menu: "Open navigation", close: "Close", mock: "Mock insight",
      views: { overview: "Overview", analytics: "Analytics", insights: "Insights", reports: "Reports", goals: "Goals", activity: "Activity", settings: "Settings" },
      lead: "Sample workspace. Charts and insight cards are examples. This demo does not use live AI.",
      score: "Productivity score", goals: "Active goals", week: "Weekly performance", done: "Completed tasks",
      range7: "7 days", range30: "30 days", trend: "Sample trend", revenue: "Sample revenue index", hours: "Activity by hour",
      hoursNote: "Most sample activity is shown between 9:00 and 12:00.",
      insights: [
        ["Pace", "Your team's sample productivity is higher than the previous window."],
        ["Deadlines", "Three sample projects are approaching their dates."],
        ["Hours", "Most sample activity occurs between 9:00 AM and 12:00 PM."]
      ],
      dismiss: "Dismiss", restore: "Restore samples", empty: "All sample insights are hidden.",
      reports: [
        ["Weekly pulse", "A short sample of completed tasks and focus time."],
        ["Goal review", "Which sample goals moved, and which stayed still."],
        ["Activity window", "When the fictional team was active in this demo."]
      ],
      summary: "Summary", open: "Open summary",
      add: "Add sample goal", goalPh: "Goal name", bump: "Add 10%", complete: "Complete",
      activity: [
        ["09:10", "Sample focus block started."],
        ["11:40", "A goal moved forward in this browser."],
        ["14:05", "A report summary was opened."],
        ["16:20", "An insight card was reviewed."]
      ],
      name: "Workspace name", density: "Show mock insights", saved: "Stored only in this browser.", save: "Save"
    },
    ar: {
      brand: "INSIGHT", menu: "فتح التنقل", close: "إغلاق", mock: "رؤية تجريبية",
      views: { overview: "نظرة عامة", analytics: "التحليلات", insights: "الرؤى", reports: "التقارير", goals: "الأهداف", activity: "النشاط", settings: "الإعدادات" },
      lead: "مساحة تجريبية. الرسوم وبطاقات الرؤى أمثلة. هذا العرض لا يستخدم ذكاءً اصطناعياً حياً.",
      score: "درجة الإنتاجية", goals: "أهداف نشطة", week: "أداء الأسبوع", done: "مهام مكتملة",
      range7: "7 أيام", range30: "30 يوماً", trend: "اتجاه تجريبي", revenue: "مؤشر إيراد تجريبي", hours: "النشاط حسب الساعة",
      hoursNote: "يظهر أغلب النشاط التجريبي بين 9:00 و12:00.",
      insights: [
        ["الوتيرة", "إنتاجية الفريق التجريبية أعلى من النافذة السابقة."],
        ["المواعيد", "ثلاثة مشاريع تجريبية تقترب من تواريخها."],
        ["الساعات", "أغلب النشاط التجريبي بين 9:00 صباحاً و12:00 ظهراً."]
      ],
      dismiss: "إخفاء", restore: "استعادة الأمثلة", empty: "كل الرؤى التجريبية مخفية.",
      reports: [
        ["نبض الأسبوع", "ملخص قصير لمهام مكتملة ووقت تركيز تجريبي."],
        ["مراجعة الأهداف", "أي الأهداف التجريبية تحركت وأيها ثبت."],
        ["نافذة النشاط", "متى كان الفريق الوهمي نشطاً في هذا العرض."]
      ],
      summary: "الملخص", open: "فتح الملخص",
      add: "إضافة هدف تجريبي", goalPh: "اسم الهدف", bump: "زيادة 10٪", complete: "إكمال",
      activity: [
        ["09:10", "بدأت جلسة تركيز تجريبية."],
        ["11:40", "تقدّم هدف داخل هذا المتصفح."],
        ["14:05", "فُتح ملخص تقرير."],
        ["16:20", "رُوجعت بطاقة رؤية."]
      ],
      name: "اسم المساحة", density: "إظهار الرؤى التجريبية", saved: "يُحفظ داخل هذا المتصفح فقط.", save: "حفظ"
    }
  };

  var root = document.getElementById("app");
  var state = {
    view: "overview", range: 7, sheet: false, hidden: {}, report: 0,
    goals: [
      { id: "g1", name: "", progress: 40, done: false },
      { id: "g2", name: "", progress: 70, done: false }
    ],
    seq: 2,
    settings: { name: "North studio", show: true },
    log: []
  };
  var last = "";

  function lang() { return document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en"; }
  function bag() { return COPY[lang()] || COPY.en; }
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function data() { return SERIES[state.range]; }
  function goalName(goal, index) {
    if (goal.name) return goal.name;
    return lang() === "ar" ? (index === 0 ? "إنهاء موجز العينة" : "مراجعة لوحة الأسبوع") : (index === 0 ? "Finish the sample brief" : "Review the weekly board");
  }

  function line(values) {
    var max = Math.max.apply(null, values);
    var min = Math.min.apply(null, values);
    var pts = values.map(function (v, i) {
      var x = 8 + (i * (304 / (values.length - 1)));
      var y = 128 - ((v - min) / ((max - min) || 1)) * 108;
      return x.toFixed(1) + "," + y.toFixed(1);
    }).join(" ");
    return '<svg class="line" viewBox="0 0 320 140" role="img"><polyline points="' + pts + '"/></svg>';
  }
  function bars(values) {
    var max = Math.max.apply(null, values) || 1;
    return '<div class="bars">' + values.map(function (v) {
      return '<i style="height:' + Math.round(v / max * 100) + '%"></i>';
    }).join("") + "</div>";
  }

  function shell(body) {
    var b = bag();
    var nav = VIEWS.map(function (id) {
      return '<button type="button" class="navbtn' + (state.view === id ? " is-on" : "") + '" data-action="nav" data-view="' + id + '">' + esc(b.views[id]) + "</button>";
    }).join("");
    return '<div class="insight"><div class="shade' + (state.sheet ? " is-open" : "") + '" data-action="sheet"></div><aside class="rail' + (state.sheet ? " is-open" : "") + '">' +
      '<button type="button" class="logo" data-action="nav" data-view="overview"><img src="assets/mark.svg" alt="">' + esc(b.brand) + '</button>' + nav +
      '<button type="button" class="btn" data-action="sheet">' + esc(b.close) + "</button></aside><div class=\"work\">" +
      '<button type="button" class="menu" data-action="sheet" aria-label="' + esc(b.menu) + '"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>' + body + "</div></div>";
  }

  function head(title) {
    var b = bag();
    return '<div class="top"><div><p class="muted">' + esc(b.lead) + '</p><h1 id="screen-title">' + esc(title) + "</h1></div>" +
      '<div class="range" role="group"><button type="button" data-action="range" data-range="7"' + (state.range === 7 ? ' class="is-on"' : "") + ">" + esc(b.range7) + '</button><button type="button" data-action="range" data-range="30"' + (state.range === 30 ? ' class="is-on"' : "") + ">" + esc(b.range30) + "</button></div></div>";
  }

  function overview() {
    var b = bag();
    var d = data();
    var active = state.goals.filter(function (g) { return !g.done; }).length;
    return head(b.views.overview) + '<div class="metrics">' +
      '<article class="metric"><span>' + esc(b.score) + "</span><strong>" + d.score + "</strong></article>" +
      '<article class="metric"><span>' + esc(b.goals) + "</span><strong>" + active + "</strong></article>" +
      '<article class="metric"><span>' + esc(b.week) + "</span><strong>" + d.week[d.week.length - 1] + "</strong></article>" +
      '<article class="metric"><span>' + esc(b.done) + "</span><strong>" + d.done + "</strong></article></div>" +
      '<div class="layout"><section class="panel"><h2>' + esc(b.trend) + "</h2>" + line(d.week) + "</section>" +
      '<section class="panel"><h2>' + esc(b.mock) + "</h2><p>" + esc(b.insights[0][1]) + "</p><p class=\"muted\">" + esc(b.hoursNote) + "</p></section></div>";
  }

  function analytics() {
    var b = bag();
    var d = data();
    return head(b.views.analytics) + '<div class="layout"><section class="panel"><h2>' + esc(b.trend) + "</h2>" + line(d.week) + "</section>" +
      '<section class="panel"><h2>' + esc(b.revenue) + "</h2>" + bars(d.revenue) + "</section></div>" +
      '<section class="panel"><h2>' + esc(b.hours) + "</h2>" + bars(d.activity) + "<p class=\"muted\">" + esc(b.hoursNote) + "</p></section>";
  }

  function insights() {
    var b = bag();
    if (!state.settings.show) return head(b.views.insights) + '<p class="muted">' + esc(b.empty) + "</p>";
    var cards = b.insights.map(function (item, i) {
      if (state.hidden[i]) return "";
      return '<article class="panel insight-card"><span class="badge">' + esc(b.mock) + "</span><h2>" + esc(item[0]) + "</h2><p>" + esc(item[1]) + '</p><button type="button" class="btn" data-action="hide" data-id="' + i + '">' + esc(b.dismiss) + "</button></article>";
    }).join("");
    if (!cards.replace(/\s/g, "")) cards = '<p class="muted">' + esc(b.empty) + '</p><button type="button" class="btn" data-action="restore">' + esc(b.restore) + "</button>";
    return head(b.views.insights) + cards;
  }

  function reports() {
    var b = bag();
    var cards = b.reports.map(function (item, i) {
      return '<button type="button" class="report' + (state.report === i ? " is-on" : "") + '" data-action="report" data-id="' + i + '"><span class="badge">' + esc(b.mock) + "</span><h2>" + esc(item[0]) + "</h2><p class=\"muted\">" + esc(b.open) + "</p></button>";
    }).join("");
    var current = b.reports[state.report];
    return head(b.views.reports) + '<div class="reports">' + cards + '</div><section class="panel" style="margin-top:12px"><h2>' + esc(b.summary) + "</h2><p><strong>" + esc(current[0]) + "</strong></p><p>" + esc(current[1]) + "</p></section>";
  }

  function goals() {
    var b = bag();
    var rows = state.goals.map(function (goal, index) {
      return '<article class="goal' + (goal.done ? " done" : "") + '"><div><strong>' + esc(goalName(goal, index)) + '</strong><div class="track"><i style="width:' + goal.progress + '%"></i></div><span class="muted">' + goal.progress + '%</span></div><div>' +
        (goal.done ? "" : '<button type="button" class="btn" data-action="bump" data-id="' + goal.id + '">' + esc(b.bump) + '</button> <button type="button" class="btn fill" data-action="complete" data-id="' + goal.id + '">' + esc(b.complete) + "</button>") +
        "</div></article>";
    }).join("");
    return head(b.views.goals) + rows + '<form class="form" data-form="goal"><input name="goal" placeholder="' + esc(b.goalPh) + '" aria-label="' + esc(b.goalPh) + '"><button class="btn fill" type="submit">' + esc(b.add) + "</button></form>";
  }

  function activity() {
    var b = bag();
    var rows = b.activity.concat(state.log).map(function (item) {
      return "<article><time>" + esc(item[0]) + "</time><p>" + esc(item[1]) + "</p></article>";
    }).join("");
    return head(b.views.activity) + '<div class="time">' + rows + "</div>";
  }

  function settings() {
    var b = bag();
    return head(b.views.settings) + '<form class="settings" data-form="settings"><label>' + esc(b.name) + '<input name="name" value="' + esc(state.settings.name) + '"></label><label><input type="checkbox" name="show"' + (state.settings.show ? " checked" : "") + "> " + esc(b.density) + '</label><p class="muted">' + esc(b.saved) + '</p><button class="btn fill" type="submit">' + esc(b.save) + "</button></form>";
  }

  function render() {
    var b = bag();
    var body = state.view === "analytics" ? analytics()
      : state.view === "insights" ? insights()
      : state.view === "reports" ? reports()
      : state.view === "goals" ? goals()
      : state.view === "activity" ? activity()
      : state.view === "settings" ? settings()
      : overview();
    var changed = last !== state.view;
    last = state.view;
    root.innerHTML = shell(body);
    if (changed) {
      var title = root.querySelector("#screen-title");
      if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); }
    }
  }

  function goalBy(id) { return state.goals.filter(function (g) { return g.id === id; })[0]; }

  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button || !root.contains(button)) return;
    var action = button.getAttribute("data-action");
    if (action === "nav") { state.view = button.getAttribute("data-view"); state.sheet = false; render(); }
    else if (action === "sheet") { state.sheet = !state.sheet; render(); }
    else if (action === "range") { state.range = Number(button.getAttribute("data-range")); render(); }
    else if (action === "hide") { state.hidden[button.getAttribute("data-id")] = true; render(); }
    else if (action === "restore") { state.hidden = {}; render(); }
    else if (action === "report") { state.report = Number(button.getAttribute("data-id")); render(); }
    else if (action === "bump") { var g = goalBy(button.getAttribute("data-id")); g.progress = Math.min(100, g.progress + 10); if (g.progress === 100) g.done = true; render(); }
    else if (action === "complete") { goalBy(button.getAttribute("data-id")).done = true; goalBy(button.getAttribute("data-id")).progress = 100; render(); }
  });

  root.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.target;
    if (form.getAttribute("data-form") === "goal") {
      var name = form.goal.value.trim();
      if (!name) return;
      state.seq += 1;
      state.goals.push({ id: "g" + state.seq, name: name, progress: 0, done: false });
      state.log.push(["now", name]);
      render();
    }
    if (form.getAttribute("data-form") === "settings") {
      state.settings.name = form.name.value.trim() || state.settings.name;
      state.settings.show = !!form.show.checked;
      render();
    }
  });

  document.addEventListener("kodama:preferences", function () { render(); });
  render();
})();
