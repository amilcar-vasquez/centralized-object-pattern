// Exercise 24: Chat Interface
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    messages: []
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
    list.className = 'chat-list';
    state.messages.forEach(m => {
        const p = document.createElement('div');
        p.className = 'chat-msg';
        p.innerHTML = `<strong>${m.user}:</strong> ${m.text}`;
        list.appendChild(p);
    });

    const inputWrap = document.createElement('div');
    const input = document.createElement('input'); input.placeholder = 'Type a message'; input.id = 'chatInput';
    const send = document.createElement('button'); send.textContent = 'Send';
    inputWrap.appendChild(input); inputWrap.appendChild(send);

    app.appendChild(list);
    app.appendChild(inputWrap);

    send.addEventListener('click', () => {
        const text = document.getElementById('chatInput').value.trim();
        if (!text) return;
        const messages = [...state.messages, { user: 'You', text }];
        updateState({ messages });
        document.getElementById('chatInput').value = '';
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send.click(); });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
