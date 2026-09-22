(function () {
  "use strict";

  var COLS = ["backlog", "todo", "progress", "review", "done"];
  var VIEWS = ["dashboard", "projects", "project", "board", "calendar", "tasks", "team", "messages", "settings"];
  var PROJECTS = [
    { id: "harbor", status: "active", progress: 68, deadline: "2026-10-02" },
    { id: "atlas", status: "active", progress: 41, deadline: "2026-10-18" },
    { id: "studio", status: "review", progress: 86, deadline: "2026-09-30" },
    { id: "north", status: "planned", progress: 12, deadline: "2026-11-06" }
  ];
  var PEOPLE = [
    { id: "nora", initials: "NS" },
    { id: "omar", initials: "OF" },
    { id: "lina", initials: "LH" },
    { id: "sami", initials: "SD" }
  ];
  var TASKS = [
    { id: "t1", project: "harbor", title: "map", col: "progress", priority: "high", who: "lina", due: "2026-09-24" },
    { id: "t2", project: "harbor", title: "type", col: "review", priority: "med", who: "omar", due: "2026-09-26" },
    { id: "t3", project: "atlas", title: "nav", col: "todo", priority: "high", who: "sami", due: "2026-09-29" },
    { id: "t4", project: "atlas", title: "empty", col: "backlog", priority: "low", who: "nora", due: "2026-10-04" },
    { id: "t5", project: "studio", title: "tokens", col: "done", priority: "med", who: "omar", due: "2026-09-18" },
    { id: "t6", project: "studio", title: "qa", col: "review", priority: "high", who: "lina", due: "2026-09-25" },
    { id: "t7", project: "north", title: "brief", col: "todo", priority: "med", who: "nora", due: "2026-10-08" },
    { id: "t8", project: "harbor", title: "handoff", col: "backlog", priority: "low", who: "sami", due: "2026-10-01" }
  ];
  var EVENTS = { 3: "kick", 8: "review", 15: "plan", 22: "demo", 28: "release" };
  var COPY = {
    en: {
      brand: "FLOW", menu: "Open navigation", close: "Close",
      views: { dashboard: "Dashboard", projects: "Projects", project: "Project", board: "Board", calendar: "Calendar", tasks: "Tasks", team: "Team", messages: "Messages", settings: "Settings" },
      lead: "Sample workspace for a fictional team. Nothing here is a live project.",
      active: "Active projects", done: "Tasks done", pending: "Open tasks", members: "Team members", deadlines: "Upcoming deadlines",
      progress: "Progress", status: "Status", deadline: "Deadline", open: "Open",
      cols: { backlog: "Backlog", todo: "To do", progress: "In progress", review: "Review", done: "Done" },
      pri: { high: "High", med: "Medium", low: "Low" },
      st: { active: "Active", review: "In review", planned: "Planned" },
      movePrev: "Move back", moveNext: "Move forward", complete: "Mark done", details: "Details",
      assignee: "Assignee", due: "Due", all: "All priorities",
      overview: "Overview", activity: "Activity", tasksHere: "Tasks",
      people: { nora: ["Nora Saleh", "Product"], omar: ["Omar Faris", "Design"], lina: ["Lina Haddad", "Engineering"], sami: ["Sami Darwish", "Engineering"] },
      projects: { harbor: "Harbor refresh", atlas: "Atlas mobile", studio: "Studio kit", north: "North site" },
      tasks: { map: "Map the sample journey", type: "Set type styles", nav: "Build navigation states", empty: "Empty-state copy", tokens: "Color tokens", qa: "Review the board", brief: "Write the brief", handoff: "Prepare handoff notes" },
      events: { kick: "Harbor kickoff", review: "Design review", plan: "Sprint planning", demo: "Prototype walkthrough", release: "Release window" },
      feed: ["Lina moved a Harbor task to In progress.", "Omar left comments on type styles.", "Nora added the North site brief."],
      threads: { harbor: "Harbor", studio: "Studio" },
      notes: { harbor: ["The journey map is the priority this week.", "I will leave notes on the empty states."], studio: ["Tokens are in. QA is next."] },
      you: "You", send: "Send", placeholder: "Write a sample message",
      month: "September 2026", dow: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      noEvent: "No sample event on this day.",
      workspace: "Workspace name", digest: "Weekly sample digest", week: "Week starts Monday", saved: "Saved in this browser only",
      save: "Save settings"
    },
    ar: {
      brand: "FLOW", menu: "فتح التنقل", close: "إغلاق",
      views: { dashboard: "لوحة المعلومات", projects: "المشاريع", project: "المشروع", board: "اللوحة", calendar: "التقويم", tasks: "المهام", team: "الفريق", messages: "الرسائل", settings: "الإعدادات" },
      lead: "مساحة عمل تجريبية لفريق وهمي. لا يوجد هنا مشروع حقيقي.",
      active: "مشاريع نشطة", done: "مهام منجزة", pending: "مهام مفتوحة", members: "أعضاء الفريق", deadlines: "مواعيد قريبة",
      progress: "التقدم", status: "الحالة", deadline: "الموعد", open: "فتح",
      cols: { backlog: "قائمة الانتظار", todo: "للتنفيذ", progress: "قيد العمل", review: "مراجعة", done: "تم" },
      pri: { high: "عالية", med: "متوسطة", low: "منخفضة" },
      st: { active: "نشط", review: "قيد المراجعة", planned: "مخطط" },
      movePrev: "إرجاع", moveNext: "تقديم", complete: "تعليم كمنجز", details: "التفاصيل",
      assignee: "المسؤول", due: "الاستحقاق", all: "كل الأولويات",
      overview: "نظرة عامة", activity: "النشاط", tasksHere: "المهام",
      people: { nora: ["نورا صالح", "المنتج"], omar: ["عمر فارس", "التصميم"], lina: ["لينا حداد", "الهندسة"], sami: ["سامي درويش", "الهندسة"] },
      projects: { harbor: "تحديث الميناء", atlas: "أطلس للجوال", studio: "حزمة الاستوديو", north: "موقع الشمال" },
      tasks: { map: "رسم الرحلة التجريبية", type: "ضبط أنماط الخط", nav: "حالات التنقل", empty: "نص الحالة الفارغة", tokens: "رموز الألوان", qa: "مراجعة اللوحة", brief: "كتابة الموجز", handoff: "تجهيز ملاحظات التسليم" },
      events: { kick: "انطلاق الميناء", review: "مراجعة التصميم", plan: "تخطيط السبرنت", demo: "جولة على النموذج", release: "نافذة الإصدار" },
      feed: ["نقلت لينا مهمة الميناء إلى قيد العمل.", "ترك عمر ملاحظات على أنماط الخط.", "أضافت نورا موجز موقع الشمال."],
      threads: { harbor: "الميناء", studio: "الاستوديو" },
      notes: { harbor: ["خريطة الرحلة هي الأولوية هذا الأسبوع.", "سأترك ملاحظات على الحالات الفارغة."], studio: ["الرموز جاهزة. المراجعة تالية."] },
      you: "أنت", send: "إرسال", placeholder: "اكتب رسالة تجريبية",
      month: "سبتمبر 2026", dow: ["إثن", "ثلا", "أرب", "خمي", "جمع", "سبت", "أحد"],
      noEvent: "لا يوجد حدث تجريبي في هذا اليوم.",
      workspace: "اسم المساحة", digest: "ملخص أسبوعي تجريبي", week: "يبدأ الأسبوع يوم الإثنين", saved: "يُحفظ داخل هذا المتصفح فقط",
      save: "حفظ الإعدادات"
    }
  };

  var root = document.getElementById("app");
  var state = {
    view: "dashboard", projectId: "harbor", taskId: "", sheet: false, day: 22,
    pri: "all", thread: "harbor", draft: "",
    settings: { name: "Mira Studio", digest: true },
    extra: { harbor: [], studio: [] }
  };
  var tasks = TASKS.map(function (t) { return Object.assign({}, t); });
  var last = "";

  function lang() { return document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en"; }
  function bag() { return COPY[lang()] || COPY.en; }
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function person(id) { return bag().people[id]; }
  function taskBy(id) { return tasks.filter(function (t) { return t.id === id; })[0]; }
  function proj(id) { return PROJECTS.filter(function (p) { return p.id === id; })[0]; }

  function shell(body) {
    var b = bag();
    var nav = VIEWS.filter(function (id) { return id !== "project"; }).map(function (id) {
      var on = state.view === id || (id === "projects" && state.view === "project");
      return '<button type="button" class="navbtn' + (on ? " is-on" : "") + '" data-action="nav" data-view="' + id + '">' + esc(b.views[id]) + "</button>";
    }).join("");
    return '<div class="flow"><div class="drawer-bg' + (state.sheet ? " is-open" : "") + '" data-action="sheet"></div>' +
      '<aside class="side' + (state.sheet ? " is-open" : "") + '"><button type="button" class="logo" data-action="nav" data-view="dashboard"><img src="assets/mark.svg" alt="">' + esc(b.brand) + "</button>" + nav +
      '<button type="button" class="btn ghost" data-action="sheet">' + esc(b.close) + "</button></aside>" +
      '<div class="main"><button type="button" class="menu" data-action="sheet" aria-label="' + esc(b.menu) + '"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>' + body + "</div></div>";
  }

  function dashboard() {
    var b = bag();
    var open = tasks.filter(function (t) { return t.col !== "done"; }).length;
    var done = tasks.length - open;
    var soon = tasks.filter(function (t) { return t.col !== "done"; }).slice(0, 4).map(function (t) {
      return "<li><strong>" + esc(b.tasks[t.title]) + "</strong> <span class=\"muted\">" + esc(b.projects[t.project]) + " · " + esc(t.due) + "</span></li>";
    }).join("");
    return '<p class="muted">' + esc(b.lead) + '</p><h1 id="screen-title">' + esc(b.views.dashboard) + "</h1>" +
      '<div class="cards"><article class="card"><span>' + esc(b.active) + "</span><strong>" + PROJECTS.filter(function (p) { return p.status === "active"; }).length + "</strong></article>" +
      '<article class="card"><span>' + esc(b.done) + "</span><strong>" + done + "</strong></article>" +
      '<article class="card"><span>' + esc(b.pending) + "</span><strong>" + open + "</strong></article>" +
      '<article class="card"><span>' + esc(b.members) + "</span><strong>" + PEOPLE.length + "</strong></article></div>" +
      '<section class="panel"><h2>' + esc(b.deadlines) + "</h2><ul>" + soon + "</ul></section>";
  }

  function projects() {
    var b = bag();
    var cards = PROJECTS.map(function (p) {
      return '<button type="button" class="project" data-action="project" data-id="' + p.id + '"><span class="pill ' + (p.status === "planned" ? "warn" : p.status === "review" ? "" : "good") + '">' + esc(b.st[p.status]) + "</span><h2>" + esc(b.projects[p.id]) + '</h2><div class="bar"><i style="width:' + p.progress + '%"></i></div><span class="muted">' + p.progress + "% · " + esc(p.deadline) + "</span></button>";
    }).join("");
    return "<h1 id=\"screen-title\">" + esc(b.views.projects) + '</h1><div class="projects">' + cards + "</div>";
  }

  function projectView() {
    var b = bag();
    var p = proj(state.projectId);
    var rows = tasks.filter(function (t) { return t.project === p.id; }).map(function (t) {
      return "<li><button type=\"button\" class=\"btn ghost slim\" data-action=\"task\" data-id=\"" + t.id + "\">" + esc(b.tasks[t.title]) + "</button> <span class=\"muted\">" + esc(b.cols[t.col]) + "</span></li>";
    }).join("");
    var team = PEOPLE.slice(0, 3).map(function (m) { return "<span class=\"pill\">" + esc(person(m.id)[0]) + "</span>"; }).join(" ");
    return '<button type="button" class="btn ghost slim" data-action="nav" data-view="projects">' + esc(b.views.projects) + '</button><h1 id="screen-title">' + esc(b.projects[p.id]) + "</h1>" +
      '<div class="grid"><section class="panel"><h2>' + esc(b.overview) + "</h2><p>" + esc(b.lead) + '</p><div class="bar"><i style="width:' + p.progress + '%"></i></div><p>' + esc(b.progress) + " " + p.progress + "%</p><p>" + esc(b.deadline) + " " + esc(p.deadline) + "</p><p>" + team + "</p></section>" +
      '<section class="panel"><h2>' + esc(b.tasksHere) + "</h2><ul>" + rows + "</ul><h2>" + esc(b.activity) + "</h2><p class=\"muted\">" + esc(b.feed[0]) + "</p></section></div>" + detail();
  }

  function detail() {
    var t = taskBy(state.taskId);
    if (!t) return "";
    var b = bag();
    return '<section class="panel detail"><h2>' + esc(b.details) + "</h2><p><strong>" + esc(b.tasks[t.title]) + "</strong></p><p class=\"muted\">" + esc(b.projects[t.project]) + " · " + esc(person(t.who)[0]) + " · " + esc(t.due) + "</p><p><span class=\"pill " + (t.priority === "high" ? "hot" : t.priority === "low" ? "" : "warn") + "\">" + esc(b.pri[t.priority]) + "</span> <span class=\"pill\">" + esc(b.cols[t.col]) + "</span></p></section>";
  }

  function board() {
    var b = bag();
    var cols = COLS.map(function (col) {
      var cards = tasks.filter(function (t) { return t.col === col; }).map(function (t) {
        var i = COLS.indexOf(t.col);
        return '<article class="tcard"><button type="button" class="btn ghost slim" data-action="task" data-id="' + t.id + '"><strong>' + esc(b.tasks[t.title]) + "</strong></button><p class=\"muted\">" + esc(b.projects[t.project]) + " · " + esc(person(t.who)[0]) + "</p><div class=\"row\">" +
          (i > 0 ? '<button type="button" class="btn ghost slim" data-action="move" data-id="' + t.id + '" data-dir="-1">' + esc(b.movePrev) + "</button>" : "") +
          (i < COLS.length - 1 ? '<button type="button" class="btn ghost slim" data-action="move" data-id="' + t.id + '" data-dir="1">' + esc(b.moveNext) + "</button>" : "") +
          (t.col !== "done" ? '<button type="button" class="btn slim" data-action="done" data-id="' + t.id + '">' + esc(b.complete) + "</button>" : "") +
          "</div></article>";
      }).join("");
      return '<section class="col"><h2>' + esc(b.cols[col]) + "</h2>" + cards + "</section>";
    }).join("");
    return "<h1 id=\"screen-title\">" + esc(b.views.board) + '</h1><div class="board">' + cols + "</div>" + detail();
  }

  function calendar() {
    var b = bag();
    var heads = b.dow.map(function (d) { return '<span class="dow">' + esc(d) + "</span>"; }).join("");
    var cells = "<span></span>";
    var d;
    for (d = 1; d <= 30; d += 1) {
      var ev = EVENTS[d];
      cells += '<button type="button" data-action="day" data-day="' + d + '"' + (state.day === d ? ' class="is-on"' : "") + ">" + d + (ev ? ' <i class="dot"></i>' : "") + "</button>";
    }
    var note = EVENTS[state.day] ? b.events[EVENTS[state.day]] : b.noEvent;
    return "<h1 id=\"screen-title\">" + esc(b.month) + '</h1><div class="cal">' + heads + cells + '</div><section class="panel" style="margin-top:12px"><h2>' + state.day + "</h2><p>" + esc(note) + "</p></section>";
  }

  function taskList() {
    var b = bag();
    var filters = ["all", "high", "med", "low"].map(function (id) {
      return '<button type="button" class="btn ' + (state.pri === id ? "" : "ghost") + ' slim" data-action="pri" data-pri="' + id + '">' + esc(id === "all" ? b.all : b.pri[id]) + "</button>";
    }).join(" ");
    var rows = tasks.filter(function (t) { return state.pri === "all" || t.priority === state.pri; }).map(function (t) {
      return '<button type="button" class="task" data-action="task" data-id="' + t.id + '"><span class="pill ' + (t.priority === "high" ? "hot" : "") + '">' + esc(b.pri[t.priority]) + "</span><span><strong>" + esc(b.tasks[t.title]) + "</strong><br><span class=\"muted\">" + esc(person(t.who)[0]) + " · " + esc(t.due) + "</span></span><span class=\"pill " + (t.col === "done" ? "good" : "") + "\">" + esc(b.cols[t.col]) + "</span></button>";
    }).join("");
    return "<h1 id=\"screen-title\">" + esc(b.views.tasks) + '</h1><div class="row">' + filters + '</div><div class="tasks">' + rows + "</div>" + detail();
  }

  function team() {
    var b = bag();
    var cards = PEOPLE.map(function (m) {
      var info = person(m.id);
      var count = tasks.filter(function (t) { return t.who === m.id && t.col !== "done"; }).length;
      return '<article class="panel person"><div class="avatar" aria-hidden="true">' + esc(m.initials) + "</div><h2>" + esc(info[0]) + "</h2><p class=\"muted\">" + esc(info[1]) + "</p><p>" + count + "</p></article>";
    }).join("");
    return "<h1 id=\"screen-title\">" + esc(b.views.team) + '</h1><div class="team">' + cards + "</div>";
  }

  function messages() {
    var b = bag();
    var threads = ["harbor", "studio"].map(function (id) {
      return '<button type="button" class="thread' + (state.thread === id ? " is-on" : "") + '" data-action="thread" data-id="' + id + '">' + esc(b.threads[id]) + "</button>";
    }).join("");
    var notes = b.notes[state.thread].concat(state.extra[state.thread] || []).map(function (text, i, all) {
      var mine = i >= b.notes[state.thread].length;
      return '<div class="bubble"><strong>' + esc(mine ? b.you : person(state.thread === "harbor" ? "lina" : "omar")[0]) + "</strong><p>" + esc(text) + "</p></div>";
    }).join("");
    var feed = b.feed.map(function (line) { return '<article class="panel msg">' + esc(line) + "</article>"; }).join("");
    return "<h1 id=\"screen-title\">" + esc(b.views.messages) + '</h1><div class="split"><div class="panel">' + threads + "</div><div><div class=\"feed\">" + feed + "</div><h2>" + esc(b.threads[state.thread]) + "</h2>" + notes +
      '<form class="composer" data-form="msg"><input name="draft" value="' + esc(state.draft) + '" placeholder="' + esc(b.placeholder) + '" aria-label="' + esc(b.placeholder) + '"><button class="btn" type="submit">' + esc(b.send) + "</button></form></div></div>";
  }

  function settings() {
    var b = bag();
    return "<h1 id=\"screen-title\">" + esc(b.views.settings) + '</h1><form class="settings" data-form="settings"><label>' + esc(b.workspace) + '<input name="name" value="' + esc(state.settings.name) + '"></label>' +
      '<label><input type="checkbox" name="digest"' + (state.settings.digest ? " checked" : "") + "> " + esc(b.digest) + "</label><p class=\"muted\">" + esc(b.week) + "</p><p class=\"muted\">" + esc(b.saved) + '</p><button class="btn" type="submit">' + esc(b.save) + "</button></form>";
  }

  function render() {
    var body = state.view === "projects" ? projects()
      : state.view === "project" ? projectView()
      : state.view === "board" ? board()
      : state.view === "calendar" ? calendar()
      : state.view === "tasks" ? taskList()
      : state.view === "team" ? team()
      : state.view === "messages" ? messages()
      : state.view === "settings" ? settings()
      : dashboard();
    var changed = last !== state.view;
    last = state.view;
    root.innerHTML = shell(body);
    if (changed) {
      var title = root.querySelector("#screen-title");
      if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); }
    }
  }

  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button || !root.contains(button)) return;
    var action = button.getAttribute("data-action");
    if (action === "nav") { state.view = button.getAttribute("data-view"); state.sheet = false; state.taskId = ""; render(); }
    else if (action === "sheet") { state.sheet = !state.sheet; render(); }
    else if (action === "project") { state.projectId = button.getAttribute("data-id"); state.view = "project"; state.sheet = false; render(); }
    else if (action === "task") { state.taskId = state.taskId === button.getAttribute("data-id") ? "" : button.getAttribute("data-id"); render(); }
    else if (action === "move") {
      var task = taskBy(button.getAttribute("data-id"));
      var i = COLS.indexOf(task.col) + Number(button.getAttribute("data-dir"));
      if (i >= 0 && i < COLS.length) task.col = COLS[i];
      render();
    } else if (action === "done") { taskBy(button.getAttribute("data-id")).col = "done"; render(); }
    else if (action === "day") { state.day = Number(button.getAttribute("data-day")); render(); }
    else if (action === "pri") { state.pri = button.getAttribute("data-pri"); render(); }
    else if (action === "thread") { state.thread = button.getAttribute("data-id"); render(); }
  });

  root.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.target;
    if (form.getAttribute("data-form") === "msg") {
      var text = form.draft.value.trim();
      if (!text) return;
      state.extra[state.thread].push(text);
      state.draft = "";
      render();
    }
    if (form.getAttribute("data-form") === "settings") {
      state.settings.name = form.name.value.trim() || state.settings.name;
      state.settings.digest = form.digest.checked;
      render();
    }
  });

  document.addEventListener("kodama:preferences", function () { render(); });
  render();
})();
