// Exercise 19: Data Table
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    rows: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
    ],
    sortKey: null,
    sortDir: 'asc'
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

    const table = document.createElement('table');
    table.className = 'data-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['name', 'age'].forEach(key => {
        const th = document.createElement('th');
        th.textContent = key.toUpperCase();
        th.dataset.key = key;
        if (state.sortKey === key) th.textContent += state.sortDir === 'asc' ? ' ▲' : ' ▼';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    let rows = [...state.rows];
    if (state.sortKey) {
        rows.sort((a,b) => {
            if (a[state.sortKey] < b[state.sortKey]) return state.sortDir === 'asc' ? -1 : 1;
            if (a[state.sortKey] > b[state.sortKey]) return state.sortDir === 'asc' ? 1 : -1;
            return 0;
        });
    }
    rows.forEach(r => {
        const tr = document.createElement('tr');
        const nameTd = document.createElement('td'); nameTd.textContent = r.name;
        const ageTd = document.createElement('td'); ageTd.textContent = r.age;
        tr.appendChild(nameTd); tr.appendChild(ageTd);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    app.appendChild(table);

    thead.addEventListener('click', (e) => {
        if (e.target.tagName === 'TH') {
            const key = e.target.dataset.key;
            if (state.sortKey === key) {
                updateState({ sortDir: state.sortDir === 'asc' ? 'desc' : 'asc' });
            } else {
                updateState({ sortKey: key, sortDir: 'asc' });
            }
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
