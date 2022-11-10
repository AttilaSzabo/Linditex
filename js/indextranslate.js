let link = document.querySelectorAll('.a');
let nyelvdoboz = document.querySelector('.nyelv');

let fooldal = document.querySelector('.fo_fooldal');
let rolunk = document.querySelector('.fo_rolunk');
let szolgaltatas = document.querySelector('.fo_szolgaltatas');
let termekek = document.querySelector('.fo_termekek');
let blog = document.querySelector('.fo_blog');
let kapcsolatok = document.querySelector('.fo_kapcsolatok');
let bejelentkezes = document.querySelector('.fo_bejelentkezes');
let regisztracio = document.querySelector('.fo_regisztracio');
let felhasznalonev = document.querySelector('.fo_felhasznalonev');
let jelszo = document.querySelector('.fo_jelszo');


let tuzoltoruha = document.querySelector('.fo_tuzoltoruha');
let munkaruha = document.querySelector('.fo_munkaruha');
let orvosiruha = document.querySelector('.fo_orvosiruha');
let tozoltoleiras = document.querySelector('.fo_tuzleiras');
let munkaleiras = document.querySelector('.fo_munleiras');
let orvosleiras = document.querySelector('.fo_orvleiras');
let termekekre = document.querySelector('.fo_termekekre');
let termekekre1 = document.querySelector('.fo_termekekre1');
let termekekre2 = document.querySelector('.fo_termekekre2');

let rolunkresz = document.querySelector('.fo_rolunkresz');
let tudjonmeg = document.querySelector('.fo_tudjonmeg');
let rolunktext1 = document.querySelector('.fo_rolunktext1');
let rolunktext2 = document.querySelector('.fo_rolunktext2');
let tovabb = document.querySelector('.fo_tovabb');

let ismerjek = document.querySelector('.fo_ismerjek');
let bizunk = document.querySelector('.fo_bizunk');
let egyedi = document.querySelector('.fo_egyedi');
let metararu = document.querySelector('.fo_meteraru');
let munkavedelem = document.querySelector('.fo_munkavedelem');
let egyeditext = document.querySelector('.fo_egyeditext');
let meterarutext = document.querySelector('.fo_meterarutext');
let munkavedelemtext = document.querySelector('.fo_munkavedelemtext');
let statisztika = document.querySelector('.fo_statisztika');
let statisztikatext = document.querySelector('.fo_statisztikatext');
let tapasztalat = document.querySelector('.fo_tapasztalat');
let munkaero = document.querySelector('.fo_munkaero');
let kliens = document.querySelector('.fo_kliens');
let termek = document.querySelector('.fo_termek');

let termekkepek = document.querySelector('.fo_termekekkepek');
let kattintsonkepek = document.querySelector('.fo_kattintsonkepek');
let tuzoltoruhak = document.querySelector('.fo_tuzoltoruhak');
let hivisruha = document.querySelector('.fo_hivisruha');
let teliruha = document.querySelector('.fo_teliruha');
let hegesztesruha = document.querySelector('.fo_hegesztesruha');
let orvosiruhak = document.querySelector('.fo_orvoiruha');
let antisztatikusruha = document.querySelector('.fo_antisztatikusruha');
let kiegeszitok = document.querySelector('.fo_kiegeszitok');
let tuzoltoruhatext = document.querySelector('.fo_tuzoltoruhatext');
let hivisruhatext = document.querySelector('.fo_hivisruhatext');
let teliruhatext = document.querySelector('.fo_teliruhatext');
let hegesztestext = document.querySelector('.fo_hegesztestext');
let orvosiruhatext = document.querySelector('.fo_orvosiruhatext');
let antisztatikustext = document.querySelector('.fo_antisztatikustext');
let kiegeszitoktext = document.querySelector('.fo_kiegeszitoktext');

let hirek = document.querySelector('.fo_hirek');
let hirektext = document.querySelector('.fo_hirektext');
let koltozes = document.querySelector('.fo_koltozes');
let tervezesruha = document.querySelector('.fo_tervezesruha');
let automatizalas = document.querySelector('.fo_automatizalas');
let hirre = document.querySelector('.fo_hirre');
let hirre1 = document.querySelector('.fo_hirre1');
let hirre2 = document.querySelector('.fo_hirre2');
let koltozesaltext = document.querySelector('.fo_koltozesaltext');
let tervezesruhaaltext = document.querySelector('.fo_tervezesaltext');
let automatizalasaltext = document.querySelector('.fo_automatizalasaltext');

let kapcsolatoklablec = document.querySelector('.fo_kapcsolatoklablec');
let kapcsolatoklablecalcim = document.querySelector('.fo_kapcsolatoklablecalcim');
let szekhely = document.querySelector('.fo_szekhely');
let szeretnetalalkozni = document.querySelector('.fo_szeretnetalalkozni');
let ittmegtalal = document.querySelector('.fo_ittmegtalal');
let postacim = document.querySelector('.fo_postaicim');
let telefonoselerh = document.querySelector('.fo_telefonoselerh');
let nyitvatartas = document.querySelector('.fo_nyitvatartas');
let hetfopent = document.querySelector('.fo_hetpen');
let szomvas = document.querySelector('.fo_szomvas');
let hakerdes = document.querySelector('.fo_hakerdes');
let bekuldes = document.querySelector('.fo_bekuldes');
let teljesnev = document.querySelector('.fo_teljesnev');
let email = document.querySelector('.fo_email');
let cegnev = document.querySelector('.fo_cegnev');
let telefonszam = document.querySelector('.fo_telefonszam');
let uzenet = document.querySelector('.fo_uzenet');

