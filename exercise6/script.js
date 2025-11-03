// Exercise 6: Todo List Manager
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    todos: [],
    newTodoText: ''
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

    const inputWrap = document.createElement('div');
    inputWrap.className = 'input-wrap';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add a todo...';
    input.value = state.newTodoText;
    input.id = 'newTodoInput';

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.id = 'addTodoBtn';

    inputWrap.appendChild(input);
    inputWrap.appendChild(addBtn);
    app.appendChild(inputWrap);

    const list = document.createElement('div');
    list.id = 'todoList';
    if (state.todos.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No todos yet.';
        list.appendChild(empty);
    } else {
        state.todos.forEach(todo => {
            const item = document.createElement('div');
            item.className = 'todo-item';
            item.innerHTML = `<input type="checkbox" class="toggle" data-id="${todo.id}" ${todo.completed ? 'checked' : ''}> <span class="text ${todo.completed ? 'completed' : ''}">${todo.text}</span> <button class="remove" data-id="${todo.id}">Remove</button>`;
            list.appendChild(item);
        });
    }

    app.appendChild(list);

    // Wire up event handlers
    const addButton = document.getElementById('addTodoBtn');
    const newInput = document.getElementById('newTodoInput');

    addButton.addEventListener('click', () => {
        const text = newInput.value.trim();
        if (!text) return;
        const newItem = { id: Date.now().toString(), text, completed: false };
        updateState({ todos: [...state.todos, newItem], newTodoText: '' });
    });

    newInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        } else {
            updateState({ newTodoText: e.target.value });
        }
    });

    // event delegation for toggle and remove
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            const id = e.target.getAttribute('data-id');
            updateState({ todos: state.todos.filter(t => t.id !== id) });
        }
    });

    list.addEventListener('change', (e) => {
        if (e.target.classList.contains('toggle')) {
            const id = e.target.getAttribute('data-id');
            const updated = state.todos.map(t => t.id === id ? Object.assign({}, t, { completed: e.target.checked }) : t);
            updateState({ todos: updated });
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
