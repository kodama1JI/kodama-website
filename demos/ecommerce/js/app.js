(function () {
  "use strict";

  var SHIP = 12;
  var FREE_AT = 150;
  var CATS = ["all", "fashion", "home", "tech", "everyday"];
  var PRODUCTS = [
    { id: "coat", cat: "fashion", price: 248, rating: 4.8, reviews: 36, colors: ["ink", "sand", "olive"], sizes: ["XS", "S", "M", "L"], featured: true },
    { id: "lamp", cat: "home", price: 164, rating: 4.6, reviews: 18, colors: ["clay", "ivory"], sizes: [], featured: true },
    { id: "throw", cat: "home", price: 96, rating: 4.7, reviews: 22, colors: ["wool", "moss"], sizes: [], featured: true },
    { id: "case", cat: "fashion", price: 72, rating: 4.5, reviews: 41, colors: ["tan", "black"], sizes: [], featured: false },
    { id: "speaker", cat: "tech", price: 189, rating: 4.4, reviews: 27, colors: ["graphite", "stone"], sizes: [], featured: true },
    { id: "bottle", cat: "everyday", price: 42, rating: 4.3, reviews: 53, colors: ["mist", "stone"], sizes: [], featured: false },
    { id: "scarf", cat: "fashion", price: 88, rating: 4.9, reviews: 15, colors: ["wine", "cream"], sizes: [], featured: false },
    { id: "clock", cat: "tech", price: 120, rating: 4.6, reviews: 19, colors: ["brass", "slate"], sizes: [], featured: false }
  ];
  var TONES = {
    ink: ["#1c1917", "#e07a64", "#f6f1ea"],
    sand: ["#e6d3bf", "#8a5a3a", "#2a211c"],
    olive: ["#3d4636", "#d7c4a3", "#f4efe6"],
    clay: ["#c46a4a", "#f3e6d8", "#2a1c16"],
    ivory: ["#f4efe8", "#1c1917", "#e07a64"],
    wool: ["#6d5344", "#efe4d4", "#1c1917"],
    moss: ["#3f5344", "#d5cbb8", "#f7f3ee"],
    tan: ["#c4a574", "#2a211c", "#f6f1ea"],
    black: ["#141210", "#d8d2cc", "#e07a64"],
    graphite: ["#2c3338", "#9fd3c7", "#f4f7f6"],
    stone: ["#d9d3cb", "#5c6b73", "#1c1917"],
    mist: ["#e7eef0", "#1d4e5f", "#e07a64"],
    wine: ["#6e2433", "#f0d5c8", "#f8f1ea"],
    cream: ["#f7f1e8", "#6e2433", "#1c1917"],
    brass: ["#c6a15b", "#1c1917", "#f6f1ea"],
    slate: ["#3a4450", "#e7d7c1", "#f4efe8"]
  };

  var COPY = {
    en: {
      home: "Home", shop: "Shop", wish: "Wishlist", cart: "Cart", search: "Search products",
      menu: "Open menu", close: "Close", heroK: "Autumn edit",
      heroT: "Objects for a quieter room.",
      heroC: "A sample collection of clothing, home pieces, and small tools. Prices are fictional.",
      shopNow: "Shop the edit", featured: "Featured", categories: "Categories", arrivals: "New arrivals",
      promoT: "Complimentary sample shipping", promoC: "Shown after $150 in this demo. Nothing is shipped.",
      filters: "Filters", sort: "Sort", featuredSort: "Featured", low: "Price, low", high: "Price, high", top: "Top rated",
      price: "Price", priceAll: "Any price", priceLow: "Under $100", priceMid: "$100–$200", priceHigh: "Over $200",
      count: "{n} pieces", results: "Results for “{q}”", none: "No pieces match.", clear: "Clear search",
      back: "Back", add: "Add to cart", added: "Added to cart", save: "Save", saved: "Saved",
      remove: "Remove", qty: "Quantity", size: "Size", color: "Color", reviews: "reviews",
      related: "Also in this edit", emptyCart: "Your cart is empty", emptyCartC: "Add a sample piece from the shop.",
      emptyWish: "Nothing saved yet", emptyWishC: "Save pieces from a product page. This list stays in the browser.",
      move: "Move to cart", subtotal: "Subtotal", shipping: "Shipping", free: "Included", total: "Total",
      checkout: "Checkout", continue: "Continue browsing",
      checkT: "Checkout", name: "Name", email: "Email", address: "Address", city: "City", country: "Country",
      pay: "Payment method", card: "Sample card", transfer: "Sample transfer",
      payNote: "These options are visual only. No card is charged.",
      place: "Place sample order", need: "This field is required.", badEmail: "Enter an email address.",
      confirmT: "Order placed in this demo", confirmC: "No payment was taken and nothing will be delivered.",
      order: "Order", eta: "Estimated window", etaVal: "4–6 sample days", items: "Items",
      countries: ["Jordan", "United Arab Emirates", "United States", "United Kingdom", "Germany"],
      cats: { all: "All", fashion: "Fashion", home: "Home", tech: "Tools", everyday: "Everyday" },
      colors: { ink: "Ink", sand: "Sand", olive: "Olive", clay: "Clay", ivory: "Ivory", wool: "Wool", moss: "Moss", tan: "Tan", black: "Black", graphite: "Graphite", stone: "Stone", mist: "Mist", wine: "Wine", cream: "Cream", brass: "Brass", slate: "Slate" },
      goods: {
        coat: ["Linen coat", "A long coat with a clean shoulder."],
        lamp: ["Ceramic lamp", "A small lamp in a matte glaze."],
        throw: ["Wool throw", "A heavy throw for a chair or bed."],
        case: ["Leather card case", "Holds a few cards, nothing more."],
        speaker: ["Table speaker", "A compact speaker for one room."],
        bottle: ["Stone bottle", "A daily bottle with a quiet profile."],
        scarf: ["Silk scarf", "A square scarf with a deep edge."],
        clock: ["Desk clock", "A brass-faced clock for a desk."]
      }
    },
    ar: {
      home: "الرئيسية", shop: "المتجر", wish: "الأمنيات", cart: "السلة", search: "ابحث عن منتج",
      menu: "فتح القائمة", close: "إغلاق", heroK: "تشكيلة الخريف",
      heroT: "قطع لغرفة أهدأ.",
      heroC: "مجموعة تجريبية من الملابس وقطع المنزل والأدوات الصغيرة. الأسعار وهمية.",
      shopNow: "تسوق التشكيلة", featured: "مختارات", categories: "التصنيفات", arrivals: "وصل حديثاً",
      promoT: "شحن تجريبي بلا رسوم", promoC: "يظهر بعد 150$ في هذا العرض. لا يُشحن شيء فعلياً.",
      filters: "تصفية", sort: "ترتيب", featuredSort: "مختارات", low: "السعر، الأقل", high: "السعر، الأعلى", top: "الأعلى تقييماً",
      price: "السعر", priceAll: "كل الأسعار", priceLow: "أقل من 100$", priceMid: "100–200$", priceHigh: "أكثر من 200$",
      count: "{n} قطع", results: "نتائج «{q}»", none: "لا توجد قطع مطابقة.", clear: "مسح البحث",
      back: "رجوع", add: "أضف إلى السلة", added: "أُضيف إلى السلة", save: "حفظ", saved: "محفوظ",
      remove: "إزالة", qty: "الكمية", size: "المقاس", color: "اللون", reviews: "تقييمات",
      related: "من التشكيلة نفسها", emptyCart: "سلتك فارغة", emptyCartC: "أضف قطعة تجريبية من المتجر.",
      emptyWish: "لا يوجد محفوظات", emptyWishC: "احفظ قطعاً من صفحة المنتج. تبقى القائمة في هذا المتصفح.",
      move: "انقل إلى السلة", subtotal: "المجموع", shipping: "الشحن", free: "مشمول", total: "الإجمالي",
      checkout: "إتمام الطلب", continue: "متابعة التصفح",
      checkT: "إتمام الطلب", name: "الاسم", email: "البريد", address: "العنوان", city: "المدينة", country: "البلد",
      pay: "طريقة الدفع", card: "بطاقة تجريبية", transfer: "تحويل تجريبي",
      payNote: "هذه الخيارات شكلية فقط. لا تُخصم أي بطاقة.",
      place: "تأكيد طلب تجريبي", need: "هذا الحقل مطلوب.", badEmail: "أدخل بريداً إلكترونياً.",
      confirmT: "سُجّل الطلب داخل العرض", confirmC: "لم يُؤخذ أي دفع ولن يُسلَّم شيء.",
      order: "الطلب", eta: "المدة التقديرية", etaVal: "4–6 أيام تجريبية", items: "القطع",
      countries: ["الأردن", "الإمارات", "الولايات المتحدة", "المملكة المتحدة", "ألمانيا"],
      cats: { all: "الكل", fashion: "أزياء", home: "المنزل", tech: "أدوات", everyday: "يومي" },
      colors: { ink: "حبري", sand: "رملي", olive: "زيتوني", clay: "طيني", ivory: "عاجي", wool: "صوفي", moss: "طحلب", tan: "أسمر", black: "أسود", graphite: "غرافيت", stone: "حجري", mist: "ضباب", wine: "خمري", cream: "كريمي", brass: "نحاسي", slate: "رمادي" },
      goods: {
        coat: ["معطف كتّان", "معطف طويل بكتف نظيف."],
        lamp: ["مصباح خزفي", "مصباح صغير بطلاء مطفي."],
        throw: ["بطانية صوف", "بطانية ثقيلة للكرسي أو السرير."],
        case: ["حافظة بطاقات جلدية", "تتسع لبضع بطاقات فقط."],
        speaker: ["سماعة طاولة", "سماعة صغيرة لغرفة واحدة."],
        bottle: ["قارورة حجرية", "قارورة يومية بهيئة هادئة."],
        scarf: ["وشاح حرير", "وشاح مربّع بحافة عميقة."],
        clock: ["ساعة مكتب", "ساعة بوجه نحاسي للمكتب."]
      }
    }
  };

  var root = document.getElementById("app");
  var state = {
    view: "home", cat: "all", query: "", sort: "featured", price: "all",
    productId: "coat", color: "ink", size: "M", qty: 1,
    cart: [], wish: [], sheet: "", notice: "",
    form: { name: "", email: "", address: "", city: "", country: "Jordan", pay: "card" },
    errors: {}, order: null, seq: 2408
  };
  var lastView = "";

  function lang() { return document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en"; }
  function bag() { return COPY[lang()] || COPY.en; }
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function money(n) { return new Intl.NumberFormat(lang() === "ar" ? "ar" : "en-US", { style: "currency", currency: "USD" }).format(n); }
  function product(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; }
  function tone(id, color) { return (TONES[color] || TONES.ink); }

  function art(id, color) {
    var c = tone(id, color);
    var body = {
      coat: '<path d="M118 78 160 48l42 30v230H118z" fill="' + c[1] + '"/>',
      lamp: '<path d="M110 250h100l-16-90H126z" fill="' + c[1] + '"/><rect x="148" y="250" width="24" height="70" fill="' + c[2] + '"/>',
      throw: '<path d="M70 120h180v150H70z" fill="' + c[1] + '"/><path d="M70 150h180M70 190h180M110 120v150M160 120v150M210 120v150" stroke="' + c[2] + '" stroke-width="4"/>',
      case: '<rect x="96" y="130" width="128" height="90" rx="8" fill="' + c[1] + '"/>',
      speaker: '<rect x="108" y="90" width="104" height="200" rx="18" fill="' + c[1] + '"/><circle cx="160" cy="170" r="28" fill="' + c[2] + '"/>',
      bottle: '<path d="M140 70h40v40l22 40v150H118V150l22-40z" fill="' + c[1] + '"/>',
      scarf: '<path d="M70 90h180l-30 220H100z" fill="' + c[1] + '"/>',
      clock: '<circle cx="160" cy="190" r="78" fill="' + c[1] + '"/><circle cx="160" cy="190" r="58" fill="' + c[0] + '"/><path d="M160 150v42l28 16" stroke="' + c[2] + '" stroke-width="4" fill="none"/>'
    };
    return '<svg viewBox="0 0 320 400" aria-hidden="true"><rect width="320" height="400" fill="' + c[0] + '"/>' + (body[id] || body.case) + "</svg>";
  }

  function matchQuery(p) {
    var q = state.query.trim().toLowerCase();
    if (!q) return true;
    var g = bag().goods[p.id];
    return (g[0] + " " + g[1] + " " + p.cat).toLowerCase().indexOf(q) !== -1;
  }
  function matchPrice(p) {
    if (state.price === "low") return p.price < 100;
    if (state.price === "mid") return p.price >= 100 && p.price <= 200;
    if (state.price === "high") return p.price > 200;
    return true;
  }
  function list(opts) {
    var rows = PRODUCTS.filter(function (p) {
      if (opts.cat && opts.cat !== "all" && p.cat !== opts.cat) return false;
      if (opts.query && !matchQuery(p)) return false;
      if (opts.price && !matchPrice(p)) return false;
      if (opts.featured && !p.featured) return false;
      if (opts.arrival && p.featured) return false;
      return true;
    });
    var sort = opts.sort || "featured";
    rows.sort(function (a, b) {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return (b.featured - a.featured) || (a.price - b.price);
    });
    return rows;
  }
  function cartCount() { return state.cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function cartTotal() { return state.cart.reduce(function (s, l) { return s + product(l.id).price * l.qty; }, 0); }
  function shipCost() { var t = cartTotal(); return t === 0 || t >= FREE_AT ? 0 : SHIP; }

  function go(view) {
    state.view = view;
    state.sheet = "";
    state.notice = "";
    render();
  }

  function card(p) {
    var g = bag().goods[p.id];
    return '<button type="button" class="card" data-action="open" data-id="' + p.id + '">' + art(p.id, p.colors[0]) +
      '<span class="meta">' + esc(bag().cats[p.cat]) + '</span><strong>' + esc(g[0]) + '</strong><span class="meta price">' + esc(money(p.price)) + "</span></button>";
  }

  function header() {
    var b = bag();
    var links = ["home", "shop", "wish", "cart"].map(function (id) {
      var label = b[id];
      if (id === "cart") label += " (" + cartCount() + ")";
      if (id === "wish") label += " (" + state.wish.length + ")";
      return '<button type="button" data-action="go" data-view="' + id + '"' + (state.view === id ? ' class="is-on"' : "") + ">" + esc(label) + "</button>";
    }).join("");
    var search = '<form class="search" role="search"><label class="sr-only" for="q">' + esc(b.search) + '</label><input id="q" name="q" type="search" value="' + esc(state.query) + '" placeholder="' + esc(b.search) + '"></form>';
    var sheetSearch = search.replace('id="q"', 'id="qm"').replace('for="q"', 'for="qm"');
    var sheet = state.sheet === "nav"
      ? '<div class="sheet is-open"><nav><button type="button" class="btn ghost" data-action="sheet" data-sheet="">' + esc(b.close) + "</button>" + sheetSearch + links + "</nav></div>"
      : "";
    return '<header class="topbar"><button type="button" class="menu-btn" data-action="sheet" data-sheet="nav" aria-label="' + esc(b.menu) + '"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
      '<button type="button" class="brand" data-action="go" data-view="home"><img src="assets/mark.svg" alt="">NOVA</button>' +
      '<nav class="links">' + links + "</nav><div class=\"grow\"></div>" + search + sheet + "</header>";
  }

  function home() {
    var b = bag();
    var cats = ["fashion", "home", "tech", "everyday"].map(function (id) {
      return '<button type="button" class="cat" data-action="cat" data-cat="' + id + '">' + esc(b.cats[id]) + "</button>";
    }).join("");
    return '<section class="hero"><div class="hero-copy"><p class="kicker">' + esc(b.heroK) + '</p><h1 class="display" id="screen-title">' + esc(b.heroT) + '</h1><p class="lede">' + esc(b.heroC) + '</p><button type="button" class="btn" data-action="go" data-view="shop">' + esc(b.shopNow) + "</button></div><div class=\"hero-art\">" + art("coat", "ink") + "</div></section>" +
      '<div class="wrap pad"><h2>' + esc(b.categories) + '</h2><div class="cats">' + cats + "</div>" +
      "<h2>" + esc(b.featured) + '</h2><div class="grid">' + list({ featured: true }).map(card).join("") + "</div>" +
      "<h2>" + esc(b.arrivals) + '</h2><div class="grid">' + list({ arrival: true }).slice(0, 4).map(card).join("") + "</div>" +
      '<div class="promo"><div><strong>' + esc(b.promoT) + '</strong><p>' + esc(b.promoC) + '</p></div><button type="button" class="btn" data-action="go" data-view="shop">' + esc(b.shopNow) + "</button></div></div>";
  }

  function filters(showPrice) {
    var b = bag();
    var cats = CATS.map(function (id) {
      return '<button type="button" class="chip' + (state.cat === id ? " is-on" : "") + '" data-action="cat" data-cat="' + id + '">' + esc(b.cats[id]) + "</button>";
    }).join("");
    var prices = ["all", "low", "mid", "high"].map(function (id) {
      var label = id === "all" ? b.priceAll : id === "low" ? b.priceLow : id === "mid" ? b.priceMid : b.priceHigh;
      return '<button type="button" class="chip' + (state.price === id ? " is-on" : "") + '" data-action="price" data-price="' + id + '">' + esc(label) + "</button>";
    }).join("");
    var sort = '<label>' + esc(b.sort) + ' <select class="chip" data-action="sort">' +
      ["featured", "low", "high", "top"].map(function (id) {
        var label = id === "featured" ? b.featuredSort : b[id];
        return '<option value="' + id + '"' + (state.sort === id ? " selected" : "") + ">" + esc(label) + "</option>";
      }).join("") + "</select></label>";
    var inner = cats + (showPrice ? "<div class=\"choices\">" + prices + "</div>" : "") + sort;
    if (state.sheet === "filter") {
      return '<div class="sheet is-open"><form><button type="button" class="btn ghost" data-action="sheet" data-sheet="">' + esc(b.close) + "</button>" + inner + "</form></div>" +
        '<button type="button" class="btn ghost" data-action="sheet" data-sheet="filter">' + esc(b.filters) + "</button>";
    }
    return '<div class="toolbar desk-filters">' + inner + '</div><button type="button" class="btn ghost only-narrow" data-action="sheet" data-sheet="filter">' + esc(b.filters) + "</button>";
  }

  function shop(title, asSearch) {
    var b = bag();
    var rows = list({ cat: asSearch ? "all" : state.cat, query: true, price: !asSearch, sort: state.sort });
    var heading = asSearch ? b.results.replace("{q}", state.query || "—") : title;
    var clear = state.query ? '<button type="button" class="btn ghost slim" data-action="clear">' + esc(b.clear) + "</button>" : "";
    return '<div class="wrap pad"><p class="kicker">NOVA</p><div class="row"><h1 id="screen-title">' + esc(heading) + "</h1>" + clear + "</div>" +
      (state.notice ? '<p class="status" role="status">' + esc(state.notice) + "</p>" : "") +
      (asSearch ? "" : filters(true)) +
      "<p class=\"muted\">" + esc(b.count.replace("{n}", String(rows.length))) + "</p>" +
      (rows.length ? '<div class="grid">' + rows.map(card).join("") + "</div>" : '<div class="empty"><h2>' + esc(b.none) + "</h2></div>") +
      "</div>";
  }

  function detail() {
    var b = bag();
    var p = product(state.productId);
    var g = b.goods[p.id];
    var wished = state.wish.indexOf(p.id) !== -1;
    var colors = p.colors.map(function (id) {
      return '<button type="button" class="opt' + (state.color === id ? " is-on" : "") + '" data-action="color" data-color="' + id + '">' + esc(b.colors[id]) + "</button>";
    }).join("");
    var sizes = p.sizes.map(function (id) {
      return '<button type="button" class="opt' + (state.size === id ? " is-on" : "") + '" data-action="size" data-size="' + id + '" aria-pressed="' + (state.size === id) + '">' + esc(id) + "</button>";
    }).join("");
    var thumbs = p.colors.map(function (id) {
      return '<button type="button" data-action="color" data-color="' + id + '" class="' + (state.color === id ? "is-on" : "") + '" aria-label="' + esc(b.colors[id]) + '">' + art(p.id, id) + "</button>";
    }).join("");
    var related = PRODUCTS.filter(function (item) { return item.cat === p.cat && item.id !== p.id; }).slice(0, 3).map(card).join("");
    return '<div class="wrap pad"><button type="button" class="btn ghost slim" data-action="go" data-view="shop">' + esc(b.back) + "</button>" +
      (state.notice ? '<p class="status" role="status">' + esc(state.notice) + "</p>" : "") +
      '<div class="product"><div><div class="shot">' + art(p.id, state.color) + '</div><div class="thumbs">' + thumbs + "</div></div><div>" +
      '<p class="kicker">' + esc(b.cats[p.cat]) + '</p><h1 id="screen-title">' + esc(g[0]) + "</h1>" +
      '<p class="price">' + esc(money(p.price)) + '</p><p class="stars" aria-label="' + p.rating + '">★★★★★ <span class="muted">' + p.rating + " · " + p.reviews + " " + esc(b.reviews) + "</span></p>" +
      "<p>" + esc(g[1]) + "</p><p class=\"muted\">" + esc(b.color) + '</p><div class="choices">' + colors + "</div>" +
      (sizes ? '<p class="muted">' + esc(b.size) + '</p><div class="choices">' + sizes + "</div>" : "") +
      '<p class="muted">' + esc(b.qty) + '</p><div class="stepper"><button type="button" data-action="qty" data-dir="-1" aria-label="-">−</button><strong>' + state.qty + '</strong><button type="button" data-action="qty" data-dir="1" aria-label="+">+</button></div>' +
      '<div class="actions"><button type="button" class="btn" data-action="add">' + esc(b.add) + '</button><button type="button" class="btn ghost" data-action="wish">' + esc(wished ? b.saved : b.save) + "</button></div></div></div>" +
      (related ? "<h2>" + esc(b.related) + '</h2><div class="grid">' + related + "</div>" : "") + "</div>";
  }

  function cartView() {
    var b = bag();
    if (!state.cart.length) {
      return '<div class="wrap pad"><h1 id="screen-title">' + esc(b.cart) + '</h1><div class="empty"><h2>' + esc(b.emptyCart) + '</h2><p class="muted">' + esc(b.emptyCartC) + '</p><button type="button" class="btn" data-action="go" data-view="shop">' + esc(b.shopNow) + "</button></div></div>";
    }
    var lines = state.cart.map(function (line) {
      var p = product(line.id);
      var opt = [line.color ? b.colors[line.color] : "", line.size || ""].filter(Boolean).join(" · ");
      return '<div class="line">' + art(line.id, line.color) + "<div><strong>" + esc(b.goods[line.id][0]) + "</strong><p class=\"muted\">" + esc(opt) + "</p>" +
        '<div class="stepper"><button type="button" data-action="line" data-key="' + esc(line.key) + '" data-dir="-1" aria-label="-">−</button><strong>' + line.qty + '</strong><button type="button" data-action="line" data-key="' + esc(line.key) + '" data-dir="1" aria-label="+">+</button></div>' +
        '<button type="button" class="btn ghost slim" data-action="drop" data-key="' + esc(line.key) + '">' + esc(b.remove) + "</button></div>" +
        '<span class="price">' + esc(money(p.price * line.qty)) + "</span></div>";
    }).join("");
    var goods = cartTotal();
    var ship = shipCost();
    return '<div class="wrap pad"><h1 id="screen-title">' + esc(b.cart) + '</h1><div class="lines">' + lines + "</div>" +
      '<div class="totals"><div><span>' + esc(b.subtotal) + "</span><span>" + esc(money(goods)) + "</span></div>" +
      "<div><span>" + esc(b.shipping) + "</span><span>" + (ship ? esc(money(ship)) : esc(b.free)) + "</span></div>" +
      '<div class="sum"><span>' + esc(b.total) + "</span><span>" + esc(money(goods + ship)) + "</span></div>" +
      '<button type="button" class="btn block" data-action="go" data-view="checkout">' + esc(b.checkout) + "</button></div></div>";
  }

  function wishView() {
    var b = bag();
    if (!state.wish.length) {
      return '<div class="wrap pad"><h1 id="screen-title">' + esc(b.wish) + '</h1><div class="empty"><h2>' + esc(b.emptyWish) + '</h2><p class="muted">' + esc(b.emptyWishC) + "</p></div></div>";
    }
    var rows = state.wish.map(function (id) {
      var p = product(id);
      return '<div class="line">' + art(id, p.colors[0]) + "<div><strong>" + esc(b.goods[id][0]) + "</strong><p class=\"price\">" + esc(money(p.price)) + "</p>" +
        '<button type="button" class="btn slim" data-action="move" data-id="' + id + '">' + esc(b.move) + '</button> <button type="button" class="btn ghost slim" data-action="unwish" data-id="' + id + '">' + esc(b.remove) + "</button></div><span></span></div>";
    }).join("");
    return '<div class="wrap pad"><h1 id="screen-title">' + esc(b.wish) + '</h1>' + rows + "</div>";
  }

  function field(key, label, type) {
    var err = state.errors[key] ? '<span class="error">' + esc(state.errors[key]) + "</span>" : "";
    return "<label>" + esc(label) + '<input name="' + key + '" type="' + (type || "text") + '" value="' + esc(state.form[key] || "") + '" autocomplete="on">' + err + "</label>";
  }

  function checkout() {
    var b = bag();
    var countries = b.countries.map(function (name, i) {
      var value = COPY.en.countries[i];
      return '<option value="' + esc(value) + '"' + (state.form.country === value ? " selected" : "") + ">" + esc(name) + "</option>";
    }).join("");
    var pays = ["card", "transfer"].map(function (id) {
      return '<label class="' + (state.form.pay === id ? "is-on" : "") + '"><input type="radio" name="pay" value="' + id + '"' + (state.form.pay === id ? " checked" : "") + "> " + esc(id === "card" ? b.card : b.transfer) + "</label>";
    }).join("");
    return '<div class="wrap pad"><h1 id="screen-title">' + esc(b.checkT) + '</h1><p class="muted">' + esc(b.payNote) + "</p>" +
      '<form class="form" data-form="checkout">' + field("name", b.name) + field("email", b.email, "email") + field("address", b.address) + field("city", b.city) +
      "<label>" + esc(b.country) + '<select name="country">' + countries + "</select></label>" +
      "<fieldset><legend>" + esc(b.pay) + '</legend><div class="pay">' + pays + "</div></fieldset>" +
      '<button type="submit" class="btn">' + esc(b.place) + "</button></form></div>";
  }

  function confirm() {
    var b = bag();
    var order = state.order;
    if (!order) return shop(b.shop, false);
    var lines = order.lines.map(function (line) {
      return "<div class=\"sum\"><span>" + esc(b.goods[line.id][0]) + " × " + line.qty + "</span><span>" + esc(money(line.price * line.qty)) + "</span></div>";
    }).join("");
    return '<div class="wrap pad"><div class="ok"><p class="kicker">' + esc(order.id) + '</p><h1 id="screen-title">' + esc(b.confirmT) + "</h1><p>" + esc(b.confirmC) + "</p>" +
      "<p><strong>" + esc(b.eta) + "</strong><br>" + esc(b.etaVal) + "</p>" + lines +
      '<div class="sum"><span>' + esc(b.total) + "</span><span>" + esc(money(order.total)) + "</span></div>" +
      '<button type="button" class="btn" data-action="go" data-view="home">' + esc(b.continue) + "</button></div></div>";
  }

  function render() {
    var body = state.view === "shop" ? shop(bag().shop, false)
      : state.view === "search" ? shop(bag().shop, true)
      : state.view === "product" ? detail()
      : state.view === "cart" ? cartView()
      : state.view === "wish" ? wishView()
      : state.view === "checkout" ? checkout()
      : state.view === "confirm" ? confirm()
      : home();
    var changed = lastView !== state.view;
    lastView = state.view;
    root.innerHTML = '<div class="store">' + header() + '<div class="canvas">' + body + "</div></div>";
    var only = root.querySelector(".only-narrow");
    if (only && window.matchMedia("(min-width: 981px)").matches) only.hidden = true;
    if (changed) {
      var title = root.querySelector("#screen-title");
      if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); }
    }
    var fieldQ = root.querySelector("#q, #qm");
    if (fieldQ && document.activeElement && document.activeElement.id === "q") fieldQ.focus();
  }

  function addLine(id, qty, color, size) {
    var key = id + "|" + (color || "") + "|" + (size || "");
    var found = state.cart.filter(function (line) { return line.key === key; })[0];
    if (found) found.qty += qty;
    else state.cart.push({ key: key, id: id, qty: qty, color: color, size: size });
  }

  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button || !root.contains(button)) return;
    var action = button.getAttribute("data-action");
    if (action === "go") go(button.getAttribute("data-view"));
    else if (action === "open") {
      var p = product(button.getAttribute("data-id"));
      state.productId = p.id;
      state.color = p.colors[0];
      state.size = p.sizes[2] || p.sizes[0] || "";
      state.qty = 1;
      go("product");
    } else if (action === "cat") {
      state.cat = button.getAttribute("data-cat");
      state.view = "shop";
      state.sheet = "";
      render();
    } else if (action === "price") {
      state.price = button.getAttribute("data-price");
      render();
    } else if (action === "color") {
      state.color = button.getAttribute("data-color");
      render();
    } else if (action === "size") {
      state.size = button.getAttribute("data-size");
      render();
    } else if (action === "qty") {
      state.qty = Math.max(1, Math.min(9, state.qty + Number(button.getAttribute("data-dir"))));
      render();
    } else if (action === "add") {
      addLine(state.productId, state.qty, state.color, state.size);
      state.notice = bag().added;
      render();
    } else if (action === "wish") {
      var id = state.productId;
      var at = state.wish.indexOf(id);
      if (at === -1) state.wish.push(id);
      else state.wish.splice(at, 1);
      state.notice = bag().saved;
      render();
    } else if (action === "line") {
      var key = button.getAttribute("data-key");
      state.cart.forEach(function (line) {
        if (line.key === key) line.qty += Number(button.getAttribute("data-dir"));
      });
      state.cart = state.cart.filter(function (line) { return line.qty > 0; });
      render();
    } else if (action === "drop" || action === "unwish") {
      if (action === "drop") state.cart = state.cart.filter(function (line) { return line.key !== button.getAttribute("data-key"); });
      else state.wish = state.wish.filter(function (id) { return id !== button.getAttribute("data-id"); });
      render();
    } else if (action === "move") {
      var item = product(button.getAttribute("data-id"));
      addLine(item.id, 1, item.colors[0], item.sizes[0] || "");
      state.wish = state.wish.filter(function (id) { return id !== item.id; });
      go("cart");
    } else if (action === "clear") {
      state.query = "";
      render();
    } else if (action === "sheet") {
      var next = button.getAttribute("data-sheet");
      state.sheet = state.sheet === next ? "" : next;
      render();
    }
  });

  root.addEventListener("change", function (event) {
    if (event.target.getAttribute("data-action") === "sort") {
      state.sort = event.target.value;
      render();
    }
    if (event.target.name === "pay") {
      state.form.pay = event.target.value;
      render();
    }
    if (event.target.name === "country") state.form.country = event.target.value;
  });

  root.addEventListener("input", function (event) {
    if (event.target.id === "q" || event.target.id === "qm") {
      state.query = event.target.value;
      if (state.view !== "search" && state.view !== "shop") state.view = "search";
      var which = event.target.id;
      render();
      var again = root.querySelector("#" + which);
      if (again) { again.focus(); again.setSelectionRange(again.value.length, again.value.length); }
    }
    if (event.target.form && event.target.form.getAttribute("data-form") === "checkout" && event.target.name !== "pay") {
      state.form[event.target.name] = event.target.value;
    }
  });

  root.addEventListener("submit", function (event) {
    var form = event.target;
    if (form.getAttribute("role") === "search" || form.querySelector("#q")) {
      event.preventDefault();
      state.view = "search";
      state.sheet = "";
      render();
      return;
    }
    if (form.getAttribute("data-form") !== "checkout") return;
    event.preventDefault();
    ["name", "email", "address", "city", "country"].forEach(function (key) {
      var input = form.querySelector("[name=\"" + key + "\"]");
      if (input) state.form[key] = input.value.trim();
    });
    state.errors = {};
    ["name", "address", "city", "country"].forEach(function (key) {
      if (!state.form[key]) state.errors[key] = bag().need;
    });
    if (!state.form.email || state.form.email.indexOf("@") === -1) state.errors.email = bag().badEmail;
    if (Object.keys(state.errors).length || !state.cart.length) { render(); return; }
    state.seq += 1;
    var goods = cartTotal();
    state.order = {
      id: "NV-" + state.seq,
      lines: state.cart.map(function (line) { return { id: line.id, qty: line.qty, price: product(line.id).price }; }),
      total: goods + shipCost()
    };
    state.cart = [];
    go("confirm");
  });

  document.addEventListener("kodama:preferences", function (event) {
    if (!event.detail || event.detail.type === "lang" || event.detail.type === "theme") render();
  });

  render();
})();
