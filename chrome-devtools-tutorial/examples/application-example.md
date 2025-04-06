# Application Tab Example

## Overview
This example demonstrates how to work with local storage and cookies using the Chrome Developer Tools. It provides a simple HTML structure and JavaScript code that allows users to interact with the Application tab, showcasing how to store, retrieve, and delete data in local storage and cookies.

## Code Example

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Tab Example</title>
    <link rel="stylesheet" href="../common/styles.css">
</head>
<body>
    <h1>Application Tab Example</h1>
    <div>
        <h2>Local Storage</h2>
        <input type="text" id="localStorageKey" placeholder="Enter key">
        <input type="text" id="localStorageValue" placeholder="Enter value">
        <button id="setLocalStorage">Set Local Storage</button>
        <button id="getLocalStorage">Get Local Storage</button>
        <button id="removeLocalStorage">Remove Local Storage</button>
        <p id="localStorageOutput"></p>
    </div>

    <div>
        <h2>Cookies</h2>
        <input type="text" id="cookieKey" placeholder="Enter cookie key">
        <input type="text" id="cookieValue" placeholder="Enter cookie value">
        <button id="setCookie">Set Cookie</button>
        <button id="getCookie">Get Cookie</button>
        <button id="deleteCookie">Delete Cookie</button>
        <p id="cookieOutput"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### script.js
```javascript
// Function to set a value in local storage
document.getElementById('setLocalStorage').addEventListener('click', function() {
    const key = document.getElementById('localStorageKey').value;
    const value = document.getElementById('localStorageValue').value;
    localStorage.setItem(key, value); // Store the value in local storage
    alert(`Stored ${key}: ${value} in local storage.`);
});

// Function to get a value from local storage
document.getElementById('getLocalStorage').addEventListener('click', function() {
    const key = document.getElementById('localStorageKey').value;
    const value = localStorage.getItem(key); // Retrieve the value from local storage
    document.getElementById('localStorageOutput').textContent = value ? `Value: ${value}` : 'No value found.';
});

// Function to remove a value from local storage
document.getElementById('removeLocalStorage').addEventListener('click', function() {
    const key = document.getElementById('localStorageKey').value;
    localStorage.removeItem(key); // Remove the value from local storage
    alert(`Removed ${key} from local storage.`);
});

// Function to set a cookie
document.getElementById('setCookie').addEventListener('click', function() {
    const key = document.getElementById('cookieKey').value;
    const value = document.getElementById('cookieValue').value;
    document.cookie = `${key}=${value}; path=/;`; // Set the cookie
    alert(`Set cookie ${key}: ${value}`);
});

// Function to get a cookie
document.getElementById('getCookie').addEventListener('click', function() {
    const key = document.getElementById('cookieKey').value;
    const cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, value] = current.split('=');
        prev[name] = value;
        return prev;
    }, {});
    const value = cookies[key]; // Retrieve the cookie value
    document.getElementById('cookieOutput').textContent = value ? `Value: ${value}` : 'No cookie found.';
});

// Function to delete a cookie
document.getElementById('deleteCookie').addEventListener('click', function() {
    const key = document.getElementById('cookieKey').value;
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // Delete the cookie
    alert(`Deleted cookie ${key}`);
});
```

## Usage
1. Open the `index.html` file in a web browser.
2. Use the Local Storage section to set, get, and remove items from local storage.
3. Use the Cookies section to set, get, and delete cookies.
4. Open the Chrome Developer Tools and navigate to the Application tab to inspect local storage and cookies.

This example provides a hands-on approach to understanding how local storage and cookies work, making it easier for students to grasp these concepts through practical application.