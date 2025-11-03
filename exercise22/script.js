// Exercise 22: Tree View
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    tree: [
        { id: 'n1', label: 'Root 1', open: false, children: [
            { id: 'n1-1', label: 'Child 1' },
            { id: 'n1-2', label: 'Child 2' }
        ]},
        { id: 'n2', label: 'Root 2', open: false, children: [ { id: 'n2-1', label: 'Child A' } ] }
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

    function createNode(node) {
        const wrap = document.createElement('div');
        wrap.className = 'tree-node';
        const label = document.createElement('div');
        label.className = 'node-label';
        label.textContent = node.label;
        if (node.children && node.children.length) {
            const toggle = document.createElement('button');
            toggle.textContent = node.open ? '▾' : '▸';
            toggle.dataset.id = node.id;
            wrap.appendChild(toggle);
        }
        wrap.appendChild(label);
        if (node.open && node.children) {
            const childWrap = document.createElement('div');
            childWrap.className = 'node-children';
            node.children.forEach(c => childWrap.appendChild(createNode(c)));
            wrap.appendChild(childWrap);
        }
        return wrap;
    }

    state.tree.forEach(n => app.appendChild(createNode(n)));

    app.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.id) {
            const id = e.target.dataset.id;
            const newTree = state.tree.map(n => toggleNode(n, id));
            updateState({ tree: newTree });
        }
    });
}

function toggleNode(node, id) {
    if (node.id === id) {
        return Object.assign({}, node, { open: !node.open });
    }
    if (node.children) {
        return Object.assign({}, node, { children: node.children.map(c => toggleNode(c, id)) });
    }
    return node;
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
