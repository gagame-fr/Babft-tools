function taille_fentre() {
    const largeur_fenetre = window.innerWidth;
    const hauteur_fenetre = window.innerHeight;
    const pixel_ratio_ecran = window.devicePixelRatio;

    document.documentElement.style.setProperty( '--largeur_fenetre', (largeur_fenetre)*pixel_ratio_ecran + 'px');
    document.documentElement.style.setProperty( '--hauteur_fenetre', (hauteur_fenetre)*pixel_ratio_ecran + 'px');

    const hauteur_nav = (hauteur_fenetre/15)*pixel_ratio_ecran
    document.documentElement.style.setProperty( '--hauteur_nav', hauteur_nav + 'px');
    
    document.documentElement.style.setProperty('--gap_nav', largeur_fenetre/16 +'px');
    document.documentElement.style.setProperty('--font_nav', hauteur_nav/2.5 +'px');
    document.documentElement.style.setProperty('--font_nav_2', hauteur_nav/2.25 +'px');

    document.documentElement.style.setProperty('--gap_zone_1o2', largeur_fenetre/70 +'px');
}

taille_fentre();

window.addEventListener('resize', taille_fentre);

const couleur_clair_nav = "rgb(250, 235, 215)"
const couleur_sombre_nav = "rgb(151, 129, 91)"

const couleur_clair_back1 = "rgb(255, 246, 231)"
const couleur_sombre_back1 = "rgb(158, 137, 99)"

const btn_dark_mode = document.getElementById('btn_dark_mode')
var couleur_active_nav = "none"
var couleur_active_back1 = "none"

btn_dark_mode.addEventListener('click', () => {
    if (couleur_active_nav === couleur_clair_nav) {
        couleur_active_nav = couleur_sombre_nav
    } else {
        couleur_active_nav = couleur_clair_nav
    }

    if (couleur_active_back1 === couleur_clair_back1) {
        couleur_active_back1 = couleur_sombre_back1
    } else {
        couleur_active_back1 = couleur_clair_back1
    }

    document.documentElement.style.setProperty('--couleur_active_nav', couleur_active_nav)
    document.documentElement.style.setProperty('--couleur_active_back1', couleur_active_back1)
});