let adatvedelem = document.querySelector('.fo_adatvedelem');
let sutik = document.querySelector('.fo_sutik');

/*  A regisztrációs rész  */

let regisztraljon = document.querySelector('.fo_regisztraljon');
let beregisztralni = document.querySelector('.fo_beregisztralni');
let milyenelonyok = document.querySelector('.fo_milyenelonyok');
let beallithatja = document.querySelector('.fo_beallithatja');
let figyelemmel = document.querySelector('.fo_figyelemmel');
let idoben = document.querySelector('.fo_idoben');
let gyors = document.querySelector('.fo_gyors');
let kozossegunk = document.querySelector('.fo_legyenkozossegunk');
let regsiztrkapcsolat = document.querySelector('.fo_regisztrkapcsolat');
let postai = document.querySelector('.fo_regisztrposta');
let telefonos = document.querySelector('.fo_telefonos');


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
        //bejelentkezes.textContent = forditas[attr].bejelentkezes;
        //regisztracio.textContent = forditas[attr].regisztracio;
        //felhasznalonev.placeholder = forditas[attr].felhasznalonev;
        //jelszo.placeholder = forditas[attr].jelszo;

        tuzoltoruha.textContent = forditas[attr].tuzoltoruha;
        munkaruha.textContent = forditas[attr].munkaruha;
        orvosiruha.textContent = forditas[attr].orvosiruha;
        tozoltoleiras.textContent = forditas[attr].tozoltoleiras;
        munkaleiras.textContent = forditas[attr].munkaleiras;
        orvosleiras.textContent = forditas[attr].orvosleiras;
        termekekre.textContent = forditas[attr].termekekre;
        termekekre1.textContent = forditas[attr].termekekre1;
        termekekre2.textContent = forditas[attr].termekekre2;

        rolunkresz.textContent = forditas[attr].rolunkresz;
        tudjonmeg.textContent = forditas[attr].tudjonmeg;
        rolunktext1.textContent = forditas[attr].rolunktext1;
        rolunktext2.textContent = forditas[attr].rolunktext2;
        tovabb.textContent = forditas[attr].tovabb;

        ismerjek.textContent = forditas[attr].ismerjek;
        bizunk.textContent = forditas[attr].bizunk;
        egyedi.textContent = forditas[attr].egyedi;
        metararu.textContent = forditas[attr].metararu;
        munkavedelem.textContent = forditas[attr].munkavedelem;
        egyeditext.textContent = forditas[attr].egyeditext;
        meterarutext.textContent = forditas[attr].meterarutext;
        munkavedelemtext.textContent = forditas[attr].munkavedelemtext;
        statisztika.textContent = forditas[attr].statisztika;
        statisztikatext.textContent = forditas[attr].statisztikatext;
        tapasztalat.textContent = forditas[attr].tapasztalat;
        munkaero.textContent = forditas[attr].munkaero;
        kliens.textContent = forditas[attr].kliens;
        termek.textContent = forditas[attr].termek;

        termekkepek.textContent = forditas[attr].termekkepek;
        kattintsonkepek.textContent = forditas[attr].kattintsonkepek;
        tuzoltoruhak.textContent = forditas[attr].tuzoltoruhak;
        hivisruha.textContent = forditas[attr].hivisruha;
        teliruha.textContent = forditas[attr].teliruha;
        hegesztesruha.textContent = forditas[attr].hegesztesruha;
        orvosiruhak.textContent = forditas[attr].orvosiruhak;
        antisztatikusruha.textContent = forditas[attr].antisztatikusruha;
        kiegeszitok.textContent = forditas[attr].kiegeszitok;
        tuzoltoruhatext.textContent = forditas[attr].tuzoltoruhatext;
        hivisruhatext.textContent = forditas[attr].hivisruhatext;
        teliruhatext.textContent = forditas[attr].teliruhatext;
        hegesztestext.textContent = forditas[attr].hegesztestext;
        orvosiruhatext.textContent = forditas[attr].orvosiruhatext;
        antisztatikustext.textContent = forditas[attr].antisztatikustext;
        kiegeszitoktext.textContent = forditas[attr].kiegeszitoktext;
        
        hirek.textContent = forditas[attr].hirek;
        hirektext.textContent = forditas[attr].hirektext;
        koltozes.textContent = forditas[attr].koltozes;
        tervezesruha.textContent = forditas[attr].tervezesruha;
        automatizalas.textContent = forditas[attr].automatizalas;
        hirre.textContent = forditas[attr].hirre;
        hirre1.textContent = forditas[attr].hirre1;
        hirre2.textContent = forditas[attr].hirre2;
        koltozesaltext.textContent = forditas[attr].koltozesaltext;
        tervezesruhaaltext.textContent = forditas[attr].tervezesruhaaltext;
        automatizalasaltext.textContent = forditas[attr].automatizalasaltext;

        kapcsolatoklablec.textContent = forditas[attr].kapcsolatoklablec;
        kapcsolatoklablecalcim.textContent = forditas[attr].kapcsolatoklablecalcim;
        szekhely.textContent = forditas[attr].szekhely;
        szeretnetalalkozni.textContent = forditas[attr].szeretnetalalkozni;
        ittmegtalal.textContent = forditas[attr].ittmegtalal;
        postacim.textContent = forditas[attr].postacim;
        telefonoselerh.textContent = forditas[attr].telefonoselerh;
        nyitvatartas.textContent = forditas[attr].nyitvatartas;
        hetfopent.textContent = forditas[attr].hetfopent;
        szomvas.textContent = forditas[attr].szomvas;
        hakerdes.textContent = forditas[attr].hakerdes;
        bekuldes.textContent = forditas[attr].bekuldes;
        teljesnev.placeholder = forditas[attr].teljesnev;
        email.placeholder = forditas[attr].email;
        cegnev.placeholder = forditas[attr].cegnev;
        telefonszam.placeholder = forditas[attr].telefonszam;
        uzenet.placeholder = forditas[attr].uzenet;

        adatvedelem.textContent = forditas[attr].adatvedelem;
        sutik.textContent = forditas[attr].sutik;

        regisztraljon.textContent = forditas[attr].regisztraljon;
        beregisztralni.textContent = forditas[attr].beregisztralni;
        milyenelonyok.textContent = forditas[attr].milyenelonyok;
        beallithatja.textContent = forditas[attr].beallithatja;
        figyelemmel.textContent = forditas[attr].figyelemmel;
        idoben.textContent = forditas[attr].idoben;
        gyors.textContent = forditas[attr].gyors;
        kozossegunk.textContent = forditas[attr].kozossegunk;
        regsiztrkapcsolat.textContent = forditas[attr].regsiztrkapcsolat;
        postai.textContent = forditas[attr].postai;
        telefonos.textContent = forditas[attr].telefonos;
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
        "bejelentkezes" : "Bejelentkezés",
        "regisztracio" : "Regisztráció",
        "felhasznalonev" : "Felhasználónév",
        "jelszo" : "Jelszó",
        /**/
        "tuzoltoruha" : "Tűzoltóruhák",
        "munkaruha" : "Munkaruhák",
        "orvosiruha" : "Orvosi ruhák",
        "tozoltoleiras" : "Nehéz és könnyű bevetési és gyakorlóruhák",
        "munkaleiras" : "Munkaruhák több iparágra és többféle termékek",
        "orvosleiras" : "Orvosi köppenyek nadrágok, nővérruhák",
        "termekekre" : "Termékekre",
        "termekekre1" : "Termékekre",
        "termekekre2" : "Termékekre",
        /**/
        "rolunkresz" : "Rólunk",
        "tudjonmeg" : "Tudjon meg többet cégünkről",
        "rolunktext1" : "A Linditex Kft -t 2005- ben alapítottuk Vezekényen, Szlovákiában. Először Lindi néven futott a cég, majd 2018-ban lett Linditex Kft. A Lindi eleinte babaruhák gyártásával foglalkozott, de a piaci kereslet hiányában és a válság beköszöntével amely 2007-ben következett be, kénytelenek voltunk irányt váltani,és munkaruhák varrásába kezdeni.A hely, amely rendelkezésünkre állt az először 120 négyzetméternyi terület volt. Ezen a helyen próbáltuk a tőlünk telhető legjobb minőséget nyújtani az ügyfeleinknek. ",           
        "rolunktext2" : "2017-ben a céghez csatlakoztak a cégalapítók fiai is, és a cég vezetősége új irányelvet vett fel.Szerettek volna nagyobb ügyfélkört kiszolgálni.Az új irányelv sikeresnek bizonyult, amely egy felismeréshez vezetett, mégpedig,hogy az akkori helyiség kicsinek bizonyult. Majd 2017- ben a cég beköltözött egy 400 négyzetméteres helyiségbe. Több új terméket is kifejlesztettünk a saját védjegyünk alatt. Ezzel az új irányelvvel szeretnénk még több minőségi ruhát készíteni a leendő ügyfeleink számára.",
        "tovabb" : "Tovább",
        /**/
        "ismerjek" : "Ismerjék meg SZOLGÁLLTATÁSAINKAT",
        "bizunk" : "Bízunk benne, hogy nálunk megtalálja számítását.",
        "egyedi" : "Egyedi szabás",
        "metararu" : "Méteráru",
        "munkavedelem" : "Munkavédelem",
        "egyeditext" : "Vállalatunkban képesek vagyunk egyedi szabásmintát készíteni, így bármilyen szabásformának eleget tudunk tenni. Legyen szó kisebb, vagy akár nagyobb méretekről.",
        "meterarutext" : "Több éves tapasztalat után, sikerült a legjobb anyagbeszállítókra szert tenni.Képesek vagyunk bármilyen normai, vagy akár személyes elképzelésnek eleget tenni. Legyen szó munkaruháról, télikabátokról, tűzoltóruhákról.",
        "munkavedelemtext" : "Amennyiben teljes munkafelszerelésre lenne szüksége - kesztyűk, cipők, sisakok-,  nem gond, mi ezzel is tudunk szolgálni. Nálunk minden darabot beszerezhet egy fedél alatt. Amennyiben szüksége van a felsoroltak közül bármelyikre, bátran forduljon hozzánk.",
        "statisztika" : "Rövid kis STATISZTIKÁNK",
        "statisztikatext" : "Bízunk benne, hogy a számok láttán minket választanak.",
        "tapasztalat" : "Tapasztalat",
        "munkaero" : "Munkaerő",
        "kliens" : "Kliensek",
        "termek" : "Termék",
        /**/
        "termekkepek" : "Termékek",
        "kattintsonkepek" : "Kattintson a kívánt termékre, és tekitse meg a választékunkat.",
        "tuzoltoruhak" : "Tűzoltó ruha",
        "hivisruha" : "HI-VIS",
        "teliruha" : "Téli ruházat",
        "hegesztesruha" : "Hegesztés",
        "orvosiruhak" : "Orvosok",
        "antisztatikusruha" : "Antisztatikus",
        "kiegeszitok" : "Kiegészítők.",
        "tuzoltoruhatext" : "Tűzoltó ruhák, nehéz, könnyű-bevetési.Gyakorló ruhák, egyébb kiegészítók.",
        "hivisruhatext" : "Magasláthatósági ruhák, nadrág, kabát, mellények, egyébb kiegészítók.",
        "teliruhatext" : "Téli termékek, téli kabátok, nadrágok. Külömböző anyagok, szabásminták.",
        "hegesztestext" : "Hegesztő termékek, kabátok, nadrágok. Minden adott normának megfelelően.",
        "orvosiruhatext" : "Orvosi ruhák, higienikus nadrágok, köpenyek. Nővéri nadrágok, köpenyek.",
        "antisztatikustext" : "Antisztatikus kabátok, nadrágok, CleanRoom. Minden normának megfelelve.",
        "kiegeszitoktext" : "Egyébb kiegészítők, csizmák, cipők,kesztyűk, sisakok. Minden iparágra.",
        /**/
        "hirek" : "Hírek",
        "hirektext" : "Újdonságok a Linditex területén",
        "koltozes" : "Költözés új helyiségbe.",
        "tervezesruha" : "Gyakorló ruha megtervezése.",
        "automatizalas" : "Varrási automatizálás.",
        "hirre" : "Hírre",
        "hirre1" : "Hírek",
        "hirre2" : "Hírek",
        "koltozesaltext" : "Új helyiség, újabb lehetőségek.",
        "tervezesruhaaltext" : "Új termék az önkéntes tűzoltóknak.",
        "automatizalasaltext" : "Megpróbálunk új szintre lépni.",
        /**/
        "kapcsolatoklablec" : "Kapcsolatok",
        "kapcsolatoklablecalcim" : "Szívesen segítünk önnek",
        "szekhely" : "A cég székhelye",
        "szeretnetalalkozni" : "Szeretne velünk személyesen is beszélni?",
        "ittmegtalal" : "Itt megtalál minket:",
        "postacim" : "Postai címünk:",
        "telefonoselerh" : "Telefonos elérhetőségek:",
        "nyitvatartas" : "A cég nyitvatartása:",
        "hetfopent" : "Hétfő-Péntek: 7:00-15:30",
        "szomvas" : "Szombat-Vasárnap: Zárva",
        "hakerdes" : "Ha kérdése lenne, kérem írjon nekünk",
        "bekuldes" : "Beküldés",
        "teljesnev" : "Teljes neve",
        "email" : "E-mail",
        "cegnev" : "Cégnév",
        "telefonszam" : "Telefonszáma",
        "uzenet" : "Üzenete",
        /**/
        "adatvedelem" : "Adatvédelem",
        "sutik" : "Sütik",
        /*  A regisztrációs rész  */
        "regisztraljon" : "Regisztráljon be még ma.",
        "beregisztralni" : "Beregisztálni",
        "milyenelonyok" : "Hogy milyen előnyökhöz juthat?",
        "beallithatja" : "Beállíthatja a raktárkészlet mennyiségét",
        "figyelemmel" : "Figyelemmel követheti raktárkészletét",
        "idoben" : "Időben értisíthet, hogyha szeretné raktárkészletét feltölteni",
        "gyors" : "Gyors kiszállítás",
        "kozossegunk" : "Legyen a közösségünk része.",
        "regsiztrkapcsolat" : "Kapcsolatok",
        "postai" : "Postai cím:",
        "telefonos" : "Telefonos elérhetőségek:",
        "teszt" : "jjfjfjfjf",
    },
    "szlovak" : 
    {
        "fooldal": "Hlavná stránka",
        "rolunk": "O nás",
        "szolgáltatas": "Služby",
        "termekek" : "Produkty",
        "blog" : "Blog",
        "kapcsolatok" : "Kontakty",
        "bejelentkezes" : "Prihlásenie",
        "regisztracio" : "Registrácia",
        "felhasznalonev" : "Používateľské meno",
        "jelszo" : "Heslo",
        /**/
        "tuzoltoruha" : "Hasičské oblečenie",
        "munkaruha" : "Pracovné oblečenie",
        "orvosiruha" : "Lekárské oblečenie",
        "tozoltoleiras" : "Ťažké a ľahké zásahové oblečenie",
        "munkaleiras" : "Pracovné oblečenie pre rôzné odvetvie",
        "orvosleiras" : "Sesterské oblečenie, nohavice, bundy",
        "termekekre" : "Produkty",
        "termekekre1" : "Produkty",
        "termekekre2" : "Produkty",
        /**/
        "rolunkresz" : "O nás",
        "tudjonmeg" : "Dozveďte si viac o nás",
        "rolunktext1" : "Naša firma Linditex s.r.o. bola založená v roku 2005 v dedine Vozokany na Slovensku, najprv pod menom Lindi, od roku 2018 funguje pod názvom Linditex s.r.o. Na začiatku naša firma sa venovala šitiu dojčenského oblečenia, ale kvôli ekonomickej kríze v roku 2007 a kvôli nedostatku dopytu na trhu sme museli zmeniť náš profil a začínali sme so šitím pracovného oblečenia. Naša prvá výrobná hala bola 120 m2 veľká miestnosť, odkiaľ sme sa snažili dodať našim klientom čo najvyššiu kvalitu.  ",           
        "rolunktext2" : "V roku 2017 sa k firme pripojili synovia zakladateľov a vedenie firmy sa presmerovala na nový koncept. Chceli sme slúžiť väčšej klientele, preto sme si uvedomili, že potrebujeme väčšiu výrobnú halu. V tom istom roku sa naša spoločnosť  presídlila do novej 400 m2-vej budovy. Vyvíjali sme viac nových produktov pod našou ochrannou známkou. Našim zámerom je vytvoriť ešte viac kvalitných šiat pre našich budúcich zákazníkov.    ",
        "tovabb" : "Ďalej",
        /**/
        "ismerjek" : "Spoznajte naše SLUŽBY",
        "bizunk" : "Dúfame, že u nás nájdete svoju kalkuláciu.",
        "egyedi" : "Vlastný strih",
        "metararu" : "Textílie",
        "munkavedelem" : "Ochrana práce",
        "egyeditext" : "V našej firme vieme vytvoriť jedinečné strihy a vyhotoviť rôzne tvary strihov od najmenších po najväčie. ",
        "meterarutext" : "Po mnohoročných skúsenostiach sa nám podarilo nájsť najlepších dodávateľov textilu. Vieme vytvoriť rôzne osobné predstavy či normy v širokej palete zimných kabátov, pracovného oblečenia a požiarneho odevu.",
        "munkavedelemtext" : "Ak potrebujete kompletnú pracovnú výbavu ako rukavice, topánky, helmy, u nás si môžete všetko zaobstarať pod jednou strechou, neváhajte nás kontaktovať. ",
        "statisztika" : "Naša krátka ŠTATISTIKA",
        "statisztikatext" : "Sme presvedčení, že po zhliadnutí čísel si nás vyberiete.",
        "tapasztalat" : "Skúsenosti",
        "munkaero" : "Pracovná sila",
        "kliens" : "klientov",
        "termek" : "Produkt",
        /**/
        "termekkepek" : "Produkty",
        "kattintsonkepek" : "Kliknite na požadovaný produkt a pozrite si náš výber.",
        "tuzoltoruhak" : "Hasičské oblečenie",
        "hivisruha" : "HI-VIS",
        "teliruha" : "Zimné oblečenie",
        "hegesztesruha" : "Zvárači",
        "orvosiruhak" : "Lekárov",
        "antisztatikusruha" : "Antistatické",
        "kiegeszitok" : "Príslušenstvo.",
        "tuzoltoruhatext" : "Hasičské oblečenie, ťažké, ľahké nasadenie.Cvičné oblečenie, ostatné doplnky.",
        "hivisruhatext" : "Oblečenie s vysokou viditeľnosťou, nohavice, bundy, vesty, iné doplnky.",
        "teliruhatext" : "Zimné produkty, zimné bundy, nohavice. Rôzne materiály, krajčírske vzory.",
        "hegesztestext" : "Zváračské výrobky, bundy, nohavice. Podľa všetkých daných noriem.",
        "orvosiruhatext" : "Zdravotné oblečenie, hygienické nohavice, plášte. Nohavičky na dojčenie, plášte.",
        "antisztatikustext" : "Antistatické bundy, nohavice, CleanRoom. V súlade so všetkými normami.",
        "kiegeszitoktext" : "Ostatné doplnky, čižmy, topánky, rukavice, prilby. Pre všetky odvetvia.",
        /**/
        "hirek" : "Noviny",
        "hirektext" : "Novinky v Linditexe",
        "koltozes" : "Sťahovanie do novej miestnosti.",
        "tervezesruha" : "Navrhovanie cvičebných odevov.",
        "automatizalas" : "Automatizácia šitia.",
        "hirre" : "Ďalej",
        "hirre1" : "Ďalej",
        "hirre2" : "Ďalej",
        "koltozesaltext" : "Nová miestnosť, nové možnosti.",
        "tervezesruhaaltext" : "Nový produkt pre dobrovoľných hasičov.",
        "automatizalasaltext" : "Snažíme sa dosiahnuť novú úroveň.",
         /**/
        "kapcsolatoklablec" : "Kontakty",
        "kapcsolatoklablecalcim" : "Radi vám pomôžeme",
        "szekhely" : "Sídlo spoločnosti",
        "szeretnetalalkozni" : "Chceli by ste sa s nami porozprávať osobne?",
        "ittmegtalal" : "Nájdete nás tu:",
        "postacim" : "Naša poštová adresa:",
        "telefonoselerh" : "Telefonické kontaktné údaje:",
        "nyitvatartas" : "Otváracie hodiny spoločnosti:",
        "hetfopent" : "Pondelok až piatok: 7:00 - 15:30",
        "szomvas" : "Sobota-nedeľa: zatvorené",
        "hakerdes" : "Ak máte nejaké otázky, napíšte nám",
        "bekuldes" : "Odoslať",
        "teljesnev" : "Celé meno",
        "email" : "Email",
        "cegnev" : "Meno firmy",
        "telefonszam" : "Vaše Tel.číslo",
        "uzenet" : "Vaša správa",
        /**/
        "adatvedelem" : "Ochrana dát",
        "sutik" : "Cookies",
        /*  A regisztrációs rész  */
        "regisztraljon" : "Zaregistrujte sa ešte dnes.",
        "beregisztralni" : "Zaregistrovať sa",
        "milyenelonyok" : "Aké výhody môžete získať?",
        "beallithatja" : "Môžete nastaviť množstvo na sklade",
        "figyelemmel" : "Môžete sledovať svoj inventár",
        "idoben" : "Môžete včas oznámiť, že chcete doplniť zásoby",
        "gyors" : "Rýchla donáška",
        "kozossegunk" : "Staňte sa súčasťou našej komunity.",
        "regsiztrkapcsolat" : "Vzťahy",
        "postai" : "Poštová adresa:",
        "telefonos" : "Telefonické kontaktné údaje:",
        "teszt" : "jjfjfjfjf",
    },
    "nemet" : 
    {
        "fooldal": "Hauptseite",
        "rolunk": "Über uns",
        "szolgáltatas": "Dienstleistungen",
        "termekek" : "Produkte",
        "blog" : "Blog",
        "kapcsolatok" : "Beziehungen",
        "bejelentkezes" : "Anmeldung",
        "regisztracio" : "Registrierung",
        "felhasznalonev" : "Benutzername",
        "jelszo" : "Passwort",
         /**/
         "tuzoltoruha" : "Feuerwehrkleidung",
         "munkaruha" : "Arbeitskleidung",
         "orvosiruha" : "Medizinische Kleidung",
         "tozoltoleiras" : "Schwere und leichte Notfallkleidung",
         "munkaleiras" : "Arbeitskleidung für verschiedene Branchen",
         "orvosleiras" : "Stillkleidung, Hosen, Jacken",
         "termekekre" : "Produkte",
         "termekekre1" : "Produkte",
         "termekekre2" : "Produkte",
         /**/
        "rolunkresz" : "Über uns",
        "tudjonmeg" : "lerne mehr über uns",
        "rolunktext1" : "Linditex GmbH wurde im 2005 in der Slowakei, im Dorf Vozokany gegründet. Am Anfang die Firma trug den Namen Lindi, nur ab 2018 wurde sie als Linditex Gmbh benennt. Die Firma hat sich zuerst mit dem Nähen von Babybekleidung beschäftigt, aber wegen der fehlenden Marktnachfrage und der ökonomischen Weltkrisis im 2007 mussten wir eine neue Konzeption herausfinden und begonnen wir mit dem Nähen der Arbeitsbekleidungen. Unsere Werkstatt befand sich am Anfang in einem Raum mit Größe von 120m2, wovon wir die beste Qualität für unseren Kunden bieten versuchten.   ",           
        "rolunktext2" : "Im 2017 sind auch die Söhne des Begründers in die Firma hineingetreten, und die Leitung hat eine neue Konzeption angenommen. Wir wollten einen größeren Kundenkreis bedienen. Die neue Konzeption schien erfolgreich zu sein, die zu einer neuen Erkenntnis kam, dass wir größeren Produktionsraum brauchten. Im 2017 hat sich die Firma in einen 400m2 großen Produktionsraum umgezogen, Wir haben auch mehreren neuen Produkten unter unserer Schutzmarke entwickelt. Wir möchten mit dieser neuen Konzeption in der Zukunft noch weitere Mengen von qualitätsvollen Bekleidungen für unseren zukünftigen Kunden anfertigen. ",
        "tovabb" : "Weiter",
        /**/
        "ismerjek" : "Lernen Sie unsere LEISTUNGEN kennen",
        "bizunk" : "Wir hoffen, dass Sie Ihre Kalkulation bei uns finden.",
        "egyedi" : "Eigener Schnitt",
        "metararu" : "Textilien",
        "munkavedelem" : "Arbeitsschutz",
        "egyeditext" : "Wir sind fähig in unserer Firma einzigartige Schnittmuster anfertigen, so können wir verschiedenen Schnittformen schneiden genauso wie in einer kleineren oder in größeren Mengen auch. ",
        "meterarutext" : "Nach mehrjährigen Erfahrungen konnten wir die besten Materiallieferanten erkennen. Wir sind fähig verschiedenen Normen- oder personellen Vorstellungen anfertigen, von Wintermantel bis Feuerwehrausrüstung auf einer breiten Palette.  ",
        "munkavedelemtext" : "Falls, dass Sie eine ganze Arbeitsausrüstung brauchen – Handschuhen, Schuhen, Helmen – kein Problem von unserer Seite, bei uns können Sie alle Stücke unter einem Dach erhalten, kontaktieren Sie uns. ",
        "statisztika" : "Unsere Kurzstatistik",
        "statisztikatext" : "Wir sind davon überzeugt, dass Sie sich aufgrund der Zahlen für uns entscheiden werden.",
        "tapasztalat" : "Erfahrung",
        "munkaero" : "Belegschaft",
        "kliens" : "Kunden",
        "termek" : "Produkt",
        /**/
        "termekkepek" : "Produkte",
        "kattintsonkepek" : "Klicken Sie auf das gewünschte Produkt, um unsere Auswahl anzuzeigen.",
        "tuzoltoruhak" : "Feuerwehrkleidung",
        "hivisruha" : "HI-VIS",
        "teliruha" : "Winterkleidung",
        "hegesztesruha" : "Schweißer",
        "orvosiruhak" : "Ärzte",
        "antisztatikusruha" : "Antistatisch",
        "kiegeszitok" : "Zubehör.",
        "tuzoltoruhatext" : "Feuerwehrbekleidung, schwerer, leichter Einsatz Trainingsbekleidung, sonstiges Zubehör.",
        "hivisruhatext" : "Warnschutzkleidung, Hosen, Jacken, Westen, andere Accessoires.",
        "teliruhatext" : "Winterprodukte, Winterjacken, Hosen. Verschiedene Materialien, Schnittmuster.",
        "hegesztestext" : "Schweißprodukte, Jacken, Hosen. Nach allen vorgegebenen Standards.",
        "orvosiruhatext" : "Medizinische Kleidung, Hygienehosen, Mäntel. Stillhosen, Mäntel.",
        "antisztatikustext" : "Antistatische Jacken, Hosen, CleanRoom. In Übereinstimmung mit allen Standards.",
        "kiegeszitoktext" : "Sonstiges Zubehör, Stiefel, Schuhe, Handschuhe, Helme. Für alle Branchen.",
        /**/
        "hirek" : "Nachrichten",
        "hirektext" : "Neuigkeiten bei Linditex",
        "koltozes" : "Umzug in einen neuen Raum.",
        "tervezesruha" : "Übungskleidung gestalten.",
        "automatizalas" : "Nähautomation.",
        "hirre" : "Weiter",
        "hirre1" : "Weiter",
        "hirre2" : "Weiter",
        "koltozesaltext" : "Neuer Raum, neue Möglichkeiten.",
        "tervezesruhaaltext" : "Ein neues Produkt für freiwillige Feuerwehrleute.",
        "automatizalasaltext" : "Wir versuchen, ein neues Level zu erreichen.",
        /**/
        "kapcsolatoklablec" : "Kontakte",
        "kapcsolatoklablecalcim" : "Wir helfen Ihnen gerne weiter",
        "szekhely" : "Hauptbüro",
        "szeretnetalalkozni" : "Sie möchten persönlich mit uns sprechen?",
        "ittmegtalal" : "Sie finden uns hier:",
        "postacim" : "Unsere Postanschrift:",
        "telefonoselerh" : "Telefonische Kontaktdaten:",
        "nyitvatartas" : "Öffnungszeiten des Unternehmens:",
        "hetfopent" : "Montag bis Freitag: 7:00 - 15:30 Uhr",
        "szomvas" : "Samstag-Sonntag: geschlossen",
        "hakerdes" : "Wenn Sie Fragen haben, schreiben Sie uns bitte",
        "bekuldes" : "Senden",
        "teljesnev" : "Vollständiger Name",
        "email" : "Email",
        "cegnev" : "Name der Firma",
        "telefonszam" : "Deine Telefonnummer",
        "uzenet" : "Ihre Nachricht",
        /**/
        "adatvedelem" : "Datenschutz",
        "sutik" : "Cookies",
        /*  A regisztrációs rész  */
        "regisztraljon" : "Registrieren Sie sich heute.",
        "beregisztralni" : "Einloggen",
        "milyenelonyok" : "Welche Vorteile können Sie erhalten?",
        "beallithatja" : "Sie können die Menge auf Lager einstellen",
        "figyelemmel" : "Sie können Ihr Inventar verfolgen",
        "idoben" : "Sie können rechtzeitig ankündigen, dass Sie nachfüllen möchten",
        "gyors" : "Schnelle Lieferung",
        "kozossegunk" : "Werde Teil unserer Community.",
        "regsiztrkapcsolat" : "Beziehungen",
        "postai" : "Anschrift:",
        "telefonos" : "Telefonische Kontaktdaten:",
        "teszt" : "jjfjfjfjf",
    },
    "angol" : 
    {
        "fooldal": "Home",
        "rolunk": "About us",
        "szolgáltatas": "Services",
        "termekek" : "Producte",
        "blog" : "Blog",
        "kapcsolatok" : "Contacts",
        "bejelentkezes" : "Login",
        "regisztracio" : "Registration",
        "felhasznalonev" : "User name",
        "jelszo" : "Password",
         /**/
         "tuzoltoruha" : "Firefighter's clothing",
         "munkaruha" : "Work clothes",
         "orvosiruha" : "Medical clothes",
         "tozoltoleiras" : "Heavy and light emergency clothing",
         "munkaleiras" : "Work clothes for different industries",
         "orvosleiras" : "Nursing clothes, pants, jackets",
         "termekekre" : "Products",
         "termekekre1" : "Products",
         "termekekre2" : "Products",
         /**/
        "rolunkresz" : "About us",
        "tudjonmeg" : "Learn more about us",
        "rolunktext1" : "Our company Linditex Ltd. was established in Slovakia in a village called Vozokany.  At the beginning the company was named as Lindi, from 2018 as Linditex Ltd. We produced at first baby clothing , but due to the financial crisis in 2007 and lack of demand on the market we had to change our profile to production of dungarees.  Our production hall was 120 m2 large that time, from that place we were trying to do our best to offer a high quality service for our clients. ",           
        "rolunktext2" : "In 2017 the sons of the establishers had joined to the management of the company,and they aimed new goals. They wanted to serve a larger clientele. They were succesful and within a short time they had realized that they needed a new, bigger production hall. In 2017 the company moved to a new 400 m2 large building. We have created from that time many new products under our brand’s name. We would like to continue this way and produce even more high quality clothing. ",
        "tovabb" : "Go on",
        /**/
        "ismerjek" : "Get to know our SERVICES",
        "bizunk" : "We hope that you will find your calculation with us.",
        "egyedi" : "Own cut",
        "metararu" : "Textiles",
        "munkavedelem" : "Labor protection",
        "egyeditext" : "We can produce at our company any types of individual patterns , no matter of size from smaller to big ones. We can fulfill all the requests considering the patterns",
        "meterarutext" : "With an experience of long years we could find the best suppliers of textils. We can fulfill any kinds of creative presonal ideas as well in the spectrum of dungarees, wintercoats, firewear.",
        "munkavedelemtext" : "In case you need a complex set of tools - shoes,helmets, gloves - there is no problem from our side. At our company you can purchase everything under one roof, do not hesitate to contact us.",
        "statisztika" : "OUR short STATISTICS",
        "statisztikatext" : "We are confident that they will choose us after seeing the numbers.",
        "tapasztalat" : "Experience",
        "munkaero" : "Labor",
        "kliens" : "Clients",
        "termek" : "Product",
        /**/
        "termekkepek" : "Products",
        "kattintsonkepek" : "Click on the desired product and view our selection.",
        "tuzoltoruhak" : "Fire suit",
        "hivisruha" : "HI-VIS",
        "teliruha" : "Winter clothing",
        "hegesztesruha" : "Welding",
        "orvosiruhak" : "Doctors",
        "antisztatikusruha" : "Antistatic",
        "kiegeszitok" : "Accessories.",
        "tuzoltoruhatext" : "Firefighting clothes, heavy, light deployment. Practice clothes, other accessories.",
        "hivisruhatext" : "High visibility clothes, pants, jackets, vests, other accessories.",
        "teliruhatext" : "Winter products, winter jackets, trousers. Different materials, tailoring patterns.",
        "hegesztestext" : "Welding products, jackets, trousers. According to all given standards.",
        "orvosiruhatext" : "Medical clothes, hygienic trousers, gowns. Nursing pants, gowns.",
        "antisztatikustext" : "Antistatic jackets, trousers, CleanRoom. In accordance with all standards.",
        "kiegeszitoktext" : "Other accessories, boots, shoes, gloves, helmets. For all industries.",
        /**/
        "hirek" : "News",
        "hirektext" : "News in Linditex",
        "koltozes" : "Moving to a new room.",
        "tervezesruha" : "Designing practice clothes.",
        "automatizalas" : "Sewing automation.",
        "hirre" : "Next",
        "hirre1" : "Next",
        "hirre2" : "Next",
        "koltozesaltext" : "New space, new possibilities.",
        "tervezesruhaaltext" : "A new product for volunteer firefighters.",
        "automatizalasaltext" : "We are trying to reach a new level.",
        /**/
        "kapcsolatoklablec" : "Contacts",
        "kapcsolatoklablecalcim" : "We're here to help",
        "szekhely" : "Main office",
        "szeretnetalalkozni" : "Would you like to speak to us personally?",
        "ittmegtalal" : "You can find us here:",
        "postacim" : "Our postal address:",
        "telefonoselerh" : "Telephone contact details:",
        "nyitvatartas" : "Company opening hours:",
        "hetfopent" : "Monday to Friday: 7:00 a.m. - 3:30 p.m",
        "szomvas" : "Saturday-Sunday: closed",
        "hakerdes" : "If you have any questions, please write to us",
        "bekuldes" : "Send",
        "teljesnev" : "Full name",
        "email" : "Email",
        "cegnev" : "Name of the company",
        "telefonszam" : "Your phone number",
        "uzenet" : "Your message",
        /**/
        "adatvedelem" : "data security",
        "sutik" : "Cookies",
        /*  A regisztrációs rész  */
        "regisztraljon" : "Register today.",
        "beregisztralni" : "log in",
        "milyenelonyok" : "What benefits can you get?",
        "beallithatja" : "You can set the quantity in stock",
        "figyelemmel" : "You can track your inventory",
        "idoben" : "You can announce in good time that you want to refill",
        "gyors" : "Fast delivery",
        "kozossegunk" : "Become part of our community.",
        "regsiztrkapcsolat" : "Relationships",
        "postai" : "Address:",
        "telefonos" : "Telephone contact details:",
    },
}