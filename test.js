const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Logic to switch themes
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        toggleButton.innerText = 'Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.innerText = 'Light Mode';
    }
});