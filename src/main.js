import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

let botonVerTodos = document.getElementById("botonVerTodos");
let botonIrFemale = document.getElementById("botonIrFemale");
let botonIrMale = document.getElementById("botonIrMale");
let botonIrUnkdown = document.getElementById("botonIrUnknown");
let botonIrGenderless = document.getElementById("botonIrGenderless");


//Mostrando vista de sección Ver Todos
botonVerTodos.addEventListener("click", verVerTodos);
function verVerTodos(){
    document.getElementById("vistaPrincipal").style.display = "none";
    document.getElementById("verTodos").style.display = "block";
}

//Mostrando y ocultando vistas de Gender (sería mejor con if)
botonIrFemale.addEventListener("click", verVistaFemale);
function verVistaFemale(){
    document.getElementById("vistaPrincipal").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "block";
    document.getElementById("vistaGenderMale").style.display = "none";
    document.getElementById("vistaGenderUnknown").style.display = "none";
    document.getElementById("vistaGenderGenderless").style.display = "none";
}

botonIrMale.addEventListener("click", verVistaMale);
function verVistaMale(){
    document.getElementById("vistaPrincipal").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "none";
    document.getElementById("vistaGenderMale").style.display = "block";
    document.getElementById("vistaGenderUnknown").style.display = "none";
    document.getElementById("vistaGenderGenderless").style.display = "none";
}

botonIrUnkdown.addEventListener("click", verVistaUnknown);
function verVistaUnknown(){
    document.getElementById("vistaPrincipal").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "none";
    document.getElementById("vistaGenderMale").style.display = "none";
    document.getElementById("vistaGenderUnknown").style.display = "block";
    document.getElementById("vistaGenderGenderless").style.display = "none";
}

botonIrGenderless.addEventListener("click", verVistaGenderless);
function verVistaGenderless(){
    document.getElementById("vistaPrincipal").style.display = "none";
    document.getElementById("verTodos").style.display = "none";
    document.getElementById("vistaGenderFemale").style.display = "none";
    document.getElementById("vistaGenderMale").style.display = "none";
    document.getElementById("vistaGenderUnknown").style.display = "none";
    document.getElementById("vistaGenderGenderless").style.display = "block";
}


let arregloPersonajes = [];
arregloPersonajes = data.results

let newArray = arregloPersonajes.filter(function(element) {
    return element.gender == "Female";    
});
console.log("=====Esta es la data filtrada por female======");
console.log(newArray);


 