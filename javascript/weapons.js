/* -------------------------------------------------------------------------- */
/*                                   Weapons                                  */
/* -------------------------------------------------------------------------- */

const weapons = [{
        id: 0,
        name: "Classic",
        credits: "0",
        img: "../img/Weapons/classic.jpg",
        img2: "../img/Weapons/classic.dmg.jpg",
        description: "El disparo principal realiza disparos precisos al estar quieto y tiene un modo de disparo alternativo para encuentros cercanos.",
        estilo: "pistola"
    },
    {
        id: 1,
        name: "Shorty",
        credits: "150",
        img: "../img/Weapons/shorty.jpg",
        img2: "../img/Weapons/shorty.dmg.jpg",
        description: "Una escopeta de cañón corto y ágil; letal a corta distancia, pero solo puede disparar dos veces antes de tener que recargarla. Se combina bien con las armas de largo alcance.",
        estilo: "pistola"
    },
    {
        id: 2,
        name: "Frenzy",
        credits: "450",
        img: "../img/Weapons/frenzy.jpg",
        img2: "../img/Weapons/frenzy.dmg.jpg",
        description: "Ametralladora ligera que destaca al disparar en movimiento. Su alta velocidad de disparo puede llegar a ser difícil de controlar, así que prueba ráfagas cortas a media distancia.",
        estilo: "pistola"
    },
    {
        id: 3,
        name: "Ghost",
        credits: "500",
        img: "../img/Weapons/ghost.jpg",
        img2: "../img/Weapons/ghost.dmg.jpg",
        description: "La Ghost es precisa y tiene un gran cargador en caso de que falles. Los objetivos distantes requieren una tasa de fuego controlada. Presiona rápidamente el gatillo cuando veas lo blanco de sus ojos.",
        estilo: "pistola"
    },
    {
        id: 4,
        name: "Sheriff",
        credits: "800",
        img: "../img/Weapons/sheriff.jpg",
        img2: "../img/Weapons/sheriff.dmg.jpg",
        description: "Sus balas de alto impacto tienen mucho retroceso y se necesitan muchas agallas para dominarlas.",
        estilo: "pistola"
    },
    {
        id: 5,
        name: "Stinger",
        credits: "950",
        img: "../img/Weapons/stinger.jpg",
        img2: "../img/Weapons/stinger.dmg.jpg",
        description: "Este subfusil tiene mayor potencia a corta y larga distancia que los demás, pero a costa de velocidad de disparo y movilidad.",
        estilo: "subfusil"
    },
    {
        id: 6,
        name: "Spectre",
        credits: "1.600",
        img: "../img/Weapons/spectre.jpg",
        img2: "../img/Weapons/spectre.dmg.jpg",
        description: "Un arma todoterreno con gran equilibrio de daño, velocidad de disparo y precisión, tanto a corta como larga distancia.",
        estilo: "subfusil"
    },
    {
        id: 7,
        name: "Bucky",
        credits: "1.600",
        img: "../img/Weapons/bucky.jpg",
        img2: "../img/Weapons/bucky.dmg.jpg",
        description: "Pesada, pero estable. El disparo principal de la Bucky es para mantener las esquinas cerradas o disparar a corta distancia. El disparo secundario sirve para los objetivos a medio alcance.",
        estilo: "escopeta"
    },
    {
        id: 8,
        name: "Judge",
        credits: "1.850",
        img: "../img/Weapons/judge.jpg",
        img2: "../img/Weapons/judge.dmg.jpg",
        description: "Un arma todoterreno con gran equilibrio de daño, velocidad de disparo y precisión, tanto a corta como larga distancia.",
        estilo: "escopeta"
    },
    {
        id: 9,
        name: "Bulldog",
        credits: "2.050",
        img: "../img/Weapons/bulldog.jpg",
        img2: "../img/Weapons/bulldog.dmg.jpg",
        description: "Es una bestia a la hora de intercambiar fuego. El disparo alternativo te permite utilizar una mira y lanzar ráfagas cortas y precisas a todo aquel que intente cazarte a media o larga distancia.",
        estilo: "rifle"
    },
    {
        id: 10,
        name: "Guardian",
        credits: "2.250",
        img: "../img/Weapons/guardian.jpg",
        img2: "../img/Weapons/guardian.dmg.jpg",
        description: "Es el rifle para los tiradores entrenados. Más pesado y menos móvil en comparación con otros rifles, pero más preciso y potente. Comienza la cacería de tus enemigos a media y larga distancia.",
        estilo: "rifle"
    },
    {
        id: 11,
        name: "Phantom",
        credits: "2.900",
        img: "../img/Weapons/phantom.jpg",
        img2: "../img/Weapons/phantom.dmg.jpg",
        description: "Es el rifle para los tiradores entrenados. Más pesado y menos móvil en comparación con otros rifles, pero más preciso y potente. Comienza la cacería de tus enemigos a media y larga distancia.",
        estilo: "rifle"
    },
    {
        id: 12,
        name: "Vandal",
        credits: "2.900",
        img: "../img/Weapons/vandal.jpg",
        img2: "../img/Weapons/vandal.dmg.jpg",
        description: "Es el rifle para los tiradores entrenados. Más pesado y menos móvil en comparación con otros rifles, pero más preciso y potente. Comienza la cacería de tus enemigos a media y larga distancia.",
        estilo: "rifle"
    },
    {
        id: 13,
        name: "Marshal",
        credits: "950",
        img: "../img/Weapons/marshal.jpg",
        img2: "../img/Weapons/marshal.dmg.jpg",
        description: "Un ágil rifle de palanca con un solo zoom que puede mantener a raya a los enemigos. Una velocidad de disparo lenta significa que tienes que dar en el blanco o quedarás expuesto a los ataques.",
        estilo: "francotirador"
    },
    {
        id: 14,
        name: "Operator",
        credits: "4.700",
        img: "../img/Weapons/operator.jpg",
        img2: "../img/Weapons/operator.dmg.jpg",
        description: "Un rifle de francotirador con doble zoom de alta potencia. Extremadamente inmóvil, pero sus poderosas balas podrían devastar a un equipo con un solo disparo.",
        estilo: "francotirador"
    },
    {
        id: 15,
        name: "Ares",
        credits: "1.550",
        img: "../img/Weapons/ares.jpg",
        img2: "../img/Weapons/ares.dmg.jpg",
        description: "El enorme cargador del Ares significa que sobresale en el fuego continuo e inflige daño masivo a grupos de enemigos.",
        estilo: "ametralladora"
    },
    {
        id: 16,
        name: "Odin",
        credits: "3.200",
        img: "../img/Weapons/odin.jpg",
        img2: "../img/Weapons/odin.dmg.jpg",
        description: "Disparos continuos de alto daño con una gran estabilidad. Pulveriza a los enemigos a corta distancia y usa el disparo alternativo para convertirte en una torreta viviente.",
        estilo: "ametralladora"
    }
];

