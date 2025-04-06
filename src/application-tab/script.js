// This JavaScript file demonstrates how to work with local storage and cookies in the Application tab of Chrome Developer Tools.

// Function to save data to local storage
function saveToLocalStorage() {
    // Set a key-value pair in local storage
    localStorage.setItem('username', 'JohnDoe');
    console.log('Data saved to local storage: username = JohnDoe');
}

// Function to retrieve data from local storage
function getFromLocalStorage() {
    // Get the value associated with the key 'username'
    const username = localStorage.getItem('username');
    console.log('Retrieved from local storage:', username);
}

// Function to remove data from local storage
function removeFromLocalStorage() {
    // Remove the key 'username' from local storage
    localStorage.removeItem('username');
    console.log('Data removed from local storage: username');
}

// Function to demonstrate cookie usage
function setCookie(name, value, days) {
    // Set a cookie with the specified name, value, and expiration days
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    console.log(`Cookie set: ${name} = ${value}`);
}

function getCookie(name) {
    // Retrieve a cookie by name
    return document.cookie.split('; ').reduce((r, c) => {
        const [key, v] = c.split('=');
        return key === name ? decodeURIComponent(v) : r;
    }, '');
}

function deleteCookie(name) {
    // Delete a cookie by setting its expiration date to the past
    setCookie(name, '', -1);
    console.log(`Cookie deleted: ${name}`);
}

// Example usage
saveToLocalStorage();
getFromLocalStorage();
removeFromLocalStorage();

setCookie('sessionId', 'abc123', 7);
console.log('Retrieved cookie:', getCookie('sessionId'));
deleteCookie('sessionId');