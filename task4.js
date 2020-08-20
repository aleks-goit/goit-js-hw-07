let counterValue = 0;

function increment() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

const incrementBtn = document.querySelector(
    '#counter button[data-action="increment"]',
);
const decrementBtn = document.querySelector(
    '#counter button[data-action="decrement"]',
);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);