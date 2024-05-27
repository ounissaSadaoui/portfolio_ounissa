//  activer/désactiver le mode sombre avec le btn
/*
const darkModeButton = document.getElementById('darkmode');

// Ajoute un écouteur d'événements sur le bouton
darkModeButton.addEventListener('click', function() {
    // ici on  Vérifie si le mode sombre est déjà activé 
    const body = document.body;
    const navbar = document.querySelector('ul');
    const isDarkMode = body.classList.contains('darkmode');

    const bitmoji = document.getElementById('Mon-bitmoji');
    console.log (bitmoji);
    //là on select les icones
    let icone_select = document.querySelectorAll("a i");
    let icones = document.querySelectorAll("figure i");
    const presentationSection = document.getElementById('fig_presentation');

    // Si le mode sombre est activé, désactive-le
    if (isDarkMode) {
        body.classList.remove('darkmode');
        // Supprime les styles spécifiques au mode sombre
        body.style.backgroundImage = ''; // Réinitialise l'image de fond
        body.style.color = ''; 
        navbar.style.backgroundColor ='';
        bitmoji.src = 'asset/hello.png';     
        presentationSection.style.backgroundColor = '';   

    } else { // Sinon, active-le
        body.classList.add('darkmode');
        // Applique les styles pour le mode sombre
        body.style.backgroundImage = 'url(./asset/galaxy.jpg)'; // Change l'image de fond
        body.style.color = 'white'; // Change la couleur du texte en blanc
        navbar.style.backgroundColor ='rgb(53, 49, 49)';
        bitmoji.src = "asset/hi.png";  
        presentationSection.style.backgroundColor = 'rgb(53, 49, 49)';  

    }
});
*/
document.getElementById('darkmode').addEventListener('click', function () {
    const body = document.body;
    const bitmoji = document.getElementById('Mon-bitmoji');
    const icons = document.querySelectorAll('.custom-icon');
    const sections = document.querySelectorAll('section');
    const pres = document.getElementById('fig_presentation');
    const comp = document.getElementById('liste_competences');
    const proj_1 = document.getElementById('projets_travail');
    const proj_2 = document.getElementById('projets_ecole');
    const proj_3 = document.getElementById('projets_haut');
    const proj_4 = document.getElementById('projects_bas');
    const veille = document.getElementById('veille');
    const contact = document.getElementById('contact');
    const nav = document.getElementById('nav');


    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundImage = 'url(./asset/galaxy.jpg)';
        body.style.color = 'white'; // Change la couleur du texte en blanc
        nav.style.backgroundColor = '#4d4d4d';
        contact.style.backgroundColor = '#4d4d4d';
        icons.forEach(icon => {
            icon.style.color = '#ffffff';
        });
        proj_2.style.backgroundColor = '#4d4d4d';
        pres.style.backgroundColor = '#4d4d4d';
        proj_1.style.backgroundColor = '#4d4d4d';
        proj_3.style.backgroundColor = '#4d4d4d';
        proj_4.style.backgroundColor = '#4d4d4d';
        veille.style.backgroundColor = '#4d4d4d';
        comp.style.backgroundColor = '#4d4d4d';
       
        bitmoji.src = "asset/hi.png";
    } else {
        body.style.backgroundImage = '';
        body.style.color = ''; 
        contact.style.backgroundColor = '';
        nav.style.backgroundColor = '';
        icons.forEach(icon => {
            icon.style.color = '#000000';
        });
        proj_2.style.backgroundColor = '';
        pres.style.backgroundColor = '';
        proj_1.style.backgroundColor = '';
        proj_3.style.backgroundColor = '';
        proj_4.style.backgroundColor = '';
        veille.style.backgroundColor = '';
        comp.style.backgroundColor = '';

        bitmoji.src = "asset/hello.png";
       
    }
});