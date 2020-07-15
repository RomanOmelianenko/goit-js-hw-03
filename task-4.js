const countTotalSalary = function (employees) {
  let totalSalaries = 0;

  const employee = Object.values(employees);

  for (const salary of employee) {
    totalSalaries += salary;
  }
  return totalSalaries;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
