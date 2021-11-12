import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

let arrayPersonajes = data.results

let botonVerTodos = document.getElementById("botonVerTodos");
let botonIrFemale = document.getElementById("botonIrFemale");
let botonIrMale = document.getElementById("botonIrMale");
let botonIrUnkdown = document.getElementById("botonIrUnknown");
let botonIrGenderless = document.getElementById("botonIrGenderless");

//Mostrando vista de sección Ver Todos
botonVerTodos.addEventListener("click", verVerTodos);
function verVerTodos(){
    document.getElementById("vistaInicio").style.display = "none";
    document.getElementById("verTodos").style.display = "block";
}

//Mostrando y ocultando vistas de Gender (sería mejor con if)
botonIrFemale.addEventListener("click", verVistaFemale);
function verVistaFemale(){
    document.getElementById("vistaInicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "block";
    document.getElementById("vistaGenderMale").style.display = "none";
    document.getElementById("vistaGenderUnknown").style.display = "none";
    document.getElementById("vistaGenderGenderless").style.display = "none";
}

botonIrMale.addEventListener("click", verVistaMale);
function verVistaMale(){
    document.getElementById("vistaInicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "none";
    document.getElementById("vistaGenderMale").style.display = "block";
    document.getElementById("vistaGenderUnknown").style.display = "none";
    document.getElementById("vistaGenderGenderless").style.display = "none";
}

botonIrUnkdown.addEventListener("click", verVistaUnknown);
function verVistaUnknown(){
    document.getElementById("vistaPrInicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "none";
    document.getElementById("vistaGenderMale").style.display = "none";
    document.getElementById("vistaGenderUnknown").style.display = "block";
    document.getElementById("vistaGenderGenderless").style.display = "none";
}

botonIrGenderless.addEventListener("click", verVistaGenderless);
function verVistaGenderless(){
    document.getElementById("vistaInicio").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "none";
    document.getElementById("vistaGenderMale").style.display = "none";
    document.getElementById("vistaGenderUnknown").style.display = "none";
    document.getElementById("vistaGenderGenderless").style.display = "block";
}

//Filtrando data por subcategoria Female
const arrayFiltrado = arrayPersonajes.filter(function(subCategoria) {
    return subCategoria.gender == "Female"    
});

console.log("=====Esta es la data filtrada por female======");
console.log(arrayFiltrado);

//Tomando objeto en la posición 0 del array de subcategoria Female
let primerElemento = arrayFiltrado[0];
//Monstrando el contenido del objeto
let mostrarPrimerElemento = JSON.stringify(primerElemento);
let introducirStringEnTarjeta = mostrarPrimerElemento.toString();
console.log(introducirStringEnTarjeta);



let {a, b} = {a: 1, b: 2};
console.log('a:', a, 'b:', b)


