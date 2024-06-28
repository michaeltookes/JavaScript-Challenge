// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let listOfEmployees = [];
  let addNewEmployee = true;

  while (addNewEmployee) {
    
    let firstName = prompt("Enter the employee's First Name");
    let lastName = prompt("Enter the employee's Last Name");
    let salary = parseFloat(prompt("Enter the employee's salary"));

    if(isNaN(salary)) {
      alert("Not a valid Salary.");
      salary = 0;
    }

    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    listOfEmployees.push(employee);
    console.log("Employees Array: " + listOfEmployees);

    addNewEmployee = confirm("Do you want to add another employee?");

  }

  return listOfEmployees;

};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let numOfEmployees = 0;

  for (i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
    numOfEmployees++;
  }

  let averageSalary = totalSalary/numOfEmployees;
  
  console.log(`Average Salary: ${averageSalary}`);
  console.log(`Number of Employees: ${numOfEmployees}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let employee = employeesArray[randomIndex];
  let employeeFullName = `${employee.firstName} ${employee.lastName}`

  console.log(`Employee FullName: ${employeeFullName}`);

  return employee;

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
