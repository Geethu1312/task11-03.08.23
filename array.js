// 11. Write a program that takes two arrays and finds their intersection using Sets.
// Sample Input: const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// Sample Output: [3, 4, 5]

// ANSWER

function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersectionSet = new Set([...set1].filter((num) => set2.has(num)));
  // Convert the intersection Set back to an array
  const intersectionArray = Array.from(intersectionSet);
  return intersectionArray;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const intersection = findIntersection(arr1, arr2);
console.log(intersection);

// 12 Write a program that takes an array containing nested arrays and flattens it into a single
// array using the array methods.
// Sample Input: const arr = [1, [2, 3], [4, 5, [6, 7]]];
// Sample Output: [1, 2, 3, 4, 5, 6, 7]

const arr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenedArray = arr.flat(Infinity);

console.log(flattenedArray);

// Write a program that takes an array containing both truthy and falsy values and removes
// the falsy values using the array methods.
// Sample Input:   const arr = [0, "hello", "", 42, false, "world", null, true, undefined];
// Sample Output: ["hello", 42, "world", true]

function removeFalsyValues(inputArr) {
  const truthyArr = inputArr.filter((value) => Boolean(value));
  return truthyArr;
}

const arr3 = [0, "hello", "", 42, false, "world", null, true, undefined];
const result = removeFalsyValues(arr3);
console.log(result);

// Write a program that takes an array of numbers and returns an array with only the unique elements without using the array methods.
// Sample Input:   const arr = [1, 2, 2, 3, 4, 4, 5];
// Sample Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (uniqueArray.indexOf(currentElement) === -1) {
      uniqueArray.push(currentElement);
    }
  }

  return uniqueArray;
}

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(array);

console.log(uniqueArr);

// Write a program that takes an array of numbers and filters out the prime numbers using the array methods.
// Sample Input:   const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// Sample Output: [2, 3, 5, 7]

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

const array1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = array1.filter((number) => isPrime(number));

console.log(primeNumbers);

// Write a program that takes an object and checks if a specific property exists
// Sample Input:   const obj = { name: "John", age: 30, city: "New York" };
// const propertyName = "age";
// Sample Output: Property "age" exists: true

const obj = { name: "John", age: 30, city: "New York" };
const propertyName = "age";

if (obj.hasOwnProperty(propertyName)) {
  console.log(`Property "${propertyName}" exists: true`);
} else {
  console.log(`Property "${propertyName}" exists: false`);
}

// Write a program that takes an object containing some properties with undefined values and removes those properties
// Sample Input:  const obj = { name: "John", age: undefined, city: "New York" };
// Sample Output:  { name: "John", city: "New York" }

const obj1 = { name: "John", age: undefined, city: "New York" };

for (let key in obj) {
  if (obj1.hasOwnProperty(key) && obj[key] === undefined) {
    delete obj[key];
  }
}

console.log(obj);

// Write a program that takes an array containing nested arrays and destructures specific elements from the nested arrays.
// Sample Input const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
// Sample Output: First Element of Nested Array: 1
// Second Element of Nested Array: 4
// Third Element of Nested Array:

const input = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];

for (let i = 0; i < input.length; i++) {
  const nestedArray = input[i];

  if (nestedArray.length >= 1) {
    const [firstElement, secondElement, thirdElement] = nestedArray;

    console.log(`First Element of Nested Array ${i + 1}: ${firstElement}`);
    console.log(`Second Element of Nested Array ${i + 1}: ${secondElement}`);
    console.log(
      `Third Element of Nested Array ${i + 1}: ${thirdElement || "undefined"}`
    );
  }
}

// Write a program that takes an object and extracts properties with renamed variables using destructuring assignment.
// Sample Input:  const user = { name: "John", age: 30 };
// Sample Output: User Name: John
// User Age: 30

const user = { name: "John", age: 30 };

const { name: userName, age: userAge } = user;

console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);

// Write a program that takes a function with an object parameter and provides default values for missing properties using destructuring assignment.
// Sample Input:
//  function displayInfo({ name = "Anonymous", age = 25 }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
// }
// const obj = { name: "John" };
// Sample Output:
//  Name: John
//  Age: 25

const user1 = { name: "John", age: 30 };

const { name: user1Name, age: user1Age } = user;

console.log(`User Name: ${user1Name}`);
console.log(`User Age: ${user1Age}`);
