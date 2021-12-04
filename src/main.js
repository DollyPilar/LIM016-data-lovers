import data from "./data/rickandmorty/rickandmorty.js";
import {
  filterDataGender,
  filterDataSpecies,
  filterDataStatus,
  sortAZData,
  sortZAData,
  filterSearchName,
} from "./data.js";

//-----------------VARIABLES-----------------
let rickAndMortyPersonajes = data.results;
const logoInicio = document.querySelector("#logoInicio");
const banner = document.querySelector("#banner");
let seleccionVerTodos = document.getElementById("seleccionVerTodos");

let genderSeleccion = document.getElementById("genderSeleccion");
let speciesSeleccion = document.getElementById("speciesSeleccion");
let statusSeleccion = document.getElementById("statusSeleccion");
let ordenarSeleccion = document.getElementById("ordenarSeleccion");

const personajesFiltrados = document.querySelector("#personajesFiltrados");
let card;
//input busqueda
const inputBusquedaName = document.getElementById("inputBusquedaName");

//-----------------FUNCIONES-----------------

//Mostrar cards
function mostrarCards(personajesCards) {
  personajesCards.forEach((personaje) => {
    card = document.createElement("div");
    const personajeHTML = document.createElement("pre");
    const { image, name, status, species, type, gender, origin, location } =
      personaje;
    personajeHTML.textContent = `

        Name: ${name}
        Status: ${status}
        Species: ${species}
        Type: ${type}
        Gender: ${gender}
        Origin: ${origin.name}
        Location: ${location.name}
        `;

    const imagenTarjeta = document.createElement("img");
    imagenTarjeta.src = image;

    //insertar en html
    personajesFiltrados.appendChild(card).className = "card";
    card.appendChild(imagenTarjeta).className = "imgCard";
    card.appendChild(personajeHTML);
  });
}

//Al seleccionar All
seleccionVerTodos.addEventListener("click", mostrarVerTodos);
function mostrarVerTodos() {
  personajesFiltrados.innerHTML = "";
  banner.style.display = "none";
  mostrarCards(rickAndMortyPersonajes);
}

//Al seleccionar gender

genderSeleccion.addEventListener("change", function () {
  banner.style.display = "none";
  let genderSeleccionado = this.options[genderSeleccion.selectedIndex];
  //console.log(genderSeleccionado.value + ':' + genderSeleccionado.text);

  const filtrarGender = filterDataGender(data, genderSeleccionado.value);
  personajesFiltrados.innerHTML = "";

  mostrarCards(filtrarGender);
});

//Al seleccionar species
function filtradoPorSpecies(seleccion, localData) {
  let filtrarSpecies = filterDataSpecies(localData, seleccion);
  //console.log('filtro aplicado: ', filtrarSpecies);
  return filtrarSpecies;
}

speciesSeleccion.addEventListener("change", function () {
  banner.style.display = "none";
  let speciesSeleccionado = this.options[speciesSeleccion.selectedIndex];
  //console.log(speciesSeleccionado.value + ':' + speciesSeleccionado.text);

  const filtrarSpecies = filtradoPorSpecies(speciesSeleccionado.value, data);
  personajesFiltrados.innerHTML = "";

  mostrarCards(filtrarSpecies);
});

//Al seleccionar status
function filtradoPorStatus(seleccion, localData) {
  let filtrarStatus = filterDataStatus(localData, seleccion);
  //console.log('filtro aplicado: ', filtrarStatus);
  return filtrarStatus;
}
statusSeleccion.addEventListener("change", function () {
  banner.style.display = "none";

  let statusSeleccionado = this.options[statusSeleccion.selectedIndex];
  //console.log(statusSeleccionado.value + ':' + statusSeleccionado.text);

  const filtrarStatus = filtradoPorStatus(statusSeleccionado.value, data);
  personajesFiltrados.innerHTML = "";

  mostrarCards(filtrarStatus);
});

//Al seleccionar ordenar
function filtradoPorOrden(seleccion, localData) {
  let filtrarOrden;
  switch (seleccion) {
    case "az":
      filtrarOrden = sortAZData(localData, "name");
      break;
    case "za":
      filtrarOrden = sortZAData(localData, "name");
      break;
    default:
      //console.log('default');
      break;
  }
  //console.log('filtro aplicado: ', filtrarOrden);
  return filtrarOrden;
}

ordenarSeleccion.addEventListener("change", function () {
  banner.style.display = "none";

  let ordenSeleccionado = this.options[ordenarSeleccion.selectedIndex];
  //console.log(ordenSeleccionado.value + ':' + ordenSeleccionado.text);

  const filtrarOrden = filtradoPorOrden(ordenSeleccionado.value, data);
  personajesFiltrados.innerHTML = "";

  mostrarCards(filtrarOrden);
});

//filtrar por busqueda de nombre
inputBusquedaName.addEventListener("keyup", (e) => {
  banner.style.display = "none";
  personajesFiltrados.innerHTML = "";
  const nuevo = filterSearchName(rickAndMortyPersonajes, e);
  mostrarCards(nuevo);
});

//Redirigir a la vista de Inicio
logoInicio.addEventListener("click", function () {
  personajesFiltrados.innerHTML = "";
  banner.style.display = "block";
});
