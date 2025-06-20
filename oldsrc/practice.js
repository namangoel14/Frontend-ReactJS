// practice

const { response } = require('express');

/*
const numbers1 = [1, 2, 3, 4, 5];
 Expected Output: [2, 4, 6, 8, 10]
*/
const number1 = [1, 2, 3, 4, 5];
const result1 = number1.map(response => response * 2);
console.log('Input:', number1);
console.log('Expected output:', result1);

/*Given an array of numbers, use map() to return a new array where each number is converted into its string representation.
const numbers2 = [10, 20, 30];
 Expected Output: ["10", "20", "30"]
 */

const number2 = [10, 20, 30];
const result2 = number2.map(response => response.toString());
console.log('input string:', number2);
console.log('output string:', result2);

/**
 *Question 3: Capitalize First Letter
 const names1 = ["alice", "bob", "charlie"];
 Expected Output: ["Alice", "Bob", "Charlie"]
 */
const name1 = ['alice', 'bob', 'charlie'];
const result3 = name1.map(
  response => response.charAt(0).toUpperCase() + response.slice(1)
);
console.log(result3);

/**
 * Add Suffix to Numbers
 *const sizes = [10, 25, 100];
// Expected Output: ["10px", "25px", "100px"]
 */
const sizes = [10, 25, 100];
const result4 = sizes.map(response => response.toString() + 'px');
console.log('input sizes:', sizes);
console.log('Suffix to numbers:', result4);

/**
 *Extract Full Names
 const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" }
];
// Expected Output: ["John Doe", "Jane Smith", "Peter Jones"]
 */
const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Peter', lastName: 'Jones' },
];

const result5 = people.map(
  response => response.firstName + ' ' + response.lastName
);
console.log('Input Array objects:', people);
console.log('Expected output:', result5);

/**
 *Transform Product Data
 const products = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 3 },
  { name: "Keyboard", price: 75, quantity: 2 }
];
/*
Expected Output:
[
  { name: "Laptop", totalPrice: 1200 },
  { name: "Mouse", totalPrice: 75 },
  { name: "Keyboard", totalPrice: 150 }
]
*/
const products = [
  { name: 'Laptop', price: 1200, quantity: 1 },
  { name: 'Mouse', price: 25, quantity: 3 },
  { name: 'Keyboard', price: 75, quantity: 2 },
];
const result6 = products.map(response => ({
  name: response.name,
  totalPrice: response.price * response.quantity,
}));
console.log(result6);

/*
Convert Celsius to Fahrenheit (Fahrenheit = (Celsius * 9/5) + 32)
const celsiusTemps = [0, 25, 100];
 Expected Output: [32, 77, 212]
*/

const celsiusTemps = [0, 25, 100];
const result7 = celsiusTemps.map(response => (response * 9) / 5 + 32);
console.log(result7);

/* Conditional Transformation
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true }
];

Expected Output:
[
  "Active: Alice",
  "Inactive: Bob",
  "Active: Charlie"
]
*/
const users = [
  { name: 'Alice', isActive: true },
  { name: 'Bob', isActive: false },
  { name: 'Charlie', isActive: true },
];

const result8 = users.map(response =>
  response.isActive === true
    ? `Active: ${response.name}`
    : `Inactive: ${response.name}`
);
console.log(result8);

/**
 *Flatten Nested Arrays (with a twist)
 const nestedNumbers = [[1, 2], [3, 4, 5], [6]];
// Expected Output: ["1,2", "3,4,5", "6"]
 */

const nestedNumbers = [[1, 2], [3, 4, 5], [6]];
const arr2 = [];

for (let i = 0; i < nestedNumbers.length; i++) {
  const innerLoop = nestedNumbers[i];
  for (let j = 0; j < innerLoop.length; j++) {
    arr2[arr2.length] = innerLoop[j];
  }
}
console.log(arr2);

/**
 *Generate HTML List Items
 *const items = ["Apple", "Banana", "Cherry"];
Expected Output: ["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"]
 */

const items = ['Apple', 'Banana', 'Cherry'];
const htmlItem = items.map(response => '<li>' + response + '</li>');
console.log(htmlItem);

/**
 *Transform and Index
 const words = ["hello", "world", "map", "challenge"];
/*
Expected Output:
[
  { text: "hello", index: 0 },
  { text: "world", index: 1 },
  { text: "map", index: 2 },
  { text: "challenge", index: 3 }
]
 * */

const words = ['hello', 'world', 'map', 'challenge'];
const indexOutput = words.map((response, index) => ({
  text: response,
  index: index,
}));
console.log(indexOutput);

/***
 * Calculate Discounted Prices
 *const productsWithPrices = [
  { name: "Shirt", price: 30 },
  { name: "Jeans", price: 80 },
  { name: "Jacket", price: 150 },
  { name: "Socks", price: 10 }
];
/*
Expected Output:
[
  { name: "Shirt", discountedPrice: 27 },    // 30 - (30 * 0.10)
  { name: "Jeans", discountedPrice: 68 },    // 80 - (80 * 0.15)
  { name: "Jacket", discountedPrice: 120 },   // 150 - (150 * 0.20)
  { name: "Socks", discountedPrice: 9 }      // 10 - (10 * 0.10)
]
 */

const productsWithPrices = [
  { name: 'Shirt', price: 30 },
  { name: 'Jeans', price: 80 },
  { name: 'Jacket', price: 150 },
  { name: 'Socks', price: 10 },
];

const disCount = productsWithPrices.map(response => {
  let discount = 0;
  if (response.price <= 50) {
    discount = 0.1;
  } else if (response.price <= 100) {
    discount = 0.15;
  } else {
    discount = 0.2;
  }
  const discountedPrice = response.price - response.price * discount;
  return {
    name: response.name,
    discountedPrice: Math.round(discountedPrice), // Optional rounding
  };
});
console.log(disCount);
