document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Afficher un message de remerciement
    document.getElementById('thankYouMessage').style.display = 'block';

    // Optionnel : Logique pour envoyer les données à un serveur
    // Exemple : envoyerFeedback(firstName, lastName, email, feedback);

    // Réinitialiser le formulaire après l'envoi
    document.getElementById('feedbackForm').reset();
});
