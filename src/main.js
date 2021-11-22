import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataGender, filterDataSpecies, filterDataStatus, sortData, sortzData } from './data.js';

//console.log(data.results);

//VARIABLES
let personajes = data.results;
const bannerYFilas = document.querySelector('#bannerYFilas');
let verTodos = document.querySelector("#verTodos");
let botonVerTodos = document.getElementById('botonVerTodos');
const personajesFiltrados = document.querySelector('#personajesFiltrados');
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
function filtradoPorGender(seleccion, localData) {
    let filtrarGender;
    switch (seleccion) {
        case 'female':
            filtrarGender = filterDataGender(localData, 'Female');
            break;
        case 'male':
            filtrarGender = filterDataGender(localData, 'Male');
            break;
        case 'unknown':
            filtrarGender = filterDataGender(localData, 'unknown');
            break;
        case 'genderless':
            filtrarGender = filterDataGender(localData, 'Genderless');
            break;
        default:
            console.log('default');
            break;
    }
    console.log('filtro aplicado: ', filtrarGender);
    return filtrarGender
};

genderSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let genderSeleccionado = this.options[genderSeleccion.selectedIndex];
        console.log(genderSeleccionado.value + ':' + genderSeleccionado.text);

        const filtrarGender = filtradoPorGender(genderSeleccionado.value, data);
        personajesFiltrados.innerHTML = '';

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

//Al seleccionar species
function filtradoPorSpecies(seleccion, localData) {
    let filtrarSpecies;
    switch (seleccion) {
        case 'human':
            filtrarSpecies = filterDataSpecies(localData, 'Human');
            break;
        case 'alien':
            filtrarSpecies = filterDataSpecies(localData, 'Alien');
            break;
        case 'humanoid':
            filtrarSpecies = filterDataSpecies(localData, 'Humanoid');
            break;
        case 'unknownSpecies':
            filtrarSpecies = filterDataSpecies(localData, 'Unknown');
            break;
        case 'poopybutthole':
            filtrarSpecies = filterDataSpecies(localData, 'Poopybutthole');
            break;
        case 'mytholog':
            filtrarSpecies = filterDataSpecies(localData, 'Mytholog');
            break;
        case 'animal':
            filtrarSpecies = filterDataSpecies(localData, 'Animal');
            break;
        case 'vampire':
            filtrarSpecies = filterDataSpecies(localData, 'Vampire');
            break;
        case 'robot':
            filtrarSpecies = filterDataSpecies(localData, 'Robot');
            break;
        case 'cronenberg':
            filtrarSpecies = filterDataSpecies(localData, 'Cronenberg');
            break;
        case 'disease':
            filtrarSpecies = filterDataSpecies(localData, 'Disease');
            break;
        case 'parasite':
            filtrarSpecies = filterDataSpecies(localData, 'Parasite');
            break;
        default:
            console.log('default');
            break;
    }
    console.log('filtro aplicado: ', filtrarSpecies);
    return filtrarSpecies
};

speciesSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();

        let speciesSeleccionado = this.options[speciesSeleccion.selectedIndex];
        console.log(speciesSeleccionado.value + ':' + speciesSeleccionado.text);

        const filtrarSpecies = filtradoPorSpecies(speciesSeleccionado.value, data);
        personajesFiltrados.innerHTML = '';

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
function filtradoPorStatus(seleccion, localData) {
    let filtrarStatus;
    switch (seleccion) {
        case 'alive':
            filtrarStatus = filterDataStatus(localData, 'Alive');
            break;
        case 'dead':
            filtrarStatus = filterDataStatus(localData, 'Dead');
            break;
        default:
            console.log('default');
            break;
    }
    console.log('filtro aplicado: ', filtrarStatus);
}

statusSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();

        let statusSeleccionado = this.options[statusSeleccion.selectedIndex];
        console.log(statusSeleccionado.value + ':' + statusSeleccionado.text);

        const filtrarStatus = filtradoPorStatus(statusSeleccionado.value, data);
        personajesFiltrados.innerHTML = '';

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
        let ordenSeleccionado = this.options[ordenarSeleccion.selectedIndex];
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
        console.log('orden aplicado az: ', ordenar);
    }
)


ordenarSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();
        let ordenSeleccionado = this.options[ordenarSeleccion.selectedIndex];
        console.log(ordenSeleccionado.value + ':' + ordenSeleccionado.text);
        switch (ordenSeleccionado.value) {
            case 'az':
                ordenar = sortzData(personajes);
                break;
            case 'za':
                ordenar = sortzData(personajes);
                break;
            default:
                console.log('default');
                break;
        }
        console.log('orden aplicado za: ', ordenar);
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
