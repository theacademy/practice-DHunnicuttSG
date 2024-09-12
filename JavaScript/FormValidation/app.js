function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

function calculate() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    let valid = true;

    // Reset error messages
    error1.textContent = '';
    error2.textContent = '';

    // Validate inputs
    if (!isNumber(number1)) {
        error1.textContent = 'Please enter a valid number.';
        valid = false;
    }
    if (!isNumber(number2)) {
        error2.textContent = 'Please enter a valid number.';
        valid = false;
    }

    if (!valid) {
        return;
    }

    // Perform calculations
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : 'Infinity';

    // Create results table
    const results = [
        { operation: 'Addition', result: addition },
        { operation: 'Subtraction', result: subtraction },
        { operation: 'Multiplication', result: multiplication },
        { operation: 'Division', result: division }
    ];

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headers = ['Operation', 'Result'];
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    // Create table rows
    results.forEach(item => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    // Append table to the container
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // Clear previous results
    resultsContainer.appendChild(table);
}

function resetForm() {
    document.getElementById('calculator-form').reset();
    document.getElementById('results-container').innerHTML = '';
    document.getElementById('error1').textContent = '';
    document.getElementById('error2').textContent = '';
}
