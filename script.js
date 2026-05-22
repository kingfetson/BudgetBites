// script.js - Complete Professional Food Ordering System with Working Images

// ========================
// MEAL DATABASE WITH WORKING IMAGES
// ========================
const mealDatabase = [
    // Breakfast Items
    { id: 1, name: "Mahamri + Chai", category: "Breakfast", price: 70, rating: 4.3, image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?w=400&h=300&fit=crop", description: "Sweet fried bread with strong Kenyan tea" },
    { id: 2, name: "Mandazi (5pcs)", category: "Breakfast", price: 100, rating: 4.7, image: "https://images.pexels.com/photos/1438697/pexels-photo-1438697.jpeg?w=400&h=300&fit=crop", description: "Sweet coconut-flavored doughnuts" },
    { id: 3, name: "Chapati + Tea", category: "Breakfast", price: 80, rating: 4.4, image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=400&h=300&fit=crop", description: "Soft chapatis with hot chai" },
    { id: 4, name: "Omelette + Toast", category: "Breakfast", price: 150, rating: 4.6, image: "https://images.pexels.com/photos/1647164/pexels-photo-1647164.jpeg?w=400&h=300&fit=crop", description: "Three-egg omelette with whole wheat toast" },
    { id: 5, name: "Porridge + Groundnuts", category: "Breakfast", price: 60, rating: 4.2, image: "https://images.pexels.com/photos/2105268/pexels-photo-2105268.jpeg?w=400&h=300&fit=crop", description: "Traditional Kenyan uji with groundnuts" },
    
    // Lunch Items
    { id: 6, name: "Chips + Chicken", category: "Lunch", price: 250, rating: 4.5, image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-french-fries-fast-food-60616.jpeg?w=400&h=300&fit=crop", description: "Crispy fries with juicy fried chicken" },
    { id: 7, name: "Githeri", category: "Lunch", price: 120, rating: 4.2, image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=400&h=300&fit=crop", description: "Hearty corn and bean stew" },
    { id: 8, name: "Chapati + Beans", category: "Lunch", price: 150, rating: 4.5, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop", description: "Soft chapatis with bean curry" },
    { id: 9, name: "Mukimo", category: "Lunch", price: 130, rating: 4.2, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?w=400&h=300&fit=crop", description: "Mashed potatoes with greens and maize" },
    { id: 10, name: "Rice + Beef Stew", category: "Lunch", price: 300, rating: 4.7, image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?w=400&h=300&fit=crop", description: "Fragrant rice with rich beef stew" },
    { id: 11, name: "Ugali + Sukuma Wiki", category: "Lunch", price: 100, rating: 4.3, image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?w=400&h=300&fit=crop", description: "Traditional ugali with collard greens" },
    { id: 12, name: "Jollof Rice", category: "Lunch", price: 200, rating: 4.6, image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?w=400&h=300&fit=crop", description: "West African spiced rice with vegetables" },
    { id: 13, name: "Beef Burger + Chips", category: "Lunch", price: 280, rating: 4.5, image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=400&h=300&fit=crop", description: "Juicy beef patty with crispy fries" },
    
    // Dinner Items
    { id: 14, name: "Nyama Choma + Ugali", category: "Dinner", price: 350, rating: 4.8, image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?w=400&h=300&fit=crop", description: "Tender grilled meat with ugali and kachumbari" },
    { id: 15, name: "Pilau Beef", category: "Dinner", price: 280, rating: 4.7, image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?w=400&h=300&fit=crop", description: "Aromatic spiced rice with tender beef" },
    { id: 16, name: "Omena (Silver Fish)", category: "Dinner", price: 200, rating: 4.4, image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?w=400&h=300&fit=crop", description: "Traditional dried silver fish with onions" },
    { id: 17, name: "Matoke (Plantain)", category: "Dinner", price: 180, rating: 4.3, image: "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?w=400&h=300&fit=crop", description: "Steamed green bananas with meat" },
    { id: 18, name: "Grilled Fish + Ugali", category: "Dinner", price: 400, rating: 4.9, image: "https://images.pexels.com/photos/45837/grilled-fish-dinner-seafood-45837.jpeg?w=400&h=300&fit=crop", description: "Fresh tilapia grilled to perfection" },
    { id: 19, name: "Mutton Biryani", category: "Dinner", price: 450, rating: 4.8, image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?w=400&h=300&fit=crop", description: "Aromatic spiced rice with tender mutton" },
    
    // Snacks
    { id: 20, name: "Samosa (2pcs)", category: "Snacks", price: 80, rating: 4.6, image: "https://images.pexels.com/photos/7415715/pexels-photo-7415715.jpeg?w=400&h=300&fit=crop", description: "Crispy pastry filled with spiced meat" },
    { id: 21, name: "Kebab + Chapati", category: "Snacks", price: 180, rating: 4.6, image: "https://images.pexels.com/photos/6198006/pexels-photo-6198006.jpeg?w=400&h=300&fit=crop", description: "Grilled meat skewers with chapati" },
    { id: 22, name: "Bhajia (8pcs)", category: "Snacks", price: 100, rating: 4.4, image: "https://images.pexels.com/photos/1444893/pexels-photo-1444893.jpeg?w=400&h=300&fit=crop", description: "Crispy potato fritters with chili sauce" },
    { id: 23, name: "Spring Rolls", category: "Snacks", price: 120, rating: 4.5, image: "https://images.pexels.com/photos/1152001/pexels-photo-1152001.jpeg?w=400&h=300&fit=crop", description: "Vegetable spring rolls with dipping sauce" },
    { id: 24, name: "Pizza Slice", category: "Snacks", price: 150, rating: 4.3, image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?w=400&h=300&fit=crop", description: "Cheesy pepperoni pizza slice" },
    
    // Drinks
    { id: 25, name: "Fruit Smoothie", category: "Drinks", price: 150, rating: 4.5, image: "https://images.pexels.com/photos/2067399/pexels-photo-2067399.jpeg?w=400&h=300&fit=crop", description: "Fresh blended seasonal fruits" },
    { id: 26, name: "Mango Juice Fresh", category: "Drinks", price: 100, rating: 4.4, image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=400&h=300&fit=crop", description: "Freshly squeezed mango juice" },
    { id: 27, name: "Passion Juice", category: "Drinks", price: 120, rating: 4.6, image: "https://images.pexels.com/photos/1009721/pexels-photo-1009721.jpeg?w=400&h=300&fit=crop", description: "Sweet and tangy passion fruit juice" },
    { id: 28, name: "Fresh Coconut Water", category: "Drinks", price: 80, rating: 4.3, image: "https://images.pexels.com/photos/3228721/pexels-photo-3228721.jpeg?w=400&h=300&fit=crop", description: "Natural refreshing coconut water" },
    { id: 29, name: "Milkshake", category: "Drinks", price: 180, rating: 4.5, image: "https://images.pexels.com/photos/736753/pexels-photo-736753.jpeg?w=400&h=300&fit=crop", description: "Creamy milkshake (Vanilla/Chocolate/Strawberry)" },
    { id: 30, name: "Soda Can", category: "Drinks", price: 70, rating: 4.0, image: "https://images.pexels.com/photos/291764/pexels-photo-291764.jpeg?w=400&h=300&fit=crop", description: "Chilled soft drink (Coke/Sprite/Fanta)" },
    
    // More Dinner Options
    { id: 31, name: "Roasted Chicken + Chips", category: "Dinner", price: 380, rating: 4.7, image: "https://images.pexels.com/photos/616853/pexels-photo-616853.jpeg?w=400&h=300&fit=crop", description: "Whole roasted chicken with seasoned chips" },
    { id: 32, name: "Beef Stew + Rice", category: "Dinner", price: 320, rating: 4.6, image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?w=400&h=300&fit=crop", description: "Slow-cooked beef stew with white rice" },
    
    // Lunch Additions
    { id: 33, name: "Vegetable Biryani", category: "Lunch", price: 220, rating: 4.4, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?w=400&h=300&fit=crop", description: "Fragrant rice with mixed vegetables" },
    { id: 34, name: "Beef Tacos (2pcs)", category: "Lunch", price: 250, rating: 4.5, image: "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?w=400&h=300&fit=crop", description: "Soft tortillas with seasoned beef" },
    
    // Breakfast Additions
    { id: 35, name: "Pancakes + Honey", category: "Breakfast", price: 180, rating: 4.6, image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=400&h=300&fit=crop", description: "Fluffy pancakes with honey syrup" },
    { id: 36, name: "Full English Breakfast", category: "Breakfast", price: 450, rating: 4.8, image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=300&fit=crop", description: "Eggs, bacon, sausage, beans, toast, mushrooms" }
];

// Deals data (best deals - under 200 KES)
const dealsData = mealDatabase.filter(meal => meal.price <= 200).slice(0, 8);

// ========================
// STATE MODULE
// ========================
const AppState = {
    currentBudget: 300,
    currentCategory: "All",
    currentSort: "default",
    searchQuery: "",
    filteredMeals: [...mealDatabase],
    theme: "light"
};

// ========================
// USER AUTHENTICATION
// ========================
let currentUser = null;

const loadUsers = () => {
    const users = localStorage.getItem('foodie_users');
    if (users) return JSON.parse(users);
    const defaultUsers = [{
        id: 1,
        name: "Demo User",
        email: "demo@foodie.com",
        phone: "0712345678",
        password: "demo123",
        createdAt: new Date().toISOString()
    }];
    localStorage.setItem('foodie_users', JSON.stringify(defaultUsers));
    return defaultUsers;
};

const saveUsers = (users) => localStorage.setItem('foodie_users', JSON.stringify(users));

const loadOrders = () => {
    const orders = localStorage.getItem('foodie_orders');
    return orders ? JSON.parse(orders) : [];
};

const saveOrders = (orders) => localStorage.setItem('foodie_orders', JSON.stringify(orders));

const registerUser = (name, email, phone, password, confirm) => {
    if (password !== confirm) return { success: false, message: "Passwords do not match" };
    if (password.length < 6) return { success: false, message: "Password must be at least 6 characters" };
    
    const users = loadUsers();
    if (users.find(u => u.email === email)) return { success: false, message: "Email already registered" };
    
    const newUser = { id: users.length + 1, name, email, phone, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    saveUsers(users);
    return { success: true, message: "Registration successful! Please login." };
};

const loginUser = (email, password) => {
    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = { ...user, password: undefined };
        localStorage.setItem('foodie_current_user', JSON.stringify(currentUser));
        return { success: true, message: `Welcome back, ${user.name}!` };
    }
    return { success: false, message: "Invalid email or password" };
};

const logoutUser = () => {
    currentUser = null;
    localStorage.removeItem('foodie_current_user');
    updateUserInterface();
    showNotification("Logged out successfully", "success");
};

const checkSession = () => {
    const savedUser = localStorage.getItem('foodie_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
};

// ========================
// SHOPPING CART
// ========================
let cart = [];

const loadCart = () => {
    const savedCart = localStorage.getItem('foodie_cart');
    if (savedCart) cart = JSON.parse(savedCart);
    updateCartUI();
};

const saveCart = () => {
    localStorage.setItem('foodie_cart', JSON.stringify(cart));
    updateCartUI();
};

const addToCart = (meal) => {
    if (!currentUser) {
        showNotification("Please login to add items to cart", "error");
        openAuthModal();
        return false;
    }
    
    const existingItem = cart.find(item => item.id === meal.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: meal.id, name: meal.name, price: meal.price, image: meal.image, quantity: 1 });
    }
    
    saveCart();
    showNotification(`${meal.name} added to cart!`, "success");
    
    document.querySelectorAll(`.add-to-cart-btn[data-id="${meal.id}"]`).forEach(btn => {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fas fa-check"></i> Added';
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
        }, 1500);
    });
    
    return true;
};

const removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    showNotification("Item removed from cart", "info");
};

const updateQuantity = (id, change) => {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(id);
        else saveCart();
    }
};

const getCartTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);

const updateCartUI = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = itemCount;
    
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>Your cart is empty</p><small>Add some delicious meals!</small></div>`;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/400x300/FF6B35/white?text=FoodieBudget'">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">KES ${item.price}</div>
                        <div class="cart-item-quantity">
                            <button onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </div>
            `).join('');
        }
    }
    
    if (cartTotalAmount) cartTotalAmount.textContent = `KES ${getCartTotal()}`;
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0 || !currentUser;
};

const checkoutViaWhatsApp = () => {
    if (!currentUser) { showNotification("Please login to checkout", "error"); openAuthModal(); return; }
    if (cart.length === 0) { showNotification("Your cart is empty", "error"); return; }
    
    const total = getCartTotal();
    const orderItems = cart.map(item => `${item.name} x${item.quantity} = KES ${item.price * item.quantity}`).join('\n');
    const orderDate = new Date().toLocaleString();
    const orderId = 'ORD-' + Date.now();
    
    const message = `🍽️ *NEW ORDER - FoodieBudget* 🍽️%0A%0A*Order ID:* ${orderId}%0A*Date:* ${orderDate}%0A*Customer:* ${currentUser.name}%0A*Email:* ${currentUser.email}%0A*Phone:* ${currentUser.phone || 'Not provided'}%0A%0A*Order Items:*%0A${orderItems}%0A%0A*Total Amount:* KES ${total}%0A%0A*Delivery Location:* (Customer will provide)%0A%0A_Please confirm order availability and delivery details._`;
    
    const orders = loadOrders();
    orders.unshift({ id: orderId, date: orderDate, items: [...cart], total, customer: currentUser.name, email: currentUser.email, status: 'Pending' });
    saveOrders(orders);
    
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
    showNotification("Order placed! Redirecting to WhatsApp...", "success");
    
    cart = [];
    saveCart();
    closeCart();
};

// ========================
// DOM ELEMENTS & HELPERS
// ========================
const DOM = {
    budgetInput: document.getElementById('budget-input'),
    categorySelect: document.getElementById('category-select'),
    suggestBtn: document.getElementById('suggest-btn'),
    searchBar: document.getElementById('search-bar'),
    sortSelect: document.getElementById('sort-select'),
    foodGrid: document.getElementById('food-grid'),
    emptyState: document.getElementById('empty-state'),
    loadingSpinner: document.getElementById('loading-spinner'),
    dealsContainer: document.getElementById('deals-container'),
    themeToggle: document.getElementById('theme-toggle')
};

const showLoading = () => {
    if (DOM.loadingSpinner) DOM.loadingSpinner.classList.remove('hidden');
    if (DOM.foodGrid) DOM.foodGrid.classList.add('hidden');
    if (DOM.emptyState) DOM.emptyState.classList.add('hidden');
};

const hideLoading = () => {
    if (DOM.loadingSpinner) DOM.loadingSpinner.classList.add('hidden');
    if (DOM.foodGrid) DOM.foodGrid.classList.remove('hidden');
};

const showEmptyState = () => {
    if (DOM.foodGrid) DOM.foodGrid.classList.add('hidden');
    if (DOM.emptyState) DOM.emptyState.classList.remove('hidden');
};

const hideEmptyState = () => {
    if (DOM.emptyState) DOM.emptyState.classList.add('hidden');
    if (DOM.foodGrid) DOM.foodGrid.classList.remove('hidden');
};

const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><span>${message}</span>`;
    notification.style.cssText = `
        position: fixed; bottom: 20px; right: 20px;
        background: ${type === 'success' ? '#25D366' : type === 'error' ? '#EF476F' : '#FF6B35'};
        color: white; padding: 15px 25px; border-radius: 12px;
        z-index: 10000; display: flex; align-items: center; gap: 12px;
        font-weight: 500; box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        cursor: pointer; animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
    notification.onclick = () => notification.remove();
};

const style = document.createElement('style');
style.textContent = `@keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(style);

const filterMeals = () => {
    let meals = [...mealDatabase];
    meals = meals.filter(meal => meal.price <= AppState.currentBudget);
    if (AppState.currentCategory !== "All") meals = meals.filter(meal => meal.category === AppState.currentCategory);
    if (AppState.searchQuery.trim() !== "") {
        const query = AppState.searchQuery.toLowerCase();
        meals = meals.filter(meal => meal.name.toLowerCase().includes(query));
    }
    return meals;
};

const sortMeals = (meals) => {
    const sorted = [...meals];
    switch (AppState.currentSort) {
        case "low": return sorted.sort((a, b) => a.price - b.price);
        case "high": return sorted.sort((a, b) => b.price - a.price);
        case "rating": return sorted.sort((a, b) => b.rating - a.rating);
        default: return sorted;
    }
};

const createFoodCard = (meal) => `
    <div class="food-card" data-id="${meal.id}">
        <img class="food-img" src="${meal.image}" alt="${meal.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/FF6B35/white?text=FoodieBudget'">
        <div class="food-info">
            <h3>${meal.name}</h3>
            <p>${meal.description}</p>
            <div class="food-price">KES ${meal.price}</div>
            <div class="rating">⭐ ${meal.rating}</div>
            <button class="add-to-cart-btn" data-id="${meal.id}" data-name="${meal.name}" data-price="${meal.price}" data-image="${meal.image}">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    </div>
`;

const renderMeals = () => {
    const filtered = filterMeals();
    const sorted = sortMeals(filtered);
    AppState.filteredMeals = sorted;
    
    if (sorted.length === 0) {
        showEmptyState();
        if (DOM.foodGrid) DOM.foodGrid.innerHTML = '';
    } else {
        hideEmptyState();
        if (DOM.foodGrid) DOM.foodGrid.innerHTML = sorted.map(createFoodCard).join('');
        
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart({
                    id: parseInt(btn.dataset.id),
                    name: btn.dataset.name,
                    price: parseInt(btn.dataset.price),
                    image: btn.dataset.image
                });
            });
        });
    }
};

const renderDeals = () => {
    if (!DOM.dealsContainer) return;
    DOM.dealsContainer.innerHTML = dealsData.map(deal => `
        <div class="food-card">
            <img class="food-img" src="${deal.image}" alt="${deal.name}" style="height: 160px;" onerror="this.src='https://placehold.co/400x300/FF6B35/white?text=FoodieBudget'">
            <div class="food-info">
                <h4>${deal.name}</h4>
                <div class="food-price">KES ${deal.price}</div>
                <div class="rating">⭐ ${deal.rating}</div>
                <button class="add-to-cart-btn" data-id="${deal.id}" data-name="${deal.name}" data-price="${deal.price}" data-image="${deal.image}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('#deals-container .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart({
            id: parseInt(btn.dataset.id), name: btn.dataset.name,
            price: parseInt(btn.dataset.price), image: btn.dataset.image
        }));
    });
};

const updateUI = () => {
    showLoading();
    setTimeout(() => { renderMeals(); hideLoading(); }, 300);
};

// ========================
// EVENT HANDLERS
// ========================
const handleSuggestMeal = () => {
    const budget = parseInt(DOM.budgetInput?.value);
    if (isNaN(budget) || budget <= 0) { alert("Please enter a valid budget amount (KES)"); return; }
    AppState.currentBudget = budget;
    AppState.currentCategory = DOM.categorySelect?.value;
    updateUI();
};

const handleSearch = () => { AppState.searchQuery = DOM.searchBar?.value || ""; updateUI(); };
const handleSort = () => { AppState.currentSort = DOM.sortSelect?.value || "default"; updateUI(); };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('foodie-theme', 'light');
        if (DOM.themeToggle) DOM.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('foodie-theme', 'dark');
        if (DOM.themeToggle) DOM.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem('foodie-theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (DOM.themeToggle) DOM.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
};

// ========================
// UI INTERFACE FUNCTIONS
// ========================
const updateUserInterface = () => {
    const userNameDisplay = document.getElementById('user-name-display');
    const dropdownUsername = document.getElementById('dropdown-username');
    const dropdownUseremail = document.getElementById('dropdown-useremail');
    const authButtons = document.getElementById('auth-buttons');
    const userActions = document.getElementById('user-actions');
    
    if (currentUser) {
        if (userNameDisplay) userNameDisplay.textContent = currentUser.name.split(' ')[0];
        if (dropdownUsername) dropdownUsername.textContent = currentUser.name;
        if (dropdownUseremail) dropdownUseremail.textContent = currentUser.email;
        if (authButtons) authButtons.style.display = 'none';
        if (userActions) userActions.style.display = 'block';
    } else {
        if (userNameDisplay) userNameDisplay.textContent = 'Account';
        if (dropdownUsername) dropdownUsername.textContent = 'Guest';
        if (dropdownUseremail) dropdownUseremail.textContent = 'Not logged in';
        if (authButtons) authButtons.style.display = 'block';
        if (userActions) userActions.style.display = 'none';
    }
};

const openAuthModal = () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'flex';
    document.getElementById('login-form-container').style.display = 'block';
    document.getElementById('register-form-container').style.display = 'none';
};

const closeAuthModal = () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'none';
};

const openCart = () => {
    document.getElementById('cart-sidebar')?.classList.add('open');
    document.getElementById('cart-overlay')?.classList.add('active');
};

const closeCart = () => {
    document.getElementById('cart-sidebar')?.classList.remove('open');
    document.getElementById('cart-overlay')?.classList.remove('active');
};

const showOrders = () => {
    const orders = loadOrders();
    const userOrders = orders.filter(o => o.email === currentUser?.email);
    const ordersList = document.getElementById('orders-list');
    
    if (ordersList) {
        if (userOrders.length === 0) {
            ordersList.innerHTML = '<p class="no-orders">No orders yet. Start shopping!</p>';
        } else {
            ordersList.innerHTML = userOrders.map(order => `
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-date">${order.date}</span>
                        <span class="order-total">KES ${order.total}</span>
                    </div>
                    <div class="order-items">${order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}</div>
                    <span class="order-status">${order.status}</span>
                </div>
            `).join('');
        }
    }
    document.getElementById('orders-modal').style.display = 'flex';
};

// ========================
// TESTIMONIALS MODULE
// ========================
const testimonialsDatabase = [
    { id: 1, name: "Brian Kipchoge", location: "Nairobi, CBD", rating: 5, comment: "This app helps me choose meals daily! Perfect for campus students. I've saved over 2000 KES this month alone.", favoriteMeal: "Nyama Choma", date: "2024-01-15" },
    { id: 2, name: "Stacy Wanjiku", location: "Westlands", rating: 5, comment: "Amazing food suggestions! I never knew I could get Pilau for that cheap. The WhatsApp order feature is a game-changer!", favoriteMeal: "Pilau Beef", date: "2024-01-10" },
    { id: 3, name: "James Otieno", location: "Kilimani", rating: 5, comment: "Finally an app that understands Kenyan pockets. The deals section saves me everyday. Highly recommended!", favoriteMeal: "Chips Chicken", date: "2024-01-05" },
    { id: 4, name: "Mary Njeri", location: "Eastlands", rating: 5, comment: "As a mom of two, budgeting meals is crucial. FoodieBudget helps me plan weekly meals without breaking the bank.", favoriteMeal: "Githeri", date: "2024-01-03" },
    { id: 5, name: "Peter Mwangi", location: "Thika Road", rating: 4, comment: "Great variety of meals and very accurate budget suggestions. The UI is beautiful and easy to use.", favoriteMeal: "Chapati Beans", date: "2023-12-28" },
    { id: 6, name: "Sarah Chemutai", location: "Eldoret", rating: 5, comment: "I love how easy it is to find affordable meals. The search by budget feature is brilliant!", favoriteMeal: "Mukimo", date: "2024-01-12" },
    { id: 7, name: "David Omondi", location: "Kisumu", rating: 4.5, comment: "Best food discovery platform in Kenya. The deals are actually good and the vendors are reliable.", favoriteMeal: "Omena", date: "2024-01-08" },
    { id: 8, name: "Grace Muthoni", location: "Nakuru", rating: 5, comment: "The variety of meals is amazing! From nyama choma to vegetarian options, everything is covered.", favoriteMeal: "Vegetable Biryani", date: "2024-01-14" }
];

let testimonialIndex = 0;
let testimonialSlidesToShow = 3;
let autoSlideInterval;

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const diffDays = Math.ceil(Math.abs(new Date() - date) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return "Yesterday";
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const getRatingStars = (rating) => '★'.repeat(Math.floor(rating)) + (rating % 1 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating));

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

const createTestimonialCard = (t) => `
    <div class="t-card">
        <div class="testimonial-header">
            <div class="testimonial-rating">${getRatingStars(t.rating)}</div>
            <div class="testimonial-date">${formatDate(t.date)}</div>
        </div>
        <p>"${t.comment}"</p>
        <div class="user-info">
            <div class="user-avatar">${getInitials(t.name)}</div>
            <div class="user-details">
                <strong>${t.name}</strong>
                <div class="user-location"><i class="fas fa-map-marker-alt"></i> ${t.location}</div>
                ${t.favoriteMeal ? `<div class="favorite-meal"><i class="fas fa-heart"></i> Loves ${t.favoriteMeal}</div>` : ''}
            </div>
        </div>
    </div>
`;

const updateSlidesToShow = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
};

