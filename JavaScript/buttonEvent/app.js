document.getElementById("timeButton").addEventListener("click", () => {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("timeButton").textContent = currentTime;
  });

//   document.getElementById("timeButton").addEventListener("click", function() {
//     const currentTime = new Date().toLocaleTimeString();
//     this.textContent = currentTime;
//   });