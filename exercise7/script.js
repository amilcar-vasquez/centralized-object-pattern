// Exercise 7: Modal Dialog System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    isOpen: false,
    content: 'This is a modal. Click outside or the close button to dismiss.'
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

    const openBtn = document.createElement('button');
    openBtn.id = 'openModalBtn';
    openBtn.textContent = 'Open Modal';
    app.appendChild(openBtn);

    if (state.isOpen) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<div class="modal-content">${state.content}</div><button class="close">Close</button>`;

        overlay.appendChild(modal);
        app.appendChild(overlay);

        // Close handlers
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                updateState({ isOpen: false });
            }
        });

        modal.querySelector('.close').addEventListener('click', () => {
            updateState({ isOpen: false });
        });
    }

    // wire open button
    document.getElementById('openModalBtn').addEventListener('click', () => {
        updateState({ isOpen: true });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
