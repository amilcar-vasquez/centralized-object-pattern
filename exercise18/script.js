// Exercise 18: Kanban Board
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    columns: [
        { id: 'todo', title: 'To Do', tasks: [{ id: 't1', text: 'Task A' }, { id: 't2', text: 'Task B' }] },
        { id: 'doing', title: 'Doing', tasks: [{ id: 't3', text: 'Task C' }] },
        { id: 'done', title: 'Done', tasks: [] }
    ]
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

    const board = document.createElement('div');
    board.className = 'kanban-board';

    state.columns.forEach(col => {
        const colEl = document.createElement('div');
        colEl.className = 'kanban-col';
        const header = document.createElement('h4');
        header.textContent = `${col.title} (${col.tasks.length})`;
        colEl.appendChild(header);

        const list = document.createElement('div');
        list.className = 'kanban-list';
        col.tasks.forEach(task => {
            const t = document.createElement('div');
            t.className = 'kanban-task';
            t.textContent = task.text;
            const controls = document.createElement('div');
            controls.className = 'task-controls';
            state.columns.forEach(other => {
                if (other.id !== col.id) {
                    const btn = document.createElement('button');
                    btn.textContent = `→ ${other.title}`;
                    btn.dataset.task = task.id;
                    btn.dataset.from = col.id;
                    btn.dataset.to = other.id;
                    controls.appendChild(btn);
                }
            });
            t.appendChild(controls);
            list.appendChild(t);
        });

        colEl.appendChild(list);
        board.appendChild(colEl);
    });

    app.appendChild(board);

    // event delegation for move buttons
    board.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.task) {
            const taskId = e.target.dataset.task;
            const from = e.target.dataset.from;
            const to = e.target.dataset.to;
            moveTask(taskId, from, to);
        }
    });
}

function moveTask(taskId, fromId, toId) {
    const cols = state.columns.map(col => {
        if (col.id === fromId) {
            return Object.assign({}, col, { tasks: col.tasks.filter(t => t.id !== taskId) });
        }
        return col;
    }).map(col => {
        if (col.id === toId) return col; return col;
    });

    // find task object
    const all = state.columns.flatMap(c => c.tasks);
    const task = all.find(t => t.id === taskId);
    const newCols = cols.map(col => {
        if (col.id === toId) {
            return Object.assign({}, col, { tasks: [...col.tasks, task] });
        }
        return col;
    });
    updateState({ columns: newCols });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
