let link = document.querySelectorAll('.a');
let nyelvdoboz = document.querySelector('.nyelv');

let fooldal = document.querySelector('.fo_fooldal');
let rolunk = document.querySelector('.fo_rolunk');
let szolgaltatas = document.querySelector('.fo_szolgaltatas');
let termekek = document.querySelector('.fo_termekek');
let blog = document.querySelector('.fo_blog');
let kapcsolatok = document.querySelector('.fo_kapcsolatok');
//let bejelentkezes = document.querySelector('.fo_bejelentkezes');
//let regisztracio = document.querySelector('.fo_regisztracio');

let tuzoltoruha = document.querySelector('.fo_tuzoltoruha');
let munkaruha = document.querySelector('.fo_munkaruha');
let orvosiruha = document.querySelector('.fo_orvosiruha');
let tozoltoleiras = document.querySelector('.fo_tuzleiras');
let munkaleiras = document.querySelector('.fo_munleiras');
let orvosleiras = document.querySelector('.fo_orvleiras');


link.forEach(el => {
    el.addEventListener('click', () => {
        nyelvdoboz.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        fooldal.textContent = forditas[attr].fooldal;
        rolunk.textContent = forditas[attr].rolunk;
        szolgaltatas.textContent = forditas[attr].szolgáltatas;
        termekek.textContent = forditas[attr].termekek;
        blog.textContent = forditas[attr].blog;
        kapcsolatok.textContent = forditas[attr].kapcsolatok;

        tuzoltoruha.textContent = forditas[attr].tuzoltoruha;
        munkaruha.textContent = forditas[attr].munkaruha;
        orvosiruha.textContent = forditas[attr].orvosiruha;
        tozoltoleiras.textContent = forditas[attr].tozoltoleiras;
        munkaleiras.textContent = forditas[attr].munkaleiras;
        orvosleiras.textContent = forditas[attr].orvosleiras;
        

    })
})

let forditas = {
    "magyar" : 
    {
        "fooldal": "Főoldal",
        "rolunk": "Rólunk",
        "szolgáltatas": "Szolgáltatás",
        "termekek" : "Termékek",
        "blog" : "Blog",
        "kapcsolatok" : "Kapcsolatok",
        "Bejelentkezés" : "Bejelentkezés",
        "Regisztráció" : "Regisztráció",
        /**/
        "tuzoltoruha" : "Tűzoltóruhák",
        "munkaruha" : "Munkaruhák",
        "orvosiruha" : "Orvosi ruhák",
        "tozoltoleiras" : "Nehéz és könnyű bevetési és gyakorlóruhák",
        "munkaleiras" : "Munkaruhák több iparágra és többféle termékek",
        "orvosleiras" : "Orvosi köppenyek nadrágok, nővérruhák"

    },
    "szlovak" : 
    {
        "fooldal": "Hlavná stránka",
        "rolunk": "O nás",
        "szolgáltatas": "Služby",
        "termekek" : "Produkty",
        "blog" : "Blog",
        "kapcsolatok" : "Kontakty",
        "Bejelentkezés" : "Prihlásenie",
        "Regisztráció" : "Registrácia",
        /**/
        "tuzoltoruha" : "Hasičské oblečenie",
        "munkaruha" : "Pracovné oblečenie",
        "orvosiruha" : "Lekárské oblečenie",
        "tozoltoleiras" : "Ťažké a ľahké zásahové oblečenie",
        "munkaleiras" : "Pracovné oblečenie pre rôzné odvetvie",
        "orvosleiras" : "Sesterské oblečenie, nohavice, bundy"
    },
    "nemet" : 
    {
        "fooldal": "Hauptseite",
        "rolunk": "Über uns",
        "szolgáltatas": "Dienstleistungen",
        "termekek" : "Produkte",
        "blog" : "Blog",
        "kapcsolatok" : "Beziehungen",
        "Bejelentkezés" : "Anmeldung",
        "Regisztráció" : "Registrierung",
         /**/
         "tuzoltoruha" : "Feuerwehrkleidung",
         "munkaruha" : "Arbeitskleidung",
         "orvosiruha" : "Medizinische Kleidung",
         "tozoltoleiras" : "Schwere und leichte Notfallkleidung",
         "munkaleiras" : "Arbeitskleidung für verschiedene Branchen",
         "orvosleiras" : "Stillkleidung, Hosen, Jacken"
    },
    "angol" : 
    {
        "fooldal": "Home",
        "rolunk": "About us",
        "szolgáltatas": "Services",
        "termekek" : "Producte",
        "blog" : "Blog",
        "kapcsolatok" : "Contacts",
        "Bejelentkezés" : "Login",
        "Regisztráció" : "Registration",
         /**/
         "tuzoltoruha" : "Firefighter's clothing",
         "munkaruha" : "Work clothes",
         "orvosiruha" : "Medical clothes",
         "tozoltoleiras" : "Heavy and light emergency clothing",
         "munkaleiras" : "Work clothes for different industries",
         "orvosleiras" : "Nursing clothes, pants, jackets"
    },
}
