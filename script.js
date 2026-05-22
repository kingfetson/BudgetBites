// script.js - Complete Professional Food Ordering System

// ========================
// USER AUTHENTICATION MODULE
// ========================
let currentUser = null;

// Load users from localStorage
const loadUsers = () => {
    const users = localStorage.getItem('foodie_users');
    if (users) {
        return JSON.parse(users);
    }
    // Default demo user
    const defaultUsers = [
        {
            id: 1,
            name: "Demo User",
            email: "demo@foodie.com",
            phone: "0712345678",
            password: "demo123",
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('foodie_users', JSON.stringify(defaultUsers));
    return defaultUsers;
};

const saveUsers = (users) => {
    localStorage.setItem('foodie_users', JSON.stringify(users));
};

// Load orders from localStorage
const loadOrders = () => {
    const orders = localStorage.getItem('foodie_orders');
    return orders ? JSON.parse(orders) : [];
};

const saveOrders = (orders) => {
    localStorage.setItem('foodie_orders', JSON.stringify(orders));
};

// Register user
const registerUser = (name, email, phone, password) => {
    const users = loadUsers();
    
    // Check if email exists
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Email already registered" };
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email,
        phone,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    return { success: true, message: "Registration successful! Please login." };
};

// Login user
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

// Logout user
const logoutUser = () => {
    currentUser = null;
    localStorage.removeItem('foodie_current_user');
    updateUserInterface();
    showNotification("Logged out successfully", "success");
};

// Check saved session
const checkSession = () => {
    const savedUser = localStorage.getItem('foodie_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
};

// Update UI based on auth state
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

// ========================
// SHOPPING CART MODULE
// ========================
let cart = [];

const loadCart = () => {
    const savedCart = localStorage.getItem('foodie_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
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
        cart.push({
            id: meal.id,
            name: meal.name,
            price: meal.price,
            image: meal.image,
            quantity: 1
        });
    }
    
    saveCart();
    showNotification(`${meal.name} added to cart!`, "success");
    
    // Animate button
    const buttons = document.querySelectorAll(`.add-to-cart-btn[data-id="${meal.id}"]`);
    buttons.forEach(btn => {
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
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
        }
    }
};

const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const updateCartUI = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Update cart count
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = itemCount;
    
    // Update cart items display
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Your cart is empty</p>
                    <small>Add some delicious meals!</small>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img class="cart-item-img" src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">KES ${item.price}</div>
                        <div class="cart-item-quantity">
                            <button onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
    
    // Update total
    const total = getCartTotal();
    if (cartTotalAmount) cartTotalAmount.textContent = `KES ${total}`;
    
    // Enable/disable checkout button
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0 || !currentUser;
    }
};

// ========================
// CHECKOUT WITH WHATSAPP
// ========================
const checkoutViaWhatsApp = () => {
    if (!currentUser) {
        showNotification("Please login to checkout", "error");
        openAuthModal();
        return;
    }
    
    if (cart.length === 0) {
        showNotification("Your cart is empty", "error");
        return;
    }
    
    const total = getCartTotal();
    const orderItems = cart.map(item => `${item.name} x${item.quantity} = KES ${item.price * item.quantity}`).join('\n');
    const orderDate = new Date().toLocaleString();
    const orderId = 'ORD-' + Date.now();
    
    const message = `🍽️ *NEW ORDER - FoodieBudget* 🍽️%0A%0A` +
        `*Order ID:* ${orderId}%0A` +
        `*Date:* ${orderDate}%0A` +
        `*Customer:* ${currentUser.name}%0A` +
        `*Email:* ${currentUser.email}%0A` +
        `*Phone:* ${currentUser.phone || 'Not provided'}%0A%0A` +
        `*Order Items:*%0A${orderItems}%0A%0A` +
        `*Total Amount:* KES ${total}%0A%0A` +
        `*Delivery Location:* (Customer will provide)%0A%0A` +
        `_Please confirm order availability and delivery details._`;
    
    // Save order to history
    const orders = loadOrders();
    orders.unshift({
        id: orderId,
        date: orderDate,
        items: [...cart],
        total: total,
        customer: currentUser.name,
        email: currentUser.email,
        status: 'Pending'
    });
    saveOrders(orders);
    
    const whatsappNumber = "254700000000";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open
