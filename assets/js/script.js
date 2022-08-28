var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", increment);

var btnSubtrair = document.getElementById("btnSubtrair");

btnSubtrair.addEventListener("click", decrement);

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}

