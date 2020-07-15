const findBestEmployee = function (employees) {
  let maxSalary = 0;
  let nameEmploee = "";

  for (const key in employees) {
    if (maxSalary < employees[key]) {
      maxSalary = employees[key];
      nameEmploee = key;
    }
  }
  return nameEmploee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
