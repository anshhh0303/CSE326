// ============================================================================
// THE CAFÉ TABLE RYOKAN — SCRIPT ENGINE
// Preserves complete cafeteria order workflow & adds ambient sakura aesthetic
// ============================================================================

const menuItems = [
  { id: 1, fig: "FIG. 01", jp: "黄金煎餅", name: "Masala Dosa", category: "Indian", description: "Crisp fermented rice crepe stuffed with fragrant spiced potato mash, served with slow-simmered sambar and fresh coconut chutney.", price: 90, available: true, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=85" },
  { id: 2, fig: "FIG. 02", jp: "伝統豆腐", name: "Paneer Butter Masala", category: "Indian", description: "Handcrafted artisanal paneer simmered in a velvet tomato, cultured butter, and crushed fenugreek leaf emulsion.", price: 180, available: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=85" },
  { id: 3, fig: "FIG. 03", jp: "香煎豆米", name: "Rajma Chawal", category: "Indian", description: "Overnight slow-braised Himalayan red kidney beans served over aged mountain basmati rice with pickled baby onions.", price: 120, available: false, image: "images/rajma_chawal.jpg" },
  { id: 4, fig: "FIG. 04", jp: "揚麦豆包", name: "Chole Bhature", category: "Indian", description: "Slow-steeped spiced Punjabi chickpea gravy paired with puffed, golden sourdough bhature and spiced gooseberry.", price: 110, available: true, image: "images/chole_bhature.jpg" },
  { id: 5, fig: "FIG. 05", jp: "香ばし麺", name: "Veg Hakka Noodles", category: "Chinese", description: "High-heat wok-tossed wheat noodles, shredded scallions, crisp spring greens, white pepper, and toasted sesame oil.", price: 130, available: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=85" },
  { id: 6, fig: "FIG. 06", jp: "辛味豆腐", name: "Chilli Paneer", category: "Chinese", description: "Crispy wok-tossed cottage cheese tossed with charred bell peppers, scallion whites, and roasted mountain chili glaze.", price: 160, available: true, image: "images/chilli_paneer.webp" },
  { id: 7, fig: "FIG. 07", jp: "五目炒飯", name: "Veg Fried Rice", category: "Chinese", description: "Aged fragrant jasmine rice tossed in seasoned wok oil with seasonal vegetables, ginger shreds, and toasted aromatics.", price: 125, available: false, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85" },
  { id: 8, fig: "FIG. 08", jp: "特製菜包", name: "Classic Veg Burger", category: "Fast Food", description: "Handcrafted crisp golden vegetable patty, crisp leaf lettuce, vine tomatoes, and signature Ryokan umami emulsion.", price: 95, available: true, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=85" },
  { id: 9, fig: "FIG. 09", jp: "香草挟み", name: "Margherita Sandwich", category: "Fast Food", description: "Toasted artisanal sourdough loaf layered with sweet vine tomatoes, melted whole-milk mozzarella, and fresh basil leaf pesto.", price: 140, available: true, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85" },
  { id: 10, fig: "FIG. 10", jp: "辛香揚芋", name: "Peri Peri Fries", category: "Fast Food", description: "Triple-cooked Russet potato batons dusted in fiery bird's eye chili, sweet paprika, and wild herb sea salt seasoning.", price: 85, available: true, image: "images/peri_peri_fries.avif" },
  { id: 11, fig: "FIG. 11", jp: "三角揚包", name: "Samosa Platter", category: "Snacks", description: "Flaky carom-seed pastry pyramids stuffed with spiced pea and potato confit, served with date-tamarind and mint chutney.", price: 60, available: true, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=85" },
  { id: 12, fig: "FIG. 12", jp: "浪花野菜", name: "Pav Bhaji", category: "Snacks", description: "Decadent spiced vegetable purée finished with clarified cultured butter, served alongside lightly toasted brioche buns.", price: 100, available: true, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85" },
  { id: 13, fig: "FIG. 13", jp: "冷製珈琲", name: "Cold Coffee", category: "Beverages", description: "Slow-extracted mountain Arabica espresso shaken over ice with creamy whole milk and crowned with velvety microfoam.", price: 90, available: true, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85" },
  { id: 14, fig: "FIG. 14", jp: "香辛料茶", name: "Masala Chai", category: "Beverages", description: "Hand-plucked Nilgiri black tea leaves slow-boiled with whole crushed green cardamom, ginger root, milk, and cloves.", price: 35, available: true, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=700&q=85" },
  { id: 15, fig: "FIG. 15", jp: "柑橘炭酸", name: "Fresh Lime Soda", category: "Beverages", description: "Freshly pressed Kagzi lime juice charged with effervescent soda, Himalayan black salt, and crystalline rock sugar.", price: 55, available: false, image: "images/fresh_lime_soda.jpg" },
  { id: 16, fig: "FIG. 16", jp: "蜜団子", name: "Gulab Jamun", category: "Desserts", description: "Delicate evaporated milk dumplings poached in warm organic rose water, saffron strands, and green cardamom syrup.", price: 70, available: true, image: "images/gulab_jamun.jpg" },
  { id: 17, fig: "FIG. 17", jp: "濃厚甘味", name: "Chocolate Brownie", category: "Desserts", description: "Dense single-origin 70% dark cocoa fudge slice studded with toasted walnuts and finished with warm chocolate ganache.", price: 110, available: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85" },
  { id: 18, fig: "FIG. 18", jp: "氷冷果菓", name: "Kesar Pista Kulfi", category: "Desserts", description: "Traditional slow-reduced mountain milk ice cream infused with Kashmiri saffron threads and chopped green pistachios.", price: 80, available: false, image: "images/kesar_pista_kulfi.jpg" }
];

const categories = ["All", "Indian", "Chinese", "Fast Food", "Snacks", "Beverages", "Desserts"];
let activeCategory = "All";

function safeParse(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : fallback;
  } catch {
    return fallback;
  }
}

let cart = safeParse("cafeCart", []);
let orders = safeParse("cafeOrders", []);

const menuGrid = document.getElementById("menuGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const checkoutModal = document.getElementById("checkoutModal");

function fallbackImage(category = "Café Table") {
  const safeCategory = String(category).replace(/[<>&'"]/g, "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
      <rect width="900" height="650" fill="#ede6db"/>
      <circle cx="450" cy="325" r="205" fill="#fdfbf7" opacity=".9"/>
      <circle cx="450" cy="325" r="145" fill="none" stroke="#d4827d" stroke-width="4" opacity=".6"/>
      <path d="M338 356c50-65 74-82 112-82 48 0 70 35 112 82-33 42-67 63-112 63-44 0-79-20-112-63Z" fill="#d4827d" opacity=".7"/>
      <path d="M383 340c22-23 42-30 67-30 25 0 45 7 67 30-23 25-43 36-67 36s-44-11-67-36Z" fill="#fdfbf7" opacity=".85"/>
      <text x="450" y="500" text-anchor="middle" fill="#1a1715" font-family="'Cormorant Garamond', Georgia, serif" font-size="34" letter-spacing="2">${safeCategory}</text>
      <text x="450" y="538" text-anchor="middle" fill="#756b60" font-family="'JetBrains Mono', monospace" font-size="13" letter-spacing="4">THE CAFÉ TABLE</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function protectImage(image, category) {
  const useFallback = () => {
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = "true";
    image.src = fallbackImage(category);
    image.classList.add("image-fallback");
  };
  image.addEventListener("error", useFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) useFallback();
}

function protectAllImages() {
  document.querySelectorAll("img").forEach(image => {
    const card = image.closest(".food-card");
    const cartEl = image.closest(".cart-item");
    let category = "Café Table";
    if (card) {
      const categoryLabel = card.querySelector(".food-category");
      if (categoryLabel) category = categoryLabel.textContent;
    } else if (cartEl && cartEl.dataset.category) {
      category = cartEl.dataset.category;
    }
    protectImage(image, category);
  });
}

function getCategoryCount(category) {
  if (category === "All") return menuItems.length;
  return menuItems.filter(item => item.category === category).length;
}

function renderFilters() {
  categoryFilters.innerHTML = categories.map(category => {
    const count = getCategoryCount(category);
    const isActive = category === activeCategory;
    return `
      <button class="filter-btn ${isActive ? "active" : ""}" type="button" data-category="${category}">
        <span>${category.toUpperCase()}</span>
        <span class="filter-count">(${count})</span>
      </button>
    `;
  }).join("");
}

function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = menuItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesQuery = !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const noResults = document.getElementById("noResults");
  if (noResults) noResults.hidden = filtered.length !== 0;

  menuGrid.innerHTML = filtered.map((item, index) => {
    const inCart = cart.find(c => c.id === item.id);
    const currentQty = inCart ? inCart.quantity : 0;
    const figTag = item.fig || `FIG. ${String(index + 1).padStart(2, "0")}`;
    const kanjiTag = item.jp || "厳選";

    return `
      <article class="food-card ${item.available ? "" : "unavailable"} entering" style="animation-delay:${index * 45}ms">
        <div class="food-image">
          <span class="card-fig-tag">${figTag} / 旬</span>
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
          ${item.available ? '<span class="availability">PREPARED FRESH</span>' : '<span class="unavailable-label">PREPARATION PAUSED</span>'}
        </div>
        <div class="food-info">
          <div class="food-meta-row">
            <span class="food-category">${escapeHtml(item.category)}</span>
            <span class="food-kanji-tag">${kanjiTag}</span>
          </div>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="food-bottom">
            <span class="price">₹${item.price}</span>
            <div class="card-qty-control" data-id="${item.id}" aria-label="Quantity for ${escapeHtml(item.name)}">
              <button class="card-qty-btn" type="button" data-action="card-decrease" data-id="${item.id}" ${currentQty === 0 || !item.available ? "disabled" : ""} aria-label="Decrease ${escapeHtml(item.name)} quantity">−</button>
              <span class="card-qty-count ${currentQty > 0 ? "active" : ""}">${currentQty}</span>
              <button class="card-qty-btn" type="button" data-action="card-increase" data-id="${item.id}" ${!item.available ? "disabled" : ""} aria-label="Increase ${escapeHtml(item.name)} quantity">+</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
  protectAllImages();
}

function syncCardQuantities() {
  document.querySelectorAll(".card-qty-control").forEach(control => {
    const id = Number(control.dataset.id);
    const item = menuItems.find(food => food.id === id);
    const inCart = cart.find(product => product.id === id);
    const qty = inCart ? inCart.quantity : 0;
    const countEl = control.querySelector(".card-qty-count");
    const decBtn = control.querySelector("button[data-action='card-decrease']");
    const incBtn = control.querySelector("button[data-action='card-increase']");
    if (countEl) {
      countEl.textContent = qty;
      countEl.classList.toggle("active", qty > 0);
    }
    if (decBtn) {
      decBtn.disabled = qty === 0 || !(item && item.available);
    }
    if (incBtn) {
      incBtn.disabled = !(item && item.available);
    }
  });
}

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

const clearSearchBtn = document.getElementById("clearSearchBtn");
if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    activeCategory = "All";
    renderFilters();
    renderMenu();
    searchInput.focus();
  });
}

menuGrid.addEventListener("click", event => {
  const button = event.target.closest(".card-qty-btn");
  if (!button || button.disabled) return;
  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  const item = menuItems.find(food => food.id === id);
  if (!item || !item.available) {
    showToast("This culinary selection is currently paused");
    return;
  }
  const existing = cart.find(product => product.id === id);
  if (action === "card-increase") {
    if (existing) {
      existing.quantity++;
      showToast(`${item.name} quantity updated (${existing.quantity})`);
    } else {
      cart.push({ ...item, quantity: 1 });
      showToast(`${item.name} added to cart`);
    }
  } else if (action === "card-decrease") {
    if (existing) {
      existing.quantity--;
      if (existing.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
        showToast(`${item.name} removed from cart`);
      } else {
        showToast(`${item.name} quantity updated (${existing.quantity})`);
      }
    }
  }
  saveCart();
  renderCart();
  syncCardQuantities();
});

function saveCart() {
  localStorage.setItem("cafeCart", JSON.stringify(cart));
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartTotal();
  if (cartCount) {
    cartCount.textContent = count;
    cartCount.classList.remove("bump");
    void cartCount.offsetWidth;
    cartCount.classList.add("bump");
  }

  const cartSubtotalEl = document.getElementById("cartSubtotal");
  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${totalAmount}`;
  const cartItemsSubtotalEl = document.getElementById("cartItemsSubtotal");
  if (cartItemsSubtotalEl) cartItemsSubtotalEl.textContent = `₹${totalAmount}`;
  const cartItemCountEl = document.getElementById("cartItemCount");
  if (cartItemCountEl) cartItemCountEl.textContent = `${count} item${count === 1 ? "" : "s"}`;

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart"><div><span>🌸</span><strong>Your cart is empty</strong><p>Explore the culinary register to add selections.</p></div></div>';
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = ".55";
    }
  } else {
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.style.opacity = "1";
    }
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}" data-category="${escapeHtml(item.category)}">
        <img src="${item.image}" alt="${escapeHtml(item.name)}">
        <div>
          <h4>${escapeHtml(item.name)}</h4>
          <span class="cart-item-price">₹${item.price}</span>
          <div class="quantity">
            <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${escapeHtml(item.name)} quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${escapeHtml(item.name)} quantity">+</button>
          </div>
        </div>
        <button class="remove-btn" type="button" data-action="remove" data-id="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">×</button>
      </div>
    `).join("");
    protectAllImages();
  }
}

cartItems.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = Number(button.dataset.id);
  const item = cart.find(product => product.id === id);
  if (!item) return;
  if (button.dataset.action === "increase") item.quantity++;
  if (button.dataset.action === "decrease") {
    item.quantity--;
    if (item.quantity <= 0) cart = cart.filter(product => product.id !== id);
  }
  if (button.dataset.action === "remove") cart = cart.filter(product => product.id !== id);
  saveCart();
  renderCart();
  syncCardQuantities();
});

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

const cartOpenBtn = document.getElementById("cartOpen");
if (cartOpenBtn) cartOpenBtn.addEventListener("click", openCart);

const cartCloseBtn = document.getElementById("cartClose");
if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);

if (overlay) overlay.addEventListener("click", closeCart);

function renderCheckoutSummary() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartTotal();
  const summaryEl = document.getElementById("checkoutSummary");
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="summary-items-list">
        ${cart.map(item => `<div class="summary-item"><span>${item.quantity} × ${escapeHtml(item.name)}</span><strong>₹${item.price * item.quantity}</strong></div>`).join("")}
      </div>
      <div class="summary-breakdown">
        <div class="summary-row"><span>Items Subtotal (${count} item${count === 1 ? "" : "s"})</span><strong>₹${totalAmount}</strong></div>
        <div class="summary-row"><span>Cafeteria / Extra charges</span><strong class="free-text">₹0 (Free)</strong></div>
      </div>
    `;
  }
  const checkoutTotalEl = document.getElementById("checkoutTotal");
  if (checkoutTotalEl) checkoutTotalEl.textContent = `₹${totalAmount}`;
}

const checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (!cart.length) return;
    closeCart();
    renderCheckoutSummary();
    document.getElementById("checkoutView").hidden = false;
    document.getElementById("processingView").hidden = true;
    document.getElementById("successView").hidden = true;
    checkoutModal.classList.add("open");
    checkoutModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
  });
}

function closeCheckout() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  const formError = document.getElementById("formError");
  if (formError) formError.textContent = "";
}

const checkoutCloseBtn = document.getElementById("checkoutClose");
if (checkoutCloseBtn) checkoutCloseBtn.addEventListener("click", closeCheckout);

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) {
    closeCheckout();
  }
});

const checkoutForm = document.getElementById("checkoutForm");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("studentName").value.trim();
    const registration = document.getElementById("registration").value.trim();
    const error = document.getElementById("formError");
    if (name.length < 2) { error.textContent = "Please enter a valid student name."; return; }
    if (registration.length < 4) { error.textContent = "Please enter a valid registration number."; return; }
    error.textContent = "";

    const paymentInput = document.querySelector('input[name="payment"]:checked');
    const payment = paymentInput ? paymentInput.value : "UPI / QR";

    document.getElementById("checkoutView").hidden = true;
    document.getElementById("processingView").hidden = false;

    setTimeout(() => {
      const orderId = `CT-${Date.now().toString().slice(-8)}-${Math.floor(100 + Math.random() * 900)}`;
      const order = {
        id: orderId,
        name,
        registration,
        items: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
        date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
        amount: cartTotal(),
        payment
      };
      orders.unshift(order);
      localStorage.setItem("cafeOrders", JSON.stringify(orders));
      cart = [];
      saveCart();
      renderCart();
      renderOrders();
      syncCardQuantities();
      showSuccess(order);
    }, 1800);
  });
}

function showSuccess(order) {
  document.getElementById("processingView").hidden = true;
  const success = document.getElementById("successView");
  success.hidden = false;
  success.innerHTML = `
    <div class="success-icon">✓</div>
    <p class="eyebrow">ORDER CONFIRMED · 注文完了</p>
    <h2>Thank you, ${escapeHtml(order.name)}!</h2>
    <p>Your culinary request has been transmitted to the Ryokan preparation team.</p>
    ${receiptHtml(order)}
    <button class="primary-btn done-btn" type="button" id="doneBtn">Return to Register</button>
  `;
  document.getElementById("doneBtn").addEventListener("click", () => {
    closeCheckout();
    document.getElementById("checkoutForm").reset();
  });
}

function receiptHtml(order) {
  const totalCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
  return `<div class="receipt">
    <div class="receipt-head"><strong>The Café Table</strong><span>${escapeHtml(order.id)}</span></div>
    <div class="receipt-items">
      ${order.items.map(item => `<div class="receipt-line"><span>${item.quantity} × ${escapeHtml(item.name)}</span><strong>₹${item.quantity * item.price}</strong></div>`).join("")}
    </div>
    <div class="receipt-divider"></div>
    <div class="receipt-line"><span>Items Subtotal (${totalCount} item${totalCount === 1 ? "" : "s"})</span><strong>₹${order.amount}</strong></div>
    <div class="receipt-line"><span>Cafeteria / Extra charges</span><span>₹0 (Free)</span></div>
    <div class="receipt-line total-line"><strong>Total Settled</strong><strong>₹${order.amount}</strong></div>
    <div class="receipt-line"><span>Settlement Mode</span><span>${escapeHtml(order.payment)}</span></div>
  </div>`;
}

function renderOrders() {
  const list = document.getElementById("ordersList");
  if (!list) return;
  if (!orders.length) {
    list.innerHTML = '<div class="empty-orders"><strong>No archived orders recorded</strong><p><a href="#menu">Visit the Ryokan register</a> to place your inaugural selection.</p></div>';
    return;
  }
  list.innerHTML = orders.map((order, index) => `
    <article class="order-card">
      <div><span>Order ID</span><strong>${order.id}</strong></div>
      <div><span>Date & Payment</span><strong>${order.date} · ${order.payment}</strong></div>
      <div><span>Amount</span><strong>₹${order.amount}</strong></div>
      <button class="receipt-btn" type="button" data-order-index="${index}">View Receipt</button>
    </article>
  `).join("");
}

const ordersList = document.getElementById("ordersList");
if (ordersList) {
  ordersList.addEventListener("click", event => {
    const button = event.target.closest(".receipt-btn");
    if (!button) return;
    const order = orders[Number(button.dataset.orderIndex)];
    document.getElementById("checkoutView").hidden = true;
    document.getElementById("processingView").hidden = true;
    const success = document.getElementById("successView");
    success.hidden = false;
    success.innerHTML = `
      <p class="eyebrow">ARCHIVED REGISTER RECEIPT · 過去の領収書</p>
      <h2>Order Details</h2>
      ${receiptHtml(order)}
      <p style="font-size:12px;color:var(--sumi-muted);margin:1rem 0;">Guest: ${escapeHtml(order.name)} · ID: ${escapeHtml(order.registration)}</p>
      <button class="primary-btn done-btn" type="button" id="receiptDone">Dismiss</button>
    `;
    checkoutModal.classList.add("open");
    checkoutModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    document.getElementById("receiptDone").addEventListener("click", closeCheckout);
  });
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
  const sections = ["home", "menu", "orders"];
  let current = "home";
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top < 150) current = id;
  });
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeCheckout();
  }
});

