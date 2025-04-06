// src/network-tab/script.js

// This script demonstrates how to make a network request using the Fetch API.
// It also shows how to monitor the request and response in the Network tab of Chrome Developer Tools.

// Function to fetch data from a public API
async function fetchData() {
    // URL of the API endpoint
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        // Making a GET request to the API
        const response = await fetch(url);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the data to the console
        console.log('Fetched Data:', data);

        // Display the data in the HTML
        displayData(data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display fetched data in the HTML
function displayData(data) {
    const output = document.getElementById('output');
    data.forEach(post => {
        // Create a new div for each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        output.appendChild(postDiv);
    });
}

// Call the fetchData function when the script loads
fetchData();