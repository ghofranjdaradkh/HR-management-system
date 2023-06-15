`use strict`

let tableEle = document.getElementById("table1");
tableEle.style.border = "6px double green";
tableEle.style.width = "900px";
tableEle.style.height = "400px";
tableEle.style.fontSize = "30px";
tableEle.style.backgroundColor = "#FFD4B2";



var numEmployees1 = numEmployees2 = numEmployees3 = numEmployees4 = 0;
var avgSal = avgSal2 = avgSal3 = avgSal4 = avgSalary = 0;
var total = counter = 0;
var totalSal1 = totalSal2 = totalSal3 = totalSal4 = 0;

function getData() {
    let retrieveArr = localStorage.getItem('employees');
    var objArr = JSON.parse(retrieveArr);
    console.log(objArr);

    for (let i = 0; i < objArr.length; i++) {
        if (objArr[i].Department === "Administration") {
            numEmployees1 += 1;
            totalSal1 += objArr[i].salary;
            avgSal = Math.floor( totalSal1/ numEmployees1);
        } else if (objArr[i].Department === "Marketing") {
            numEmployees2 += 1;
            totalSal2 += objArr[i].salary;
            avgSal2 = Math.floor( totalSal2 / numEmployees2);
        } else if (objArr[i].Department === "Development") {
            numEmployees3 += 1;
            totalSal3+= objArr[i].salary;
            avgSal3 =Math.floor( totalSal3  / numEmployees3);
        } else {
            numEmployees4 += 1;
            totalSal4+= objArr[i].salary;
              avgSal4=Math.floor(totalSal4 / numEmployees4);
        }
        counter = counter + 1;
        total =totalSal1+totalSal2+totalSal3+totalSal4
        avgSalary = Math.floor(total / counter)
    }


    return objArr;
}


let renderTable = function () {
    getData();
    // // First row: Administration
    let trE1 = document.createElement("tr");
    tableEle.appendChild(trE1);
    trE1.style.border = "6px double green";

    let tdE1 = document.createElement("td");
    tdE1.textContent = "Administration";
    trE1.appendChild(tdE1);
    tdE1.style.border = "6px double green";

    let td2E1 = document.createElement("td");
    td2E1.textContent = numEmployees1;
    trE1.appendChild(td2E1);
    td2E1.style.border = "6px double green";

    let td3E1 = document.createElement("td");
    td3E1.textContent =totalSal1   
    trE1.appendChild(td3E1);
    td3E1.style.border = "6px double green";

    let td4E1 = document.createElement("td");
    td4E1.textContent = avgSal;
    trE1.appendChild(td4E1);
    td4E1.style.border = "6px double green";

    // Second row: Marketing
    let tr2E1 = document.createElement("tr");
    tableEle.appendChild(tr2E1);
    tr2E1.style.border = "6px double green";

    let td1E2 = document.createElement("td");
    td1E2.textContent = "Marketing";
    tr2E1.appendChild(td1E2);
    td1E2.style.border = "6px double green";

    let td2E2 = document.createElement("td");
    td2E2.textContent = numEmployees2;
    tr2E1.appendChild(td2E2);
    td2E2.style.border = "6px double green"

    let td3E2 = document.createElement("td");
    td3E2.textContent = totalSal2;
    tr2E1.appendChild(td3E2);
    td3E2.style.border = "6px double green"

    let td4E2 = document.createElement("td");
    td4E2.textContent =avgSal2 ;
    tr2E1.appendChild(td4E2);
    td4E2.style.border = "6px double green"

    // Third row: Development
    let tr3E1 = document.createElement("tr");
    tableEle.appendChild(tr3E1);
    tr3E1.style.border = "6px double green";

    let td1E3 = document.createElement("td");
    td1E3.textContent = "Development";
    tr3E1.appendChild(td1E3);
    td1E3.style.border = "6px double green"

    let td2E3 = document.createElement("td");
    td2E3.textContent = numEmployees3;
    tr3E1.appendChild(td2E3);
    td2E3.style.border = "6px double green"

    let td3E3 = document.createElement("td");
    td3E3.textContent = totalSal3;
    tr3E1.appendChild(td3E3);
    td3E3.style.border = "6px double green"

    let td4E3 = document.createElement("td");
    td4E3.textContent =avgSal3;   
    tr3E1.appendChild(td4E3);
    td4E3.style.border = "6px double green"

    // Fourth row: Finance
    let tr4E1 = document.createElement("tr");
    tableEle.appendChild(tr4E1);
    tr4E1.style.border = "6px double green";

    let td1E4 = document.createElement("td");
    td1E4.textContent = "Finance";
    tr4E1.appendChild(td1E4);
    td1E4.style.border = "6px double green"

    let td2E4 = document.createElement("td");
    td2E4.textContent = numEmployees4;
    tr4E1.appendChild(td2E4);
    td2E4.style.border = "6px double green"

    let td3E4 = document.createElement("td");
    td3E4.textContent =totalSal4 ;
    tr4E1.appendChild(td3E4);
    td3E4.style.border = "6px double green"

    let td4E4 = document.createElement("td");
    td4E4.textContent =avgSal4 ;
    tr4E1.appendChild(td4E4);
    td4E4.style.border = "6px double green"

    //fifth row

    let tr5E1 = document.createElement("tr");
    tableEle.appendChild(tr5E1);
    tr5E1.style.border = "6px double green";

    let td1E5 = document.createElement("td");
    td1E5.textContent = "AllDepartments";
    tr5E1.appendChild(td1E5);
    td1E5.style.border = "6px double green"

    let td2E5 = document.createElement("td");
    td2E5.textContent = counter;
    tr5E1.appendChild(td2E5);
    td2E5.style.border = "6px double green"

    let td3E5 = document.createElement("td");
    td3E5.textContent = total;
    tr5E1.appendChild(td3E5);
    td3E5.style.border = "6px double green"

    let td4E5 = document.createElement("td");
    td4E5.textContent =avgSalary;
    tr5E1.appendChild(td4E5);
    td4E5.style.border = "6px double green"

};

renderTable();










