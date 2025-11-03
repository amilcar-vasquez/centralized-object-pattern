// Exercise 11: Search & Filter
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Pineapple', 'Strawberry', 'Blueberry'],
    query: ''
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

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search...';
    input.value = state.query;
    input.id = 'searchInput';

    const list = document.createElement('div');
    const q = state.query.trim().toLowerCase();
    const filtered = state.items.filter(it => it.toLowerCase().includes(q));

    if (filtered.length === 0) {
        list.textContent = 'No results';
    } else {
        filtered.forEach(it => {
            const el = document.createElement('div');
            el.textContent = it;
            list.appendChild(el);
        });
    }

    app.appendChild(input);
    app.appendChild(list);

    input.addEventListener('input', (e) => {
        updateState({ query: e.target.value });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
