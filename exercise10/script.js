// Exercise 10: Pagination System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: Array.from({length: 50}, (_, i) => `Item ${i+1}`),
    page: 1,
    pageSize: 5
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

    const start = (state.page - 1) * state.pageSize;
    const pageItems = state.items.slice(start, start + state.pageSize);

    const list = document.createElement('div');
    list.className = 'pagination-list';
    pageItems.forEach(it => {
        const el = document.createElement('div');
        el.textContent = it;
        list.appendChild(el);
    });

    const controls = document.createElement('div');
    controls.className = 'pagination-controls';

    const prev = document.createElement('button');
    prev.textContent = 'Prev';
    prev.disabled = state.page === 1;

    const next = document.createElement('button');
    next.textContent = 'Next';
    const totalPages = Math.ceil(state.items.length / state.pageSize);
    next.disabled = state.page === totalPages;

    const pageInfo = document.createElement('span');
    pageInfo.textContent = `Page ${state.page} of ${totalPages}`;

    controls.appendChild(prev);
    controls.appendChild(pageInfo);
    controls.appendChild(next);

    app.appendChild(list);
    app.appendChild(controls);

    prev.addEventListener('click', () => {
        if (state.page > 1) updateState({ page: state.page - 1 });
    });
    next.addEventListener('click', () => {
        if (state.page < totalPages) updateState({ page: state.page + 1 });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
