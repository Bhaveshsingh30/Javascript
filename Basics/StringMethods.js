//String declaration

const name = "Bhavesh"
//or
const name1 = new String("Bhavesh")


// Creating a string
let originalString = "   Hello, World!   ";

// Using string methods

// 1. String Length
let length = originalString.length;
console.log(`1. Length of the string: ${length}`); //1. Length of the string: 19

// 2. Trim: Removes leading and trailing whitespaces
let trimmedString = originalString.trim();
console.log(`2. Trimmed string: "${trimmedString}"`);  //2. Trimmed string: "Hello, World!"

// 3. ToUpperCase: Converts the string to uppercase
let upperCaseString = originalString.toUpperCase();
console.log(`3. Uppercase string: "${upperCaseString}"`);  //3. Uppercase string: "   HELLO, WORLD!   "

// 4. ToLowerCase: Converts the string to lowercase
let lowerCaseString = originalString.toLowerCase();
console.log(`4. Lowercase string: "${lowerCaseString}"`);  //4. Lowercase string: "   hello, world!   "

// 5. Substring: Extracts a portion of the string
let substring = originalString.substring(3, 8);
console.log(`5. Substring from index 3 to 8: "${substring}"`);  //5. Substring from index 3 to 8: "Hello"

// 6. CharAt: Returns the character at a specified index
let charAtIndex = originalString.charAt(7);
console.log(`6. Character at index 7: "${charAtIndex}"`);  //6. Character at index 7: "o"

// 7. IndexOf: Returns the index of the first occurrence of a substring
let indexOfWorld = originalString.indexOf("World");
console.log(`7. Index of "World": ${indexOfWorld}`);  //7. Index of "World": 10

// 8. Replace: Replaces a specified substring with another string
let replacedString = originalString.replace("World", "Universe");
console.log(`8. Replaced string: "${replacedString}"`);  //8. Replaced string: "   Hello, Universe!   "


// 9. startsWith: Checks if the string starts with a specified substring
let startsWithHello = originalString.startsWith("Hello");
console.log(`9. Does the string start with "Hello"? ${startsWithHello}`);  //9. Does the string start with "Hello"? false

// 10. endsWith: Checks if the string ends with a specified substring
let endsWithWorld = originalString.endsWith("World!");
console.log(`10. Does the string end with "World!"? ${endsWithWorld}`);  //10. Does the string end with "World!"? false

// 11. includes: Checks if the string contains a specified substring
let includesHello = originalString.includes("Hello");
console.log(`11. Does the string include "Hello"? ${includesHello}`);  //11. Does the string include "Hello"? true

// 12. split: Splits the string into an array of substrings based on a delimiter
let splitArray = originalString.split(",");
console.log(`12. String split into array: ${splitArray}`);  //12. String split into array:    Hello, World!

// 13. repeat: Repeats the string a specified number of times
let repeatedString = "abc".repeat(3);
console.log(`13. Repeated string: "${repeatedString}"`);  //13. Repeated string: "abcabcabc"

// 14. slice: Extracts a section of the string and returns it as a new string
let slicedString = originalString.slice(3, 8);
console.log(`14. Sliced string from index 3 to 8: "${slicedString}"`);  //14. Sliced string from index 3 to 8: "Hello"

// 15. substr: Returns a specified number of characters from a start index
let substrString = originalString.substr(3, 5);
console.log(`15. Substring of length 5 from index 3: "${substrString}"`);  //15. Substring of length 5 from index 3: "Hello"

// 16. match: Searches a string for a pattern and returns an array of matches
let matchResult = originalString.match(/o/g);
console.log(`16. Matches for 'o': ${matchResult}`);  //16. Matches for 'o': o,o

// 17. search: Searches a string for a specified value and returns the index of the first match
let searchResult = originalString.search("World");
console.log(`17. Index of first occurrence of "World": ${searchResult}`);  //17. Index of first occurrence of "World": 10

// 18. charCodeAt: Returns the Unicode value of the character at a specified index
let unicodeValue = originalString.charCodeAt(1);
console.log(`18. Unicode value at index 1: ${unicodeValue}`);  //18. Unicode value at index 1: 32

// 19. localeCompare: Compares two strings in the current locale
let compareResult = originalString.localeCompare("   Hello, Universe!   ");
console.log(`19. String comparison result: ${compareResult}`);  //19. String comparison result: 1

// 20. padStart: Pads the string with another string until it reaches a specified length
let paddedString = originalString.padStart(20, "*");
console.log(`20. Padded string: "${paddedString}"`);  //20. Padded string: "*   Hello, World!   "
