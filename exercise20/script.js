// Exercise 20: Quiz App
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    questions: [
        { id: 'q1', text: '2+2 = ?', choices: ['3','4','5'], answer: 1 },
        { id: 'q2', text: 'Capital of France?', choices: ['Rome','Paris','Berlin'], answer: 1 }
    ],
    index: 0,
    answers: {}
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
    if (state.index >= state.questions.length) {
        // show results
        const score = Object.keys(state.answers).reduce((s, qid) => {
            const q = state.questions.find(x => x.id === qid);
            return s + (q && q.answer === state.answers[qid] ? 1 : 0);
        }, 0);
        app.innerHTML = `<h3>Quiz Complete</h3><p>Your score: ${score} / ${state.questions.length}</p>`;
        return;
    }

    const q = state.questions[state.index];
    const qEl = document.createElement('div');
    qEl.innerHTML = `<h3>Question ${state.index + 1}</h3><p>${q.text}</p>`;

    const choices = document.createElement('div');
    q.choices.forEach((ch, i) => {
        const btn = document.createElement('button');
        btn.textContent = ch;
        btn.dataset.idx = i;
        if (state.answers[q.id] === i) btn.className = 'selected';
        choices.appendChild(btn);
    });

    const next = document.createElement('button');
    next.textContent = 'Next';
    qEl.appendChild(choices);
    qEl.appendChild(next);
    app.appendChild(qEl);

    choices.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const idx = parseInt(e.target.dataset.idx, 10);
            const answers = Object.assign({}, state.answers, { [q.id]: idx });
            updateState({ answers });
        }
    });

    next.addEventListener('click', () => {
        updateState({ index: state.index + 1 });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
