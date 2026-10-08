const btn = document.getElementById('btn');
const boxes = document.getElementById('boxes');

for (let i = 0; i < 16; i++) {
    const box = document.createElement('div');

    box.classList.add('box');

    const row = Math.floor(i / 4);
    const col = i % 4;

    box.style.backgroundPosition = 
    `${-col * 100}px ${-row * 100}px`;

    boxes.appendChild(box);
}

btn.addEventListener('click', function () {
boxes.classList.toggle('big');
});
