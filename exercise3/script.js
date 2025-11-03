// Exercise 3: Temperature Converter
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'celsius' property
// HINT: Start with 0 as the default value
const state = {
    celsius : 0
};

// TODO 2: Create an updateState function
function updateState(changes) {

    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: 
// - Calculate fahrenheit from celsius: (celsius * 9/5) + 32
// - Display both temperatures with 1 decimal place using .toFixed(1)
// - Update the input value to match state.celsius
function render() {
    // Calculate fahrenheit
    const fahrenheit = (state.celsius * 9/5) + 32;
    
    // Update display

    const fahrenheitDisplay = document.getElementById('display');
    fahrenheitDisplay.textContent = fahrenheit.toFixed(1) + ' °F';

    // Update input value
    const celsiusInput = document.getElementById('celsiusInput');
    celsiusInput.value = state.celsius.toFixed(1);
}

// TODO 4: Add event listener to the input field
// HINT: 
// - Use 'input' event for real-time updates
// - Get the value with: parseFloat(input.value) || 0
// - Call updateState with the new celsius value
const celsiusInput = document.getElementById('celsiusInput');
celsiusInput.addEventListener('input', (event) => {
    const newCelsius = parseFloat(event.target.value) || 0;
    updateState({ celsius: newCelsius });
});

// TODO 5: Call render() initially
render();
