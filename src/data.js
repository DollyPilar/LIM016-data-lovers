import data from './data/rickandmorty/rickandmorty.js';

export const filterDataGender = (seleccion) => {
  return data.results.filter((filtro) => filtro.gender == seleccion)
};

export const filterDataSpecies = (seleccion) => {
  return data.results.filter((filtro) => filtro.species == seleccion)
};

export const filterDataStatus = (seleccion) => {
  return data.results.filter((filtro) => filtro.status == seleccion)
};

export const sortData = (aOrdenar) => {
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

