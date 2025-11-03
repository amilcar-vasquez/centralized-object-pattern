// Exercise 12: Star Rating
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    rating: 0,
    max: 5
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

    const starsWrap = document.createElement('div');
    starsWrap.className = 'stars';

    for (let i = 1; i <= state.max; i++) {
        const btn = document.createElement('button');
        btn.className = i <= state.rating ? 'star filled' : 'star';
        btn.dataset.value = i;
        btn.textContent = '★';
        starsWrap.appendChild(btn);
    }

    const info = document.createElement('div');
    info.className = 'rating-info';
    info.textContent = `Rating: ${state.rating} / ${state.max}`;

    app.appendChild(starsWrap);
    app.appendChild(info);

    // events
    starsWrap.addEventListener('click', (e) => {
        if (e.target.dataset && e.target.dataset.value) {
            updateState({ rating: parseInt(e.target.dataset.value, 10) });
        }
    });
    starsWrap.addEventListener('mouseover', (e) => {
        if (e.target.dataset && e.target.dataset.value) {
            const hover = parseInt(e.target.dataset.value, 10);
            Array.from(starsWrap.children).forEach((c, idx) => {
                c.className = (idx+1) <= hover ? 'star filled' : 'star';
            });
        }
    });
    starsWrap.addEventListener('mouseout', () => {
        render(); // restore based on state.rating
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
