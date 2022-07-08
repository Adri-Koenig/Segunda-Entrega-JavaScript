/* -------------------------------------------------------------------------- */
/*                                   Profile                                  */
/* -------------------------------------------------------------------------- */

/* --------------------- Recupero datos del localStorage -------------------- */

function recuperarLS() {
    let datosLog = JSON.parse(localStorage.getItem("usuarios"));
    return datosLog;
}

const usuariosLS = recuperarLS();
const nameUser = usuariosLS.nombre
const user = {
    id: 0,
    Nombre: nameUser,
    Ranking: "Diamond",
    Wins: 70,
    Losses: 30,
    Winrate: 100 * 0.7 + "%"
}

const {
    Wins: wins,
    Losses: losses,
    Winrate: winrate
} = user

/* --------------------------- Grafico de Winrate --------------------------- */
const data = {
    labels: [
        'Partidas Ganadas',
        'Partidas Perdidas'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [wins, losses],
        backgroundColor: [
            'rgb(0, 100, 255)',
            'rgb(255, 0, 0)',
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

/* ------------------------------- Inner Text ------------------------------- */
let h2 = document.getElementById("profileName"),
winrateText = document.getElementById("winrate")
h2.innerText = nameUser
winrateText.innerText = winrate