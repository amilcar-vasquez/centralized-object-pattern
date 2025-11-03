// Exercise 5: User Profile Form
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with form fields and validation state
// HINT: Include username, email, age (all empty strings), errors (empty object), isValid (false)
const state = {
    // Your code here
};

// TODO 2: Create an updateState function
function updateState(changes) {
    // Your code here
}

// TODO 3: Create a validate function that returns an errors object
// HINT: Check each field and add error messages to errors object if invalid
// Return the errors object
function validate() {
    const errors = {};
    
    // Validate username (at least 3 characters)
    // Your code here
    
    // Validate email (must contain @)
    // Your code here
    
    // Validate age (between 13 and 120)
    // Your code here
    
    return errors;
}

// TODO 4: Create a render function
// HINT: 
// - Update each input's value from state
// - Display errors for each field
// - Add 'invalid' or 'valid' class to inputs
// - Show success message if isValid is true
// - Show profile summary if valid
function render() {
    // Update input values
    // Your code here
    
    // Display errors
    // Your code here
    
    // Update input classes (invalid/valid)
    // Your code here
    
    // Display validation status
    // Your code here
}

// TODO 5: Add event listeners to all input fields
// HINT: For each input change:
// - Get the new value
// - Run validation
// - Check if valid (no errors)
// - Update state with new value, errors, and isValid

// Username input
// Your code here

// Email input
// Your code here

// Age input
// Your code here

// TODO 6: Call render() initially
// Your code here
