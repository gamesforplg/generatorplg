
let min = 1;
let max = 2
let main_btn = document.getElementById("koef")
let result_display = document.querySelector(".qwer");
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  main_btn.onclick = function() {
    let randomValue = getRandomArbitrary(min, max);
    result_display.textContent = randomValue.toFixed(2); 
};
