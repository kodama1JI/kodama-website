(function () {
  "use strict";

  var SERVICE = 0.5;
  var CATS = ["all", "kitchen", "bakery", "market", "cafe"];
  var STATUSES = ["confirmed", "preparing", "picked", "ontheway", "delivered"];
  var PINS = [
    { left: 28, top: 70 },
    { left: 28, top: 70 },
    { left: 40, top: 56 },
    { left: 58, top: 42 },
    { left: 78, top: 30 }
  ];
  var MINUTES = [34, 26, 16, 8, 0];

  var STORES = [
    { id: "cedar", cat: "kitchen", eta: "25–35", fee: 1.9, items: [
      { id: "chicken", price: 11.5 }, { id: "soup", price: 4.5 }, { id: "rice", price: 3.5 }, { id: "mint", price: 2.5 }
    ]},
    { id: "orchard", cat: "bakery", eta: "15–25", fee: 1.4, items: [
      { id: "loaf", price: 4 }, { id: "croissant", price: 3.2 }, { id: "datecake", price: 3.8 }, { id: "cookie", price: 1.8 }
    ]},
    { id: "noon", cat: "market", eta: "20–30", fee: 2.2, items: [
      { id: "milk", price: 1.6 }, { id: "eggs", price: 2.4 }, { id: "sourdough", price: 3.5 }, { id: "oranges", price: 2.9 }
    ]},
    { id: "harbor", cat: "market", eta: "30–40", fee: 2.4, items: [
      { id: "oil", price: 8.5 }, { id: "salt", price: 2.2 }, { id: "fish", price: 6.4 }, { id: "crackers", price: 2.8 }
    ]},
    { id: "paper", cat: "cafe", eta: "15–20", fee: 1.2, items: [
      { id: "filter", price: 3 }, { id: "latte", price: 3.6 }, { id: "bun", price: 2.4 }, { id: "water", price: 1.2 }
    ]}
  ];

  var COPY = {
    en: {
      brand: "Northline",
      kicker: "Courier",
      deliverTo: "Deliver to",
      change: "Change",
      search: "Search stores",
      explore: "Explore",
      track: "Track",
      account: "Account",
      tabs: "Delivery sections",
      seeAll: "All stores",
      storesTitle: "Stores",
      active: "Current delivery",
      noneTitle: "No delivery in progress",
      noneCopy: "Choose a store and place a sample order to open tracking.",
      browse: "Browse stores",
      locationTitle: "Delivery address",
      useAddress: "Use this address",
      back: "Back",
      add: "Add",
      basket: "Basket",
      emptyBasket: "Your basket is empty",
      emptyBasketCopy: "Add items from a store. This demo does not charge a card.",
      subtotal: "Subtotal",
      delivery: "Delivery",
      service: "Service",
      total: "Total",
      place: "Place sample order",
      swap: "Your basket is from {store}. Replace it with this store?",
      replace: "Replace basket",
      keep: "Keep current",
      added: "Added to basket",
      eta: "Arrives in",
      min: "min",
      delivered: "Delivered",
      address: "Address",
      order: "Order",
      driver: "Courier",
      driverWait: "A courier is assigned when the store starts preparing.",
      driverName: "Lina Haddad",
      vehicle: "Scooter · sample courier",
      items: "Items",
      demoNote: "Demo control. Status changes only in this browser.",
      next: "Simulate next status",
      replay: "Replay tracking",
      profileTitle: "Account",
      sample: "Sample profile",
      person: "Nora Saleh",
      phone: "+1 555 010 2048",
      orders: "Orders",
      noOrders: "No sample orders yet.",
      open: "View",
      clear: "Clear search",
      cats: { all: "All", kitchen: "Kitchen", bakery: "Bakery", market: "Market", cafe: "Cafe" },
      statuses: {
        confirmed: "Order confirmed",
        preparing: "Preparing",
        picked: "Picked up",
        ontheway: "On the way",
        delivered: "Delivered"
      },
      statusNote: {
        confirmed: "The store has the order.",
        preparing: "The kitchen is packing it.",
        picked: "The courier has the bag.",
        ontheway: "Heading to your address.",
        delivered: "Left at the door in this demo."
      },
      addresses: {
        garden: { title: "18 Garden Street, Apt 4", detail: "Home · sample address" },
        harbor: { title: "Harbor Tower, Floor 12", detail: "Work · sample address" },
        cedar: { title: "7 Cedar Lane", detail: "Other · sample address" }
      },
      stores: {
        cedar: { name: "Cedar Kitchen", blurb: "Plates and soups" },
        orchard: { name: "Orchard Bakery", blurb: "Bread and pastry" },
        noon: { name: "Noon Market", blurb: "Everyday groceries" },
        harbor: { name: "Harbor Pantry", blurb: "Oil, salt, tins" },
        paper: { name: "Paper & Press", blurb: "Coffee and a bun" }
      },
      goods: {
        chicken: "Grilled chicken plate", soup: "Lentil soup", rice: "Herb rice", mint: "Mint lemonade",
        loaf: "Sesame loaf", croissant: "Pistachio croissant", datecake: "Date cake", cookie: "Oat cookie",
        milk: "Milk 1L", eggs: "Eggs, 6", sourdough: "Sourdough", oranges: "Oranges",
        oil: "Olive oil", salt: "Sea salt", fish: "Smoked fish tin", crackers: "Crackers",
        filter: "Filter coffee", latte: "Cardamom latte", bun: "Butter bun", water: "Still water"
      }
    },
    ar: {
      brand: "نورثلاين",
      kicker: "توصيل",
      deliverTo: "التوصيل إلى",
      change: "تغيير",
      search: "ابحث عن متجر",
      explore: "استكشف",
      track: "التتبّع",
      account: "الحساب",
      tabs: "أقسام التوصيل",
      seeAll: "كل المتاجر",
      storesTitle: "المتاجر",
      active: "التوصيل الحالي",
      noneTitle: "لا يوجد توصيل جارٍ",
      noneCopy: "اختر متجراً وأكد طلباً تجريبياً لفتح التتبّع.",
      browse: "تصفح المتاجر",
      locationTitle: "عنوان التوصيل",
      useAddress: "استخدم هذا العنوان",
      back: "رجوع",
      add: "أضف",
      basket: "السلة",
      emptyBasket: "السلة فارغة",
      emptyBasketCopy: "أضف أصنافاً من متجر. هذا العرض لا يخصم أي بطاقة.",
      subtotal: "المجموع الفرعي",
      delivery: "التوصيل",
      service: "الخدمة",
      total: "الإجمالي",
      place: "تأكيد طلب تجريبي",
      swap: "سلتك من {store}. هل تستبدلها بأصناف هذا المتجر؟",
      replace: "استبدال السلة",
      keep: "الإبقاء على الحالية",
      added: "أُضيف إلى السلة",
      eta: "يصل خلال",
      min: "د",
      delivered: "تم التسليم",
      address: "العنوان",
      order: "الطلب",
      driver: "المندوب",
      driverWait: "يُعيَّن مندوب عندما يبدأ المتجر بالتجهيز.",
      driverName: "لينا حداد",
      vehicle: "سكوتر · مندوب تجريبي",
      items: "الأصناف",
      demoNote: "تحكم للعرض فقط. تتغير الحالة داخل هذا المتصفح.",
      next: "محاكاة الحالة التالية",
      replay: "إعادة التتبّع",
      profileTitle: "الحساب",
      sample: "ملف تجريبي",
      person: "نورا صالح",
      phone: "+1 555 010 2048",
      orders: "الطلبات",
      noOrders: "لا توجد طلبات تجريبية بعد.",
      open: "عرض",
      clear: "مسح البحث",
      cats: { all: "الكل", kitchen: "مطبخ", bakery: "مخبز", market: "سوق", cafe: "مقهى" },
      statuses: {
        confirmed: "تم تأكيد الطلب",
        preparing: "قيد التجهيز",
        picked: "تم الاستلام",
        ontheway: "في الطريق",
        delivered: "تم التسليم"
      },
      statusNote: {
        confirmed: "وصل الطلب إلى المتجر.",
        preparing: "المتجر يجهّز الطلب.",
        picked: "المندوب استلم الطلب.",
        ontheway: "في الطريق إلى العنوان.",
        delivered: "أُترك عند الباب في هذا العرض."
      },
      addresses: {
        garden: { title: "18 شارع الحديقة، شقة 4", detail: "المنزل · عنوان تجريبي" },
        harbor: { title: "برج الميناء، الطابق 12", detail: "العمل · عنوان تجريبي" },
        cedar: { title: "7 زقاق الأرز", detail: "آخر · عنوان تجريبي" }
      },
      stores: {
        cedar: { name: "مطبخ الأرز", blurb: "أطباق وشوربات" },
        orchard: { name: "مخبز البستان", blurb: "خبز ومعجنات" },
        noon: { name: "سوق الظهيرة", blurb: "حاجات يومية" },
        harbor: { name: "مؤن الميناء", blurb: "زيت وملح وعلب" },
        paper: { name: "ورق ومكبس", blurb: "قهوة وقطعة خبز" }
      },
      goods: {
        chicken: "صحن دجاج مشوي", soup: "شوربة عدس", rice: "أرز بالأعشاب", mint: "ليموناضة نعناع",
        loaf: "خبز بالسمسم", croissant: "كرواسون فستق", datecake: "كعكة تمر", cookie: "بسكويت شوفان",
        milk: "حليب ١ لتر", eggs: "بيض، ٦", sourdough: "خبز عجينة حامضة", oranges: "برتقال",
        oil: "زيت زيتون", salt: "ملح بحري", fish: "علبة سمك مدخن", crackers: "بسكويت مالح",
        filter: "قهوة مفلترة", latte: "لاتيه هيل", bun: "خبز بالزبدة", water: "مياه ساكنة"
      }
    }
  };

  var state = {
    screen: "home",
    cat: "all",
    query: "",
    addressId: "garden",
    stack: [],
    storeId: "cedar",
    cartStore: null,
    lines: {},
    swapAsk: null,
    swapItem: null,
    orders: [],
    trackId: null,
    seq: 1903,
    caret: null
  };

  var view = document.getElementById("view");
  var toastEl = document.getElementById("toast");
  var root = document.getElementById("app");
  var toastTimer = 0;
  var lastScreen = "";
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
      currency: "USD"
    }).format(amount);
  }

  function icon(name) {
    var paths = {
      back: '<path d="M14.5 6 8.5 12l6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
      search: '<circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m15.5 15.5 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      close: '<path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + paths[name] + "</svg>";
  }

  function storeById(id) {
    var i;
    for (i = 0; i < STORES.length; i += 1) if (STORES[i].id === id) return STORES[i];
    return STORES[0];
  }

  function itemPrice(store, itemId) {
    var i;
    for (i = 0; i < store.items.length; i += 1) {
      if (store.items[i].id === itemId) return store.items[i].price;
    }
    return 0;
  }

  function countLines(lines) {
    return Object.keys(lines).reduce(function (sum, id) { return sum + lines[id]; }, 0);
  }

  function subtotal(store, lines) {
    return Object.keys(lines).reduce(function (sum, id) {
      return sum + itemPrice(store, id) * lines[id];
    }, 0);
  }

  function address() {
    return bag().addresses[state.addressId];
  }

  function filteredStores() {
    var q = state.query.trim().toLowerCase();
    return STORES.filter(function (store) {
      var info = bag().stores[store.id];
      var catOk = state.cat === "all" || store.cat === state.cat;
      var blob = (info.name + " " + info.blurb + " " + bag().cats[store.cat]).toLowerCase();
      return catOk && (!q || blob.indexOf(q) !== -1);
    });
  }

  function findOrder(id) {
    var i;
    for (i = 0; i < state.orders.length; i += 1) {
      if (state.orders[i].id === id) return state.orders[i];
    }
    return null;
  }

  function currentOrder() {
    return findOrder(state.trackId) || state.orders[0] || null;
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.hidden = true; }, 1800);
  }

  function mark(id) {
    return '<img src="assets/' + id + '.svg" alt="" width="168" height="112" decoding="async">';
  }

  function tabs(current) {
    function tab(screen, label, on) {
      return '<button type="button" class="tab" data-action="tab" data-screen="' + screen + '"' + (on ? ' aria-current="page"' : "") + ">" + esc(label) + "</button>";
    }
    return '<nav class="tabs" aria-label="' + esc(bag().tabs) + '">' +
      tab("home", bag().explore, current === "home") +
      tab("tracking", bag().track, current === "tracking") +
      tab("profile", bag().account, current === "profile") +
      "</nav>";
  }

  function shell(body, tab) {
    return '<div class="app"><div class="scroll">' + body + "</div>" + (tab ? tabs(tab) : "") + "</div>";
  }

  function backHeader(title) {
    return '<div class="head"><button type="button" class="back" data-action="back" aria-label="' + esc(bag().back) + '">' + icon("back") + "</button><h1 id=\"screen-title\">" + esc(title) + "</h1></div>";
  }

  function searchBox() {
    var clear = state.query
      ? '<button type="button" class="back" data-action="clear" aria-label="' + esc(bag().clear) + '">' + icon("close") + "</button>"
      : "";
    return '<form class="search" role="search"><label class="sr-only" for="q">' + esc(bag().search) + "</label>" +
      icon("search") +
      '<input id="q" type="search" autocomplete="off" placeholder="' + esc(bag().search) + '" value="' + esc(state.query) + '">' +
      clear + "</form>";
  }

  function storeButton(store) {
    var info = bag().stores[store.id];
    return '<button type="button" class="store" data-action="store" data-id="' + store.id + '">' +
      mark(store.id) +
      "<span><strong>" + esc(info.name) + "</strong><small class=\"muted\">" + esc(info.blurb) + " · " + esc(store.eta) + " " + esc(bag().min) + "</small></span>" +
      "<span class=\"muted\">" + esc(bag().cats[store.cat]) + "</span></button>";
  }

  function homeScreen() {
    var addr = address();
    var chips = CATS.map(function (cat) {
      return '<button type="button" class="chip' + (state.cat === cat ? " is-on" : "") + '" data-action="cat" data-cat="' + cat + '">' + esc(bag().cats[cat]) + "</button>";
    }).join("");
    var order = state.orders[0];
    var active = "";
    if (order) {
      var info = bag().stores[order.storeId];
      active = '<button type="button" class="panel" data-action="open-order" data-id="' + order.id + '" style="width:100%;text-align:start">' +
        '<small class="muted">' + esc(bag().active) + "</small><strong>" + esc(info.name) + "</strong>" +
        "<span class=\"muted\">" + esc(order.id) + " · " + esc(bag().statuses[STATUSES[order.status]]) + "</span></button>";
    }
    var list = filteredStores().slice(0, 3).map(storeButton).join("") || '<p class="muted">' + esc(bag().noneCopy) + "</p>";
    var body =
      '<p class="kicker">' + esc(bag().kicker) + "</p>" +
      '<h1 class="word" id="screen-title">' + esc(bag().brand) + "</h1>" +
      '<button type="button" class="addr" data-action="location">' +
        "<span><small>" + esc(bag().deliverTo) + "</small><strong>" + esc(addr.title) + "</strong></span>" +
        "<span class=\"muted\">" + esc(bag().change) + "</span></button>" +
      searchBox() +
      '<div class="chips">' + chips + "</div>" +
      active +
      '<div class="head" style="margin-top:8px"><h2 style="margin:0;font-size:16px">' + esc(bag().storesTitle) + "</h2>" +
      '<button type="button" class="add" data-action="go" data-screen="stores">' + esc(bag().seeAll) + "</button></div>" +
      list;
    return shell(body, "home");
  }

  function storesScreen() {
    var list = filteredStores().map(storeButton).join("") || '<p class="muted">' + esc(bag().noneCopy) + "</p>";
    return shell(backHeader(bag().storesTitle) + searchBox() + list, "");
  }

  function locationScreen() {
    var choices = ["garden", "harbor", "cedar"].map(function (id) {
      var row = bag().addresses[id];
      var checked = state.addressId === id ? " checked" : "";
      return '<label class="choice"><input type="radio" name="address" value="' + id + '"' + checked + '><span><strong>' + esc(row.title) + '</strong><small class="muted">' + esc(row.detail) + "</small></span></label>";
    }).join("");
    return shell(
      backHeader(bag().locationTitle) +
      '<div class="map" aria-hidden="true"><span class="road road-h"></span><span class="road road-v"></span><span class="pin pin-store"></span><span class="pin pin-home"></span></div>' +
      choices +
      '<button type="button" class="btn block" data-action="use-address">' + esc(bag().useAddress) + "</button>",
      ""
    );
  }

  function storeScreen() {
    var store = storeById(state.storeId);
    var info = bag().stores[store.id];
    var banner = "";
    if (state.swapAsk === store.id) {
      banner = '<div class="banner"><p>' + esc(bag().swap.replace("{store}", bag().stores[state.cartStore].name)) + "</p>" +
        '<div class="row-actions"><button type="button" class="btn slim" data-action="replace">' + esc(bag().replace) + "</button>" +
        '<button type="button" class="btn ghost" data-action="keep">' + esc(bag().keep) + "</button></div></div>";
    }
    var rows = store.items.map(function (item) {
      var qty = state.cartStore === store.id ? (state.lines[item.id] || 0) : 0;
      var control = qty
        ? '<div class="stepper"><button type="button" data-action="line" data-id="' + item.id + '" data-dir="-1" aria-label="-">−</button><strong>' + qty + '</strong><button type="button" data-action="line" data-id="' + item.id + '" data-dir="1" aria-label="+">+</button></div>'
        : '<button type="button" class="add" data-action="line" data-id="' + item.id + '" data-dir="1">' + esc(bag().add) + "</button>";
      return '<div class="item"><span class="price">' + esc(money(item.price)) + "</span><span>" + esc(bag().goods[item.id]) + "</span>" + control + "</div>";
    }).join("");
    var bar = "";
    if (state.cartStore === store.id && countLines(state.lines)) {
      bar = '<button type="button" class="btn block" data-action="go" data-screen="cart">' + esc(bag().basket) + " · " + countLines(state.lines) + " · " + esc(money(subtotal(store, state.lines))) + "</button>";
    }
    return shell(
      backHeader(info.name) +
      '<div class="hero-store">' + mark(store.id) + "<div><strong>" + esc(info.blurb) + "</strong><p class=\"muted\">" + esc(store.eta) + " " + esc(bag().min) + " · " + esc(bag().cats[store.cat]) + "</p></div></div>" +
      banner + rows + bar,
      ""
    );
  }

  function cartScreen() {
    var body = backHeader(bag().basket);
    if (!state.cartStore || !countLines(state.lines)) {
      body += '<div class="empty"><h2>' + esc(bag().emptyBasket) + '</h2><p class="muted">' + esc(bag().emptyBasketCopy) + "</p></div>";
      body += '<button type="button" class="btn block" data-action="tab" data-screen="stores">' + esc(bag().browse) + "</button>";
      return shell(body, "");
    }
    var store = storeById(state.cartStore);
    var goods = subtotal(store, state.lines);
    var total = goods + store.fee + SERVICE;
    body += '<p class="muted">' + esc(bag().stores[store.id].name) + "</p>";
    body += Object.keys(state.lines).map(function (id) {
      var qty = state.lines[id];
      return '<div class="line"><span>' + esc(bag().goods[id]) + " × " + qty + "</span><span>" + esc(money(itemPrice(store, id) * qty)) + "</span></div>";
    }).join("");
    body += '<div class="totals">' +
      "<div><span>" + esc(bag().subtotal) + "</span><span>" + esc(money(goods)) + "</span></div>" +
      "<div><span>" + esc(bag().delivery) + "</span><span>" + esc(money(store.fee)) + "</span></div>" +
      "<div><span>" + esc(bag().service) + "</span><span>" + esc(money(SERVICE)) + "</span></div>" +
      '<div class="grand"><span>' + esc(bag().total) + "</span><span>" + esc(money(total)) + "</span></div></div>";
    body += '<button type="button" class="addr" data-action="location"><span><small>' + esc(bag().address) + "</small><strong>" + esc(address().title) + "</strong></span><span class=\"muted\">" + esc(bag().change) + "</span></button>";
    body += '<button type="button" class="btn block" data-action="place">' + esc(bag().place) + "</button>";
    return shell(body, "");
  }

  function trackingScreen() {
    var order = currentOrder();
    if (!order) {
      return shell(
        '<h1 id="screen-title" class="word" style="font-size:24px">' + esc(bag().track) + "</h1>" +
        '<div class="empty"><h2>' + esc(bag().noneTitle) + '</h2><p class="muted">' + esc(bag().noneCopy) + "</p></div>" +
        '<button type="button" class="btn block" data-action="tab" data-screen="home">' + esc(bag().browse) + "</button>",
        "tracking"
      );
    }
    var store = storeById(order.storeId);
    var pin = PINS[order.status];
    var steps = STATUSES.map(function (key, index) {
      var cls = index < order.status ? "is-done" : index === order.status ? "is-now" : "";
      return '<li class="step ' + cls + '"><span class="dot"></span><span><strong>' + esc(bag().statuses[key]) + "</strong><small>" + (index === order.status ? esc(bag().statusNote[key]) : "") + "</small></span></li>";
    }).join("");
    var eta = order.status === 4
      ? esc(bag().delivered)
      : esc(bag().eta) + " " + MINUTES[order.status] + " " + esc(bag().min);
    var driver = order.status === 0
      ? '<p class="muted">' + esc(bag().driverWait) + "</p>"
      : "<strong>" + esc(bag().driverName) + "</strong><span class=\"muted\">" + esc(bag().vehicle) + "</span>";
    var lines = order.lines.map(function (line) {
      return '<div class="line"><span>' + esc(bag().goods[line.id]) + " × " + line.qty + "</span><span>" + esc(money(line.price * line.qty)) + "</span></div>";
    }).join("");
    var nextLabel = order.status >= 4 ? bag().replay : bag().next;
    return shell(
      '<p class="kicker">' + esc(order.id) + "</p>" +
      '<h1 id="screen-title" class="word" style="font-size:24px">' + esc(bag().stores[store.id].name) + "</h1>" +
      '<p class="price">' + eta + "</p>" +
      '<div class="map" aria-hidden="true"><span class="road road-h"></span><span class="road road-v"></span><span class="road road-d"></span>' +
      '<span class="pin pin-store"></span><span class="pin pin-home"></span>' +
      '<span class="pin pin-driver" style="left:' + pin.left + "%;top:" + pin.top + '%"></span></div>' +
      '<ol class="steps">' + steps + "</ol>" +
      '<div class="driver"><small class="muted">' + esc(bag().driver) + "</small>" + driver + "</div>" +
      '<div class="panel"><small class="muted">' + esc(bag().address) + "</small><strong>" + esc(bag().addresses[order.addressId].title) + "</strong>" +
      '<p class="muted" style="margin:8px 0 0">' + esc(bag().items) + "</p>" + lines +
      '<div class="grand line"><span>' + esc(bag().total) + "</span><span>" + esc(money(order.total)) + "</span></div></div>" +
      '<div class="demo-control"><p>' + esc(bag().demoNote) + '</p><button type="button" class="btn" data-action="simulate">' + esc(nextLabel) + "</button></div>",
      "tracking"
    );
  }

  function profileScreen() {
    var rows = state.orders.map(function (order) {
      return '<button type="button" class="order-row" data-action="open-order" data-id="' + order.id + '">' +
        mark(order.storeId) +
        "<span><strong>" + esc(bag().stores[order.storeId].name) + "</strong><small class=\"muted\">" + esc(order.id) + " · " + esc(bag().statuses[STATUSES[order.status]]) + "</small></span>" +
        "<span class=\"price\">" + esc(money(order.total)) + "</span></button>";
    }).join("") || '<p class="muted">' + esc(bag().noOrders) + "</p>";
    return shell(
      '<p class="kicker">' + esc(bag().sample) + "</p>" +
      '<h1 id="screen-title" class="word" style="font-size:24px">' + esc(bag().profileTitle) + "</h1>" +
      '<div class="person"><span class="avatar" aria-hidden="true">NS</span><span><strong>' + esc(bag().person) + '</strong><small class="muted">' + esc(bag().phone) + "</small></span></div>" +
      "<h2 style=\"font-size:15px;margin:16px 0 4px\">" + esc(bag().orders) + "</h2>" + rows,
      "profile"
    );
  }

  function render(options) {
    options = options || {};
    var html = state.screen === "stores" ? storesScreen()
      : state.screen === "location" ? locationScreen()
      : state.screen === "store" ? storeScreen()
      : state.screen === "cart" ? cartScreen()
      : state.screen === "tracking" ? trackingScreen()
      : state.screen === "profile" ? profileScreen()
      : homeScreen();
    var screenChanged = lastScreen !== state.screen;
    lastScreen = state.screen;
    view.innerHTML = html;
    if (pendingFocus) {
      var again = view.querySelector(pendingFocus);
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
    if (screenChanged) {
      var title = view.querySelector("#screen-title");
      if (title) {
        title.setAttribute("tabindex", "-1");
        title.focus({ preventScroll: true });
      }
    }
  }

  function setLine(itemId, dir) {
    var store = storeById(state.storeId);
    if (state.cartStore && state.cartStore !== store.id && countLines(state.lines) && dir > 0) {
      state.swapAsk = store.id;
      state.swapItem = itemId;
      render();
      return;
    }
    state.swapAsk = null;
    state.swapItem = null;
    state.cartStore = store.id;
    var next = (state.lines[itemId] || 0) + dir;
    if (next <= 0) delete state.lines[itemId];
    else state.lines[itemId] = Math.min(12, next);
    if (!countLines(state.lines)) state.cartStore = null;
    if (dir > 0 && next === 1) showToast(bag().added);
    pendingFocus = '[data-action="line"][data-id="' + itemId + '"][data-dir="' + dir + '"]';
    render();
  }

  function placeOrder() {
    var store = storeById(state.cartStore);
    if (!countLines(state.lines)) return;
    state.seq += 1;
    var goods = subtotal(store, state.lines);
    var order = {
      id: "NL-" + state.seq,
      storeId: store.id,
      addressId: state.addressId,
      status: 0,
      fee: store.fee,
      total: goods + store.fee + SERVICE,
      lines: Object.keys(state.lines).map(function (id) {
        return { id: id, qty: state.lines[id], price: itemPrice(store, id) };
      })
    };
    state.orders.unshift(order);
    state.trackId = order.id;
      state.lines = {};
      state.cartStore = null;
      state.stack = [];
      state.screen = "tracking";
      render();
  }

  function go(screen) {
    state.stack.push(state.screen);
    state.screen = screen;
    render();
  }

  function back() {
    state.screen = state.stack.length ? state.stack.pop() : "home";
    render();
  }

  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button || !root.contains(button)) return;
    var action = button.getAttribute("data-action");
    if (action === "tab") {
      state.stack = [];
      state.screen = button.getAttribute("data-screen");
      state.swapAsk = null;
      render();
    } else if (action === "go") {
      go(button.getAttribute("data-screen"));
    } else if (action === "cat") {
      state.cat = button.getAttribute("data-cat");
      if (state.screen !== "stores") go("stores");
      else render();
    } else if (action === "store") {
      state.storeId = button.getAttribute("data-id");
      state.swapAsk = null;
      go("store");
    } else if (action === "location") {
      go("location");
    } else if (action === "use-address" || action === "back") {
      back();
    } else if (action === "line") {
      setLine(button.getAttribute("data-id"), Number(button.getAttribute("data-dir")));
    } else if (action === "replace") {
      var nextItem = state.swapItem;
      state.lines = {};
      state.cartStore = state.storeId;
      if (nextItem) state.lines[nextItem] = 1;
      state.swapAsk = null;
      state.swapItem = null;
      render();
    } else if (action === "keep") {
      state.swapAsk = null;
      state.swapItem = null;
      render();
    } else if (action === "place") {
      placeOrder();
    } else if (action === "simulate") {
      var order = currentOrder();
      if (!order) return;
      order.status = order.status >= 4 ? 0 : order.status + 1;
      pendingFocus = '[data-action="simulate"]';
      render();
    } else if (action === "open-order") {
      state.trackId = button.getAttribute("data-id");
      state.stack = [];
      state.screen = "tracking";
      render();
    } else if (action === "clear") {
      state.query = "";
      render();
    }
  });

  view.addEventListener("change", function (event) {
    if (event.target.name === "address") state.addressId = event.target.value;
  });

  view.addEventListener("input", function (event) {
    if (event.target.id !== "q") return;
    state.query = event.target.value;
    state.caret = event.target.selectionStart;
    render({ keepFocus: true });
  });

  view.addEventListener("submit", function (event) {
    event.preventDefault();
    if (state.screen === "home") {
      state.screen = "stores";
      render({ keepFocus: true });
    }
  });

  document.addEventListener("kodama:preferences", function (event) {
    if (event.detail && event.detail.type === "lang") render();
  });

  render();
})();
