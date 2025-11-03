// Exercise 15: Image Gallery
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    images: [
        { id: 'i1', src: 'https://picsum.photos/id/1015/400/250', title: 'Mountain' },
        { id: 'i2', src: 'https://picsum.photos/id/1025/400/250', title: 'Dog' },
        { id: 'i3', src: 'https://picsum.photos/id/1035/400/250', title: 'Forest' }
    ],
    lightboxIndex: null
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

    const gallery = document.createElement('div');
    gallery.className = 'gallery';

    state.images.forEach((img, idx) => {
        const imgWrap = document.createElement('div');
        imgWrap.className = 'thumb';
        const el = document.createElement('img');
        el.src = img.src;
        el.alt = img.title;
        el.dataset.index = idx;
        imgWrap.appendChild(el);
        gallery.appendChild(imgWrap);
    });

    app.appendChild(gallery);

    // lightbox
    if (state.lightboxIndex !== null) {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';

        const box = document.createElement('div');
        box.className = 'lightbox';
        const current = state.images[state.lightboxIndex];
        box.innerHTML = `<img src="${current.src}" alt="${current.title}"><div class="lb-controls"><button id="prev">Prev</button><button id="close">Close</button><button id="next">Next</button></div>`;

        overlay.appendChild(box);
        app.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) updateState({ lightboxIndex: null });
        });

        box.querySelector('#close').addEventListener('click', () => updateState({ lightboxIndex: null }));
        box.querySelector('#prev').addEventListener('click', () => {
            const i = (state.lightboxIndex - 1 + state.images.length) % state.images.length;
            updateState({ lightboxIndex: i });
        });
        box.querySelector('#next').addEventListener('click', () => {
            const i = (state.lightboxIndex + 1) % state.images.length;
            updateState({ lightboxIndex: i });
        });
    }

    // wire thumbs
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.dataset.index !== undefined) {
            updateState({ lightboxIndex: parseInt(e.target.dataset.index, 10) });
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
