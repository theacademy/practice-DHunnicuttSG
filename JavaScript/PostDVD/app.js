const apiUrl = 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvd';
const form = document.getElementById('dvdForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        title: document.getElementById('title').value,
        releaseYear: document.getElementById('releaseYear').value,
        director: document.getElementById('director').value,
        rating: document.getElementById('rating').value,
        notes: document.getElementById('notes').value
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Optionally, you can update the table with the new data
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});