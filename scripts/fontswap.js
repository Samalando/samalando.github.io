
const ButtonID = document.getElementById('font-toggle');

    ButtonID.addEventListener('click', function() {
        document.body.classList.toggle('dyslexic-mode');
        const fontSelector = document.querySelector('.font-selector');
        fontSelector.classList.toggle('default-mode');
    });

const Btn = document.getElementById('dark-toggle');

Btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});