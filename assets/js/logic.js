const toggleModeBtn = document.getElementById('toggleMode');
toggleModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.body.classList.add(localStorage.getItem('theme') || 'light-mode');
document.body.classList.toggle('dark-mode', localStorage.getItem('theme') === 'dark-mode');

toggleModeBtn.addEventListener('click', function () {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
});