const renderTestimonials = () => {
    const track = document.getElementById('testimonial-track');
    if (track) track.innerHTML = testimonialsDatabase.map(createTestimonialCard).join('');
    updateDots();
    updatePosition();
};

const updatePosition = () => {
    const track = document.getElementById('testimonial-track');
    const cardWidth = document.querySelector('.t-card')?.offsetWidth || 300;
    if (track) track.style.transform = `translateX(-${testimonialIndex * (cardWidth + 25)}px)`;
    document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === testimonialIndex));
};

const updateDots = () => {
    const dotsContainer = document.getElementById('slider-dots');
    if (!dotsContainer) return;
    const total = Math.ceil(testimonialsDatabase.length / testimonialSlidesToShow);
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === testimonialIndex) dot.classList.add('active');
        dot.addEventListener('click', () => { testimonialIndex = i; updatePosition(); });
        dotsContainer.appendChild(dot);
    }
};

const nextSlide = () => {
    const max = Math.ceil(testimonialsDatabase.length / testimonialSlidesToShow) - 1;
    testimonialIndex = testimonialIndex < max ? testimonialIndex + 1 : 0;
    updatePosition();
};

const prevSlide = () => {
    const max = Math.ceil(testimonialsDatabase.length / testimonialSlidesToShow) - 1;
    testimonialIndex = testimonialIndex > 0 ? testimonialIndex - 1 : max;
    updatePosition();
};

