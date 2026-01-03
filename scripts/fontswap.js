
const ButtonID = document.getElementById('font-toggle');

    ButtonID.addEventListener('click', function() {
        document.body.classList.toggle('dyslexic-mode');

        if(document.body.classList.contains('dyslexic-mode')) {
            localStorage.setItem('dyslexic-mode', 'true');
        }
        else {
            localStorage.removeItem('dyslexic-mode');
        }

        const fontSelector = document.querySelector('.font-selector');


    });

const Btn = document.getElementById('dark-toggle');

Btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

if(localStorage.getItem('dark-mode')) {
    document.body.classList.toggle('dark-mode');
}

if(localStorage.getItem('dyslexic-mode')) {
    document.body.classList.toggle('dyslexic-mode');
}
