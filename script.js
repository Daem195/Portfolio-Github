// Menu hamburger pour mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    
    // Toggle menu hamburger
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Fermer le menu lorsqu'on clique sur un lien
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Gestion du scroll pour la navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 80; // Hauteur approximative du header
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // bouton bascule mode sombre
    const boutonTheme = document.getElementById('toggle-theme');
    if (boutonTheme) {
        boutonTheme.addEventListener('click', function() {
            document.body.classList.toggle('theme-sombre');
            boutonTheme.innerHTML = document.body.classList.contains('theme-sombre') ? '☀️' : '🌙';
        });
    }
    
    // Log pour vérifier que le script chargé
    console.log('Portfolio script chargé avec succès');
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const objet = document.getElementById('objet').value;
            const message = document.getElementById('message').value;
            
            // Afficher un message de confirmation (au lieu d'envoyer un vrai email)
            alert('Merci ' + nom + ' !\n\nVotre message concernant "' + objet + '" a été envoyé.\n\nJe vous répondrai dès que possible à ' + nom + '.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
});
