const listaDatos = document.querySelector("#datos")
const pedirDatos = async () => {
    const respuesta = await fetch("https://valorant-api.com/v1/agents");
    let data = await respuesta.json();
    console.log(data);
data.data.forEach(element => {
    console.log(element.displayName);
    const li = document.createElement("div")
    li.innerHTML = `<div class="agente" style="background-image: url(${element.background});">
    <h3>${element.displayName.toUpperCase()}</h3>
    <img src="${element.displayIcon}" alt="">
    <p>${element.description}</p>
    </div><div class="agente2"><img src="${element.fullPortraitV2}" alt=""></div>
    `
    listaDatos.append(li)
});
}

pedirDatos()