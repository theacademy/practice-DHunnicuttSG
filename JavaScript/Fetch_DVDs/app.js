document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvds';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#dataTable tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.releaseYear}</td>
                    <td>${item.director}</td>
                    <td>${item.rating}</td>
                    <td>${item.notes}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
