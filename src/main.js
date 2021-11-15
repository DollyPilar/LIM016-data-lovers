import data from "./data/rickandmorty/rickandmorty.js";

//console.log(data.results);

//VARIABLES

let personajes = data.results;
const resultado = document.querySelector("#resultado");
let botonInicio = document.getElementById("botonInicio");
let botonVerTodos = document.getElementById("botonVerTodos");
let botonFemale = document.getElementById("botonFemale");
let botonMale = document.getElementById("botonMale");
let botonUnknown = document.getElementById("botonUnknown");
let botonGenderless = document.getElementById("botonGenderless");

//EVENTOS
document.addEventListener("DOMContentLoaded", () => {
    mostrarPersonajes();
})

//Vistas
botonInicio.addEventListener("click", verInicio);
botonVerTodos.addEventListener("click", verVerTodos);
botonFemale.addEventListener("click", verFemale);
botonMale.addEventListener("click", verMale);
botonUnknown.addEventListener("click", verUnknown);
botonGenderless.addEventListener("click", verGenderless);

//Filtrado
botonFemale.addEventListener("click", dataFiltradaFemale);
botonMale.addEventListener("click", dataFiltradaMale);
botonUnknown.addEventListener("click", dataFiltradaUnknown);
botonGenderless.addEventListener("click", dataFiltradaGenderless);

//FUNCIONES

function mostrarPersonajes() {
    personajes.forEach((personaje) => {

        //utilizando destructuring
        const { name, status, species, type, gender, origin, location} = personaje;
        const personajeHTML = document.createElement("p");
        
        personajeHTML.textContent = `
        Name: ${name} -- Status: ${status} -- Species: ${species} -- Type: ${type} -- Gender: ${gender} -- Origin: ${origin.name} -- Location: ${location.name}
        `;
        //insertar en html
        resultado.appendChild(personajeHTML)
    });
}

//Vistas
function verInicio() {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("genderFemale").style.display = "none";
    document.getElementById("genderMale").style.display = "none";
    document.getElementById("genderUnknown").style.display = "none";
    document.getElementById("genderGenderless").style.display = "none";
}

function verVerTodos() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("verTodos").style.display = "block";
    document.getElementById("genderFemale").style.display = "none";
    document.getElementById("genderMale").style.display = "none";
    document.getElementById("genderUnknown").style.display = "none";
    document.getElementById("genderGenderless").style.display = "none";
}

function verFemale() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("genderFemale").style.display = "block";
    document.getElementById("genderMale").style.display = "none";
    document.getElementById("genderUnknown").style.display = "none";
    document.getElementById("genderGenderless").style.display = "none";
}

function verMale() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("genderFemale").style.display = "none";
    document.getElementById("genderMale").style.display = "block";
    document.getElementById("genderUnknown").style.display = "none";
    document.getElementById("genderGenderless").style.display = "none";
}

function verUnknown() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("genderFemale").style.display = "none";
    document.getElementById("genderMale").style.display = "none";
    document.getElementById("genderUnknown").style.display = "block";
    document.getElementById("genderGenderless").style.display = "none";
}

function verGenderless() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("genderFemale").style.display = "none";
    document.getElementById("genderMale").style.display = "none";
    document.getElementById("genderUnknown").style.display = "none";
    document.getElementById("genderGenderless").style.display = "block";
}

//Filtrado

function dataFiltradaFemale() {
    const arrFemale = personajes.filter(
        (subCategoria) => subCategoria.gender == "Female"
    );
    console.log("array de Female", arrFemale);
}

function dataFiltradaMale() {
    const arrMale = personajes.filter(
        (subCategoria) => subCategoria.gender == "Male"
    );
    console.log("array de Male", arrMale);
}

function dataFiltradaUnknown() {
    const arrUnknown = personajes.filter(
        (subCategoria) => subCategoria.gender == "unknown"
    );
    console.log("array de Unknown", arrUnknown);
}

function dataFiltradaGenderless() {
    const arrGenderless = personajes.filter(
        (subCategoria) => subCategoria.gender == "Genderless"
    );
    console.log("array de Genderless", arrGenderless);
}
