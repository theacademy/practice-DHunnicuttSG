// URL of the API endpoint
const apiUrl = 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvds';

// Using Fetch API to get data
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data from the response
    })
    .then(data => {
        console.log(data); // Handle the JSON data
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
