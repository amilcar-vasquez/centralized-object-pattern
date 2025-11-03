// Exercise 25: Dashboard
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    widgets: {
        counter: 0,
        status: true
    }
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    const counter = document.createElement('div');
    counter.className = 'widget';
    counter.innerHTML = `<h4>Counter</h4><div id="count">${state.widgets.counter}</div><button id="inc">+1</button>`;

    const toggle = document.createElement('div');
    toggle.className = 'widget';
    toggle.innerHTML = `<h4>Toggle</h4><div id="status">${state.widgets.status ? 'On' : 'Off'}</div><button id="toggleBtn">Toggle</button>`;

    app.appendChild(counter);
    app.appendChild(toggle);

    document.getElementById('inc').addEventListener('click', () => updateState({ widgets: Object.assign({}, state.widgets, { counter: state.widgets.counter + 1 }) }));
    document.getElementById('toggleBtn').addEventListener('click', () => updateState({ widgets: Object.assign({}, state.widgets, { status: !state.widgets.status }) }));
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
