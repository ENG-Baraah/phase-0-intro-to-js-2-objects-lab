// Write your solution in this file!
const employee = { name: "Jone", streetAddress: "11 Soqaq" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = employee;
  newObj[key] = value;
  return newObj;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  const newObj = employee;
  delete newObj[key];
  return newObj;
}
