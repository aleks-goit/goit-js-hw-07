const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputChange(event) {
    nameInput.value
        ? (nameOutput.textContent = event.currentTarget.value)
        : (nameOutput.textContent = 'незнакомец');
}

nameInput.addEventListener('input', inputChange);