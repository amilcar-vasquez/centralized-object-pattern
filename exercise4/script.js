// Exercise 4: Shopping Cart
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'items' array
// HINT: Start with an empty array
const state = {
    // Your code here
};

// TODO 2: Create an updateState function
function updateState(changes) {
    // Your code here
}

// TODO 3: Create a render function
// HINT: You need to:
// - Check if cart is empty and show a message
// - Map through items and create HTML for each
// - Calculate total using reduce()
// - Display total with 2 decimal places
function render() {
    // Calculate total
    // Your code here
    
    // Create HTML for items
    // Your code here
    
    // Update display
    // Your code here
}

// TODO 4: Add event listeners to product buttons
// HINT: Loop through all .product-btn elements
// For each button, get data-name and data-price attributes
// Create item object with: { id: Date.now(), name, price: parseFloat(price) }
// Add to cart: updateState({ items: [...state.items, newItem] })
// Your code here

// TODO 5: Add event listener for remove buttons (event delegation)
// HINT: Add listener to #display, check if clicked element has 'remove-btn' class
// Get the item id from data-id attribute
// Remove item: updateState({ items: state.items.filter(item => item.id !== id) })
// Your code here

// TODO 6: Call render() initially
// Your code here
