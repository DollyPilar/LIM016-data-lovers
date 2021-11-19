import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataGender } from './data.js';

//console.log(data.results);

//VARIABLES
let personajes = data.results;
const bannerYFilas = document.querySelector('#bannerYFilas');
let verTodos = document.querySelector("#verTodos");
let botonInicio = document.querySelector('#botonInicio');
let botonVerTodos = document.querySelector('botonVerTodos');
const gender = document.querySelector('#gender');
let genderSeleccion = document.getElementById('genderSeleccion');
let filtrarGender;
let card;
//const botonGenero = document.querySelector('#botonGenero');

//EVENTOS

/*
document.addEventListener("DOMContentLoaded", () => {
    mostrarPersonajes();
})
*/
botonVerTodos = document.addEventListener('click' , mostrarVerTodos);
botonInicio = document.addEventListener('click', verInicio);

function verInicio(){
    
}


//FUNCIONES

//Al seleccionar All
function mostrarVerTodos() {
    bannerYFilas.remove();
    personajes.forEach((personaje) => {

        card = document.createElement('div');
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

//Al seleecionar gender
genderSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let genderSeleccionado = this.options[genderSeleccion.selectedIndex];
        console.log(genderSeleccionado.value + ':' + genderSeleccionado.text);
        switch (genderSeleccionado.value) {
            case '001':
                filtrarGender = filterDataGender('Female');
                break;
            case '002':
                filtrarGender = filterDataGender('Male');
                break;
            case '003':
                filtrarGender = filterDataGender('unknown');
                break;
            case '004':
                filtrarGender = filterDataGender('Genderless');
                break;
            default:
                console.log('default');
                break;
        }
        console.log('filtro aplicado: ', filtrarGender);

        filtrarGender.forEach((personaje) => {

            card = document.createElement('div');
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
            gender.appendChild(card).className = 'card';
            card.appendChild(imagenTarjeta);
            card.appendChild(personajeHTML);
        });
    });




