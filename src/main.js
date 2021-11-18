import data from "./data/rickandmorty/rickandmorty.js";
import {filterData} from './data.js';

//console.log(data.results);

//VARIABLES
let personajes = data.results;
const bannerYFilas = document.querySelector('#bannerYFilas');
const verTodos = document.querySelector("#verTodos");
//const botonGenero = document.querySelector('#botonGenero');

//EVENTOS
document.addEventListener("DOMContentLoaded", () => {
mostrarPersonajes();
})

function mostrarPersonajes() {
    personajes.forEach((personaje) => {
 
        const card = document.createElement('div');
        const imgCard = document.createElement('div');
        const personajeHTML = document.createElement('pre');
        const { image } = personaje;
        personajeHTML.textContent = `

        Name: ${personaje.name}
        Status: ${personaje.status}
        Species: ${personaje.species}
        Type: ${personaje.type}
        Gender: ${personaje.gender}
        Origin: ${personaje.origin.name}
        Location: ${personaje.location.name};
        `;

        const imagenTarjeta = document.createElement('img');
        imagenTarjeta.src = image;

        //insertar en html
        verTodos.appendChild(card).className = 'card';
        card.appendChild(imagenTarjeta);
        card.appendChild(personajeHTML);
    });
}


let generoSeleccion = document.getElementById('generoSeleccion');

for (let i = 0; i < data.results.length; i++){
    generoSeleccion.add(new Option(data.results[i].gender,i));
}

let botonGenero = document.getElementById('botonGenero');
botonGenero.addEventListener('click',()=>{
    gender = event.target.id;
    let selecciFiltrada = [...data.results.filter(a=>a.gender == gender)];
    console.log(selecciFiltrada);
})


botonGenero.addEventListener("", verGenero);
function verGenero() {
    //console.log(e.target.value);
    let filtroSeleccionado = filterData("Female");
    //console.log(filtroSeleccionado);

    filtroSeleccionado.forEach((personaje) => {

        //utilizando destructuring
        const { image, name, status, species, type, gender, origin, location } = personaje;

        const personajeHTML = document.createElement('pre');
        personajeHTML.textContent = `

        Name: ${name}
        Status: ${status}
        Species: ${species}
        Type: ${type}
        Gender: ${gender}
        Origin: ${origin.name}
        Location: ${location.name};
        `;

        const imagenTarjeta = document.createElement('img');
        imagenTarjeta.src = image;

        //insertar en html

        genderFemale.appendChild(personajeHTML)
        personajeHTML.appendChild(imagenTarjeta)
    });
    verTodos.remove();
    bannerYFilas.remove();
}

function verMale() {
    bannerYFilas.remove();
}

function verUnknown() {
    bannerYFilas.remove();
}

function verGenderless() {
    bannerYFilas.remove();
}

