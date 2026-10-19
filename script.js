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