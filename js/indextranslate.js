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

/*  A regisztr??ci??s r??sz  */

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
        szolgaltatas.textContent = forditas[attr].szolg??ltatas;
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
        "fooldal": "F??oldal",
        "rolunk": "R??lunk",
        "szolg??ltatas": "Szolg??ltat??s",
        "termekek" : "Term??kek",
        "blog" : "Blog",
        "kapcsolatok" : "Kapcsolatok",
        "bejelentkezes" : "Bejelentkez??s",
        "regisztracio" : "Regisztr??ci??",
        "felhasznalonev" : "Felhaszn??l??n??v",
        "jelszo" : "Jelsz??",
        /**/
        "tuzoltoruha" : "T??zolt??ruh??k",
        "munkaruha" : "Munkaruh??k",
        "orvosiruha" : "Orvosi ruh??k",
        "tozoltoleiras" : "Neh??z ??s k??nny?? bevet??si ??s gyakorl??ruh??k",
        "munkaleiras" : "Munkaruh??k t??bb ipar??gra ??s t??bbf??le term??kek",
        "orvosleiras" : "Orvosi k??ppenyek nadr??gok, n??v??rruh??k",
        "termekekre" : "Term??kekre",
        "termekekre1" : "Term??kekre",
        "termekekre2" : "Term??kekre",
        /**/
        "rolunkresz" : "R??lunk",
        "tudjonmeg" : "Tudjon meg t??bbet c??g??nkr??l",
        "rolunktext1" : "A Linditex Kft -t 2005- ben alap??tottuk Vezek??nyen, Szlov??ki??ban. El??sz??r Lindi n??ven futott a c??g, majd 2018-ban lett Linditex Kft. A Lindi eleinte babaruh??k gy??rt??s??val foglalkozott, de a piaci kereslet hi??ny??ban ??s a v??ls??g bek??sz??nt??vel amely 2007-ben k??vetkezett be, k??nytelenek voltunk ir??nyt v??ltani,??s munkaruh??k varr??s??ba kezdeni.A hely, amely rendelkez??s??nkre ??llt az el??sz??r 120 n??gyzetm??ternyi ter??let volt. Ezen a helyen pr??b??ltuk a t??l??nk telhet?? legjobb min??s??get ny??jtani az ??gyfeleinknek. ",           
        "rolunktext2" : "2017-ben a c??ghez csatlakoztak a c??galap??t??k fiai is, ??s a c??g vezet??s??ge ??j ir??nyelvet vett fel.Szerettek volna nagyobb ??gyf??lk??rt kiszolg??lni.Az ??j ir??nyelv sikeresnek bizonyult, amely egy felismer??shez vezetett, m??gpedig,hogy az akkori helyis??g kicsinek bizonyult. Majd 2017- ben a c??g bek??lt??z??tt egy 400 n??gyzetm??teres helyis??gbe. T??bb ??j term??ket is kifejlesztett??nk a saj??t v??djegy??nk alatt. Ezzel az ??j ir??nyelvvel szeretn??nk m??g t??bb min??s??gi ruh??t k??sz??teni a leend?? ??gyfeleink sz??m??ra.",
        "tovabb" : "Tov??bb",
        /**/
        "ismerjek" : "Ismerj??k meg SZOLG??LLTAT??SAINKAT",
        "bizunk" : "B??zunk benne, hogy n??lunk megtal??lja sz??m??t??s??t.",
        "egyedi" : "Egyedi szab??s",
        "metararu" : "M??ter??ru",
        "munkavedelem" : "Munkav??delem",
        "egyeditext" : "V??llalatunkban k??pesek vagyunk egyedi szab??smint??t k??sz??teni, ??gy b??rmilyen szab??sform??nak eleget tudunk tenni. Legyen sz?? kisebb, vagy ak??r nagyobb m??retekr??l.",
        "meterarutext" : "T??bb ??ves tapasztalat ut??n, siker??lt a legjobb anyagbesz??ll??t??kra szert tenni.K??pesek vagyunk b??rmilyen normai, vagy ak??r szem??lyes elk??pzel??snek eleget tenni. Legyen sz?? munkaruh??r??l, t??likab??tokr??l, t??zolt??ruh??kr??l.",
        "munkavedelemtext" : "Amennyiben teljes munkafelszerel??sre lenne sz??ks??ge - keszty??k, cip??k, sisakok-,  nem gond, mi ezzel is tudunk szolg??lni. N??lunk minden darabot beszerezhet egy fed??l alatt. Amennyiben sz??ks??ge van a felsoroltak k??z??l b??rmelyikre, b??tran forduljon hozz??nk.",
        "statisztika" : "R??vid kis STATISZTIK??NK",
        "statisztikatext" : "B??zunk benne, hogy a sz??mok l??tt??n minket v??lasztanak.",
        "tapasztalat" : "Tapasztalat",
        "munkaero" : "Munkaer??",
        "kliens" : "Kliensek",
        "termek" : "Term??k",
        /**/
        "termekkepek" : "Term??kek",
        "kattintsonkepek" : "Kattintson a k??v??nt term??kre, ??s tekitse meg a v??laszt??kunkat.",
        "tuzoltoruhak" : "T??zolt?? ruha",
        "hivisruha" : "HI-VIS",
        "teliruha" : "T??li ruh??zat",
        "hegesztesruha" : "Hegeszt??s",
        "orvosiruhak" : "Orvosok",
        "antisztatikusruha" : "Antisztatikus",
        "kiegeszitok" : "Kieg??sz??t??k.",
        "tuzoltoruhatext" : "T??zolt?? ruh??k, neh??z, k??nny??-bevet??si.Gyakorl?? ruh??k, egy??bb kieg??sz??t??k.",
        "hivisruhatext" : "Magasl??that??s??gi ruh??k, nadr??g, kab??t, mell??nyek, egy??bb kieg??sz??t??k.",
        "teliruhatext" : "T??li term??kek, t??li kab??tok, nadr??gok. K??l??mb??z?? anyagok, szab??smint??k.",
        "hegesztestext" : "Hegeszt?? term??kek, kab??tok, nadr??gok. Minden adott norm??nak megfelel??en.",
        "orvosiruhatext" : "Orvosi ruh??k, higienikus nadr??gok, k??penyek. N??v??ri nadr??gok, k??penyek.",
        "antisztatikustext" : "Antisztatikus kab??tok, nadr??gok, CleanRoom. Minden norm??nak megfelelve.",
        "kiegeszitoktext" : "Egy??bb kieg??sz??t??k, csizm??k, cip??k,keszty??k, sisakok. Minden ipar??gra.",
        /**/
        "hirek" : "H??rek",
        "hirektext" : "??jdons??gok a Linditex ter??let??n",
        "koltozes" : "K??lt??z??s ??j helyis??gbe.",
        "tervezesruha" : "Gyakorl?? ruha megtervez??se.",
        "automatizalas" : "Varr??si automatiz??l??s.",
        "hirre" : "H??rre",
        "hirre1" : "H??rek",
        "hirre2" : "H??rek",
        "koltozesaltext" : "??j helyis??g, ??jabb lehet??s??gek.",
        "tervezesruhaaltext" : "??j term??k az ??nk??ntes t??zolt??knak.",
        "automatizalasaltext" : "Megpr??b??lunk ??j szintre l??pni.",
        /**/
        "kapcsolatoklablec" : "Kapcsolatok",
        "kapcsolatoklablecalcim" : "Sz??vesen seg??t??nk ??nnek",
        "szekhely" : "A c??g sz??khelye",
        "szeretnetalalkozni" : "Szeretne vel??nk szem??lyesen is besz??lni?",
        "ittmegtalal" : "Itt megtal??l minket:",
        "postacim" : "Postai c??m??nk:",
        "telefonoselerh" : "Telefonos el??rhet??s??gek:",
        "nyitvatartas" : "A c??g nyitvatart??sa:",
        "hetfopent" : "H??tf??-P??ntek: 7:00-15:30",
        "szomvas" : "Szombat-Vas??rnap: Z??rva",
        "hakerdes" : "Ha k??rd??se lenne, k??rem ??rjon nek??nk",
        "bekuldes" : "Bek??ld??s",
        "teljesnev" : "Teljes neve",
        "email" : "E-mail",
        "cegnev" : "C??gn??v",
        "telefonszam" : "Telefonsz??ma",
        "uzenet" : "??zenete",
        /**/
        "adatvedelem" : "Adatv??delem",
        "sutik" : "S??tik",
        /*  A regisztr??ci??s r??sz  */
        "regisztraljon" : "Regisztr??ljon be m??g ma.",
        "beregisztralni" : "Beregiszt??lni",
        "milyenelonyok" : "Hogy milyen el??ny??kh??z juthat?",
        "beallithatja" : "Be??ll??thatja a rakt??rk??szlet mennyis??g??t",
        "figyelemmel" : "Figyelemmel k??vetheti rakt??rk??szlet??t",
        "idoben" : "Id??ben ??rtis??thet, hogyha szeretn?? rakt??rk??szlet??t felt??lteni",
        "gyors" : "Gyors kisz??ll??t??s",
        "kozossegunk" : "Legyen a k??z??ss??g??nk r??sze.",
        "regsiztrkapcsolat" : "Kapcsolatok",
        "postai" : "Postai c??m:",
        "telefonos" : "Telefonos el??rhet??s??gek:",
        "teszt" : "jjfjfjfjf",
    },
    "szlovak" : 
    {
        "fooldal": "Hlavn?? str??nka",
        "rolunk": "O n??s",
        "szolg??ltatas": "Slu??by",
        "termekek" : "Produkty",
        "blog" : "Blog",
        "kapcsolatok" : "Kontakty",
        "bejelentkezes" : "Prihl??senie",
        "regisztracio" : "Registr??cia",
        "felhasznalonev" : "Pou????vate??sk?? meno",
        "jelszo" : "Heslo",
        /**/
        "tuzoltoruha" : "Hasi??sk?? oble??enie",
        "munkaruha" : "Pracovn?? oble??enie",
        "orvosiruha" : "Lek??rsk?? oble??enie",
        "tozoltoleiras" : "??a??k?? a ??ahk?? z??sahov?? oble??enie",
        "munkaleiras" : "Pracovn?? oble??enie pre r??zn?? odvetvie",
        "orvosleiras" : "Sestersk?? oble??enie, nohavice, bundy",
        "termekekre" : "Produkty",
        "termekekre1" : "Produkty",
        "termekekre2" : "Produkty",
        /**/
        "rolunkresz" : "O n??s",
        "tudjonmeg" : "Dozve??te si viac o n??s",
        "rolunktext1" : "Na??a firma Linditex s.r.o. bola zalo??en?? v roku 2005 v dedine Vozokany na Slovensku, najprv pod menom Lindi, od roku 2018 funguje pod n??zvom Linditex s.r.o. Na za??iatku na??a firma sa venovala ??itiu doj??ensk??ho oble??enia, ale kv??li ekonomickej kr??ze v roku 2007 a kv??li nedostatku dopytu na trhu sme museli zmeni?? n???? profil a za????nali sme so ??it??m pracovn??ho oble??enia. Na??a prv?? v??robn?? hala bola 120 m2 ve??k?? miestnos??, odkia?? sme sa sna??ili doda?? na??im klientom ??o najvy????iu kvalitu.  ",           
        "rolunktext2" : "V roku 2017 sa k firme pripojili synovia zakladate??ov a vedenie firmy sa presmerovala na nov?? koncept. Chceli sme sl????i?? v??????ej klientele, preto sme si uvedomili, ??e potrebujeme v??????iu v??robn?? halu. V tom istom roku sa na??a spolo??nos??  pres??dlila do novej 400 m2-vej budovy. Vyv??jali sme viac nov??ch produktov pod na??ou ochrannou zn??mkou. Na??im z??merom je vytvori?? e??te viac kvalitn??ch ??iat pre na??ich bud??cich z??kazn??kov.    ",
        "tovabb" : "??alej",
        /**/
        "ismerjek" : "Spoznajte na??e SLU??BY",
        "bizunk" : "D??fame, ??e u n??s n??jdete svoju kalkul??ciu.",
        "egyedi" : "Vlastn?? strih",
        "metararu" : "Text??lie",
        "munkavedelem" : "Ochrana pr??ce",
        "egyeditext" : "V na??ej firme vieme vytvori?? jedine??n?? strihy a vyhotovi?? r??zne tvary strihov od najmen????ch po najv????ie. ",
        "meterarutext" : "Po mnohoro??n??ch sk??senostiach sa n??m podarilo n??js?? najlep????ch dod??vate??ov textilu. Vieme vytvori?? r??zne osobn?? predstavy ??i normy v ??irokej palete zimn??ch kab??tov, pracovn??ho oble??enia a po??iarneho odevu.",
        "munkavedelemtext" : "Ak potrebujete kompletn?? pracovn?? v??bavu ako rukavice, top??nky, helmy, u n??s si m????ete v??etko zaobstara?? pod jednou strechou, nev??hajte n??s kontaktova??. ",
        "statisztika" : "Na??a kr??tka ??TATISTIKA",
        "statisztikatext" : "Sme presved??en??, ??e po zhliadnut?? ????sel si n??s vyberiete.",
        "tapasztalat" : "Sk??senosti",
        "munkaero" : "Pracovn?? sila",
        "kliens" : "klientov",
        "termek" : "Produkt",
        /**/
        "termekkepek" : "Produkty",
        "kattintsonkepek" : "Kliknite na po??adovan?? produkt a pozrite si n???? v??ber.",
        "tuzoltoruhak" : "Hasi??sk?? oble??enie",
        "hivisruha" : "HI-VIS",
        "teliruha" : "Zimn?? oble??enie",
        "hegesztesruha" : "Zv??ra??i",
        "orvosiruhak" : "Lek??rov",
        "antisztatikusruha" : "Antistatick??",
        "kiegeszitok" : "Pr??slu??enstvo.",
        "tuzoltoruhatext" : "Hasi??sk?? oble??enie, ??a??k??, ??ahk?? nasadenie.Cvi??n?? oble??enie, ostatn?? doplnky.",
        "hivisruhatext" : "Oble??enie s vysokou vidite??nos??ou, nohavice, bundy, vesty, in?? doplnky.",
        "teliruhatext" : "Zimn?? produkty, zimn?? bundy, nohavice. R??zne materi??ly, kraj????rske vzory.",
        "hegesztestext" : "Zv??ra??sk?? v??robky, bundy, nohavice. Pod??a v??etk??ch dan??ch noriem.",
        "orvosiruhatext" : "Zdravotn?? oble??enie, hygienick?? nohavice, pl????te. Nohavi??ky na doj??enie, pl????te.",
        "antisztatikustext" : "Antistatick?? bundy, nohavice, CleanRoom. V s??lade so v??etk??mi normami.",
        "kiegeszitoktext" : "Ostatn?? doplnky, ??i??my, top??nky, rukavice, prilby. Pre v??etky odvetvia.",
        /**/
        "hirek" : "Noviny",
        "hirektext" : "Novinky v Linditexe",
        "koltozes" : "S??ahovanie do novej miestnosti.",
        "tervezesruha" : "Navrhovanie cvi??ebn??ch odevov.",
        "automatizalas" : "Automatiz??cia ??itia.",
        "hirre" : "??alej",
        "hirre1" : "??alej",
        "hirre2" : "??alej",
        "koltozesaltext" : "Nov?? miestnos??, nov?? mo??nosti.",
        "tervezesruhaaltext" : "Nov?? produkt pre dobrovo??n??ch hasi??ov.",
        "automatizalasaltext" : "Sna????me sa dosiahnu?? nov?? ??rove??.",
         /**/
        "kapcsolatoklablec" : "Kontakty",
        "kapcsolatoklablecalcim" : "Radi v??m pom????eme",
        "szekhely" : "S??dlo spolo??nosti",
        "szeretnetalalkozni" : "Chceli by ste sa s nami porozpr??va?? osobne?",
        "ittmegtalal" : "N??jdete n??s tu:",
        "postacim" : "Na??a po??tov?? adresa:",
        "telefonoselerh" : "Telefonick?? kontaktn?? ??daje:",
        "nyitvatartas" : "Otv??racie hodiny spolo??nosti:",
        "hetfopent" : "Pondelok a?? piatok: 7:00 - 15:30",
        "szomvas" : "Sobota-nede??a: zatvoren??",
        "hakerdes" : "Ak m??te nejak?? ot??zky, nap????te n??m",
        "bekuldes" : "Odosla??",
        "teljesnev" : "Cel?? meno",
        "email" : "Email",
        "cegnev" : "Meno firmy",
        "telefonszam" : "Va??e Tel.????slo",
        "uzenet" : "Va??a spr??va",
        /**/
        "adatvedelem" : "Ochrana d??t",
        "sutik" : "Cookies",
        /*  A regisztr??ci??s r??sz  */
        "regisztraljon" : "Zaregistrujte sa e??te dnes.",
        "beregisztralni" : "Zaregistrova?? sa",
        "milyenelonyok" : "Ak?? v??hody m????ete z??ska???",
        "beallithatja" : "M????ete nastavi?? mno??stvo na sklade",
        "figyelemmel" : "M????ete sledova?? svoj invent??r",
        "idoben" : "M????ete v??as ozn??mi??, ??e chcete doplni?? z??soby",
        "gyors" : "R??chla don????ka",
        "kozossegunk" : "Sta??te sa s????as??ou na??ej komunity.",
        "regsiztrkapcsolat" : "Vz??ahy",
        "postai" : "Po??tov?? adresa:",
        "telefonos" : "Telefonick?? kontaktn?? ??daje:",
        "teszt" : "jjfjfjfjf",
    },
    "nemet" : 
    {
        "fooldal": "Hauptseite",
        "rolunk": "??ber uns",
        "szolg??ltatas": "Dienstleistungen",
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
         "munkaleiras" : "Arbeitskleidung f??r verschiedene Branchen",
         "orvosleiras" : "Stillkleidung, Hosen, Jacken",
         "termekekre" : "Produkte",
         "termekekre1" : "Produkte",
         "termekekre2" : "Produkte",
         /**/
        "rolunkresz" : "??ber uns",
        "tudjonmeg" : "lerne mehr ??ber uns",
        "rolunktext1" : "Linditex GmbH wurde im 2005 in der Slowakei, im Dorf Vozokany gegr??ndet. Am Anfang die Firma trug den Namen Lindi, nur ab 2018 wurde sie als Linditex Gmbh benennt. Die Firma hat sich zuerst mit dem N??hen von Babybekleidung besch??ftigt, aber wegen der fehlenden Marktnachfrage und der ??konomischen Weltkrisis im 2007 mussten wir eine neue Konzeption herausfinden und begonnen wir mit dem N??hen der Arbeitsbekleidungen. Unsere Werkstatt befand sich am Anfang in einem Raum mit Gr????e von 120m2, wovon wir die beste Qualit??t f??r unseren Kunden bieten versuchten.   ",           
        "rolunktext2" : "Im 2017 sind auch die S??hne des Begr??nders in die Firma hineingetreten, und die Leitung hat eine neue Konzeption angenommen. Wir wollten einen gr????eren Kundenkreis bedienen. Die neue Konzeption schien erfolgreich zu sein, die zu einer neuen Erkenntnis kam, dass wir gr????eren Produktionsraum brauchten. Im 2017 hat sich die Firma in einen 400m2 gro??en Produktionsraum umgezogen, Wir haben auch mehreren neuen Produkten unter unserer Schutzmarke entwickelt. Wir m??chten mit dieser neuen Konzeption in der Zukunft noch weitere Mengen von qualit??tsvollen Bekleidungen f??r unseren zuk??nftigen Kunden anfertigen. ",
        "tovabb" : "Weiter",
        /**/
        "ismerjek" : "Lernen Sie unsere LEISTUNGEN kennen",
        "bizunk" : "Wir hoffen, dass Sie Ihre Kalkulation bei uns finden.",
        "egyedi" : "Eigener Schnitt",
        "metararu" : "Textilien",
        "munkavedelem" : "Arbeitsschutz",
        "egyeditext" : "Wir sind f??hig in unserer Firma einzigartige Schnittmuster anfertigen, so k??nnen wir verschiedenen Schnittformen schneiden genauso wie in einer kleineren oder in gr????eren Mengen auch. ",
        "meterarutext" : "Nach mehrj??hrigen Erfahrungen konnten wir die besten Materiallieferanten erkennen. Wir sind f??hig verschiedenen Normen- oder personellen Vorstellungen anfertigen, von Wintermantel bis Feuerwehrausr??stung auf einer breiten Palette.  ",
        "munkavedelemtext" : "Falls, dass Sie eine ganze Arbeitsausr??stung brauchen ??? Handschuhen, Schuhen, Helmen ??? kein Problem von unserer Seite, bei uns k??nnen Sie alle St??cke unter einem Dach erhalten, kontaktieren Sie uns. ",
        "statisztika" : "Unsere Kurzstatistik",
        "statisztikatext" : "Wir sind davon ??berzeugt, dass Sie sich aufgrund der Zahlen f??r uns entscheiden werden.",
        "tapasztalat" : "Erfahrung",
        "munkaero" : "Belegschaft",
        "kliens" : "Kunden",
        "termek" : "Produkt",
        /**/
        "termekkepek" : "Produkte",
        "kattintsonkepek" : "Klicken Sie auf das gew??nschte Produkt, um unsere Auswahl anzuzeigen.",
        "tuzoltoruhak" : "Feuerwehrkleidung",
        "hivisruha" : "HI-VIS",
        "teliruha" : "Winterkleidung",
        "hegesztesruha" : "Schwei??er",
        "orvosiruhak" : "??rzte",
        "antisztatikusruha" : "Antistatisch",
        "kiegeszitok" : "Zubeh??r.",
        "tuzoltoruhatext" : "Feuerwehrbekleidung, schwerer, leichter Einsatz Trainingsbekleidung, sonstiges Zubeh??r.",
        "hivisruhatext" : "Warnschutzkleidung, Hosen, Jacken, Westen, andere Accessoires.",
        "teliruhatext" : "Winterprodukte, Winterjacken, Hosen. Verschiedene Materialien, Schnittmuster.",
        "hegesztestext" : "Schwei??produkte, Jacken, Hosen. Nach allen vorgegebenen Standards.",
        "orvosiruhatext" : "Medizinische Kleidung, Hygienehosen, M??ntel. Stillhosen, M??ntel.",
        "antisztatikustext" : "Antistatische Jacken, Hosen, CleanRoom. In ??bereinstimmung mit allen Standards.",
        "kiegeszitoktext" : "Sonstiges Zubeh??r, Stiefel, Schuhe, Handschuhe, Helme. F??r alle Branchen.",
        /**/
        "hirek" : "Nachrichten",
        "hirektext" : "Neuigkeiten bei Linditex",
        "koltozes" : "Umzug in einen neuen Raum.",
        "tervezesruha" : "??bungskleidung gestalten.",
        "automatizalas" : "N??hautomation.",
        "hirre" : "Weiter",
        "hirre1" : "Weiter",
        "hirre2" : "Weiter",
        "koltozesaltext" : "Neuer Raum, neue M??glichkeiten.",
        "tervezesruhaaltext" : "Ein neues Produkt f??r freiwillige Feuerwehrleute.",
        "automatizalasaltext" : "Wir versuchen, ein neues Level zu erreichen.",
        /**/
        "kapcsolatoklablec" : "Kontakte",
        "kapcsolatoklablecalcim" : "Wir helfen Ihnen gerne weiter",
        "szekhely" : "Hauptb??ro",
        "szeretnetalalkozni" : "Sie m??chten pers??nlich mit uns sprechen?",
        "ittmegtalal" : "Sie finden uns hier:",
        "postacim" : "Unsere Postanschrift:",
        "telefonoselerh" : "Telefonische Kontaktdaten:",
        "nyitvatartas" : "??ffnungszeiten des Unternehmens:",
        "hetfopent" : "Montag bis Freitag: 7:00 - 15:30 Uhr",
        "szomvas" : "Samstag-Sonntag: geschlossen",
        "hakerdes" : "Wenn Sie Fragen haben, schreiben Sie uns bitte",
        "bekuldes" : "Senden",
        "teljesnev" : "Vollst??ndiger Name",
        "email" : "Email",
        "cegnev" : "Name der Firma",
        "telefonszam" : "Deine Telefonnummer",
        "uzenet" : "Ihre Nachricht",
        /**/
        "adatvedelem" : "Datenschutz",
        "sutik" : "Cookies",
        /*  A regisztr??ci??s r??sz  */
        "regisztraljon" : "Registrieren Sie sich heute.",
        "beregisztralni" : "Einloggen",
        "milyenelonyok" : "Welche Vorteile k??nnen Sie erhalten?",
        "beallithatja" : "Sie k??nnen die Menge auf Lager einstellen",
        "figyelemmel" : "Sie k??nnen Ihr Inventar verfolgen",
        "idoben" : "Sie k??nnen rechtzeitig ank??ndigen, dass Sie nachf??llen m??chten",
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
        "szolg??ltatas": "Services",
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
        "rolunktext2" : "In 2017 the sons of the establishers had joined to the management of the company,and they aimed new goals. They wanted to serve a larger clientele. They were succesful and within a short time they had realized that they needed a new, bigger production hall. In 2017 the company moved to a new 400 m2 large building. We have created from that time many new products under our brand???s name. We would like to continue this way and produce even more high quality clothing. ",
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
        /*  A regisztr??ci??s r??sz  */
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