/* ------------------------------- Función DOM ------------------------------ */

const here = document.querySelector("#weapons");

function createDOM(e) {
    e.forEach(element => {
        const list = document.createElement("div");
        list.classList.add("box");
        list.innerHTML = `<div><h2>${element.name}</h2>
    <h3> Creditos: ${element.credits}</h2>
    <img src="${element.img}" alt="Arma ${element.name}"></div>
    <div><img src="${element.img2}" alt="Daño de arma ${element.name}"></div>`;
        here.appendChild(list)
    })
};

createDOM(weapons);

/* -------------------------- Función Click Buttons ------------------------- */

const btns = document.querySelectorAll(".btns")
console.log(btns);
let filtrado = [];


btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        here.innerHTML = "";
        if (e.target.id == "pistola") {
            filtrado = [];
            filtrarArmas("pistola");
            here.innerHTML = "";
            createDOM(filtrado)
        } else if (e.target.id == "subfusil") {
            here.innerHTML = "";
            filtrado = [];
            filtrarArmas("subfusil")
            createDOM(filtrado)
        } else if (e.target.id == "escopeta") {
            here.innerHTML = "";
            filtrado = [];
            filtrarArmas("escopeta")
            createDOM(filtrado)
        } else if (e.target.id == "rifle") {
            here.innerHTML = "";
            filtrado = [];
            filtrarArmas("rifle")
            createDOM(filtrado)
        } else if (e.target.id == "francotirador") {
            here.innerHTML = "";
            filtrado = [];
            filtrarArmas("francotirador")
            createDOM(filtrado)
        } else if (e.target.id == "ametralladora") {
            here.innerHTML = "";
            filtrado = [];
            filtrarArmas("ametralladora")
            createDOM(filtrado)
        } else {
            createDOM(weapons);
        }
    })
});

/* ------------------------------ Función Push ------------------------------ */

function filtrarArmas(e) {
    weapons.forEach(item => {
        if (item.estilo == e) {
            filtrado.push(item)
        }
    })
};