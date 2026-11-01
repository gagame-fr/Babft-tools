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
    const short_side = parseFloat(document.getElementById("nombreT1").value)
    const long_side = parseFloat(document.getElementById("nombreT2").value)

    if (short_side && long_side) {
        const hypothenuse = (short_side**2 + long_side**2)**0.5
    const angle = 90 - Math.atan(long_side/short_side) * (180/ Math.PI)


    document.getElementById('resultatT1').innerText = "The hypothenuse's lenght is : " + hypothenuse;
    document.getElementById('resultatT2').innerText = "You have to rotate the piece from the vertex of the longest side by (in degrees): " + angle;
    }
}


function calculer_cercle() {
    const diameter = parseFloat(document.getElementById("nombreC1").value)
    const smoothness = parseFloat(document.getElementById("nombreC2").value)

    if (diameter && smoothness) {
        const rectangle_width = diameter * Math.tan( ((180/smoothness)* Math.PI)/180 )
        const rectangle_width_modification = (rectangle_width-2)/2
        const rotation_circle = 360 / smoothness

        document.getElementById('resultatC1').innerText = "You have to add (if positive) or remove (if negative) this number of studs from both sides widthwise : " + rectangle_width_modification;
        document.getElementById('resultatC2').innerText = "You have to rotate the piece by (in degrees): " + rotation_circle;
    }
}


function calculer_engrenage() {
    const diameter = parseFloat(document.getElementById("nombreG1").value)
    const number_teeth = parseFloat(document.getElementById("nombreG2").value)
    const module = parseFloat(document.getElementById("nombreG3").value)

    if (diameter && number_teeth && module) {
        const inner_diameter = diameter - 2.4 * module
        const rectangle_width = inner_diameter * Math.tan( ((180/number_teeth)* Math.PI)/180 )
        const lenght_teeth = 2.2*module
        const rotation = 360 / number_teeth

        if (number_teeth >= 4 && number_teeth <= 5) {
            const width_teeth = 0.6 * module
        } else if (number_teeth >= 6 && number_teeth <= 7) {
            const width_teeth = 0.7 * module
        } else if (number_teeth >= 8 && number_teeth <= 12) {
            const width_teeth = 0.8 * module
        } else if (number_teeth >= 13 && number_teeth <= 22) {
            const width_teeth = 0.9 * module
        } else if (number_teeth >= 23 && number_teeth <= 57) {
            const width_teeth = module
        } else {
            const width_teeth = 1.1 * module
        }

        document.getElementById('resultatG1').innerText = "The inner diameter of a rectangle is : " + inner_diameter + " so you have to remove from both sides:" + (diameter - inner_diameter)/2;
        document.getElementById('resultatG2').innerText = "The width of a rectangle is : " + rectangle_width + " so you have to remove (if positive) or add (if negative) this number of studs from each sides widthwise : " + (2-rectangle_width)/2;
        document.getElementById('resultatG3').innerText = "The lenght of the two teeth are : " + lenght_teeth + " so you must add (if +) or remove (if -) this number of stud one time in the direction facing away for the center of the gear :" + 2-lenght_teeth;
        document.getElementById('resultatG4').innerText = "The width of the teeth is : " + width_teeth + " so you must add (if +) or remove (if -) this number of studs from both sides widthwise : " + (2-width_teeth)/2;
        document.getElementById('resultatG5').innerText = "You have to rotate the piece by (in degrees): " + rotation;
    }

}