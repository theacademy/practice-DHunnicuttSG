// do {
//     let userInput = prompt("Enter a number between 1 and 10");
//         if (userInput <= 0 || userInput > 10) {
//             alert("Input must be between 1 and 10");
//         }
// } while (userInput <= 0 || userInput > 10);


document.getElementById("hello").addEventListener("click", () => {
    const userInput = prompt("Please enter your name: ");
    if (userInput!== null) {
        document.getElementById("sayHello").textContent = `Hello, ${userInput}`;
    }
})