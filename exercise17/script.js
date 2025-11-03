// Exercise 17: Undo/Redo System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    value: 0,
    past: [],
    future: []
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

    const val = document.createElement('div');
    val.className = 'value';
    val.textContent = `Value: ${state.value}`;

    const controls = document.createElement('div');
    const inc = document.createElement('button');
    inc.textContent = '+1';
    const dec = document.createElement('button');
    dec.textContent = '-1';
    const undo = document.createElement('button');
    undo.textContent = 'Undo';
    undo.disabled = state.past.length === 0;
    const redo = document.createElement('button');
    redo.textContent = 'Redo';
    redo.disabled = state.future.length === 0;

    controls.appendChild(dec);
    controls.appendChild(inc);
    controls.appendChild(undo);
    controls.appendChild(redo);

    app.appendChild(val);
    app.appendChild(controls);

    inc.addEventListener('click', () => pushValue(state.value + 1));
    dec.addEventListener('click', () => pushValue(state.value - 1));
    undo.addEventListener('click', () => doUndo());
    redo.addEventListener('click', () => doRedo());
}

function pushValue(newValue) {
    const past = [...state.past, state.value];
    updateState({ value: newValue, past, future: [] });
}

function doUndo() {
    if (state.past.length === 0) return;
    const past = [...state.past];
    const prev = past.pop();
    const future = [state.value, ...state.future];
    updateState({ value: prev, past, future });
}

function doRedo() {
    if (state.future.length === 0) return;
    const future = [...state.future];
    const next = future.shift();
    const past = [...state.past, state.value];
    updateState({ value: next, past, future });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
