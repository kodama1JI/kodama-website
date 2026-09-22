(function () {
  "use strict";

  var VIEWS = ["dashboard", "sales", "purchases", "expenses", "customers", "suppliers", "products", "reports", "settings"];
  var MONTHS = ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"];
  var DONUT_COLORS = ["#d4b56a", "#6e8b7b", "#8d6a4a", "#7f8c99", "#b7a48a"];

  var SALES = [
    { id: "INV-1042", customer: "sami", date: "2026-04-08", amount: 1800, status: "paid" },
    { id: "INV-1048", customer: "hana", date: "2026-05-14", amount: 2400, status: "paid" },
    { id: "INV-1055", customer: "omar", date: "2026-06-03", amount: 960, status: "paid" },
    { id: "INV-1061", customer: "leila", date: "2026-06-27", amount: 3200, status: "open" },
    { id: "INV-1070", customer: "yusuf", date: "2026-07-11", amount: 1540, status: "paid" },
    { id: "INV-1077", customer: "maya", date: "2026-08-04", amount: 4100, status: "overdue" },
    { id: "INV-1084", customer: "sami", date: "2026-08-21", amount: 870, status: "paid" },
    { id: "INV-1090", customer: "hana", date: "2026-09-09", amount: 2650, status: "open" },
    { id: "INV-1096", customer: "omar", date: "2026-09-18", amount: 1320, status: "paid" }
  ];

  var EXPENSES = [
    { id: "EXP-220", cat: "rent", date: "2026-04-01", amount: 2200 },
    { id: "EXP-231", cat: "supplies", date: "2026-04-19", amount: 640 },
    { id: "EXP-248", cat: "payroll", date: "2026-05-01", amount: 4800 },
    { id: "EXP-260", cat: "software", date: "2026-05-22", amount: 180 },
    { id: "EXP-274", cat: "utilities", date: "2026-06-08", amount: 310 },
    { id: "EXP-288", cat: "rent", date: "2026-07-01", amount: 2200 },
    { id: "EXP-301", cat: "payroll", date: "2026-08-01", amount: 4800 },
    { id: "EXP-316", cat: "supplies", date: "2026-08-16", amount: 920 },
    { id: "EXP-330", cat: "software", date: "2026-09-02", amount: 180 },
    { id: "EXP-338", cat: "utilities", date: "2026-09-12", amount: 290 }
  ];

  var PURCHASES = [
    { id: "BILL-310", supplier: "cedar", date: "2026-04-12", amount: 860, status: "paid" },
    { id: "BILL-318", supplier: "orchard", date: "2026-05-09", amount: 420, status: "paid" },
    { id: "BILL-329", supplier: "atlas", date: "2026-06-18", amount: 310, status: "open" },
    { id: "BILL-340", supplier: "qamar", date: "2026-07-20", amount: 1240, status: "paid" },
    { id: "BILL-351", supplier: "glass", date: "2026-08-11", amount: 690, status: "overdue" },
    { id: "BILL-362", supplier: "cedar", date: "2026-09-07", amount: 540, status: "open" }
  ];

  var CUSTOMERS = [
    { id: "sami", email: "sami.darwish@example.com", city: "Amman" },
    { id: "hana", email: "hana.lutfi@example.com", city: "Amman" },
    { id: "omar", email: "omar.faris@example.com", city: "Zarqa" },
    { id: "leila", email: "leila.mansour@example.com", city: "Irbid" },
    { id: "yusuf", email: "yusuf.haddad@example.com", city: "Amman" },
    { id: "maya", email: "maya.karam@example.com", city: "Salt" }
  ];

  var SUPPLIERS = [
    { id: "cedar", terms: "Net 30" },
    { id: "orchard", terms: "Net 15" },
    { id: "atlas", terms: "Due on receipt" },
    { id: "qamar", terms: "Net 30" },
    { id: "glass", terms: "Net 45" }
  ];

  var PRODUCTS = [
    { id: "notebook", sku: "SKU-LN", qty: 168, reorder: 48, cost: 6, price: 18 },
    { id: "cup", sku: "SKU-CC", qty: 32, reorder: 40, cost: 9, price: 24 },
    { id: "oil", sku: "SKU-OO", qty: 120, reorder: 36, cost: 7, price: 16 },
    { id: "throw", sku: "SKU-WT", qty: 24, reorder: 30, cost: 28, price: 64 },
    { id: "tray", sku: "SKU-BT", qty: 60, reorder: 18, cost: 18, price: 42 },
    { id: "tote", sku: "SKU-CT", qty: 216, reorder: 40, cost: 3, price: 12 },
    { id: "ink", sku: "SKU-IN", qty: 28, reorder: 24, cost: 8, price: 22 },
    { id: "box", sku: "SKU-CB", qty: 16, reorder: 20, cost: 22, price: 48 }
  ];

  var COPY = {
    en: {
      product: "Ledger",
      sample: "Sample data",
      companyDefault: "Mira Goods",
      untitled: "Untitled company",
      menu: "Open sections",
      close: "Close",
      period: "Sample period Apr–Sep 2026",
      footnote: "Sample ledger for a fictional company. Purchases are listed separately and are not included in expenses.",
      search: "Search records",
      empty: "No matching records.",
      view: "View",
      revenue: "Revenue",
      expenses: "Expenses",
      profit: "Net profit",
      outstanding: "Outstanding",
      inventory: "Inventory value",
      recent: "Recent transactions",
      activity: "Activity",
      low: "Low stock",
      healthy: "Stock is above every reorder point.",
      chartTitle: "Revenue and expenses",
      revKey: "Revenue",
      expKey: "Expenses",
      paid: "Paid",
      open: "Open",
      overdue: "Overdue",
      all: "All",
      lowOnly: "Low stock only",
      showAll: "Show all products",
      invoice: "Invoice",
      customer: "Customer",
      date: "Date",
      amount: "Amount",
      status: "Status",
      bill: "Bill",
      supplier: "Supplier",
      category: "Category",
      email: "Email",
      city: "Sample city",
      terms: "Terms",
      sku: "SKU",
      stock: "On hand",
      reorder: "Reorder at",
      cost: "Cost",
      sell: "Sell price",
      reportsLead: "Summaries for the selected months. Nothing is exported.",
      months6: "6 months",
      months3: "3 months",
      spend: "Expenses by category",
      settingsLead: "These choices stay in this browser session only.",
      company: "Company name",
      currency: "Display currency",
      currencyHint: "Changes the symbol only. Amounts are not converted.",
      year: "Fiscal year starts",
      notify: "Email summaries",
      on: "On",
      off: "Off",
      save: "Save settings",
      saved: "Saved in this session only. Nothing was sent to a server.",
      needName: "Enter a company name before saving.",
      yearNote: "Fiscal year label",
      views: {
        dashboard: "Dashboard", sales: "Sales", purchases: "Purchases", expenses: "Expenses",
        customers: "Customers", suppliers: "Suppliers", products: "Products", reports: "Reports", settings: "Settings"
      },
      customers: {
        sami: "Sami Darwish", hana: "Hana Lutfi", omar: "Omar Faris",
        leila: "Leila Mansour", yusuf: "Yusuf Haddad", maya: "Maya Karam"
      },
      suppliers: {
        cedar: "Cedar Mill", orchard: "Orchard Packaging", atlas: "Atlas Paper",
        qamar: "Qamar Textiles", glass: "Bright Glass"
      },
      products: {
        notebook: "Linen notebook", cup: "Ceramic cup", oil: "Olive oil 500ml", throw: "Wool throw",
        tray: "Brass tray", tote: "Cotton tote", ink: "Ink set", box: "Cedar box"
      },
      cats: { rent: "Rent", supplies: "Supplies", payroll: "Payroll", software: "Software", utilities: "Utilities" },
      months: { January: "January", April: "April", July: "July" },
      activitySale: "{id} · {name} · {status}",
      activityExpense: "{id} · {cat}"
    },
    ar: {
      product: "ليدجر",
      sample: "بيانات تجريبية",
      companyDefault: "بضائع ميرا",
      untitled: "شركة بلا اسم",
      menu: "فتح الأقسام",
      close: "إغلاق",
      period: "فترة تجريبية من نيسان إلى أيلول 2026",
      footnote: "دفتر تجريبي لشركة وهمية. المشتريات معروضة وحدها وغير داخلة في المصروفات.",
      search: "ابحث في السجلات",
      empty: "لا توجد سجلات مطابقة.",
      view: "عرض",
      revenue: "الإيرادات",
      expenses: "المصروفات",
      profit: "صافي الربح",
      outstanding: "مبالغ معلّقة",
      inventory: "قيمة المخزون",
      recent: "آخر الحركات",
      activity: "النشاط",
      low: "مخزون منخفض",
      healthy: "المخزون أعلى من كل حدود إعادة الطلب.",
      chartTitle: "الإيرادات والمصروفات",
      revKey: "الإيرادات",
      expKey: "المصروفات",
      paid: "مدفوع",
      open: "مفتوح",
      overdue: "متأخر",
      all: "الكل",
      lowOnly: "المخزون المنخفض فقط",
      showAll: "عرض كل المنتجات",
      invoice: "الفاتورة",
      customer: "العميل",
      date: "التاريخ",
      amount: "المبلغ",
      status: "الحالة",
      bill: "الفاتورة",
      supplier: "المورّد",
      category: "التصنيف",
      email: "البريد",
      city: "مدينة تجريبية",
      terms: "شروط الدفع",
      sku: "الرمز",
      stock: "المتوفر",
      reorder: "حد إعادة الطلب",
      cost: "التكلفة",
      sell: "سعر البيع",
      reportsLead: "ملخصات للأشهر المحددة. لا يُصدَّر شيء.",
      months6: "٦ أشهر",
      months3: "٣ أشهر",
      spend: "المصروفات حسب التصنيف",
      settingsLead: "هذه الاختيارات تبقى في جلسة المتصفح فقط.",
      company: "اسم الشركة",
      currency: "عملة العرض",
      currencyHint: "يتغير الرمز فقط. المبالغ لا تُحوَّل.",
      year: "بداية السنة المالية",
      notify: "ملخصات البريد",
      on: "تشغيل",
      off: "إيقاف",
      save: "حفظ الإعدادات",
      saved: "حُفظ في هذه الجلسة فقط. لم يُرسل شيء إلى خادم.",
      needName: "أدخل اسم الشركة قبل الحفظ.",
      yearNote: "تسمية السنة المالية",
      views: {
        dashboard: "لوحة المعلومات", sales: "المبيعات", purchases: "المشتريات", expenses: "المصروفات",
        customers: "العملاء", suppliers: "الموردون", products: "المنتجات", reports: "التقارير", settings: "الإعدادات"
      },
      customers: {
        sami: "سامي درويش", hana: "هنا لطفي", omar: "عمر فارس",
        leila: "ليلى منصور", yusuf: "يوسف حداد", maya: "مايا كرم"
      },
      suppliers: {
        cedar: "مطحنة الأرز", orchard: "تغليف البستان", atlas: "ورق أطلس",
        qamar: "نسيج قمر", glass: "زجاج مشرق"
      },
      products: {
        notebook: "دفتر كتّان", cup: "كوب خزفي", oil: "زيت زيتون ٥٠٠ مل", throw: "بطانية صوف",
        tray: "صينية نحاس", tote: "حقيبة قطن", ink: "طقم حبر", box: "صندوق أرز"
      },
      cats: { rent: "إيجار", supplies: "مستلزمات", payroll: "رواتب", software: "برمجيات", utilities: "مرافق" },
      months: { January: "يناير", April: "أبريل", July: "يوليو" },
      activitySale: "{id} · {name} · {status}",
      activityExpense: "{id} · {cat}"
    }
  };

  var state = {
    view: "dashboard",
    query: "",
    status: "all",
    span: 6,
    lowOnly: false,
    navOpen: false,
    detail: null,
    caret: null,
    flash: "",
    flashError: false,
    settings: { company: "", currency: "USD", yearStart: "January", notify: true }
  };

  var root = document.getElementById("app");
  var pendingFocus = "";

  function lang() {
    return document.documentElement.getAttribute("lang") === "ar" ? "ar" : "en";
  }

  function bag() {
    return COPY[lang()];
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function money(amount) {
    return new Intl.NumberFormat(lang() === "ar" ? "ar" : "en-US", {
      style: "currency",
      currency: state.settings.currency,
      maximumFractionDigits: 0
    }).format(amount);
  }

  function dateLabel(iso) {
    return new Intl.DateTimeFormat(lang() === "ar" ? "ar" : "en", {
      month: "short",
      day: "numeric"
    }).format(new Date(iso + "T12:00:00"));
  }

  function monthLabel(key) {
    return new Intl.DateTimeFormat(lang() === "ar" ? "ar" : "en", { month: "short" }).format(new Date(key + "-15T12:00:00"));
  }

  function icon(name) {
    var paths = {
      dashboard: '<rect x="4" y="4" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="4" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="13" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>',
      sales: '<path d="M4 16V8m5 8V5m5 11v-6m5 6V7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      purchases: '<path d="M6 7h12l-1 11H7L6 7z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 7V6a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" stroke-width="1.6"/>',
      expenses: '<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 8v8M9.5 10.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H15" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
      customers: '<circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 18c1-3 3-4 5-4s4 1 5 4M16 11h4M18 9v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      suppliers: '<path d="M4 17V8l8-4 8 4v9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 17v-5h6v5" fill="none" stroke="currentColor" stroke-width="1.6"/>',
      products: '<path d="M4 8l8-4 8 4-8 4-8-4zM4 8v8l8 4 8-4V8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
      reports: '<path d="M5 19V5h10l4 4v10H5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 13v3M12 10v6M15 12v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      settings: '<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.2 6.2l1.4 1.4M16.4 16.4l1.4 1.4M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
      menu: '<path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + paths[name] + "</svg>";
  }

  function sum(list, pick) {
    return list.reduce(function (total, row) { return total + pick(row); }, 0);
  }

  function companyName() {
    return state.settings.company || bag().companyDefault;
  }

  function statusText(status) {
    return bag()[status] || status;
  }

  function queryMatch(parts) {
    var q = state.query.trim().toLowerCase();
    if (!q) return true;
    return parts.join(" ").toLowerCase().indexOf(q) !== -1;
  }

  function spanMonths() {
    return state.span === 3 ? MONTHS.slice(3) : MONTHS.slice();
  }

  function inSpan(iso, months) {
    return months.indexOf(iso.slice(0, 7)) !== -1;
  }

  function bars(months, sales, expenses) {
    var series = months.map(function (key) {
      return {
        key: key,
        revenue: sum(sales.filter(function (row) { return row.date.slice(0, 7) === key; }), function (row) { return row.amount; }),
        expenses: sum(expenses.filter(function (row) { return row.date.slice(0, 7) === key; }), function (row) { return row.amount; })
      };
    });
    var max = 1;
    series.forEach(function (row) { max = Math.max(max, row.revenue, row.expenses); });
    var cols = series.map(function (row) {
      return '<div class="chart-col"><div class="chart-bars">' +
        '<span class="bar rev" style="height:' + Math.round(row.revenue / max * 100) + '%"></span>' +
        '<span class="bar exp" style="height:' + Math.round(row.expenses / max * 100) + '%"></span>' +
        '</div><span>' + esc(monthLabel(row.key)) + "</span></div>";
    }).join("");
    var sr = '<ul class="sr-only">' + series.map(function (row) {
      return "<li>" + esc(monthLabel(row.key)) + ": " + esc(money(row.revenue)) + " / " + esc(money(row.expenses)) + "</li>";
    }).join("") + "</ul>";
    return '<div class="chart" role="img" aria-label="' + esc(bag().chartTitle) + '">' + cols + "</div>" + sr +
      '<div class="legend"><span><i class="swatch" style="background:var(--accent)"></i>' + esc(bag().revKey) + '</span><span><i class="swatch" style="background:var(--muted)"></i>' + esc(bag().expKey) + "</span></div>";
  }

  function donut(parts) {
    var total = sum(parts, function (part) { return part.value; }) || 1;
    var cursor = 0;
    var stops = parts.map(function (part, index) {
      var size = (part.value / total) * 100;
      var piece = DONUT_COLORS[index % DONUT_COLORS.length] + " " + cursor + "% " + (cursor + size) + "%";
      cursor += size;
      return piece;
    }).join(", ");
    var legend = parts.map(function (part, index) {
      return '<li><span><i class="swatch" style="background:' + DONUT_COLORS[index % DONUT_COLORS.length] + '"></i>' + esc(part.label) + "</span><span>" + esc(money(part.value)) + "</span></li>";
    }).join("");
    return '<div class="donut-wrap"><div class="donut" style="background:conic-gradient(' + stops + ')"></div><ul class="legend-list">' + legend + "</ul></div>";
  }

  function searchBox() {
    return '<label class="search"><span class="sr-only">' + esc(bag().search) + '</span><input id="q" type="search" autocomplete="off" placeholder="' + esc(bag().search) + '" value="' + esc(state.query) + '"></label>';
  }

  function statusChips() {
    return ["all", "paid", "open", "overdue"].map(function (key) {
      return '<button type="button" class="chip' + (state.status === key ? " is-on" : "") + '" data-action="status" data-status="' + key + '">' + esc(key === "all" ? bag().all : statusText(key)) + "</button>";
    }).join("");
  }

  function table(headers, rows) {
    var head = "<tr>" + headers.map(function (header) { return "<th>" + esc(header) + "</th>"; }).join("") + "</tr>";
    var body = rows.length ? rows.join("") : '<tr><td colspan="' + headers.length + '">' + esc(bag().empty) + "</td></tr>";
    return '<div class="table-wrap"><table class="as-cards"><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>";
  }

  function cell(label, value) {
    return '<td data-label="' + esc(label) + '">' + value + "</td>";
  }

  function viewButton(kind, id) {
    return '<td data-label=""><button type="button" class="chip" data-action="detail" data-kind="' + kind + '" data-id="' + id + '">' + esc(bag().view) + "</button></td>";
  }

  function detailPanel(title, pairs) {
    if (!state.detail) return "";
    var rows = pairs.map(function (pair) {
      return "<dt>" + esc(pair[0]) + "</dt><dd>" + esc(pair[1]) + "</dd>";
    }).join("");
    return '<section class="detail"><div class="toolbar"><h2>' + esc(title) + '</h2><button type="button" class="chip" data-action="close-detail">' + esc(bag().close) + "</button></div><dl>" + rows + "</dl></section>";
  }

  function dashboard() {
    var revenue = sum(SALES, function (row) { return row.amount; });
    var expenses = sum(EXPENSES, function (row) { return row.amount; });
    var outstanding = sum(SALES.filter(function (row) { return row.status !== "paid"; }), function (row) { return row.amount; });
    var inventory = sum(PRODUCTS, function (row) { return row.qty * row.cost; });
    var net = revenue - expenses;
    var cards = [
      [bag().revenue, money(revenue), ""],
      [bag().expenses, money(expenses), ""],
      [bag().profit, money(net), net >= 0 ? "" : "down"],
      [bag().outstanding, money(outstanding), outstanding ? "down" : ""],
      [bag().inventory, money(inventory), ""]
    ].map(function (card) {
      return '<article class="card"><span>' + esc(card[0]) + "</span><strong>" + esc(card[1]) + "</strong>" + (card[2] ? '<em class="' + card[2] + '">' + esc(bag().period) + "</em>" : "<em>" + esc(bag().period) + "</em>") + "</article>";
    }).join("");
    var recent = SALES.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 5).map(function (row) {
      return "<tr>" + cell(bag().invoice, esc(row.id)) + cell(bag().customer, esc(bag().customers[row.customer])) + cell(bag().date, esc(dateLabel(row.date))) + cell(bag().amount, esc(money(row.amount))) + cell(bag().status, '<span class="status ' + row.status + '">' + esc(statusText(row.status)) + "</span>") + "</tr>";
    });
    var activity = []
      .concat(SALES.map(function (row) {
        return { date: row.date, text: bag().activitySale.replace("{id}", row.id).replace("{name}", bag().customers[row.customer]).replace("{status}", statusText(row.status)) };
      }))
      .concat(EXPENSES.map(function (row) {
        return { date: row.date, text: bag().activityExpense.replace("{id}", row.id).replace("{cat}", bag().cats[row.cat]) };
      }))
      .sort(function (a, b) { return a.date < b.date ? 1 : -1; })
      .slice(0, 6);
    var lows = PRODUCTS.filter(function (row) { return row.qty < row.reorder; });
    var lowHtml = lows.length
      ? lows.map(function (row) { return "<li><strong>" + esc(bag().products[row.id]) + "</strong> · " + row.qty + " / " + row.reorder + "</li>"; }).join("")
      : "<li>" + esc(bag().healthy) + "</li>";
    return '<div class="cards">' + cards + "</div>" +
      '<div class="layout"><section class="panel"><h2>' + esc(bag().chartTitle) + "</h2>" + bars(MONTHS, SALES, EXPENSES) + "</section>" +
      '<section class="panel"><h2>' + esc(bag().activity) + '</h2><ul class="activity">' + activity.map(function (row) { return "<li>" + esc(row.text) + "</li>"; }).join("") + "</ul></section></div>" +
      '<div class="layout"><section class="panel"><h2>' + esc(bag().recent) + "</h2>" + table([bag().invoice, bag().customer, bag().date, bag().amount, bag().status], recent) + "</section>" +
      '<section class="panel"><h2>' + esc(bag().low) + '</h2><ul class="activity">' + lowHtml + "</ul><p class=\"note\">" + esc(bag().footnote) + "</p></section></div>";
  }

  function salesView() {
    var rows = SALES.filter(function (row) {
      var statusOk = state.status === "all" || row.status === state.status;
      return statusOk && queryMatch([row.id, bag().customers[row.customer], row.status]);
    }).map(function (row) {
      return "<tr>" + cell(bag().invoice, esc(row.id)) + cell(bag().customer, esc(bag().customers[row.customer])) + cell(bag().date, esc(dateLabel(row.date))) + cell(bag().amount, esc(money(row.amount))) + cell(bag().status, '<span class="status ' + row.status + '">' + esc(statusText(row.status)) + "</span>") + viewButton("sales", row.id) + "</tr>";
    });
    var selected = SALES.filter(function (row) { return state.detail && state.detail.kind === "sales" && state.detail.id === row.id; })[0];
    var detail = selected ? detailPanel(selected.id, [
      [bag().customer, bag().customers[selected.customer]],
      [bag().date, dateLabel(selected.date)],
      [bag().amount, money(selected.amount)],
      [bag().status, statusText(selected.status)]
    ]) : "";
    return '<div class="toolbar">' + searchBox() + statusChips() + "</div>" + table([bag().invoice, bag().customer, bag().date, bag().amount, bag().status, ""], rows) + detail;
  }

  function purchasesView() {
    var rows = PURCHASES.filter(function (row) {
      return queryMatch([row.id, bag().suppliers[row.supplier], row.status]);
    }).map(function (row) {
      return "<tr>" + cell(bag().bill, esc(row.id)) + cell(bag().supplier, esc(bag().suppliers[row.supplier])) + cell(bag().date, esc(dateLabel(row.date))) + cell(bag().amount, esc(money(row.amount))) + cell(bag().status, '<span class="status ' + row.status + '">' + esc(statusText(row.status)) + "</span>") + viewButton("purchases", row.id) + "</tr>";
    });
    var selected = PURCHASES.filter(function (row) { return state.detail && state.detail.kind === "purchases" && state.detail.id === row.id; })[0];
    var detail = selected ? detailPanel(selected.id, [
      [bag().supplier, bag().suppliers[selected.supplier]],
      [bag().date, dateLabel(selected.date)],
      [bag().amount, money(selected.amount)],
      [bag().status, statusText(selected.status)]
    ]) : "";
    return '<div class="toolbar">' + searchBox() + "</div>" + table([bag().bill, bag().supplier, bag().date, bag().amount, bag().status, ""], rows) + detail;
  }

  function expensesView() {
    var rows = EXPENSES.filter(function (row) {
      return queryMatch([row.id, bag().cats[row.cat]]);
    }).map(function (row) {
      return "<tr>" + cell("ID", esc(row.id)) + cell(bag().category, esc(bag().cats[row.cat])) + cell(bag().date, esc(dateLabel(row.date))) + cell(bag().amount, esc(money(row.amount))) + "</tr>";
    });
    var parts = ["rent", "supplies", "payroll", "software", "utilities"].map(function (cat) {
      return { label: bag().cats[cat], value: sum(EXPENSES.filter(function (row) { return row.cat === cat; }), function (row) { return row.amount; }) };
    });
    return '<div class="toolbar">' + searchBox() + "</div>" + '<section class="panel" style="margin-bottom:12px"><h2>' + esc(bag().spend) + "</h2>" + donut(parts) + "</section>" + table(["ID", bag().category, bag().date, bag().amount], rows);
  }

  function customersView() {
    var rows = CUSTOMERS.filter(function (row) {
      return queryMatch([bag().customers[row.id], row.email, row.city]);
    }).map(function (row) {
      var open = sum(SALES.filter(function (sale) { return sale.customer === row.id && sale.status !== "paid"; }), function (sale) { return sale.amount; });
      return "<tr>" + cell(bag().customer, esc(bag().customers[row.id])) + cell(bag().email, esc(row.email)) + cell(bag().city, esc(row.city)) + cell(bag().outstanding, esc(money(open))) + viewButton("customers", row.id) + "</tr>";
    });
    var selected = CUSTOMERS.filter(function (row) { return state.detail && state.detail.kind === "customers" && state.detail.id === row.id; })[0];
    var detail = "";
    if (selected) {
      var bought = sum(SALES.filter(function (sale) { return sale.customer === selected.id; }), function (sale) { return sale.amount; });
      detail = detailPanel(bag().customers[selected.id], [
        [bag().email, selected.email],
        [bag().city, selected.city],
        [bag().revenue, money(bought)]
      ]);
    }
    return '<div class="toolbar">' + searchBox() + "</div>" + table([bag().customer, bag().email, bag().city, bag().outstanding, ""], rows) + detail;
  }

  function suppliersView() {
    var rows = SUPPLIERS.filter(function (row) {
      return queryMatch([bag().suppliers[row.id], row.terms]);
    }).map(function (row) {
      var billed = sum(PURCHASES.filter(function (bill) { return bill.supplier === row.id; }), function (bill) { return bill.amount; });
      return "<tr>" + cell(bag().supplier, esc(bag().suppliers[row.id])) + cell(bag().terms, esc(row.terms)) + cell(bag().amount, esc(money(billed))) + viewButton("suppliers", row.id) + "</tr>";
    });
    var selected = SUPPLIERS.filter(function (row) { return state.detail && state.detail.kind === "suppliers" && state.detail.id === row.id; })[0];
    var detail = selected ? detailPanel(bag().suppliers[selected.id], [[bag().terms, selected.terms]]) : "";
    return '<div class="toolbar">' + searchBox() + "</div>" + table([bag().supplier, bag().terms, bag().amount, ""], rows) + detail;
  }

  function productsView() {
    var rows = PRODUCTS.filter(function (row) {
      var lowOk = !state.lowOnly || row.qty < row.reorder;
      return lowOk && queryMatch([bag().products[row.id], row.sku]);
    }).map(function (row) {
      var low = row.qty < row.reorder;
      var width = Math.max(6, Math.min(100, Math.round((row.qty / (row.reorder * 2)) * 100)));
      var meter = '<span class="stock' + (low ? " low" : "") + '"><span style="width:' + width + '%"></span></span> ' + row.qty;
      return "<tr>" + cell(bag().products ? bag().views.products : "", esc(bag().products[row.id])) + cell(bag().sku, esc(row.sku)) + cell(bag().stock, meter) + cell(bag().reorder, String(row.reorder)) + cell(bag().cost, esc(money(row.cost))) + cell(bag().sell, esc(money(row.price))) + "</tr>";
    });
    return '<div class="toolbar">' + searchBox() +
      '<button type="button" class="chip' + (state.lowOnly ? " is-on" : "") + '" data-action="low">' + esc(state.lowOnly ? bag().showAll : bag().lowOnly) + "</button></div>" +
      table([bag().views.products, bag().sku, bag().stock, bag().reorder, bag().cost, bag().sell], rows);
  }

  function reportsView() {
    var months = spanMonths();
    var sales = SALES.filter(function (row) { return inSpan(row.date, months); });
    var expenses = EXPENSES.filter(function (row) { return inSpan(row.date, months); });
    var revenue = sum(sales, function (row) { return row.amount; });
    var spend = sum(expenses, function (row) { return row.amount; });
    var parts = ["rent", "supplies", "payroll", "software", "utilities"].map(function (cat) {
      return {
        label: bag().cats[cat],
        value: sum(expenses.filter(function (row) { return row.cat === cat; }), function (row) { return row.amount; })
      };
    }).filter(function (part) { return part.value > 0; });
    return '<p class="muted">' + esc(bag().reportsLead) + "</p>" +
      '<div class="toolbar"><button type="button" class="chip' + (state.span === 6 ? " is-on" : "") + '" data-action="span" data-span="6">' + esc(bag().months6) + '</button>' +
      '<button type="button" class="chip' + (state.span === 3 ? " is-on" : "") + '" data-action="span" data-span="3">' + esc(bag().months3) + "</button></div>" +
      '<div class="cards" style="grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:12px">' +
      '<article class="card"><span>' + esc(bag().revenue) + "</span><strong>" + esc(money(revenue)) + "</strong></article>" +
      '<article class="card"><span>' + esc(bag().expenses) + "</span><strong>" + esc(money(spend)) + "</strong></article>" +
      '<article class="card"><span>' + esc(bag().profit) + "</span><strong>" + esc(money(revenue - spend)) + "</strong></article></div>" +
      '<div class="report-grid"><section class="panel"><h2>' + esc(bag().chartTitle) + "</h2>" + bars(months, sales, expenses) + "</section>" +
      '<section class="panel"><h2>' + esc(bag().spend) + "</h2>" + (parts.length ? donut(parts) : '<p class="empty">' + esc(bag().empty) + "</p>") + "</section></div>";
  }

  function settingsView() {
    var years = ["January", "April", "July"].map(function (key) {
      return '<option value="' + key + '"' + (state.settings.yearStart === key ? " selected" : "") + ">" + esc(bag().months[key]) + "</option>";
    }).join("");
    var currencies = ["USD", "EUR"].map(function (code) {
      return '<option value="' + code + '"' + (state.settings.currency === code ? " selected" : "") + ">" + code + "</option>";
    }).join("");
    var flash = state.flash ? '<p class="flash' + (state.flashError ? " error" : "") + '" role="status">' + esc(state.flash) + "</p>" : "";
    return '<p class="muted">' + esc(bag().settingsLead) + "</p><form class=\"settings\" id=\"settings-form\">" +
      '<label class="field">' + esc(bag().company) + '<input id="set-company" value="' + esc(state.settings.company) + '"></label>' +
      '<label class="field">' + esc(bag().currency) + "<select id=\"set-currency\">" + currencies + "</select><span class=\"muted\">" + esc(bag().currencyHint) + "</span></label>" +
      '<label class="field">' + esc(bag().year) + "<select id=\"set-year\">" + years + "</select></label>" +
      '<div class="toggle"><span>' + esc(bag().notify) + '</span><button type="button" class="chip' + (state.settings.notify ? " is-on" : "") + '" data-action="notify" aria-pressed="' + (state.settings.notify ? "true" : "false") + '">' + esc(state.settings.notify ? bag().on : bag().off) + "</button></div>" +
      '<p class="muted">' + esc(bag().yearNote) + ": " + esc(bag().months[state.settings.yearStart]) + "</p>" +
      '<button class="btn primary" type="submit">' + esc(bag().save) + "</button>" + flash + "</form>";
  }

  function render(options) {
    options = options || {};
    var body = state.view === "sales" ? salesView()
      : state.view === "purchases" ? purchasesView()
      : state.view === "expenses" ? expensesView()
      : state.view === "customers" ? customersView()
      : state.view === "suppliers" ? suppliersView()
      : state.view === "products" ? productsView()
      : state.view === "reports" ? reportsView()
      : state.view === "settings" ? settingsView()
      : dashboard();
    var nav = VIEWS.map(function (view) {
      var current = view === state.view ? ' aria-current="page"' : "";
      return '<button type="button" class="nav-btn" data-action="nav" data-view="' + view + '"' + current + ">" + icon(view) + "<span>" + esc(bag().views[view]) + "</span></button>";
    }).join("");
    root.innerHTML =
      '<div class="shell">' +
        '<button type="button" class="scrim" data-action="close-nav" aria-label="' + esc(bag().close) + '"' + (state.navOpen ? "" : " hidden") + "></button>" +
        '<nav class="sidebar' + (state.navOpen ? " is-open" : "") + '" aria-label="' + esc(bag().views.dashboard) + '">' +
          '<div class="brand"><img src="assets/mark.svg" alt="" width="28" height="28"><div><strong>' + esc(bag().product) + '</strong><span data-company>' + esc(companyName()) + "</span></div></div>" +
          nav +
        "</nav>" +
        '<div class="workspace"><header class="top">' +
          '<button type="button" class="menu-btn" data-action="open-nav" aria-expanded="' + (state.navOpen ? "true" : "false") + '" aria-label="' + esc(bag().menu) + '">' + icon("menu") + "</button>" +
          '<h1 id="screen-title">' + esc(bag().views[state.view]) + "</h1>" +
          '<div class="top-meta"><span class="pill">' + esc(bag().sample) + '</span><strong class="company-name" data-company>' + esc(companyName()) + "</strong></div>" +
        "</header><div class=\"content\">" + body + "</div></div></div>";
    if (pendingFocus) {
      var again = root.querySelector(pendingFocus);
      pendingFocus = "";
      if (again) again.focus();
      return;
    }
    if (options.keepFocus) {
      var field = document.getElementById("q");
      if (field) {
        field.focus();
        var pos = state.caret == null ? field.value.length : state.caret;
        field.setSelectionRange(pos, pos);
      }
      return;
    }
    if (options.focus) {
      var title = document.getElementById("screen-title");
      if (title) {
        title.setAttribute("tabindex", "-1");
        title.focus({ preventScroll: true });
      }
    }
  }

  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button) return;
    var action = button.getAttribute("data-action");
    if (action === "nav") {
      state.view = button.getAttribute("data-view");
      state.query = "";
      state.detail = null;
      state.navOpen = false;
      state.flash = "";
      render({ focus: true });
    } else if (action === "open-nav") {
      state.navOpen = true;
      render();
    } else if (action === "close-nav") {
      state.navOpen = false;
      render();
    } else if (action === "status") {
      state.status = button.getAttribute("data-status");
      render();
    } else if (action === "detail") {
      state.detail = { kind: button.getAttribute("data-kind"), id: button.getAttribute("data-id") };
      render();
    } else if (action === "close-detail") {
      state.detail = null;
      render();
    } else if (action === "low") {
      state.lowOnly = !state.lowOnly;
      render();
    } else if (action === "span") {
      state.span = Number(button.getAttribute("data-span"));
      render();
    } else if (action === "notify") {
      state.settings.notify = !state.settings.notify;
      pendingFocus = '[data-action="notify"]';
      render();
    }
  });

  root.addEventListener("input", function (event) {
    if (event.target.id === "q") {
      state.query = event.target.value;
      state.caret = event.target.selectionStart;
      render({ keepFocus: true });
    } else if (event.target.id === "set-company") {
      state.settings.company = event.target.value;
      root.querySelectorAll("[data-company]").forEach(function (node) {
        node.textContent = event.target.value.trim() || bag().untitled;
      });
    }
  });

  root.addEventListener("change", function (event) {
    if (event.target.id === "set-currency") {
      state.settings.currency = event.target.value;
      pendingFocus = "#set-currency";
      render();
    } else if (event.target.id === "set-year") {
      state.settings.yearStart = event.target.value;
      pendingFocus = "#set-year";
      render();
    }
  });

  root.addEventListener("submit", function (event) {
    if (event.target.id !== "settings-form") return;
    event.preventDefault();
    var name = state.settings.company.trim();
    if (!name) {
      state.flash = bag().needName;
      state.flashError = true;
    } else {
      state.settings.company = name;
      state.flash = bag().saved;
      state.flashError = false;
    }
    render();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (state.navOpen) {
      state.navOpen = false;
      render();
    } else if (state.detail) {
      state.detail = null;
      render();
    }
  });

  document.addEventListener("kodama:preferences", function (event) {
    if (event.detail && event.detail.type === "lang") {
      var previousDefault = COPY[lang() === "ar" ? "en" : "ar"].companyDefault;
      if (state.settings.company === previousDefault) state.settings.company = bag().companyDefault;
      state.flash = "";
      render();
    }
  });

    state.settings.company = bag().companyDefault;
  render();
})();
