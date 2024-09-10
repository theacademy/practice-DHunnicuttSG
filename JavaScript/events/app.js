const myButton = document.getElementById("demo");
const myText = document.getElementById("textBox");
const display = document.getElementById("display");


myButton.addEventListener("mouseover", () => {
    myButton.style.backgroundColor = "#FF5733";
})

myButton.addEventListener("mouseout", () => {
    myButton.style.backgroundColor = "#4CAF50";
})

myText.addEventListener("input", () => {
    display.textContent = myText.value
})


