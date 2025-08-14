document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    // Cambiar ícono
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️';
    } else {
        this.textContent = '🌙';
    }
});
