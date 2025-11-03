// Exercise 23: Form Builder
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    fields: [],
    formData: {}
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

    const control = document.createElement('div');
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add Text Field';
    control.appendChild(addBtn);

    const preview = document.createElement('div');
    preview.className = 'form-preview';

    const form = document.createElement('form');
    state.fields.forEach((f, idx) => {
        const wrap = document.createElement('div');
        wrap.innerHTML = `<label>${f.label || 'Field ' + (idx+1)}: <input data-index="${idx}" value="${state.formData[f.id] || ''}"></label>`;
        form.appendChild(wrap);
    });

    preview.appendChild(form);
    app.appendChild(control);
    app.appendChild(preview);

    addBtn.addEventListener('click', () => {
        const id = 'f' + Date.now();
        const fields = [...state.fields, { id, label: 'Field ' + (state.fields.length + 1) }];
        updateState({ fields });
    });

    form.addEventListener('input', (e) => {
        const idx = e.target.getAttribute('data-index');
        if (idx === null) return;
        const f = state.fields[parseInt(idx,10)];
        const fd = Object.assign({}, state.formData, { [f.id]: e.target.value });
        updateState({ formData: fd });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
