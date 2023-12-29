 //  Employee class


class Employee {
  constructor(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
  }

  calculateVAT() {
    // Assuming 10% VAT for simplicity
    return 0.1 * this.salary;
  }
}

// Create employee instances
const employee1 = new Employee("John Doe", 50000, "Manager");
const employee2 = new Employee("Jane Smith", 45000, "Analyst");
const employee3 = new Employee("Bob Johnson", 60000, "Developer");
const employee4 = new Employee("Alice Brown", 55000, "Customer Service");
const employee5 = new Employee("Charlie Davis", 70000, "Senior Manager");

// Display employee information
console.log("Employee Information:");
console.log("1. Name:", employee1.name);
console.log("   Salary:", employee1.salary);
console.log("   Position:", employee1.position);
console.log("   VAT:", employee1.calculateVAT());
console.log();
// Repeat for the remaining employees...

// You can extend this pattern for the other employees.
