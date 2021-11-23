import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataGender, filterDataSpecies, filterDataStatus, sortAZData, sortZAData } from './data.js';

//-----------------VARIABLES-----------------
const bannerYFilas = document.querySelector('#bannerYFilas');
let verTodos = document.querySelector("#verTodos");
let botonVerTodos = document.getElementById('botonVerTodos');
const personajesFiltrados = document.querySelector('#personajesFiltrados');
let card;

//-----------------FUNCIONES-----------------
//Mostrar cards
function mostrarCards(personajesCards) {
    personajesCards.forEach((personaje) => {
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
    })
};

//Al seleccionar All
botonVerTodos.addEventListener('click', mostrarVerTodos);
function mostrarVerTodos() {
    bannerYFilas.remove();
    mostrarCards(data.results);
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

        mostrarCards(filtrarGender);
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
            filtrarSpecies = filterDataSpecies(localData, 'unknown');
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

        mostrarCards(filtrarSpecies);
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
    return (filtrarStatus)
}

statusSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();

        let statusSeleccionado = this.options[statusSeleccion.selectedIndex];
        console.log(statusSeleccionado.value + ':' + statusSeleccionado.text);

        const filtrarStatus = filtradoPorStatus(statusSeleccionado.value, data);
        personajesFiltrados.innerHTML = '';

        mostrarCards(filtrarStatus);
    });

//Al seleccionar ordenar
function filtradoPorOrden(seleccion, localData) {
    let filtrarOrden;
    switch (seleccion) {
        case 'az':
            filtrarOrden = sortAZData(localData, 'name');
            break;
        case 'za':
            filtrarOrden = sortZAData(localData, 'name');
            break;
        default:
            console.log('default');
            break;
    }
    console.log('filtro aplicado: ', filtrarOrden);
    return (filtrarOrden)


}

ordenarSeleccion.addEventListener('change',
    function () {
        verTodos.remove();
        bannerYFilas.remove();

        let ordenSeleccionado = this.options[ordenarSeleccion.selectedIndex];
        console.log(ordenSeleccionado.value + ':' + ordenSeleccionado.text);

        const filtrarOrden = filtradoPorOrden(ordenSeleccionado.value, data);
        personajesFiltrados.innerHTML = '';

        mostrarCards(filtrarOrden);
    });







/*
const liTemplate = querySelector('#liTemplate');
const clone = liTemplate.content.cloneNode(true);
console.log(clone);

let arrayOrdenado = sortData('name');
console.log(arrayOrdenado);
arrayOrdenado = document.createElement('div');
personajesFiltrados.appendChild(arrayOrdenado);
*/
