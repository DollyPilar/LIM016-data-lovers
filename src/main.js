import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataGender, filterDataSpecies, filterDataStatus, sortAZData, sortZAData, filterSearchName } from './data.js';

//-----------------VARIABLES-----------------
let rickAndMortyPersonajes = data.results;
const logoInicio = document.querySelector('#logoInicio');
const bannerYFilas = document.querySelector('#bannerYFilas');
let seleccionVerTodos = document.getElementById('seleccionVerTodos');

let genderSeleccion = document.getElementById('genderSeleccion');
let speciesSeleccion = document.getElementById('speciesSeleccion');
let statusSeleccion = document.getElementById('statusSeleccion');
let ordenarSeleccion = document.getElementById('ordenarSeleccion');

const personajesFiltrados = document.querySelector('#personajesFiltrados');
let card;
//input busqueda
const inputBusquedaName = document.getElementById('inputBusquedaName');


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
}

//Al seleccionar All
seleccionVerTodos.addEventListener('click', mostrarVerTodos);
function mostrarVerTodos() {
    bannerYFilas.style.display = "none";
    mostrarCards(rickAndMortyPersonajes);
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

            //console.log('default');
            break;
    }
    //console.log('filtro aplicado: ', filtrarGender);
    return filtrarGender
}

genderSeleccion.addEventListener('change',
    function () {
        bannerYFilas.style.display = "none";
        let genderSeleccionado = this.options[genderSeleccion.selectedIndex];
        //console.log(genderSeleccionado.value + ':' + genderSeleccionado.text);

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
            //console.log('default');
            break;
    }
    //console.log('filtro aplicado: ', filtrarSpecies);
    return filtrarSpecies
}

speciesSeleccion.addEventListener('change',
    function () {
        bannerYFilas.style.display = "none";
        let speciesSeleccionado = this.options[speciesSeleccion.selectedIndex];
        //console.log(speciesSeleccionado.value + ':' + speciesSeleccionado.text);

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
            //console.log('default');
            break;
    }
    //console.log('filtro aplicado: ', filtrarStatus);
    return (filtrarStatus)
}

statusSeleccion.addEventListener('change',
    function () {
        bannerYFilas.style.display = "none";

        let statusSeleccionado = this.options[statusSeleccion.selectedIndex];
        //console.log(statusSeleccionado.value + ':' + statusSeleccionado.text);

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
            //console.log('default');
            break;
    }
    //console.log('filtro aplicado: ', filtrarOrden);
    return (filtrarOrden)


}

ordenarSeleccion.addEventListener('change',
    function () {
        bannerYFilas.style.display = "none";

        let ordenSeleccionado = this.options[ordenarSeleccion.selectedIndex];
        //console.log(ordenSeleccionado.value + ':' + ordenSeleccionado.text);

        const filtrarOrden = filtradoPorOrden(ordenSeleccionado.value, data);
        personajesFiltrados.innerHTML = '';

        mostrarCards(filtrarOrden);
    });

//filtrar por busqueda de nombre
inputBusquedaName.addEventListener('keyup', (e) => {
    bannerYFilas.style.display = "none";
    personajesFiltrados.innerHTML = '';
    const nuevo = filterSearchName(rickAndMortyPersonajes, e)
    mostrarCards(nuevo);
})


//Redirigir a la vista de Inicio
logoInicio.addEventListener('click',
    function () {
        personajesFiltrados.innerHTML = '';
        bannerYFilas.style.display = "block";
    })
