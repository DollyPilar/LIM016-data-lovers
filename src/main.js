import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataGender, filterDataSpecies, filterDataStatus, sortData } from './data.js';

//console.log(data.results);

//VARIABLES
let personajes = data.results;
const bannerYFilas = document.querySelector('#bannerYFilas');
let verTodos = document.querySelector("#verTodos");
let botonVerTodos = document.getElementById('botonVerTodos');
const personajesFiltrados = document.querySelector('#personajesFiltrados');
let filtrarGender;
let filtrarSpecies;
let filtrarStatus;
let ordenar;
let card;

//-----------------EVENTOS-----------------
/*
document.addEventListener("DOMContentLoaded", () => {
    mostrarPersonajes();
})
*/
botonVerTodos.addEventListener('click', mostrarVerTodos);

//-----------------FUNCIONES-----------------
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

//Al seleccionar gender
genderSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let genderSeleccionado = this.options[genderSeleccion.selectedIndex];
        console.log(genderSeleccionado.value + ':' + genderSeleccionado.text);
        switch (genderSeleccionado.value) {
            case 'female':
                filtrarGender = filterDataGender('Female');
                break;
            case 'male':
                filtrarGender = filterDataGender('Male');
                break;
            case 'unknown':
                filtrarGender = filterDataGender('unknown');
                break;
            case 'genderless':
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
            personajesFiltrados.appendChild(card).className = 'card';
            card.appendChild(imagenTarjeta);
            card.appendChild(personajeHTML);
        });
    });


// Al seleccionar species
speciesSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let speciesSeleccionado = this.options[speciesSeleccion.selectedIndex];
        console.log(speciesSeleccionado.value + ':' + speciesSeleccionado.text);
        switch (speciesSeleccionado.value) {
            case 'human':
                filtrarSpecies = filterDataSpecies('Human');
                break;
            case 'alien':
                filtrarSpecies = filterDataSpecies('Alien');
                break;
            case 'humanoid':
                filtrarSpecies = filterDataSpecies('Humanoid');
                break;
            case 'unknownSpecies':
                filtrarSpecies = filterDataSpecies('Unknown');
                break;
            case 'poopybutthole':
                filtrarSpecies = filterDataSpecies('Poopybutthole');
                break;
            case 'mytholog':
                filtrarSpecies = filterDataSpecies('Mytholog');
                break;
            case 'animal':
                filtrarSpecies = filterDataSpecies('Animal');
                break;
            case 'vampire':
                filtrarSpecies = filterDataSpecies('Vampire');
                break;
            case 'robot':
                filtrarSpecies = filterDataSpecies('Robot');
                break;
            case 'cronenberg':
                filtrarSpecies = filterDataSpecies('Cronenberg');
                break;
            case 'disease':
                filtrarSpecies = filterDataSpecies('Disease');
                break;
            case 'parasite':
                filtrarSpecies = filterDataSpecies('Parasite');
                break;
            default:
                console.log('default');
                break;
        }
        console.log('filtro aplicado: ', filtrarSpecies);

        filtrarSpecies.forEach((personaje) => {

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
            personajesFiltrados.appendChild(card).className = 'card';
            card.appendChild(imagenTarjeta);
            card.appendChild(personajeHTML);
        });
    });


//Al seleccionar status
statusSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let statusSeleccionado = this.options[statusSeleccion.selectedIndex];
        console.log(statusSeleccionado.value + ':' + statusSeleccionado.text);
        switch (statusSeleccionado.value) {
            case 'alive':
                filtrarStatus = filterDataStatus('Alive');
                break;
            case 'dead':
                filtrarStatus = filterDataStatus('Dead');
                break;
            default:
                console.log('default');
                break;
        }
        console.log('filtro aplicado: ', filtrarStatus);

        filtrarStatus.forEach((personaje) => {

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
            personajesFiltrados.appendChild(card).className = 'card';
            card.appendChild(imagenTarjeta);
            card.appendChild(personajeHTML);
        });
    });

//Al seleccionar ordenar
ordenarSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let ordenSeleccionado = this.options[ordenSeleccion.selectedIndex];
        console.log(ordenSeleccionado.value + ':' + ordenSeleccionado.text);
        switch (ordenSeleccionado.value) {
            case 'az':
                ordenar = sortData(personajes);
                break;
            case 'za':
                ordenar = sortData(personajes);
                break;
            default:
                console.log('default');
                break;
        }
        console.log('orden aplicado: ', ordenar);
    }
)







/*
const liTemplate = querySelector('#liTemplate');
const clone = liTemplate.content.cloneNode(true);
console.log(clone);

let arrayOrdenado = sortData('name');
console.log(arrayOrdenado);
arrayOrdenado = document.createElement('div');
personajesFiltrados.appendChild(arrayOrdenado);
*/
