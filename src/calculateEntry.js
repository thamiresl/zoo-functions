const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((visitAge) => {
    if (visitAge.age < 18) result.child += 1;
    else if (visitAge.age < 50) result.adult += 1;
    else result.senior += 1;
  });
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const pay = countEntrants(entrants);
  let ingresso = 0;
  ingresso += pay.senior * 24.99;
  ingresso += pay.adult * 49.99;
  ingresso += pay.child * 20.99;
  return ingresso;
}

module.exports = { calculateEntry, countEntrants };
