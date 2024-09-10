// Creating objects

const PersonObj = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// OR

const AnotherPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  class PersonDef {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display person's details
    displayInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  // You can do it this way too but not best practice
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Better to create class like this:  
  class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}
const person1 = new Person("Monica", "Geller", "29", "green");

