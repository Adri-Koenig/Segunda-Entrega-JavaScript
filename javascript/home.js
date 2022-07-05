/* -------------------------------------------------------------------------- */
/*                                  Crosshair                                 */
/* -------------------------------------------------------------------------- */

const usuarios = [{
        id: 1,
        nombre: "TenZ",
        code: "0;s;1;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0;S;c;4;o;1",
        img: "../img/tenz.jpg"
    },
    {
        id: 2,
        nombre: "Scream",
        code: "0;P;c;5;o;1;d;1;z;3;0t;1;0l;1;0o;1;0a;1;0f;0;1b;0",
        img: "../img/scream.jpg"
    },
    {
        id: 3,
        nombre: "Fnatic Boaster",
        code: "0;s;1;P;c;1;o;1;d;1;0l;0;0o;2;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0;S;c;1;o;1",
        img: "../img/boaster.jpg"
    },
    {
        id: 4,
        nombre: "KRU Klaus",
        code: "0;P;c;1;o;1;0t;1;0l;3;0o;1;0a;1;0f;0;1t;0;1l;0;1a;0",
        img: "../img/Klaus.jpg"
    },
    {
        id: 5,
        nombre: "DRX Stax",
        code: "0;P;c;4;h;0;f;0;s;0;0l;4;0o;2;0a;1;0f;0;1b;0",
        img: "../img/stax.jpg"
    }
];

/* -------------------------------- Crear DOM ------------------------------- */

const here = document.querySelector("#here");

for (const datos of usuarios) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="card"
<p>${datos.nombre}</p>
<p>Código:</p>
<input type="text" id="url" class="clipboard" value=${datos.code}>
<img src="${datos.img}" alt="">
</div>`;
    here.append(contenedor);
}