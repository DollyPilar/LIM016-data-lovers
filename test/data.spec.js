import { filterDataGender, filterDataSpecies, filterDataStatus, sortAZData, sortZAData} from '../src/data.js';
//import data from "../src/data/rickandmorty/rickandmorty.js";
import data from "../src/data/rickandmorty/__mocks__/rickandmorty.js";

require('../src/data/rickandmorty/rickandmorty.js')
jest.mock('../src/data/rickandmorty/rickandmorty.js')

describe('filterDataGender', () => {
  it('is a function', () => {
    expect(typeof filterDataGender).toBe('function');
  });

  it('El array de Female contiene 3 elementos', () => {
    const resultArray = filterDataGender(data, 'Female');
    expect(resultArray.length).toEqual(3);     
  })
})

describe('filterDataSpecies', () => {
  it('is a function', () => {
    expect(typeof filterDataSpecies).toBe('function');
  });
  it('El array de Alien contiene 2 elementos', () => {
    const resultArray = filterDataSpecies(data, 'alien');
    expect(resultArray.length).toEqual(2);
  })
})

describe('filterDataStatus', () => {
  it('is a function', () => {
    expect(typeof filterDataStatus).toBe('function');
  });
  it('El array de Alive contiene 5 elementos ', () => {
    const resultArray = filterDataStatus(data, 'alive');
    expect(resultArray.length).toEqual(5);
  })
})

describe('sortAZData', () => {
  it('is a function', () => {
    expect(typeof sortAZData).toBe('function');
  });
  it('El primer elemento del arreglo es Abadango Cluster Princess',()=>{
    const result = sortAZData(data);
    expect(result[0].name).toEqual('Abadango Cluster Princess');
  });
  it('El último elemento del arreglo es Rick Sanchez',()=>{
    const result = sortAZData(data);
    expect(result[result.length-1].name).toEqual('Rick Sanchez');
  })
})

describe('sortZAData', () => {
  it('is a function', () => {
    expect(typeof sortZAData).toBe('function');
  });
  it('El primer elemento del arreglo es Rick Sanchez',()=>{
    const result = sortZAData(data);
    expect(result[0].name).toEqual('Rick Sanchez');
  });
  it('El último elemento del arreglo es Abadango Cluster Princess',()=>{
    const result = sortZAData(data);
    expect(result[result.length-1].name).toEqual('Abadango Cluster Princess');
  })
})

