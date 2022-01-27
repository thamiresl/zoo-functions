const data = require('../data/zoo_data');

function getName(idAnimal) {
  return data.species.find((animal) => animal.id === idAnimal).name;
}
function getLocation(idAnimal) {
  return data.species.find((animal) => animal.id === idAnimal).location;
}
function firtsObj(dadosEmpregados) {
  return {
    id: dadosEmpregados.id,
    fullName: `${dadosEmpregados.firstName} ${dadosEmpregados.lastName}`,
    species: dadosEmpregados.responsibleFor.map((id) => getName(id)),
    locations: dadosEmpregados.responsibleFor.map((id) => getLocation(id)),
  };
}
function funcionarios(employee) {
  return data.employees.find((empregado) => {
    if (empregado.id === employee.id) return true;
    if (empregado.firstName === employee.name) return true;
    if (empregado.lastName === employee.name) return true;
    return false;
  });
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    return data.employees.map((emp) => firtsObj(emp));
  }
  const dadosEncontrados = funcionarios(employee);
  if (!dadosEncontrados) {
    throw new Error('Informações inválidas');
  }
  const resposta = firtsObj(dadosEncontrados);
  return resposta;
}

module.exports = getEmployeesCoverage;
// ajuda Marcelo Adriano - turma 15 - tribo A
