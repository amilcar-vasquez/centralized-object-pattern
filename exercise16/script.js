// Exercise 16: Drag & Drop List
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: ['Item A', 'Item B', 'Item C', 'Item D']
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

    const list = document.createElement('div');
    list.className = 'dnd-list';

    state.items.forEach((it, idx) => {
        const el = document.createElement('div');
        el.className = 'dnd-item';
        el.draggable = true;
        el.dataset.index = idx;
        el.textContent = it;
        list.appendChild(el);
    });

    app.appendChild(list);

    let dragSrcIndex = null;

    list.addEventListener('dragstart', (e) => {
        const idx = e.target.dataset.index;
        if (idx !== undefined) {
            dragSrcIndex = parseInt(idx, 10);
            e.dataTransfer.effectAllowed = 'move';
        }
    });

    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    list.addEventListener('drop', (e) => {
        e.preventDefault();
        const target = e.target.closest('.dnd-item');
        if (!target) return;
        const destIndex = parseInt(target.dataset.index, 10);
        if (dragSrcIndex === null || Number.isNaN(destIndex)) return;
        const items = [...state.items];
        const [moved] = items.splice(dragSrcIndex, 1);
        items.splice(destIndex, 0, moved);
        updateState({ items });
        dragSrcIndex = null;
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
