# Console Tab Example

The Console Tab in Chrome Developer Tools is a powerful tool for debugging and interacting with JavaScript code. This example demonstrates how to use various console methods to log information, errors, and structured data.

## Example Code

### HTML File: `src/console-tab/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Console Tab Example</title>
    <link rel="stylesheet" href="../common/styles.css">
</head>
<body>
    <h1>Console Tab Example</h1>
    <button id="logButton">Log Messages</button>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript File: `src/console-tab/script.js`

```javascript
// This function logs various types of messages to the console
function logMessages() {
    // Log a simple message
    console.log("This is a log message."); // Use console.log to output general information

    // Log an error message
    console.error("This is an error message."); // Use console.error to output error messages

    // Log a warning message
    console.warn("This is a warning message."); // Use console.warn to output warning messages

    // Log an object
    const user = { name: "Alice", age: 25 };
    console.log("User Object:", user); // Log an object to inspect its properties

    // Log a table
    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];
    console.table(users); // Use console.table to display data in a table format
}

// Attach the logMessages function to the button click event
document.getElementById("logButton").addEventListener("click", logMessages);
```

## How to Use This Example

1. Open the `index.html` file in a web browser.
2. Open Chrome Developer Tools (F12 or right-click and select "Inspect").
3. Navigate to the Console Tab.
4. Click the "Log Messages" button on the webpage.
5. Observe the various messages logged in the Console Tab, including general logs, errors, warnings, and a table of user data.

This example illustrates how to effectively use the Console Tab for debugging and inspecting JavaScript code, making it a valuable tool for developers.