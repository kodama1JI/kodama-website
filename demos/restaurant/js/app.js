(function () {
  "use strict";

  var ITEMS = [
    { id: "hearth-burger", cat: "burgers", price: 14.5, featured: true, popular: true },
    { id: "smoked-cheese", cat: "burgers", price: 15.5, popular: true },
    { id: "garden-burger", cat: "burgers", price: 13.5 },
    { id: "margherita", cat: "pizza", price: 16, featured: true, popular: true },
    { id: "pepperoni", cat: "pizza", price: 17.5 },
    { id: "truffle-pasta", cat: "pasta", price: 18.5, featured: true },
    { id: "tomato-pasta", cat: "pasta", price: 15, popular: true },
    { id: "citrus-salad", cat: "salads", price: 12 },
    { id: "grain-bowl", cat: "salads", price: 13.5, popular: true },
    { id: "citrus-soda", cat: "drinks", price: 4.5 },
    { id: "iced-coffee", cat: "drinks", price: 5, popular: true },
    { id: "olive-cake", cat: "desserts", price: 8, featured: true },
    { id: "dark-chocolate", cat: "desserts", price: 7.5 }
  ];

  var CATS = ["burgers", "pizza", "pasta", "salads", "drinks", "desserts"];
  var FREE_AT = 40;
  var DELIVERY = 2.5;

  var COPY = {
    en: {
      brand: "Hearth",
      tagline: "Wood-fired plates, served simply.",
      greetMorning: "Good morning",
      greetAfternoon: "Good afternoon",
      greetEvening: "Good evening",
      search: "Search the menu",
      featured: "Featured",
      categories: "Categories",
      popular: "Popular now",
      seeMenu: "Full menu",
      results: "Results",
      noResults: "Nothing matches that search.",
      navHome: "Home",
      navMenu: "Menu",
      navCart: "Cart",
      navLabel: "Restaurant sections",
      all: "All",
      cats: { burgers: "Burgers", pizza: "Pizza", pasta: "Pasta", salads: "Salads", drinks: "Drinks", desserts: "Desserts" },
      add: "Add to cart",
      added: "Added to cart",
      viewCart: "View cart",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
      quantity: "Quantity",
      back: "Back",
      yourCart: "Your cart",
      emptyTitle: "Your cart is empty",
      emptyCopy: "Add a dish from the menu. This demo keeps the order on this device only.",
      browse: "Browse the menu",
      subtotal: "Subtotal",
      delivery: "Delivery",
      free: "Free",
      total: "Total",
      checkout: "Place sample order",
      freeHint: "Add {amount} for free delivery.",
      confirmTitle: "Order placed",
      confirmCopy: "This is a sample confirmation. Nothing was sent to a kitchen or a payment service.",
      orderNo: "Order",
      etaLabel: "Estimated ready",
      etaValue: "25–35 min",
      items: "Items",
      backHome: "Back to home",
      clear: "Clear search",
      dishes: {
        "hearth-burger": { name: "Hearth Burger", desc: "Beef patty, house sauce, lettuce, and a toasted bun." },
        "smoked-cheese": { name: "Smoked Cheese Burger", desc: "Aged cheese, smoked onion, and a darker bun." },
        "garden-burger": { name: "Garden Burger", desc: "Grilled vegetable patty with herbs and a soft bun." },
        margherita: { name: "Margherita", desc: "Tomato, mozzarella, and basil on a wood-fired crust." },
        pepperoni: { name: "Pepperoni", desc: "Tomato, mozzarella, and cupped pepperoni." },
        "truffle-pasta": { name: "Truffle Pasta", desc: "Fresh pasta with a light truffle cream." },
        "tomato-pasta": { name: "Tomato Pasta", desc: "Slow tomato sauce, olive oil, and basil." },
        "citrus-salad": { name: "Citrus Salad", desc: "Leaves, orange, and a sharp vinaigrette." },
        "grain-bowl": { name: "Grain Bowl", desc: "Warm grains, greens, and a lemon dressing." },
        "citrus-soda": { name: "Citrus Soda", desc: "Sparkling soda with orange and a pinch of salt." },
        "iced-coffee": { name: "Iced Coffee", desc: "Chilled coffee over ice, unsweetened." },
        "olive-cake": { name: "Olive Oil Cake", desc: "A small citrus cake finished with olive oil." },
        "dark-chocolate": { name: "Dark Chocolate" , desc: "A dense slice with a soft center." }
      }
    },
    ar: {
      brand: "هيرث",
      tagline: "أطباق على الحطب، بتقديم بسيط.",
      greetMorning: "صباح الخير",
      greetAfternoon: "طاب يومك",
      greetEvening: "مساء الخير",
      search: "ابحث في القائمة",
      featured: "مختارات",
      categories: "التصنيفات",
      popular: "الأكثر طلباً",
      seeMenu: "القائمة كاملة",
      results: "النتائج",
      noResults: "لا توجد نتائج لهذا البحث.",
      navHome: "الرئيسية",
      navMenu: "القائمة",
      navCart: "السلة",
      navLabel: "أقسام المطعم",
      all: "الكل",
      cats: { burgers: "برغر", pizza: "بيتزا", pasta: "باستا", salads: "سلطات", drinks: "مشروبات", desserts: "حلويات" },
      add: "أضف إلى السلة",
      added: "أُضيف إلى السلة",
      viewCart: "عرض السلة",
      decrease: "إنقاص الكمية",
      increase: "زيادة الكمية",
      quantity: "الكمية",
      back: "رجوع",
      yourCart: "سلتك",
      emptyTitle: "السلة فارغة",
      emptyCopy: "أضف طبقاً من القائمة. هذا العرض يُبقي الطلب على هذا الجهاز فقط.",
      browse: "تصفح القائمة",
      subtotal: "المجموع الفرعي",
      delivery: "التوصيل",
      free: "مجاناً",
      total: "الإجمالي",
      checkout: "تأكيد طلب تجريبي",
      freeHint: "أضف {amount} للتوصيل المجاني.",
      confirmTitle: "تم تسجيل الطلب",
      confirmCopy: "هذا تأكيد تجريبي. لم يُرسل شيء إلى مطبخ أو إلى خدمة دفع.",
      orderNo: "الطلب",
      etaLabel: "الوقت المتوقع",
      etaValue: "٢٥–٣٥ د",
      items: "الأصناف",
      backHome: "العودة للرئيسية",
      clear: "مسح البحث",
      dishes: {
        "hearth-burger": { name: "برغر هيرث", desc: "شريحة لحم، صلصة المنزل، خس، وخبز محمّص." },
        "smoked-cheese": { name: "برغر الجبن المدخن", desc: "جبن معتّق، بصل مدخن، وخبز أغمق." },
        "garden-burger": { name: "برغر الحديقة", desc: "شريحة خضار مشوية مع أعشاب وخبز طري." },
        margherita: { name: "مارغريتا", desc: "طماطم وموتزاريلا وريحان على عجينة الحطب." },
        pepperoni: { name: "بيبروني", desc: "طماطم وموتزاريلا وشرائح بيبروني." },
        "truffle-pasta": { name: "باستا الكمأة", desc: "باستا طازجة بكريمة كمأة خفيفة." },
        "tomato-pasta": { name: "باستا الطماطم", desc: "صلصة طماطم بطيئة وزيت زيتون وريحان." },
        "citrus-salad": { name: "سلطة الحمضيات", desc: "أوراق وبرتقال وصلصة حادة." },
        "grain-bowl": { name: "وعاء الحبوب", desc: "حبوب دافئة وخضار وصوص ليمون." },
        "citrus-soda": { name: "صودا الحمضيات", desc: "صودا فوارة بالبرتقال ورشة ملح." },
        "iced-coffee": { name: "قهوة مثلجة", desc: "قهوة باردة على الثلج، بلا سكر." },
        "olive-cake": { name: "كعكة زيت الزيتون", desc: "كعكة حمضيات صغيرة تُنهى بزيت الزيتون." },
        "dark-chocolate": { name: "شوكولاتة داكنة", desc: "شريحة كثيفة بقلب طري." }
      }
    }
  };

  var state = {
    screen: "home",
    cat: "all",
    query: "",
    productId: null,
    from: "home",
    draftQty: 1,
    cart: [],
    order: null,
    seq: 4821
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

  function text(path) {
    var node = COPY[lang()];
    var parts = path.split(".");
    var i;
    for (i = 0; i < parts.length; i += 1) {
      if (!node || typeof node !== "object") return path;
      node = node[parts[i]];
    }
    return typeof node === "string" ? node : path;
  }

  function dish(id) {
    return COPY[lang()].dishes[id];
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
      home: '<path d="M4 10.5 12 4l8 6.5V20h-5.5v-6h-5v6H4V10.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
      menu: '<path d="M5 7h14M5 12h14M5 17h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      bag: '<path d="M6.5 8h11l-.8 11.2a1 1 0 0 1-1 .8H8.3a1 1 0 0 1-1-.8L6.5 8z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 8V7a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" stroke-width="1.6"/>',
      search: '<circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m15.5 15.5 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      back: '<path d="M14.5 6 8.5 12l6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
      plus: '<path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      minus: '<path d="M6 12h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      check: '<path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
      close: '<path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      burger: '<path d="M5 10c1-4 4-6 7-6s6 2 7 6H5zM4 13h16M5 16c1 2 4 3 7 3s6-1 7-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
      pizza: '<path d="M12 4 5 18h14L12 4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
      pasta: '<path d="M5 9c3 2 4-2 7 0s4 2 7 0M5 13c3-2 4 2 7 0s4-2 7 0M7 17h10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
      salad: '<circle cx="12" cy="13" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 11c1-3 3-3 4 0 1-3 3-2 4 1" fill="none" stroke="currentColor" stroke-width="1.5"/>',
      drink: '<path d="M8 5h8l1 12a4 4 0 0 1-4 3 4 4 0 0 1-4-3L8 5z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
      dessert: '<path d="M6 14h12l-1 4H7l-1-4zM7 10h10l-1 4H8L7 10z" fill="none" stroke="currentColor" stroke-width="1.5"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + paths[name] + "</svg>";
  }

  function product(id) {
    var i;
    for (i = 0; i < ITEMS.length; i += 1) {
      if (ITEMS[i].id === id) return ITEMS[i];
    }
    return null;
  }

  function art(id, alt) {
    var label = alt ? esc(alt) : "";
    return '<img src="assets/' + id + '.svg" alt="' + label + '" width="240" height="168" decoding="async">';
  }

  function greeting() {
    var hour = new Date().getHours();
    if (hour < 12) return text("greetMorning");
    if (hour < 17) return text("greetAfternoon");
    return text("greetEvening");
  }

  function clock() {
    return new Intl.DateTimeFormat(lang() === "ar" ? "ar" : "en", {
      hour: "numeric",
      minute: "2-digit"
    }).format(new Date());
  }

  function cartCount() {
    return state.cart.reduce(function (sum, line) { return sum + line.qty; }, 0);
  }

  function lineQty(id) {
    var i;
    for (i = 0; i < state.cart.length; i += 1) {
      if (state.cart[i].id === id) return state.cart[i].qty;
    }
    return 0;
  }

  function setQty(id, qty) {
    state.cart = state.cart.filter(function (line) { return line.id !== id; });
    if (qty > 0) state.cart.push({ id: id, qty: qty });
  }

  function subtotal() {
    return state.cart.reduce(function (sum, line) {
      var item = product(line.id);
      return sum + (item ? item.price * line.qty : 0);
    }, 0);
  }

  function deliveryFee(amount) {
    if (amount <= 0) return 0;
    return amount >= FREE_AT ? 0 : DELIVERY;
  }

  function matches(item) {
    var q = state.query.trim().toLowerCase();
    if (!q) return true;
    var info = dish(item.id);
    var blob = (info.name + " " + info.desc + " " + text("cats." + item.cat)).toLowerCase();
    return blob.indexOf(q) !== -1;
  }

  function visibleItems() {
    return ITEMS.filter(function (item) {
      var catOk = state.cat === "all" || item.cat === state.cat;
      return catOk && matches(item);
    });
  }

  function showToast(message, actionLabel, actionScreen) {
    var button = actionScreen
      ? '<button type="button" data-action="nav" data-screen="' + actionScreen + '">' + esc(actionLabel) + "</button>"
      : "";
    toastEl.innerHTML = "<span>" + esc(message) + "</span>" + button;
    toastEl.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.hidden = true; }, 2400);
  }

  function qtyControl(id, qty, mode) {
    return (
      '<div class="qty" role="group" aria-label="' + esc(text("quantity")) + '">' +
        '<button type="button" data-action="qty" data-mode="' + mode + '" data-id="' + id + '" data-dir="-1" aria-label="' + esc(text("decrease")) + '">' + icon("minus") + "</button>" +
        "<strong>" + qty + "</strong>" +
        '<button type="button" data-action="qty" data-mode="' + mode + '" data-id="' + id + '" data-dir="1" aria-label="' + esc(text("increase")) + '">' + icon("plus") + "</button>" +
      "</div>"
    );
  }

  function statusbar() {
    return '<div class="statusbar"><span>' + esc(clock()) + "</span><span>" + esc(text("brand")) + "</span></div>";
  }

  function searchForm() {
    var clear = state.query
      ? '<button class="icon-btn" type="button" data-action="clear" aria-label="' + esc(text("clear")) + '">' + icon("close") + "</button>"
      : "";
    return (
      '<form class="search" role="search">' +
        '<label class="sr-only" for="q">' + esc(text("search")) + "</label>" +
        icon("search") +
        '<input id="q" type="search" autocomplete="off" placeholder="' + esc(text("search")) + '" value="' + esc(state.query) + '">' +
        clear +
      "</form>"
    );
  }

  function dishButton(item, featured) {
    var info = dish(item.id);
    if (featured) {
      return (
        '<button type="button" class="feature" data-action="open" data-id="' + item.id + '">' +
          art(item.id, "") +
          '<span class="feature-copy"><span class="feature-name">' + esc(info.name) + '</span><span class="price">' + esc(money(item.price)) + "</span></span>" +
        "</button>"
      );
    }
    return (
      '<button type="button" class="dish" data-action="open" data-id="' + item.id + '">' +
        '<span class="row-art">' + art(item.id, "") + "</span>" +
        '<span class="row-copy"><span class="row-name">' + esc(info.name) + '</span><span class="muted">' + esc(text("cats." + item.cat)) + "</span></span>" +
        '<span class="price">' + esc(money(item.price)) + "</span>" +
      "</button>"
    );
  }

  function homeScreen() {
    var featured = ITEMS.filter(function (item) { return item.featured && matches(item); });
    var popular = ITEMS.filter(function (item) { return item.popular && matches(item); });
    var queryOn = state.query.trim().length > 0;
    var cats = CATS.map(function (cat) {
      return (
        '<button type="button" class="cat" data-action="cat" data-cat="' + cat + '">' +
          icon(cat === "burgers" ? "burger" : cat === "pizza" ? "pizza" : cat === "pasta" ? "pasta" : cat === "salads" ? "salad" : cat === "drinks" ? "drink" : "dessert") +
          "<span>" + esc(text("cats." + cat)) + "</span>" +
        "</button>"
      );
    }).join("");
    var body = statusbar() +
      '<p class="greet">' + esc(greeting()) + "</p>" +
      '<h1 class="brand">' + esc(text("brand")) + "</h1>" +
      '<p class="tagline">' + esc(text("tagline")) + "</p>" +
      searchForm() +
      '<div class="section-label"><h2>' + esc(text("categories")) + "</h2></div>" +
      '<div class="cats">' + cats + "</div>";

    if (queryOn) {
      var found = ITEMS.filter(matches);
      body += '<div class="section-label"><h2>' + esc(text("results")) + "</h2></div>";
      body += found.length ? found.map(function (item) { return dishButton(item, false); }).join("") : '<p class="muted">' + esc(text("noResults")) + "</p>";
    } else {
      body += '<div class="section-label"><h2>' + esc(text("featured")) + "</h2>" +
        '<button type="button" class="linkish" data-action="nav" data-screen="menu">' + esc(text("seeMenu")) + "</button></div>";
      body += '<div class="scroller">' + featured.map(function (item) { return dishButton(item, true); }).join("") + "</div>";
      body += '<div class="section-label"><h2>' + esc(text("popular")) + "</h2></div>";
      body += popular.map(function (item) { return dishButton(item, false); }).join("");
    }
    return shell(body, "home");
  }

  function menuScreen() {
    var chips = '<button type="button" class="chip' + (state.cat === "all" ? " is-on" : "") + '" data-action="cat" data-cat="all">' + esc(text("all")) + "</button>" +
      CATS.map(function (cat) {
        return '<button type="button" class="chip' + (state.cat === cat ? " is-on" : "") + '" data-action="cat" data-cat="' + cat + '">' + esc(text("cats." + cat)) + "</button>";
      }).join("");
    var list = visibleItems();
    var groups = "";
    if (!list.length) {
      groups = '<p class="muted">' + esc(text("noResults")) + "</p>";
    } else if (state.cat === "all" && !state.query.trim()) {
      CATS.forEach(function (cat) {
        var rows = list.filter(function (item) { return item.cat === cat; });
        if (!rows.length) return;
        groups += '<p class="group-label">' + esc(text("cats." + cat)) + "</p>";
        groups += rows.map(function (item) { return dishButton(item, false); }).join("");
      });
    } else {
      groups = list.map(function (item) { return dishButton(item, false); }).join("");
    }
    var body = statusbar() +
      '<div class="screen-head"><h1 id="screen-title">' + esc(text("navMenu")) + "</h1></div>" +
      searchForm() +
      '<div class="chips">' + chips + "</div>" +
      groups;
    return shell(body, "menu");
  }

  function productScreen() {
    var item = product(state.productId) || ITEMS[0];
    var info = dish(item.id);
    var body =
      '<div class="screen-head"><button type="button" class="back" data-action="back" aria-label="' + esc(text("back")) + '">' + icon("back") + "</button>" +
      '<h1 id="screen-title">' + esc(info.name) + "</h1></div>" +
      '<div class="detail"><div class="detail-art">' + art(item.id, info.name) + "</div>" +
      '<p class="price">' + esc(money(item.price)) + "</p>" +
      '<p class="desc">' + esc(info.desc) + "</p>" +
      '<div class="detail-row"><span class="muted">' + esc(text("quantity")) + "</span>" + qtyControl(item.id, state.draftQty, "draft") + "</div></div>";
    var dock = '<div class="dock"><button type="button" class="btn-app" data-action="add" data-id="' + item.id + '">' + esc(text("add")) + " · " + esc(money(item.price * state.draftQty)) + "</button></div>";
    return shell(body, "", dock);
  }

  function cartScreen() {
    var amount = subtotal();
    var fee = deliveryFee(amount);
    var body = statusbar() + '<div class="screen-head"><h1 id="screen-title">' + esc(text("yourCart")) + "</h1></div>";
    if (!state.cart.length) {
      body += '<div class="empty"><h2>' + esc(text("emptyTitle")) + "</h2><p class=\"muted\">" + esc(text("emptyCopy")) + "</p></div>";
      body += '<button type="button" class="btn-app" data-action="nav" data-screen="menu">' + esc(text("browse")) + "</button>";
      return shell(body, "cart");
    }
    body += state.cart.map(function (line) {
      var item = product(line.id);
      var info = dish(line.id);
      return (
        '<div class="cart-line">' +
          art(line.id, "") +
          '<div><div class="cart-top"><div><strong>' + esc(info.name) + '</strong><p class="muted">' + esc(money(item.price)) + "</p></div>" +
          "<strong>" + esc(money(item.price * line.qty)) + "</strong></div>" +
          qtyControl(line.id, line.qty, "cart") +
        "</div>"
      );
    }).join("");
    var hint = fee > 0 ? '<p class="hint">' + esc(text("freeHint").replace("{amount}", money(FREE_AT - amount))) + "</p>" : "";
    body += '<div class="totals">' +
      "<div><span>" + esc(text("subtotal")) + "</span><span>" + esc(money(amount)) + "</span></div>" +
      "<div><span>" + esc(text("delivery")) + "</span><span>" + esc(fee === 0 ? text("free") : money(fee)) + "</span></div>" +
      '<div class="grand"><span>' + esc(text("total")) + "</span><span>" + esc(money(amount + fee)) + "</span></div>" +
      "</div>" + hint +
      '<button type="button" class="btn-app" data-action="checkout" style="margin-top:14px">' + esc(text("checkout")) + "</button>";
    return shell(body, "cart");
  }

  function confirmScreen() {
    var order = state.order;
    if (!order) return homeScreen();
    var rows = order.lines.map(function (line) {
      return "<li><span>" + esc(dish(line.id).name) + " × " + line.qty + "</span><span>" + esc(money(line.price * line.qty)) + "</span></li>";
    }).join("");
    var body =
      '<div class="confirm">' +
        '<div class="check">' + icon("check") + "</div>" +
        '<h1 id="screen-title">' + esc(text("confirmTitle")) + "</h1>" +
        '<p class="order-no">' + esc(text("orderNo")) + " " + esc(order.number) + "</p>" +
        '<p class="muted">' + esc(text("confirmCopy")) + "</p>" +
        '<div class="summary"><p class="muted">' + esc(text("etaLabel")) + "</p><strong>" + esc(text("etaValue")) + "</strong>" +
        '<p class="group-label">' + esc(text("items")) + "</p><ul>" + rows + "</ul>" +
        '<div class="totals"><div class="grand"><span>' + esc(text("total")) + "</span><span>" + esc(money(order.total)) + "</span></div></div></div>" +
        '<button type="button" class="btn-app" data-action="nav" data-screen="home" style="margin-top:16px">' + esc(text("backHome")) + "</button>" +
      "</div>";
    return shell(statusbar() + body, "");
  }

  function tabbar(current) {
    if (!current) return "";
    var count = cartCount();
    function tab(screen, name, label) {
      var currentAttr = current === screen ? ' aria-current="page"' : "";
      var badge = screen === "cart" && count ? '<span class="tab-badge">' + count + "</span>" : "";
      var aria = label + (screen === "cart" && count ? " (" + count + ")" : "");
      return '<button type="button" class="tab" data-action="nav" data-screen="' + screen + '"' + currentAttr + ' aria-label="' + esc(aria) + '">' + icon(name) + badge + "<span>" + esc(label) + "</span></button>";
    }
    return '<nav class="tabbar" aria-label="' + esc(text("navLabel")) + '">' +
      tab("home", "home", text("navHome")) +
      tab("menu", "menu", text("navMenu")) +
      tab("cart", "bag", text("navCart")) +
      "</nav>";
  }

  function shell(body, tab, dock) {
    return '<div class="app"><div class="app-scroll">' + body + "</div>" + (dock || tabbar(tab)) + "</div>";
  }

  function render(options) {
    options = options || {};
    var html = state.screen === "menu" ? menuScreen()
      : state.screen === "product" ? productScreen()
      : state.screen === "cart" ? cartScreen()
      : state.screen === "confirm" ? confirmScreen()
      : homeScreen();
    view.innerHTML = html;
    var screenChanged = lastScreen !== state.screen;
    lastScreen = state.screen;
    if (pendingFocus) {
      var again = view.querySelector(pendingFocus);
      pendingFocus = "";
      if (again) again.focus();
      return;
    }
    if (options.keepFocus) {
      var field = document.getElementById("q");
      if (field) {
        var pos = state.caret == null ? field.value.length : state.caret;
        field.focus();
        field.setSelectionRange(pos, pos);
      }
      return;
    }
    if (screenChanged) {
      var title = view.querySelector("#screen-title, h1");
      if (title) {
        title.setAttribute("tabindex", "-1");
        title.focus({ preventScroll: true });
      }
    }
  }

  function checkout() {
    if (!state.cart.length) return;
    var amount = subtotal();
    var fee = deliveryFee(amount);
    state.seq += 1;
    state.order = {
      number: "HR-" + state.seq,
      lines: state.cart.map(function (line) {
        return { id: line.id, qty: line.qty, price: product(line.id).price };
      }),
      total: amount + fee
    };
    state.cart = [];
    state.screen = "confirm";
    render();
  }

  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button || !root.contains(button)) return;
    var action = button.getAttribute("data-action");
    if (action === "nav") {
      state.screen = button.getAttribute("data-screen");
      if (state.screen === "menu") state.cat = state.cat || "all";
      render();
    } else if (action === "cat") {
      state.cat = button.getAttribute("data-cat");
      state.screen = "menu";
      render();
    } else if (action === "open") {
      state.productId = button.getAttribute("data-id");
      state.from = state.screen === "menu" ? "menu" : "home";
      state.draftQty = 1;
      state.screen = "product";
      render();
    } else if (action === "back") {
      state.screen = state.from || "home";
      render();
    } else if (action === "qty") {
      var dir = Number(button.getAttribute("data-dir"));
      var id = button.getAttribute("data-id");
      if (button.getAttribute("data-mode") === "draft") {
        state.draftQty = Math.max(1, Math.min(20, state.draftQty + dir));
      } else {
        setQty(id, Math.max(0, Math.min(20, lineQty(id) + dir)));
      }
      pendingFocus = '[data-action="qty"][data-mode="' + button.getAttribute("data-mode") + '"][data-id="' + id + '"][data-dir="' + dir + '"]';
      render();
    } else if (action === "add") {
      var itemId = button.getAttribute("data-id");
      setQty(itemId, Math.min(20, lineQty(itemId) + state.draftQty));
      showToast(text("added"), text("viewCart"), "cart");
      render();
    } else if (action === "checkout") {
      checkout();
    } else if (action === "clear") {
      state.query = "";
      render();
    }
  });

  view.addEventListener("input", function (event) {
    if (event.target.id !== "q") return;
    state.query = event.target.value;
    state.caret = event.target.selectionStart;
    render({ keepFocus: true });
  });

  view.addEventListener("submit", function (event) {
    event.preventDefault();
    if (state.screen !== "menu") {
      state.screen = "menu";
      render({ keepFocus: true });
    }
  });

  document.addEventListener("kodama:preferences", function (event) {
    if (event.detail && event.detail.type === "lang") render();
  });

  render();
})();
