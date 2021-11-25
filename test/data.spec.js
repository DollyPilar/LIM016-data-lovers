import { filterDataGender, filterDataSpecies, filterDataStatus, sortAZData, sortZAData, filterSearchName} from '../src/data.js';
import data from "../src/data/rickandmorty/rickandmorty.js";

describe('filterDataGender', () => {
  it('is a function', () => {
    expect(typeof filterDataGender).toBe('function');
  });

  it('el primer elemento del resultado es Female', () => {
    const result = filterDataGender(data, "Female");
    expect(result[0].gender).toEqual("Female");
  } )
})

describe('filterDataSpecies', () => {
  it('is a function', () => {
    expect(typeof filterDataSpecies).toBe('function');
  });
})

describe('filterDataStatus', () => {
  it('is a function', () => {
    expect(typeof filterDataStatus).toBe('function');
  });
})

describe('sortAZData', () => {
  it('is a function', () => {
    expect(typeof sortAZData).toBe('function');
  });
})

describe('sortZAData', () => {
  it('is a function', () => {
    expect(typeof sortZAData).toBe('function');
  });
})

describe('filterSearchName', () => {
  it('is a function', () => {
    expect(typeof filterSearchName).toBe('function');
  });
})



/*
import { example, anotherExample } from '../src/data.js';

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
