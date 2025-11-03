// Exercise 13: Timer/Stopwatch
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    running: false,
    elapsed: 0 // seconds
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

    const display = document.createElement('div');
    display.className = 'timer-display';

    const mins = String(Math.floor(state.elapsed / 60)).padStart(2, '0');
    const secs = String(state.elapsed % 60).padStart(2, '0');
    display.textContent = `${mins}:${secs}`;

    const controls = document.createElement('div');
    const startBtn = document.createElement('button');
    startBtn.textContent = state.running ? 'Stop' : 'Start';
    startBtn.id = 'startStop';

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.id = 'reset';

    controls.appendChild(startBtn);
    controls.appendChild(resetBtn);

    app.appendChild(display);
    app.appendChild(controls);

    // wire events
    document.getElementById('startStop').addEventListener('click', () => {
        if (state.running) stopTimer(); else startTimer();
    });
    document.getElementById('reset').addEventListener('click', () => {
        stopTimer();
        updateState({ elapsed: 0 });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here
let timerId = null;
function startTimer() {
    if (timerId) return;
    timerId = setInterval(() => {
        updateState({ elapsed: state.elapsed + 1 });
    }, 1000);
    updateState({ running: true });
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
    updateState({ running: false });
}

// TODO 5: Initial render
render();
