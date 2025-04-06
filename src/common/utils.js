// This file contains utility functions that can be reused across different examples.

// Function to log messages to the console with a specific format
function logMessage(message) {
    console.log(`[LOG]: ${message}`);
}

// Function to log errors to the console with a specific format
function logError(error) {
    console.error(`[ERROR]: ${error}`);
}

// Function to log an array of objects as a table in the console
function logTable(data) {
    console.table(data);
}

// Function to clear the console
function clearConsole() {
    console.clear();
}

// Exporting the utility functions for use in other modules
export { logMessage, logError, logTable, clearConsole };