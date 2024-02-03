
// Objects in JavaScript
//In JavaScript, objects are a fundamental data type and a composite structure that allows you to store and organize data in key-value pairs.
// Objects are used to represent and manipulate complex entities by grouping related data and functionality together. 
//They are versatile and play a crucial role in the language.

// Objects in JavaScript

// Object Declaration:
let person = {
    name: "John",
    age: 25,
    isStudent: false,
  };
  
  // Accessing Object Properties:
  console.log(person.name);    // Output: John
  console.log(person["age"]);  // Output: 25
  
  // Adding and Modifying Properties:
  person.job = "Engineer";
  person.age = 26;
  
  // Nested Objects:
  let address = {
    city: "New York",
    zipCode: "10001",
  };
  
  person.address = address;
  console.log(person.address.city);  // Output: New York
  
  // Methods in Objects:
  let car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
      console.log("Engine started.");
    },
  };
  car.start();  // Output: Engine started.
  
  // Object Literals:
  let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    publishedYear: 2008,
  };
  
  // Symbol Declaration and Accessing:
  const uniqueKey = Symbol("uniqueKey");
  person[uniqueKey] = "Custom Value";
  console.log(person[uniqueKey]);  // Output: Custom Value
  
  // Object.freeze: Make the object immutable
  Object.freeze(person);
  
  // Trying to modify a frozen object will result in an error in strict mode
  // person.newProperty = "This won't work";
  
  // Object Iteration:
  for (let key in person) {
    console.log(key, person[key]);
  }
  
  // or using Object.keys()
  Object.keys(person).forEach(key => {
    console.log(key, person[key]);
  });
  
  // JSON (JavaScript Object Notation):
  let jsonPerson = JSON.stringify(person);
  console.log(jsonPerson);
  
  // Object Constructor:
  function Dog(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let myDog = new Dog("Buddy", 3);
  console.log(myDog.name);  // Output: Buddy
  