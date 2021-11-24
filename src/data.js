//import data from './data/rickandmorty/rickandmorty.js';

export const filterDataGender = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.gender == seleccion)
};

export const filterDataSpecies = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.species == seleccion)
};

export const filterDataStatus = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.status == seleccion)
};

export const sortAZData = (data) => {
  return data.results.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB){
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
});
}

export const sortZAData = (data) => {
  return data.results.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB){
    return 1
  }
  if (nameA > nameB) {
    return -1
  }
});
}

/*
export const filterSearchName = (data, e) => {
  const textoIngresado = e.target.value.toLowerCase();
  return data.results.filter((filtro) => filtro.name.toLowerCase().includes(textoIngresado))
}
*/

export const computeStats = () => {

}

// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//Funciones y parámetros referenciales para obtener, procesar y manipular datos

// filterData(data, condition)

// sortData(data, sortBy, sortOrder)

// computeStats(data)

