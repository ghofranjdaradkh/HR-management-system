`use strict`
const allEmployee = [];
function Employee(id, names, department, level, img) {
  this.employeeID = id;
  this.fullName = names;
  this.Department = department;
  this.Level = level;
  this.imageURL = img;
  this.salary = 0;
  allEmployee.push(this);
}
Employee.prototype.Department = function () {
  this.Department = [Administration, Marketing, Development, Finance]
}



Employee.prototype.renderEmployee = function () {

    document.write(`<table> 
       <tr> <th> EmployeeID </th>  <th>Name </th><th>Department</th><th>Level</th>  </tr>
 <tr> <td>${this.employeeID}</td>  &ensp;<td>${this.fullName}</td> <td>${this.Department}</td> <td>${this.Level}</td> </tr> </table>`)
    document.write(`<p> salary= ${this.salary}</p>`);
  }

generateRandomNum = function (min, max) {
  salary = Math.floor(Math.random() * (max - min + 1) + min);
  return salary
}


 Employee.prototype.netSalary=function( ){
  if (this.Level=="Senior"){
    let Sal=generateRandomNum(1500,2000)
    this.salary = Math.floor(Sal -(Sal*.075))
      
  }
  else if (this.Level=="Mid-Senior"){
    let Sal=generateRandomNum(1000,1500)
    this.salary = Math.floor(Sal -(Sal*.075) )
 }
 else { let Sal=generateRandomNum(500,1000)
    this.salary =Math.floor(Sal -(Sal*.075))}}
  


let Employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://www.shareicon.net/data/2016/08/18/813781_man_512x512.png", 0);
let Employee2 = new Employee(1001, "Lana Ali", "Administration", "Senior", "https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg");
let Employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg");
let Employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://i.pinimg.com/474x/60/b4/7e/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg");
let Employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://img.freepik.com/free-icon/professor_318-191762.jpg?w=2000");
let Employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://img.freepik.com/free-icon/professor_318-191762.jpg?w=2000");
let Employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRzkEEVtiPqqpsIeWxJzt-6pieZh0gl5wWncL3yQA1XDIZKWtEcYwAvp5qwbMnDWOAQI&usqp=CAU")

console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);
console.log(Employee6);
console.log(Employee7);
console.log(allEmployee);

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].netSalary();
allEmployee[i].renderEmployee();}


  
