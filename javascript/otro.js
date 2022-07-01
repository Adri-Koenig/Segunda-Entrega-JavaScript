const weapons = [{
        id: 0,
        name: "Classic",
        credits: "0",
        img: "./img/classic.jpg"
    },
    {
        id: 1,
        name: "Vandal",
        credits: "2.900",
        img: "./img/a8320bf2-vandal-damage.jpg"
    },
    {
        id: 3,
        name: "Phantom",
        credits: "2.900",
        img: "./img/7ed321a4-phantom-damage.jpg.jpg"
    },
    {
        id: 4,
        name: "Operator",
        credits: "0",
        img: "./img/73ec8e0c-operator-damage.jpg"
    }
];

const here = document.querySelector("#weapons");

weapons.forEach(element => {
    const list = document.createElement("ul");
    list.innerHTML = `<li class="abc">Arma:${element.name}</li>`;
    here.appendChild(list)
});

console.log(weapons);

const abc = document.querySelectorAll(".abc");
console.log(abc);