if (searchInput) searchInput.value = "";

renderFilters();
renderMenu();
renderCart();
renderOrders();
syncCardQuantities();

// ============================================================================
// SHARED PETAL SHAPE DRAWER
// Precise cherry blossom petal path with realistic gentle cleft notch at top
// ============================================================================
function drawSakuraPetalPath(ctx, w, h) {
  ctx.beginPath();
  ctx.moveTo(0, h * 0.5);
  ctx.bezierCurveTo(w * 0.65, h * 0.32, w * 0.65, -h * 0.2, w * 0.28, -h * 0.5);
  ctx.bezierCurveTo(w * 0.12, -h * 0.42, 0, -h * 0.36, 0, -h * 0.36);
  ctx.bezierCurveTo(0, -h * 0.36, -w * 0.12, -h * 0.42, -w * 0.28, -h * 0.5);
  ctx.bezierCurveTo(-w * 0.65, -h * 0.2, -w * 0.65, h * 0.32, 0, h * 0.5);
  ctx.closePath();
}

// ============================================================================
// 1. AMBIENT FALLING SAKURA BACKGROUND ENGINE
// Gentle, continuous, cozy drifting petals floating across the washi background
// ============================================================================
function initAmbientSakuraBackground() {
  const canvas = document.getElementById("sakuraBgCanvas");
  if (!canvas || !canvas.getContext) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const TOTAL_PETALS = Math.min(48, Math.max(26, Math.floor(window.innerWidth / 32)));
  const petals = [];

  const petalPalettes = [
    { base: [247, 196, 206], tip: [255, 235, 240], maxAlpha: 0.65 },
    { base: [243, 172, 188], tip: [253, 218, 226], maxAlpha: 0.60 },
    { base: [252, 208, 217], tip: [255, 244, 246], maxAlpha: 0.55 },
    { base: [238, 153, 171], tip: [251, 205, 215], maxAlpha: 0.58 }
  ];

  function createAmbientPetal(initialY = null) {
    const pal = petalPalettes[Math.floor(Math.random() * petalPalettes.length)];
    const size = 11 + Math.random() * 9;
    return {
      x: Math.random() * (width + 100) - 50,
      y: initialY !== null ? initialY : -25 - Math.random() * 40,
      w: size * (0.6 + Math.random() * 0.15),
      h: size,
      pal,
      speedY: 0.65 + Math.random() * 0.75,
      driftX: -0.25 + Math.random() * 0.5,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.015 + Math.random() * 0.02,
      swayAmp: 0.6 + Math.random() * 0.7,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.018,
      flip: Math.random() * Math.PI * 2,
      vFlip: 0.018 + Math.random() * 0.026,
      opacity: pal.maxAlpha * (0.7 + Math.random() * 0.3)
    };
  }

  // Pre-seed petals across the entire vertical viewport so it is cozy immediately on load
  for (let i = 0; i < TOTAL_PETALS; i++) {
    petals.push(createAmbientPetal(Math.random() * height));
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.sway += p.swaySpeed;
      p.y += p.speedY;
      p.x += p.driftX + Math.sin(p.sway) * p.swayAmp;
      p.angle += p.vAngle;
      p.flip += p.vFlip;

      // Wrap when past bottom or edges
      if (p.y > height + 35) {
        petals[i] = createAmbientPetal(-25);
        continue;
      }
      if (p.x < -60) p.x = width + 50;
      if (p.x > width + 60) p.x = -50;

      const flipScale = Math.cos(p.flip);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(flipScale, 1);

      const grad = ctx.createLinearGradient(0, p.h * 0.5, 0, -p.h * 0.5);
      grad.addColorStop(0, `rgba(${p.pal.base[0]}, ${p.pal.base[1]}, ${p.pal.base[2]}, ${p.opacity})`);
      grad.addColorStop(1, `rgba(${p.pal.tip[0]}, ${p.pal.tip[1]}, ${p.pal.tip[2]}, ${p.opacity * 0.9})`);

      ctx.fillStyle = grad;
      ctx.shadowColor = `rgba(244, 170, 185, ${p.opacity * 0.35})`;
      ctx.shadowBlur = 3;

      drawSakuraPetalPath(ctx, p.w, p.h);
      ctx.fill();

      ctx.restore();
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

// ============================================================================
// 2. INTERACTIVE SAKURA CURSOR TRAIL ENGINE
// Consistent, smooth flutter trail responding to mouse movement
// ============================================================================
function initSakuraCursorTrail() {
  const canvas = document.getElementById("sakuraCanvas");
  if (!canvas || !canvas.getContext) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  const petals = [];
  const MAX_PETALS = 120;
  const STEP_DIST = 14;
  let lastX = null;
  let lastY = null;
  let isRunning = false;

  const petalColors = [
    { base: [248, 184, 198], tip: [255, 226, 233] },
    { base: [245, 162, 178], tip: [253, 214, 222] },
    { base: [251, 196, 207], tip: [255, 235, 240] },
    { base: [238, 148, 166], tip: [250, 206, 216] }
  ];

  function createPetal(x, y, moveAngle) {
    if (petals.length >= MAX_PETALS) {
      petals.shift();
    }

    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    const size = 11 + Math.random() * 8;
    const widthRatio = 0.58 + Math.random() * 0.16;
    const spread = (Math.random() - 0.5) * 1.2;
    const initialSpeed = 0.4 + Math.random() * 0.7;
    const dispersalAngle = moveAngle + Math.PI + (Math.random() - 0.5) * 1.1;

    petals.push({
      x: x + (Math.random() - 0.5) * 5,
      y: y + (Math.random() - 0.5) * 5,
      w: size * widthRatio,
      h: size,
      color,
      vx: Math.cos(dispersalAngle) * initialSpeed + spread,
      vy: Math.sin(dispersalAngle) * initialSpeed * 0.4 + 0.6 + Math.random() * 0.5,
      gravity: 0.035 + Math.random() * 0.025,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.045,
      flip: Math.random() * Math.PI * 2,
      vFlip: 0.035 + Math.random() * 0.045,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.025 + Math.random() * 0.035,
      swayAmp: 0.5 + Math.random() * 0.7,
      life: 1.0,
      decay: 0.012 + Math.random() * 0.007,
      maxAlpha: 0.78 + Math.random() * 0.18
    });

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(renderLoop);
    }
  }

  function onPointerMove(clientX, clientY) {
    if (lastX === null || lastY === null) {
      lastX = clientX;
      lastY = clientY;
      createPetal(clientX, clientY, 0);
      return;
    }

    const dx = clientX - lastX;
    const dy = clientY - lastY;
    const dist = Math.hypot(dx, dy);

    if (dist >= STEP_DIST) {
      const steps = Math.min(Math.floor(dist / STEP_DIST), 8);
      const moveAngle = Math.atan2(dy, dx);
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        createPetal(lastX + dx * t, lastY + dy * t, moveAngle);
      }
      lastX = clientX;
      lastY = clientY;
    }
  }

  window.addEventListener("mousemove", event => {
    onPointerMove(event.clientX, event.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", event => {
    if (event.touches && event.touches[0]) {
      onPointerMove(event.touches[0].clientX, event.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    lastX = null;
    lastY = null;
  });

  function renderLoop() {
    ctx.clearRect(0, 0, width, height);

    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.life -= p.decay;

      if (p.life <= 0) {
        petals.splice(i, 1);
        continue;
      }

      p.sway += p.swaySpeed;
      p.x += p.vx + Math.sin(p.sway) * p.swayAmp;
      p.y += p.vy;
      p.vy += p.gravity;
      p.angle += p.vAngle;
      p.flip += p.vFlip;

      const alpha = Math.max(0, p.life * p.maxAlpha);
      const flipScale = Math.cos(p.flip);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(flipScale, 1);

      const grad = ctx.createLinearGradient(0, p.h * 0.5, 0, -p.h * 0.5);
      grad.addColorStop(0, `rgba(${p.color.base[0]}, ${p.color.base[1]}, ${p.color.base[2]}, ${alpha})`);
      grad.addColorStop(1, `rgba(${p.color.tip[0]}, ${p.color.tip[1]}, ${p.color.tip[2]}, ${alpha * 0.9})`);

      ctx.fillStyle = grad;
      ctx.shadowColor = `rgba(244, 162, 178, ${alpha * 0.4})`;
      ctx.shadowBlur = 4;

      drawSakuraPetalPath(ctx, p.w, p.h);
      ctx.fill();

      ctx.restore();
    }

    if (petals.length > 0) {
      requestAnimationFrame(renderLoop);
    } else {
      isRunning = false;
      ctx.clearRect(0, 0, width, height);
    }
  }
}

// Initialize ambient background & interactive trail
initAmbientSakuraBackground();
initSakuraCursorTrail();
