# Network Tab Example

## Overview
The Network Tab in Chrome Developer Tools allows developers to monitor network requests made by a web page. This example demonstrates how to make a network request using the Fetch API and how to inspect the request and response in the Network Tab.

## Example Code

### HTML (src/network-tab/index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Tab Example</title>
    <link rel="stylesheet" href="../common/styles.css">
</head>
<body>
    <h1>Network Tab Example</h1>
    <button id="fetchData">Fetch Data</button>
    <pre id="output"></pre>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (src/network-tab/script.js)
```javascript
// This function is called when the button is clicked
document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    // Making a GET request to a public API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            // Check if the response is okay (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(data => {
            // Display the fetched data in the <pre> element
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Log any errors to the console
            console.error('There has been a problem with your fetch operation:', error);
        });
}
```

## How to Use
1. Open the `index.html` file in a Chrome browser.
2. Open the Developer Tools (F12 or right-click and select "Inspect").
3. Navigate to the Network Tab.
4. Click the "Fetch Data" button on the page.
5. Observe the network request being made in the Network Tab, including request headers, response, and status.
6. The fetched data will be displayed on the page.

## Key Points
- The Fetch API is used to make network requests.
- The Network Tab allows you to inspect all network activity, including requests and responses.
- You can view detailed information about each request, such as headers and response data, which is crucial for debugging and performance analysis.