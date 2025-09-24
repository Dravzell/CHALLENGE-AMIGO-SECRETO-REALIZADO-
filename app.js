// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreRandom = "";
let listaDeAmigos = [];
let ulLista = document.querySelector("#listaAmigos")



function agregarAmigo() {
    let input = document.querySelector("#amigo").value;
    
    if (input == "") {
        alert("Por favor, inserte nombre");
    } else {

    listaDeAmigos.push(input)
    ulLista.innerHTML += `<li> ${input} </li>`;
    limpiarCaja()
    }

        console.log(input);
        console.log(listaDeAmigos);
}

function sortearAmigo() {
    let sorteoRandom = Math.floor(Math.random()*listaDeAmigos.length);

    nombreRandom = listaDeAmigos[sorteoRandom];
    
    nombreElegido = document.getElementById("resultado");
    nombreElegido.innerHTML = `<li> el amigo secreto sorteado es: ${nombreRandom} </li>`


    ulLista.innerHTML = "";

}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

