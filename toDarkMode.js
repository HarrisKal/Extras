let darkMode = localStorage.getItem('darkMode');

const toggleDarkMode = to => {
    document.body.classList.toggle('darkMode');
    localStorage.setItem('darkMode', to)
}
darkMode == 'on' && toggleDarkMode('on');

document.querySelector('button').addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    toggleDarkMode(darkMode != 'on' ? 'on' : null)
});