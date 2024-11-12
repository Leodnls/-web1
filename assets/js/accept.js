document.getElementById('acceptConditions').addEventListener('change', function() {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = !this.checked;
});

document.getElementById('conditionsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirige vers la page de notation une fois les conditions acceptées
    window.location.href = "rating.html";
});
