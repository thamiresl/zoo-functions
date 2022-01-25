const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((element) => element.name === animal);
  return animais.residents.every((old) => old.age >= age);
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
