// Exercise 9: Accordion Menu
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    sections: [
        { id: 's1', title: 'Section 1', content: 'Content for section 1', open: false },
        { id: 's2', title: 'Section 2', content: 'Content for section 2', open: false },
        { id: 's3', title: 'Section 3', content: 'Content for section 3', open: false }
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

    state.sections.forEach(sec => {
        const wrap = document.createElement('div');
        wrap.className = 'accordion-item';

        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.textContent = sec.title;
        header.dataset.id = sec.id;

        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.textContent = sec.content;
        content.style.display = sec.open ? 'block' : 'none';

        wrap.appendChild(header);
        wrap.appendChild(content);
        app.appendChild(wrap);
    });

    // event delegation
    app.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion-header')) {
            const id = e.target.dataset.id;
            const updated = state.sections.map(s => s.id === id ? Object.assign({}, s, { open: !s.open }) : Object.assign({}, s, { open: false }));
            updateState({ sections: updated });
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
