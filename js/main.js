// Get HTML elements that are necessary to clap back.
const input = document.querySelector('#input');
const hiddenOutput = document.querySelector('#hiddenOutput');
const output = document.querySelector('#output');
const message = document.querySelector('#message');

input.addEventListener('input', clapBack);

function clapBack() {
    if (!this.value.trim()) {
        output.textContent = '';
        message.textContent = '';
        return;
    }

    const clap = '👏 ';

    // Show clapped text.
    let tokenizedInput = this.value.split(' ');
    const clappedInput = tokenizedInput.join(clap);
    output.textContent = clappedInput + clap;

    // Copy to clipboard.
    hiddenOutput.value = clappedInput + clap;
    hiddenOutput.select();
    const successful = document.execCommand('copy');

    // Hide, clear, show.
    hiddenOutput.style.display = 'none';
    hiddenOutput.value = '';
    hiddenOutput.style.display = 'block';

    // Set focus to visible input.
    input.focus();

    // Show result message.
    if (successful) {
        message.textContent = 'Copied to clipboard. Go clap back.';
    } else {
        message.textContent = 'Unable to copy to clipboard. Sorry!';
    }
}