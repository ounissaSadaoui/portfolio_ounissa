//  activer/désactiver le mode sombre avec le btn
const darkModeButton = document.getElementById('darkmode');

// Ajoute un écouteur d'événements sur le bouton
darkModeButton.addEventListener('click', function() {
    // ici on  Vérifie si le mode sombre est déjà activé 
    const body = document.body;
    const navbar = document.querySelector('ul');
    const isDarkMode = body.classList.contains('dark-mode');

    const bitmoji = document.getElementById('Mon-bitmoji');
    console.log (bitmoji);
    //là on select les icones
    let icone_select = document.querySelectorAll("a i");
    let icones = document.querySelectorAll("figure i");
    const presentationSection = document.getElementById('fig_presentation');

    // Si le mode sombre est activé, désactive-le
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        // Supprime les styles spécifiques au mode sombre
        body.style.backgroundImage = ''; // Réinitialise l'image de fond
        body.style.color = ''; 
        navbar.style.backgroundColor ='';
        bitmoji.src = 'asset/hello.png';     
        presentationSection.style.backgroundColor = '';   

    } else { // Sinon, active-le
        body.classList.add('dark-mode');
        // Applique les styles pour le mode sombre
        body.style.backgroundImage = 'url(./asset/galaxy.jpg)'; // Change l'image de fond
        body.style.color = 'white'; // Change la couleur du texte en blanc
        navbar.style.backgroundColor ='rgb(53, 49, 49)';
        bitmoji.src = 'asset/hi.png';  
        presentationSection.style.backgroundColor = 'rgb(53, 49, 49)';  

    }
});
