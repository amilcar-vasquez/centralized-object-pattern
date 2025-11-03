// Exercise 8: Tabs Component
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    activeTab: 'tab1',
    tabs: [
        { id: 'tab1', title: 'Tab 1', content: 'Content for Tab 1' },
        { id: 'tab2', title: 'Tab 2', content: 'Content for Tab 2' },
        { id: 'tab3', title: 'Tab 3', content: 'Content for Tab 3' }
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

    const tabsWrap = document.createElement('div');
    tabsWrap.className = 'tabs';

    const buttonsWrap = document.createElement('div');
    buttonsWrap.className = 'tab-buttons';

    state.tabs.forEach(tab => {
        const btn = document.createElement('button');
        btn.textContent = tab.title;
        btn.dataset.id = tab.id;
        btn.className = tab.id === state.activeTab ? 'active' : '';
        buttonsWrap.appendChild(btn);
    });

    const contentWrap = document.createElement('div');
    contentWrap.className = 'tab-content';
    const active = state.tabs.find(t => t.id === state.activeTab) || state.tabs[0];
    contentWrap.textContent = active.content;

    tabsWrap.appendChild(buttonsWrap);
    tabsWrap.appendChild(contentWrap);
    app.appendChild(tabsWrap);

    // event delegation for tabs
    buttonsWrap.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.dataset.id;
            updateState({ activeTab: id });
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