const startAutoSlide = () => { if (autoSlideInterval) clearInterval(autoSlideInterval); autoSlideInterval = setInterval(nextSlide, 5000); };
const stopAutoSlide = () => { if (autoSlideInterval) clearInterval(autoSlideInterval); };

const initTestimonials = () => {
    testimonialSlidesToShow = updateSlidesToShow();
    renderTestimonials();
    document.querySelector('.prev-slide')?.addEventListener('click', () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });
    document.querySelector('.next-slide')?.addEventListener('click', () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });
    startAutoSlide();
    document.querySelector('.testimonial-slider-container')?.addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.testimonial-slider-container')?.addEventListener('mouseleave', startAutoSlide);
    window.addEventListener('resize', () => { testimonialSlidesToShow = updateSlidesToShow(); testimonialIndex = 0; updateDots(); updatePosition(); });
};

// ========================
// INITIALIZATION
// ========================
const initEventListeners = () => {
    if (DOM.suggestBtn) DOM.suggestBtn.addEventListener('click', handleSuggestMeal);
    if (DOM.searchBar) DOM.searchBar.addEventListener('input', debounce(handleSearch, 300));
    if (DOM.sortSelect) DOM.sortSelect.addEventListener('change', handleSort);
    if (DOM.themeToggle) DOM.themeToggle.addEventListener('click', toggleTheme);
    if (DOM.budgetInput) DOM.budgetInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSuggestMeal(); });
    
    document.getElementById('cart-link')?.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    document.querySelector('.close-cart')?.addEventListener('click', closeCart);
    document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
    document.getElementById('checkout-btn')?.addEventListener('click', checkoutViaWhatsApp);
    
    const userBtn = document.getElementById('user-btn');
    const userDropdown = document.getElementById('user-dropdown');
    if (userBtn && userDropdown) {
        userBtn.addEventListener('click', () => userDropdown.classList.toggle('active'));
        document.addEventListener('click', (e) => { if (!userBtn.contains(e.target) && !userDropdown.contains(e.target)) userDropdown.classList.remove('active'); });
    }
    
    document.getElementById('login-btn-dropdown')?.addEventListener('click', openAuthModal);
    document.getElementById('register-btn-dropdown')?.addEventListener('click', openAuthModal);
    document.getElementById('orders-btn')?.addEventListener('click', () => { showOrders(); userDropdown.classList.remove('active'); });
    document.getElementById('logout-btn')?.addEventListener('click', () => { logoutUser(); userDropdown.classList.remove('active'); });
    
    document.querySelectorAll('.modal-close, #auth-modal .modal-close, #orders-modal .modal-close').forEach(btn => {
        btn?.addEventListener('click', function() { this.closest('.modal').style.display = 'none'; });
    });
    document.getElementById('show-register')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('login-form-container').style.display = 'none'; document.getElementById('register-form-container').style.display = 'block'; });
    document.getElementById('show-login')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('register-form-container').style.display = 'none'; document.getElementById('login-form-container').style.display = 'block'; });
    
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const result = loginUser(document.getElementById('login-email').value, document.getElementById('login-password').value);
        showNotification(result.message, result.success ? 'success' : 'error');
        if (result.success) { closeAuthModal(); updateCartUI(); }
    });
    
    document.getElementById('register-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const result = registerUser(
            document.getElementById('register-name').value,
            document.getElementById('register-email').value,
            document.getElementById('register-phone').value,
            document.getElementById('register-password').value,
            document.getElementById('register-confirm').value
        );
        showNotification(result.message, result.success ? 'success' : 'error');
        if (result.success) { document.getElementById('register-form-container').style.display = 'none'; document.getElementById('login-form-container').style.display = 'block'; }
    });
    
    document.getElementById('share-testimonial-btn')?.addEventListener('click', () => { document.getElementById('testimonial-modal').style.display = 'flex'; });
    document.querySelectorAll('#testimonial-modal .modal-close').forEach(btn => { btn?.addEventListener('click', () => { document.getElementById('testimonial-modal').style.display = 'none'; }); });
    
    document.getElementById('testimonial-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('test-name').value;
        const location = document.getElementById('test-location').value;
        const comment = document.getElementById('test-comment').value;
        const rating = document.getElementById('test-rating').value;
        const meal = document.getElementById('test-meal').value;
        
        if (!name || !location || !comment) { showNotification('Please fill all required fields', 'error'); return; }
        
        const message = `🍽️ *NEW TESTIMONIAL* 🍽️%0A%0A*Customer:* ${name}%0A*Location:* ${location}%0A*Rating:* ${rating}/5%0A${meal ? `*Favorite Meal:* ${meal}%0A` : ''}*Review:* "${comment}"`;
        window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
        showNotification('Thank you! Your review has been sent!', 'success');
        document.getElementById('testimonial-modal').style.display = 'none';
        document.getElementById('testimonial-form').reset();
        document.getElementById('test-rating').value = '5';
        document.querySelectorAll('#rating-select span').forEach(s => s.classList.remove('selected'));
        document.querySelector('#rating-select span[data-rating="5"]')?.classList.add('selected');
    });
    
    document.querySelectorAll('#rating-select span').forEach(span => {
        span.addEventListener('click', () => {
            document.querySelectorAll('#rating-select span').forEach(s => s.classList.remove('selected'));
            span.classList.add('selected');
            document.getElementById('test-rating').value = span.dataset.rating;
        });
    });
};

const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
};

const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
};

const init = () => {
    console.log("FoodieBudget App Initialized 🍽️ with 36+ meals!");
    if (DOM.budgetInput) DOM.budgetInput.value = "300";
    loadTheme();
    checkSession();
    loadCart();
    renderDeals();
    updateUI();
    initEventListeners();
    initMobileMenu();
    initSmoothScroll();
    initTestimonials();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
