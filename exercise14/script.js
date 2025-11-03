// Exercise 14: Multi-Step Form
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    step: 1,
    totalSteps: 3,
    data: {
        name: '',
        email: ''
    }
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

    const stepEl = document.createElement('div');
    stepEl.className = 'step';
    stepEl.innerHTML = `<h3>Step ${state.step} of ${state.totalSteps}</h3>`;

    if (state.step === 1) {
        const label = document.createElement('label');
        label.textContent = 'Name:';
        const input = document.createElement('input');
        input.value = state.data.name;
        input.id = 'nameInput';
        stepEl.appendChild(label);
        stepEl.appendChild(input);
        input.addEventListener('input', (e) => updateState({ data: Object.assign({}, state.data, { name: e.target.value }) }));
    } else if (state.step === 2) {
        const label = document.createElement('label');
        label.textContent = 'Email:';
        const input = document.createElement('input');
        input.value = state.data.email;
        input.id = 'emailInput';
        stepEl.appendChild(label);
        stepEl.appendChild(input);
        input.addEventListener('input', (e) => updateState({ data: Object.assign({}, state.data, { email: e.target.value }) }));
    } else if (state.step === 3) {
        const summary = document.createElement('div');
        summary.innerHTML = `<h4>Review</h4><p><strong>Name:</strong> ${state.data.name}</p><p><strong>Email:</strong> ${state.data.email}</p>`;
        stepEl.appendChild(summary);
    }

    const controls = document.createElement('div');
    controls.className = 'wizard-controls';
    const back = document.createElement('button');
    back.textContent = 'Back';
    back.disabled = state.step === 1;
    const next = document.createElement('button');
    next.textContent = state.step === state.totalSteps ? 'Submit' : 'Next';

    controls.appendChild(back);
    controls.appendChild(next);

    app.appendChild(stepEl);
    app.appendChild(controls);

    back.addEventListener('click', () => updateState({ step: Math.max(1, state.step - 1) }));
    next.addEventListener('click', () => {
        if (state.step < state.totalSteps) {
            updateState({ step: state.step + 1 });
        } else {
            // submit: show thank you
            app.innerHTML = `<h3>Thanks! Your data has been submitted.</h3><div><p><strong>Name:</strong> ${state.data.name}</p><p><strong>Email:</strong> ${state.data.email}</p></div>`;
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
