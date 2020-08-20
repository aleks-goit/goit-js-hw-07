const inputNumber = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => createBoxes(inputNumber.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    let newDivs = [];
    for (let i = 0; i < amount; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.style.width = `${30 + i * 10}px`;
        newDiv.style.height = `${30 + i * 10}px`;
        newDiv.style.backgroundColor =
            '#' + (((1 << 24) * Math.random()) | 0).toString(16);
        newDivs.push(newDiv);
    }
    boxes.append(...newDivs);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}