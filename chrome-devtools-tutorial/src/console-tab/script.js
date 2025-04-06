// src/console-tab/script.js

// This script demonstrates the use of various console methods in Chrome Developer Tools.

// Log a simple message to the console
console.log("Hello, World!"); // This will print a message to the console

// Log an error message
console.error("This is an error message."); // Use console.error to log errors

// Log a warning message
console.warn("This is a warning message."); // Use console.warn for warnings

// Log an object
const user = { name: "Alice", age: 25 };
console.log("User Object:", user); // Logs the user object to the console

// Log a table
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.table(users); // Displays the users array as a table in the console

// Grouping console messages
console.group("User Info");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd(); // Ends the grouping of console messages

// Timing a function
console.time("Timer");
for (let i = 0; i < 1000000; i++) {} // Simulate a time-consuming task
console.timeEnd("Timer"); // Logs the time taken to execute the code between time and timeEnd

// Using console.assert
console.assert(user.age > 30, "User is not older than 30."); // Will log an error if the assertion is false

// This script provides a basic overview of how to use the console methods effectively.