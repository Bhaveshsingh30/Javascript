//Declaring aaray
// const array1 = [1,2,3,4,5]
// console.log(array1[0])

//const array2 = new Array(3,2,3,4)
//console.log(array2[0])

// 1. Array.push(element1, ..., elementN): Adds one or more elements to the end of an array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("Pushed:", fruits);

// 2. Array.pop(): Removes the last element from an array.
let poppedElement = fruits.pop();
console.log("Popped Element:", poppedElement);

// 3. Array.shift(): Removes the first element from an array.
let shiftedElement = fruits.shift();
console.log("Shifted Element:", shiftedElement);

// 4. Array.unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array.
fruits.unshift("grape", "kiwi");
console.log("Unshifted:", fruits);

// 5. Array.slice(start, end): Returns a shallow copy of a portion of an array.
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", slicedFruits);

// 6. Array.splice(start, deleteCount, item1, ..., itemN): Changes the contents of an array by removing or replacing existing elements.
fruits.splice(1, 0, "pear");
console.log("Spliced (added):", fruits);

// 7. Array.indexOf(element): Returns the first index at which a given element is found in the array, or -1 if it is not present.
let indexOfBanana = fruits.indexOf("banana");
console.log("Index of Banana:", indexOfBanana);

// 8. Array.includes(element): Determines whether an array includes a certain element, returning true or false.
let includesBanana = fruits.includes("banana");
console.log("Includes Banana:", includesBanana);

// 9. Array.map(callback): Creates a new array with the results of calling a provided function on every element in the array.
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercased Fruits:", uppercasedFruits);

// 10. Array.filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
let shortFruits = fruits.filter(fruit => fruit.length < 6);
console.log("Short Fruits:", shortFruits);


// 11. Array.concat(array1, array2, ..., arrayN): Combines multiple arrays or values into a new array.
let moreFruits = ["pineapple", "mango"];
let combinedFruits = fruits.concat(moreFruits);
console.log("Combined Fruits:", combinedFruits);     //Combined Fruits: [ 'grape', 'pear', 'kiwi', 'banana', 'pineapple', 'mango' ]

// 12. Spread Operator [...]: Expands an array into individual elements.
let spreadFruits = [...fruits, ...moreFruits];
console.log("Spread Fruits:", spreadFruits);        //Spread Fruits: [ 'grape', 'pear', 'kiwi', 'banana', 'pineapple', 'mango' ]

// 13. Array.flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, [3, [4]]]];
let flattenedArray = nestedArray.flat(2);
console.log("Flattened Array:", flattenedArray);    //Flattened Array: [ 1, 2, 3, [ 4 ] ]

// 14. Array.from(arrayLike, mapFunction, thisArg): Creates a new, shallow-copied array from an array-like or iterable object.
let arrayLikeObject = { length: 3, 0: "one", 1: "two", 2: "three" };
let convertedArray = Array.from(arrayLikeObject);
console.log("Converted Array:", convertedArray);   //Converted Array: [ 'one', 'two', 'three' ]

// 15. Array.of(element1, element2, ..., elementN): Creates a new array with the given elements.
let numbersArray = Array.of(1, 2, 3, 4, 5);
console.log("Numbers Array:", numbersArray);      //Numbers Array: [ 1, 2, 3, 4, 5 ]
