`use strict`
let allEmployee = [];
let counterID = 999
let secEle = document.getElementById("secTag");
let submitBot = document.getElementById("submit");

function Employee(id, names, department, level, img) {
  this.employeeID = id;
  this.fullName = names;
  this.Department = department;
  this.Level = level;
  this.imageURL = img;
  this.salary = 0;
  allEmployee.push(this);
}

Employee.prototype.renderEmployee = function () {
  var card = document.createElement("div");
  card.className = "employeeCard";
  secEle.appendChild(card);
  const employeeImg = document.createElement('img');
  employeeImg.src = this.imageURL;
  card.appendChild(employeeImg);
  employeeImg.className = "Images";

  const employeeName = document.createElement('h3');
  employeeName.textContent = `Name :${this.fullName}  - ID:${this.employeeID}`;
  card.appendChild(employeeName);
  employeeName.className = "Name";

  const employeedep = document.createElement('h3');
  employeedep.textContent = `Department:${this.Department} - Level: ${this.Level}`;
  card.appendChild(employeedep);
  employeedep.className = "depatrment";

  const employeesal = document.createElement('h3');
  employeesal.textContent = `${this.salary}`;
  card.appendChild(employeesal);
  employeesal.className = "salary";
};


generateRandomNum = function (min, max) {
  salary = Math.floor(Math.random() * (max - min + 1) + min);
  return salary
}

Employee.prototype.netSalary = function () {
  if (this.Level == "Senior") {
    let Sal = generateRandomNum(1500, 2000)
    this.salary = Math.floor(Sal - (Sal * .075))

  }
  else if (this.Level == "Mid-Senior") {
    let Sal = generateRandomNum(1000, 1500)
    this.salary = Math.floor(Sal - (Sal * .075))
  }
  else {
    let Sal = generateRandomNum(500, 1000)
    this.salary = Math.floor(Sal - (Sal * .075))
  }
}



let Employee1 = new Employee(0, "Ghazi Samer", "Administration", "Senior", "assets/ghazi.png");
let Employee2 = new Employee(0, "Lana Ali", "Administration", "Senior", "assets/lana.jpg");
let Employee3 = new Employee(0, "Tamara Ayoub", "Marketing", "Senior", "assets/tamara.jpg");
let Employee4 = new Employee(0, "Safi Walid", "Administration", "Mid-Senior", "assets/safi.jpg");
let Employee5 = new Employee(0, "Omar Zaid", "Development", "Senior", "assets/omar.png");
let Employee6 = new Employee(0, "Rana Saleh", "Development", "Junior", "assets/rana.png");
let Employee7 = new Employee(0, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/hadi.png");

console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);
console.log(Employee6);
console.log(Employee7);
console.log(allEmployee);


generateUniqueID = function (counterID) {
  for (let i = 0; i < allEmployee.length; i++) {
    counterID++
 
    allEmployee[i].employeeID = counterID;

  }
}
function renderAll() {
  for (let i = 0; i < allEmployee.length; i++) {
  generateUniqueID(counterID);
  allEmployee[i].netSalary();
  allEmployee[i].renderEmployee();
  
}}


  

function addNewEmployee(event) {
  event.preventDefault();

  let newID = this.employeeID;
  let newName = event.target.fullName.value;
  let department = event.target.Department.value;
  let level = event.target.Level.value;
  let newImg = event.target.imageUrl.value;
  let newEmployee = new Employee(newID, newName, department, level, newImg, salary);
  
  newEmployee.netSalary();
  newEmployee.renderEmployee();
  alert("Welcome , a new employee has been added");
  submitBot.style.backgroundColor = "yellow";
  //  console.log(newEmployee)
  saveData(allEmployee);

}

let employeesForm = document.getElementById("employeesForm");
employeesForm.addEventListener("submit", addNewEmployee);


//local storage code:
function saveData(arr) {
  let stringArr = JSON.stringify(arr);
  localStorage.setItem('employees', stringArr);

}


function getData() {
  let retrieveArr = localStorage.getItem('employees');
  var objArr = JSON.parse(retrieveArr);
  // Employee.allEmployee = objArr
  console.log(objArr)

}

// getData();


// for (let i = 0; i < objArr.length; i++) {
//     newEmployee(objArr[i].id, objArr[i].names, objArr[i].department, objArr[i].level, objArr[i].img)

renderAll();






