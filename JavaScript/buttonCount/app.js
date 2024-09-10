function plus1(){
    myValue = document.getElementById("counter").innerHTML;
    document.getElementById("counter").innerHTML = myValue + 1;
}

// Correct Way
// function plus1(){
//     myValue = document.getElementById("counter").innerHTML;
//     myValue++;
//     document.getElementById("counter").innerHTML = myValue;
// }


document.getElementById("count").addEventListener("click", () => {
    plus1()
  });
