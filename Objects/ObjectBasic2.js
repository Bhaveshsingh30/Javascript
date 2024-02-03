// You can combine two objects in JavaScript using various methods. Here are a few approaches:

// ### 1. Object.assign:

// The `Object.assign()` method is used to copy the values of all enumerable properties from one or more source objects to a target object.

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let combinedObject = Object.assign({}, obj1, obj2);
console.log(combinedObject);


//In this example, `combinedObject` will be `{ a: 1, b: 3, c: 4 }`.

// 2. Spread Operator (...):

//The spread operator (`...`) can be used to merge objects by spreading their properties into a new object.


let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);


//In this example, `combinedObject` will be `{ a: 1, b: 3, c: 4 }`.

//### 3. Using a Function:

//You can create a custom function to combine objects.

function combineObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let combinedObject = combineObjects(obj1, obj2);
console.log(combinedObject);


//This will also result in `combinedObject` being `{ a: 1, b: 3, c: 4 }`.

//Choose the method that fits your needs best based on the specific requirements of your code.