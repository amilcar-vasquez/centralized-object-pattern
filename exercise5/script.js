// Exercise 5: User Profile Form
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with form fields and validation state
// HINT: Include username, email, age (all empty strings), errors (empty object), isValid (false)
const state = {
    username: '',
    email: '',
    age: '',
    errors: {},
    isValid: false
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a validate function that returns an errors object
// HINT: Check each field and add error messages to errors object if invalid
// Return the errors object
function validate() {
    const errors = {};
    
    // Validate username (at least 3 characters)
    if (typeof state.username === 'string') {
        if (state.username.trim().length > 0 && state.username.trim().length < 3) {
            errors.username = 'Username must be at least 3 characters';
        }
    }
    
    // Validate email (must contain @)
    if (typeof state.email === 'string') {
        if (state.email.trim().length > 0 && !state.email.includes('@')) {
            errors.email = 'Please enter a valid email';
        }
    }
    
    // Validate age (between 13 and 120)
    if (state.age !== '') {
        const ageNum = parseInt(state.age, 10);
        if (Number.isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
            errors.age = 'Age must be a number between 13 and 120';
        }
    }
    
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
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const ageInput = document.getElementById('ageInput');
    usernameInput.value = state.username;
    emailInput.value = state.email;
    ageInput.value = state.age;
    
    // Display errors
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const ageError = document.getElementById('ageError');

    usernameError.textContent = state.errors.username || '';
    emailError.textContent = state.errors.email || '';
    ageError.textContent = state.errors.age || '';
    
    // Update input classes (invalid/valid)
    if (state.errors.username && state.username.trim() !== '') {
        usernameInput.classList.add('invalid');
        usernameInput.classList.remove('valid');
    } else if (state.username.trim() !== '') {
        usernameInput.classList.remove('invalid');
        usernameInput.classList.add('valid');
    } else {
        usernameInput.classList.remove('invalid');
        usernameInput.classList.remove('valid');
    }

    if (state.errors.email && state.email.trim() !== '') {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
    } else if (state.email.trim() !== '') {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.remove('invalid');
        emailInput.classList.remove('valid');
    }

    if (state.errors.age && state.age !== '') {
        ageInput.classList.add('invalid');
        ageInput.classList.remove('valid');
    } else if (state.age !== '') {
        ageInput.classList.remove('invalid');
        ageInput.classList.add('valid');
    } else {
        ageInput.classList.remove('invalid');
        ageInput.classList.remove('valid');
    }
    
    // Display validation status
    const display = document.getElementById('display');
    display.innerHTML = '';
    if (state.isValid) {
        const success = document.createElement('div');
        success.className = 'success';
        success.textContent = '✅ Profile is valid!';
        display.appendChild(success);

        const summary = document.createElement('div');
        summary.className = 'summary';
        summary.innerHTML = `<p><strong>Username:</strong> ${state.username}</p><p><strong>Email:</strong> ${state.email}</p><p><strong>Age:</strong> ${state.age}</p>`;
        display.appendChild(summary);
    } else {
        const info = document.createElement('div');
        info.className = 'info';
        info.textContent = 'Please fill out the form. Errors will appear for invalid fields after you type.';
        display.appendChild(info);
    }
}

// TODO 5: Add event listeners to all input fields
// HINT: For each input change:
// - Get the new value
// - Run validation
// - Check if valid (no errors)
// - Update state with new value, errors, and isValid

// Username input
const usernameInputEl = document.getElementById('usernameInput');
usernameInputEl.addEventListener('input', (e) => {
    const newVal = e.target.value;
    const errors = validate();
    const isValid = Object.keys(errors).length === 0;
    updateState({ username: newVal, errors, isValid });
});

// Email input
const emailInputEl = document.getElementById('emailInput');
emailInputEl.addEventListener('input', (e) => {
    const newVal = e.target.value;
    const errors = validate();
    const isValid = Object.keys(errors).length === 0;
    updateState({ email: newVal, errors, isValid });
});

// Age input
const ageInputEl = document.getElementById('ageInput');
ageInputEl.addEventListener('input', (e) => {
    const newVal = e.target.value;
    const errors = validate();

    const isValid = Object.keys(errors).length === 0;
    updateState({ age: newVal, errors, isValid });
});

// TODO 6: Call render() initially
render();
