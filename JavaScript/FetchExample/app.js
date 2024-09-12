document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form); // Create a FormData object from the form

    try {
        const response = await fetch('https://example.com/api/endpoint', {
            method: 'POST',
            body: formData
        });
        console.log(formData)

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
});
