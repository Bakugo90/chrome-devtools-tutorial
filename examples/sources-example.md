# Sources Tab Example

The Sources Tab in Chrome Developer Tools is essential for inspecting and debugging JavaScript code, as well as managing resources like stylesheets and images. This example demonstrates how to use the Sources Tab effectively.

## Example Overview

In this example, we will create a simple HTML page that includes a JavaScript file. The JavaScript file will contain a function that can be inspected and modified using the Sources Tab. We will also highlight how to set breakpoints, step through code, and view the call stack.

## Code Example

### `src/sources-tab/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sources Tab Example</title>
    <link rel="stylesheet" href="../common/styles.css">
</head>
<body>
    <h1>Sources Tab Example</h1>
    <button id="runButton">Run Script</button>
    <script src="script.js"></script>
</body>
</html>
```

### `src/sources-tab/script.js`

```javascript
// This function will be called when the button is clicked
function greetUser() {
    const userName = prompt("What's your name?"); // Prompt user for their name
    console.log("Hello, " + userName + "!"); // Log greeting to the console
}

// Add event listener to the button to run the greetUser function
document.getElementById("runButton").addEventListener("click", greetUser);
```

## How to Use This Example

1. **Open the Example**: Load the `index.html` file in Chrome.
2. **Open Developer Tools**: Right-click on the page and select "Inspect" or press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac).
3. **Navigate to the Sources Tab**: Click on the "Sources" tab in Developer Tools.
4. **Set Breakpoints**: Click on the line number in `script.js` to set a breakpoint in the `greetUser` function.
5. **Run the Script**: Click the "Run Script" button on the page. The execution will pause at the breakpoint.
6. **Inspect Variables**: Hover over variables to see their values, and use the console to evaluate expressions.
7. **Step Through Code**: Use the step controls in the Sources Tab to step over or into functions.

## Conclusion

This example provides a hands-on approach to using the Sources Tab in Chrome Developer Tools. By following the steps outlined, students will learn how to inspect and debug JavaScript code effectively.