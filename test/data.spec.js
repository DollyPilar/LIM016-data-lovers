import { filterDataGender, filterDataSpecies, filterDataStatus, sortAZData, sortZAData, filterSearchName} from '../src/data.js';
import data from "../src/data/rickandmorty/rickandmorty.js";
//import data from "../src/data/rickandmorty/__mocks__/rickandmorty.js";

//require('../src/data/rickandmorty/rickandmorty.js')
//jest.mock('../src/data/rickandmorty/rickandmorty.js')

describe('filterDataGender', () => {
  it('is a function', () => {
    expect(typeof filterDataGender).toBe('function');
  });

  it('Todos los elementos del array son Female', () => {
    const result = filterDataGender(data, 'Female');
    result.forEach(element => {
      expect(element.gender).toEqual('Female');
    });
  })
})

describe('filterDataSpecies', () => {
  it('is a function', () => {
    expect(typeof filterDataSpecies).toBe('function');
  });
  it('Todos los elementos del array son Alien', () => {
    const result = filterDataSpecies(data, 'xxxxx');
    result.forEach(element => {
      expect(element.species).toEqual('xxxxx');
    });
  })
})

describe('filterDataStatus', () => {
  it('is a function', () => {
    expect(typeof filterDataStatus).toBe('function');
  });
  it('Todos los elementos del array son Dead', () => {
    const result = filterDataStatus(data, 'Dead');
    result.forEach(element => {
      expect(element.status).toEqual('Dead');
    });
  })
})

describe('sortAZData', () => {
  it('is a function', () => {
    expect(typeof sortAZData).toBe('function');
  });
  it('El primer elemento del arreglo es Morty Smith',()=>{
    const result = sortAZData(data);
    expect(result[0].name).toEqual('Morty Smith');
  });
  it('El último elemento del arreglo es Summer Smith',()=>{
    const result = sortAZData(data);
    expect(result[result.length-1].name).toEqual('Summer Smith');
  })
})

describe('sortZAData', () => {
  it('is a function', () => {
    expect(typeof sortZAData).toBe('function');
  });
  it('El primer elemento del arreglo es Zick Zack',()=>{
    const result = sortZAData(data);
    expect(result[0].name).toEqual('Zick Zack');
  });
  it('El último elemento del arreglo es Abadango Cluster Princess',()=>{
    const result = sortZAData(data);
    expect(result[result.length-1].name).toEqual('Abadango Cluster Princess');
  })
})

describe('filterSearchName', () => {
  it('is a function', () => {
    expect(typeof filterSearchName).toBe('function');
  });
})

