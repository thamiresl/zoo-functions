const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((accumulator, value) => {
      const nameObj = value.name;
      const valueObj = value.residents.length;
      accumulator[nameObj] = valueObj;
      return accumulator;
    }, {});
  }
  const foundSpecie = data.species.find((specie) => specie.name.includes(animal.specie));
  if (!animal.sex) {
    return foundSpecie.residents.length;
  }
  return foundSpecie.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
// ajuda monitoria Roberval Filho
