// ------------------------------

// let names = ['Alice', 'Bob', 'Charlie', 'Diana'];

// let scores = [42, 55, 61];

// console.log(scores[1]);

// -----------------------------

// let colours = ["red", "blue", "green"];
// console.log(colours[0]);

// -----------------------------

let fruits = ["apple", "banana", "orange"];

console.log(fruits);
console.log("Original fruit array");

fruits[1] = "grape";

console.log(fruits);
console.log("Replaced banana with grape in fruits array	using index");

console.log(fruits.length);
console.log("Length of fruits array");

fruits.push("kiwi");

console.log(fruits);
console.log("Added kiwi to the end of fruits array");

// Adds a new fruit to the end of the array using the push fiction

fruits.unshift("pineapple");

// Adds a new fruit to the start of the array using the unshift function

console.log(fruits);
console.log("Added pineapple to the start of fruits array using unshift");

fruits.shift()

console.log(fruits);
console.log("Removed the first fruit from the fruits array using shift");

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i] + " is at index " + i);
}

console.log("Looped through the fruits array using a for loop");

for(let fruit of fruits) {
	console.log(fruit);
}

console.log("Looped through the fruits array using a for...of loop");

console.log(fruits.indexOf("orange"));
console.log("Index of orange in fruits array, returns 2");
console.log(fruits.indexOf("banana"));
console.log("Index of banana in fruits array (not found), returns -1");

// Using indexOf to find the position of an item in the array

let citrus = fruits.slice(2, 3);

console.log(citrus);
console.log("Created a new array called citrus using slice from fruits array");
// Created a new array called citrus using slice from fruits array

fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1);

console.log(fruits);

console.log("Removed banana from fruits array using splice");

// Using splice to remove an item from the array

fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1, "pear");

console.log(fruits);

console.log("Removed banana from fruits array using splice");

// Using splice to remove an item from the array and add a new item in its place

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
