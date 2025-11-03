// Exercise 21: Calendar
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    date: new Date()
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

    const header = document.createElement('div');
    const month = state.date.toLocaleString(undefined, { month: 'long' });
    const year = state.date.getFullYear();
    header.innerHTML = `<button id="prev">◀</button><strong>${month} ${year}</strong><button id="next">▶</button>`;

    const grid = document.createElement('div');
    grid.className = 'calendar-grid';

    const first = new Date(state.date.getFullYear(), state.date.getMonth(), 1);
    const last = new Date(state.date.getFullYear(), state.date.getMonth() + 1, 0);

    // weekday headers
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    days.forEach(d => {
        const dh = document.createElement('div'); dh.className = 'cal-day header'; dh.textContent = d; grid.appendChild(dh);
    });

    // empty slots
    for (let i = 0; i < first.getDay(); i++) {
        const empty = document.createElement('div'); empty.className = 'cal-day empty'; grid.appendChild(empty);
    }

    for (let d = 1; d <= last.getDate(); d++) {
        const cell = document.createElement('div');
        cell.className = 'cal-day';
        cell.textContent = d;
        grid.appendChild(cell);
    }

    app.appendChild(header);
    app.appendChild(grid);

    document.getElementById('prev').addEventListener('click', () => {
        const d = new Date(state.date.getFullYear(), state.date.getMonth() - 1, 1);
        updateState({ date: d });
    });
    document.getElementById('next').addEventListener('click', () => {
        const d = new Date(state.date.getFullYear(), state.date.getMonth() + 1, 1);
        updateState({ date: d });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
