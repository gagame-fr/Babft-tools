// Déclaration des variables ou constantes

let largeur_fenetre = window.innerWidth;
let hauteur_fenetre = window.innerHeight;

let couleur_theme = "clair"
let couleur_back1 = "#F8FAFC"
let couleur_font = "black"
document.documentElement.style.setProperty('--couleur_font', couleur_font)
let couleur_footer = "#f3f2f2"
document.documentElement.style.setProperty('--couleur_footer', couleur_footer)

let couleur_nav = "transparent"
document.documentElement.style.setProperty('--couleur_nav', couleur_nav)
let box_shadow = "none"

const btn_theme = document.getElementById('btn_theme')

// Déclaration des fonctions
function taille_fentre() {
    let largeur_fenetre = window.innerWidth;
    let hauteur_fenetre = window.innerHeight;

    document.documentElement.style.setProperty( '--largeur_fenetre', largeur_fenetre + 'px');
    document.documentElement.style.setProperty( '--hauteur_fenetre', hauteur_fenetre + 'px');

    document.documentElement.style.setProperty( '--hauteur_nav', hauteur_fenetre/10 + 'px');

    document.documentElement.style.setProperty( '--hauteur_footer', hauteur_fenetre/3 + 'px');
}






function changement_theme() {
    if (couleur_theme === "clair" ) {
        couleur_theme = "sombre"
    } else {
        couleur_theme = "clair"
    }
    return couleur_theme
}




btn_theme.addEventListener('click', () => {
    couleur_theme = changement_theme();
    changements_couleur();
    dynamic_nav();
});




function changements_couleur() {
    if (couleur_theme === "clair"){
        couleur_back1 = "#F8FAFC"
        couleur_footer = "#e0e0e0"
        couleur_font = "black"
    } else {
        couleur_back1 = "#1e263a"
        couleur_footer = "#353f57"
        couleur_font = "white"
    }

    document.documentElement.style.setProperty('--couleur_back1', couleur_back1)
    document.documentElement.style.setProperty('--couleur_font', couleur_font)
    document.documentElement.style.setProperty('--couleur_footer', couleur_footer)
}




function dynamic_nav() {

    let largeur_fenetre = window.innerWidth;
    let hauteur_fenetre = window.innerHeight;

    if (window.scrollY <= hauteur_fenetre/10 ) {
        couleur_nav = "transparent"
        box_shadow = "transparent"
    } else {
        if (couleur_theme === "clair"){
            couleur_nav = "white"
            box_shadow = "0 2px 4px 0 rgba(0,0,0,.2)"
        } else {
            couleur_nav = "#3c4251"
            box_shadow = "0 2px 4px 0 rgba(247, 247, 247, 0.35)"
        }
    }

    document.documentElement.style.setProperty('--couleur_nav', couleur_nav)
    document.documentElement.style.setProperty('--shadow_nav', box_shadow)
    
}

// Initialisation des fonctions 
taille_fentre();



// EventListeners du site
window.addEventListener('resize', taille_fentre);

window.addEventListener('scroll', dynamic_nav);


function calculer_triangle() {
    const short_side = parseFloat(document.getElementById("nombre1").value)
    const long_side = parseFloat(document.getElementById("nombre2").value)

    const hypothenuse = (short_side**2 + long_side**2)**0.5
    const angle = 90 - Math.atan(long_side/short_side) * (180/ Math.PI)


    document.getElementById('resultat').innerText = "The hypothenuse's lenght is : " + hypothenuse;
    document.getElementById('resultat2').innerText = "You have to rotate the piece from the vertex of the longest side by (in degrees): " + angle;
}



