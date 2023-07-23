function getPerson(personObj) {
    try {
      if (typeof personObj !== "object" || personObj === null || !("name" in personObj) || !("age" in personObj)) {
        throw new Error("Invalid parameter type");
      }
  
      const { name, age } = personObj;
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }

const person1 = { name: "Kuls", age: 20 };
const person2 = { name: "Parisikha", age: 19 };
const invalidPerson = "not an object";

console.log(getPerson(person1)); 
console.log(getPerson(person2)); 
console.log(getPerson(invalidPerson)); 