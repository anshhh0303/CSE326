const menuItems = [
  {id:1,name:"Masala Dosa",category:"Indian",description:"Crisp rice crepe, spiced potato, sambar and coconut chutney.",price:90,available:true,image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=85"},
  {id:2,name:"Paneer Butter Masala",category:"Indian",description:"Soft paneer in a silky tomato, butter and fenugreek gravy.",price:180,available:true,image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=85"},
  {id:3,name:"Rajma Chawal",category:"Indian",description:"Slow-cooked red kidney beans with fragrant basmati rice.",price:120,available:false,image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85"},
  {id:4,name:"Chole Bhature",category:"Indian",description:"Classic chickpea curry paired with fluffy fried bread.",price:110,available:true,image:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=85"},
  {id:5,name:"Veg Hakka Noodles",category:"Chinese",description:"Wok-tossed noodles with crisp vegetables and sesame.",price:130,available:true,image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=85"},
  {id:6,name:"Chilli Paneer",category:"Chinese",description:"Crispy paneer, peppers and onions in a tangy chilli glaze.",price:160,available:true,image:"https://images.unsplash.com/photo-1603894584367-1fb404b5b4aa?auto=format&fit=crop&w=700&q=85"},
  {id:7,name:"Veg Fried Rice",category:"Chinese",description:"Steamed rice tossed with garden vegetables and spring onion.",price:125,available:false,image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85"},
  {id:8,name:"Classic Veg Burger",category:"Fast Food",description:"Crunchy vegetable patty, lettuce, tomato and house sauce.",price:95,available:true,image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=85"},
  {id:9,name:"Margherita Sandwich",category:"Fast Food",description:"Grilled bread with tomato, mozzarella and herb pesto.",price:140,available:true,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85"},
  {id:10,name:"Peri Peri Fries",category:"Fast Food",description:"Golden fries finished with fiery peri peri seasoning.",price:85,available:true,image:"https://images.unsplash.com/photo-1573011581798-5f7b1f9e7c0f?auto=format&fit=crop&w=700&q=85"},
  {id:11,name:"Samosa Platter",category:"Snacks",description:"Two crisp samosas with tangy tamarind and mint chutneys.",price:60,available:true,image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=85"},
  {id:12,name:"Pav Bhaji",category:"Snacks",description:"Buttery Mumbai-style vegetable mash with toasted pav.",price:100,available:true,image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85"},
  {id:13,name:"Cold Coffee",category:"Beverages",description:"Creamy chilled coffee crowned with a light foam.",price:90,available:true,image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85"},
  {id:14,name:"Masala Chai",category:"Beverages",description:"Strong Indian tea simmered with milk and warming spices.",price:35,available:true,image:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=700&q=85"},
  {id:15,name:"Fresh Lime Soda",category:"Beverages",description:"Sparkling lime cooler—choose sweet or salted.",price:55,available:false,image:"https://images.unsplash.com/photo-1523677011781-c91d1bbe2f6e?auto=format&fit=crop&w=700&q=85"},
  {id:16,name:"Gulab Jamun",category:"Desserts",description:"Warm, soft milk dumplings soaked in cardamom syrup.",price:70,available:true,image:"https://images.unsplash.com/photo-1666190094762-180e49c5d4eb?auto=format&fit=crop&w=700&q=85"},
  {id:17,name:"Chocolate Brownie",category:"Desserts",description:"Fudgy dark chocolate brownie with walnut crunch.",price:110,available:true,image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85"},
  {id:18,name:"Kesar Pista Kulfi",category:"Desserts",description:"Traditional dense milk ice cream with saffron and pistachio.",price:80,available:false,image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=85"}
];

const categories = ["All", "Indian", "Chinese", "Fast Food", "Snacks", "Beverages", "Desserts"];
let activeCategory = "All";
let cart = JSON.parse(localStorage.getItem("cafeCart")) || [];
let orders = JSON.parse(localStorage.getItem("cafeOrders")) || [];

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
      <rect width="900" height="650" fill="#d9c5ad"/>
      <circle cx="450" cy="325" r="205" fill="#f3eadc" opacity=".8"/>
      <circle cx="450" cy="325" r="145" fill="none" stroke="#b95f43" stroke-width="8" opacity=".8"/>
      <path d="M338 356c50-65 74-82 112-82 48 0 70 35 112 82-33 42-67 63-112 63-44 0-79-20-112-63Z" fill="#b95f43" opacity=".82"/>
      <path d="M383 340c22-23 42-30 67-30 25 0 45 7 67 30-23 25-43 36-67 36s-44-11-67-36Z" fill="#f3eadc" opacity=".78"/>
      <text x="450" y="505" text-anchor="middle" fill="#3b241c" font-family="Georgia, serif" font-size="32">${safeCategory}</text>
      <text x="450" y="543" text-anchor="middle" fill="#65483d" font-family="Arial, sans-serif" font-size="16" letter-spacing="3">THE CAFÉ TABLE</text>
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
  image.addEventListener("error", useFallback, {once: true});
  if (image.complete && image.naturalWidth === 0) useFallback();
}

function protectAllImages() {
  document.querySelectorAll("img").forEach(image => {
    const card = image.closest(".food-card");
    const categoryLabel = card ? card.querySelector(".food-category") : null;
    const category = categoryLabel ? categoryLabel.textContent : "Café Table";
    protectImage(image, category);
  });
}

function renderFilters() {
  categoryFilters.innerHTML = categories.map(category =>
    `<button class="filter-btn ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`
  ).join("");
}

function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = menuItems.filter(item =>
    (activeCategory === "All" || item.category === activeCategory) &&
    (item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
  );
  document.getElementById("noResults").hidden = filtered.length !== 0;
  menuGrid.innerHTML = filtered.map((item, index) => `
    <article class="food-card ${item.available ? "" : "unavailable"} entering" style="animation-delay:${index * 55}ms">
      <div class="food-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.available ? '<span class="availability">Available</span>' : '<span class="unavailable-label">Currently Unavailable</span>'}
      </div>
      <div class="food-info">
        <span class="food-category">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="food-bottom">
          <span class="price">₹${item.price}</span>
          <button class="add-btn" type="button" data-id="${item.id}" ${item.available ? "" : "disabled"} aria-label="${item.available ? "Add " + item.name + " to cart" : item.name + " is unavailable"}">+</button>
        </div>
      </div>
    </article>
  `).join("");
  protectAllImages();
}

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderMenu();
});
searchInput.addEventListener("input", renderMenu);

menuGrid.addEventListener("click", event => {
  const button = event.target.closest(".add-btn");
  if (!button || button.disabled) return;
  const item = menuItems.find(food => food.id === Number(button.dataset.id));
  if (!item || !item.available) {
    showToast("This item is currently unavailable");
    return;
  }
  const existing = cart.find(product => product.id === item.id);
  if (existing) existing.quantity++;
  else cart.push({...item, quantity: 1});
  saveCart();
  renderCart();
  showToast(`${item.name} added to cart`);
});

function saveCart() {
  localStorage.setItem("cafeCart", JSON.stringify(cart));
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");
  document.getElementById("cartSubtotal").textContent = `₹${cartTotal()}`;
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart"><div><span>☕</span><strong>Your cart is empty</strong><p>Add something delicious from the menu.</p></div></div>';
    document.getElementById("checkoutBtn").disabled = true;
    document.getElementById("checkoutBtn").style.opacity = ".55";
  } else {
    document.getElementById("checkoutBtn").disabled = false;
    document.getElementById("checkoutBtn").style.opacity = "1";
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <span class="cart-item-price">₹${item.price}</span>
          <div class="quantity">
            <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
          </div>
        </div>
        <button class="remove-btn" type="button" data-action="remove" data-id="${item.id}" aria-label="Remove ${item.name}">×</button>
      </div>
    `).join("");
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
document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

function renderCheckoutSummary() {
  document.getElementById("checkoutSummary").innerHTML = cart.map(item =>
    `<div class="summary-item"><span>${item.quantity} × ${item.name}</span><strong>₹${item.price * item.quantity}</strong></div>`
  ).join("");
  document.getElementById("checkoutTotal").textContent = `₹${cartTotal()}`;
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
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
document.getElementById("checkoutClose").addEventListener("click", closeCheckout);
function closeCheckout() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

document.getElementById("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("studentName").value.trim();
  const registration = document.getElementById("registration").value.trim();
  const error = document.getElementById("formError");
  if (name.length < 2) { error.textContent = "Please enter a valid student name."; return; }
  if (registration.length < 4) { error.textContent = "Please enter a valid registration number."; return; }
  error.textContent = "";

  const payment = document.querySelector('input[name="payment"]:checked').value;
  document.getElementById("checkoutView").hidden = true;
  document.getElementById("processingView").hidden = false;

  setTimeout(() => {
    const orderId = `CT-${Date.now().toString().slice(-8)}-${Math.floor(100 + Math.random() * 900)}`;
    const order = {
      id: orderId,
      name,
      registration,
      items: cart.map(item => ({name:item.name, quantity:item.quantity, price:item.price})),
      date: new Date().toLocaleString("en-IN", {dateStyle:"medium", timeStyle:"short"}),
      amount: cartTotal(),
      payment
    };
    orders.unshift(order);
    localStorage.setItem("cafeOrders", JSON.stringify(orders));
    cart = [];
    saveCart();
    renderCart();
    renderOrders();
    showSuccess(order);
  }, 1800);
});

function showSuccess(order) {
  document.getElementById("processingView").hidden = true;
  const success = document.getElementById("successView");
  success.hidden = false;
  success.innerHTML = `
    <div class="success-icon">✓</div>
    <p class="eyebrow">Order confirmed</p>
    <h2>Thank you, ${escapeHtml(order.name)}!</h2>
    <p>Your order is ready to be prepared.</p>
    ${receiptHtml(order)}
    <button class="primary-btn done-btn" type="button" id="doneBtn">Done</button>
  `;
  document.getElementById("doneBtn").addEventListener("click", () => {
    closeCheckout();
    document.getElementById("checkoutForm").reset();
  });
}

function receiptHtml(order) {
  return `<div class="receipt">
    <div class="receipt-head"><strong>The Café Table</strong><span>${order.id}</span></div>
    ${order.items.map(item => `<div class="receipt-line"><span>${item.quantity} × ${item.name}</span><strong>₹${item.quantity * item.price}</strong></div>`).join("")}
    <div class="receipt-line"><span>${order.payment}</span><strong>₹${order.amount}</strong></div>
  </div>`;
}

function renderOrders() {
  const list = document.getElementById("ordersList");
  if (!orders.length) {
    list.innerHTML = '<div class="empty-orders"><strong>No orders yet</strong><p><a href="#menu">Visit the menu</a> to place your first order.</p></div>';
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

document.getElementById("ordersList").addEventListener("click", event => {
  const button = event.target.closest(".receipt-btn");
  if (!button) return;
  const order = orders[Number(button.dataset.orderIndex)];
  document.getElementById("checkoutView").hidden = true;
  document.getElementById("processingView").hidden = true;
  const success = document.getElementById("successView");
  success.hidden = false;
  success.innerHTML = `
    <p class="eyebrow">Previous receipt</p><h2>Order details</h2>
    ${receiptHtml(order)}
    <p style="font-size:12px;color:var(--espresso-soft)">Student: ${escapeHtml(order.name)} · ${escapeHtml(order.registration)}</p>
    <button class="primary-btn done-btn" type="button" id="receiptDone">Close</button>
  `;
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  document.getElementById("receiptDone").addEventListener("click", closeCheckout);
});

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
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
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
protectAllImages();

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
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

renderFilters();
renderMenu();
renderCart();
renderOrders();
