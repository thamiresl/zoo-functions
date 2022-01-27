const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const animals = employee.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === animals);

  const old = animal.residents.reduce((accumulator, currentValue) => {
    if (currentValue.age > accumulator.age) return currentValue;
    return accumulator;
  });
  return Object.values(old);
}

module.exports = getOldestFromFirstSpecies;
