class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee1 = new Employee("Kuldeep Gogoi", "Software Developer", 500000);
  
  // Call the getSalary method
  const salary = employee1.getSalary();
  console.log(`${employee1.name} earns $${salary} per year as a ${employee1.position}.`);