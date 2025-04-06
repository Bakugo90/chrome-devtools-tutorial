# Elements Tab Example

## Overview
This example demonstrates how to inspect and modify DOM elements using the Chrome Developer Tools' Elements tab. It provides a simple HTML structure that allows users to practice selecting elements, modifying their styles, and understanding the DOM hierarchy.

## Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elements Tab Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="main-title">Hello, World!</h1>
    <p class="description">This is a simple example to demonstrate the Elements tab in Chrome DevTools.</p>
    <button id="change-style-btn">Change Style</button>

    <script>
        // This function changes the style of the title when the button is clicked
        document.getElementById('change-style-btn').addEventListener('click', function() {
            const title = document.getElementById('main-title');
            title.style.color = 'blue'; // Change text color to blue
            title.style.fontSize = '2em'; // Increase font size
        });
    </script>
</body>
</html>
```

## Instructions
1. Open this HTML file in Google Chrome.
2. Right-click on the title "Hello, World!" and select "Inspect" to open the Elements tab.
3. Use the Elements tab to explore the DOM structure. You can modify the text, styles, and attributes directly in the Elements panel.
4. Click the "Change Style" button to see how the JavaScript modifies the title's style dynamically.
5. Experiment with different styles and observe the changes in real-time using the Elements tab.