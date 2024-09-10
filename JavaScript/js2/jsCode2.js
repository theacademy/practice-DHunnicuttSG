w = "Anika"
var x = 22;
let y = 14;
const z = "Sam"

// Displaying Data
const loadPage = function updatePage(){
    document.getElementById("display").innerHTML = `
    <p> w = ${w} </p> 
    <p> x = ${x} </p>
    <p> y = ${y} </p>
    <p> z = ${z} </p>
    `;
}

loadPage()
console.log(w, x, y, z)