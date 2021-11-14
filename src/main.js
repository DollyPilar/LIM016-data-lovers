import data from "./data/rickandmorty/rickandmorty.js";

console.log(data.results);

let arrayPersonajes = data.results;

let botonInicio = document.getElementById("botonInicio");
let botonVerTodos = document.getElementById("botonVerTodos");
let botonFemale = document.getElementById("botonFemale");
let botonMale = document.getElementById("botonMale");
let botonUnkdown = document.getElementById("botonUnknown");
let botonGenderless = document.getElementById("botonGenderless");

//Mostrando vista de sección Inicio
botonInicio.addEventListener("click", verInicio);
function verInicio() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("verTodos").style.display = "none";
  document.getElementById("genderFemale").style.display = "none";
  document.getElementById("genderMale").style.display = "none";
  document.getElementById("genderUnknown").style.display = "none";
  document.getElementById("genderGenderless").style.display = "none";
}

//Mostrando vista de sección Ver Todos
botonVerTodos.addEventListener("click", verVerTodos);
function verVerTodos() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("verTodos").style.display = "block";
  document.getElementById("genderFemale").style.display = "none";
  document.getElementById("genderMale").style.display = "none";
  document.getElementById("genderUnknown").style.display = "none";
  document.getElementById("genderGenderless").style.display = "none";
}

//Mostrando y ocultando vistas de Gender (sería mejor con if)
botonFemale.addEventListener("click", verFemale);
function verFemale() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("verTodos").style.display = "none";
  document.getElementById("genderFemale").style.display = "block";
  document.getElementById("genderMale").style.display = "none";
  document.getElementById("genderUnknown").style.display = "none";
  document.getElementById("genderGenderless").style.display = "none";
}

botonMale.addEventListener("click", verMale);
function verMale() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("verTodos").style.display = "none";
  document.getElementById("genderFemale").style.display = "none";
  document.getElementById("genderMale").style.display = "block";
  document.getElementById("genderUnknown").style.display = "none";
  document.getElementById("genderGenderless").style.display = "none";
}

botonUnkdown.addEventListener("click", verUnknown);
function verUnknown() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("verTodos").style.display = "none";
  document.getElementById("genderFemale").style.display = "none";
  document.getElementById("genderMale").style.display = "none";
  document.getElementById("genderUnknown").style.display = "block";
  document.getElementById("genderGenderless").style.display = "none";
}

botonGenderless.addEventListener("click", verGenderless);
function verGenderless() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("verTodos").style.display = "none";
  document.getElementById("genderFemale").style.display = "none";
  document.getElementById("genderMale").style.display = "none";
  document.getElementById("genderUnknown").style.display = "none";
  document.getElementById("genderGenderless").style.display = "block";
}

//Filtrando data por subcategoria Female
const arrayFiltrado = arrayPersonajes.filter(function (subCategoria) {
  return subCategoria.gender == "Female";
});

console.log("=====Esta es la data filtrada por female======");
console.log(arrayFiltrado);

//Tomando objeto en la posición 0 del array de subcategoria Female
let primerElemento = arrayFiltrado[0];
console.log(Object.entries(primerElemento));

let { a, b } = { a: 1, b: 2 };
console.log("a:", a, "b:", b);
