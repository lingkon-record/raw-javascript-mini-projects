// Function to create an employee object

function createEmployee(name, salary, position) {
  return {
    name,
    salary,
    position,
    calculateVAT() {
      // Assuming 10% VAT for simplicity
      return 0.1 * this.salary;
    },
  };
}

// Function to display employee information
function displayEmployee(employee) {
  console.log("Name:", employee.name);
  console.log("Salary:", employee.salary);
  console.log("Position:", employee.position);
  console.log("VAT:", employee.calculateVAT());
  console.log();
}

// Create employee instances
const employee1 = createEmployee("John Doe", 50000, "Manager");
const employee2 = createEmployee("Jane Smith", 45000, "Analyst");
const employee3 = createEmployee("Bob Johnson", 60000, "Developer");
const employee4 = createEmployee("Alice Brown", 55000, "Customer Service");
const employee5 = createEmployee("Charlie Davis", 70000, "Senior Manager");

// Display employee information
console.log("Employee Information:");
displayEmployee(employee1);
displayEmployee(employee2);
displayEmployee(employee3);
displayEmployee(employee4);
displayEmployee(employee5);
