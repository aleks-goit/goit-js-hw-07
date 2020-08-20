const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(fontSizeControl.value);

function fontSizeChange() {
    text.setAttribute('style', `font-size: ${fontSizeControl.value}px`);
}

fontSizeControl.addEventListener('input', fontSizeChange);