function isPositiveInteger(val) {
return /^\d+$/.test(val);
}

function calculate(event) {
event.preventDefault();
const leftVal = document.getElementById("leftNum").value.trim();
const rightVal = document.getElementById("rightNum").value.trim();
const op = document.getElementById("operator").value;

if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
    alert("Error :(");
    return;
}

const num1 = parseInt(leftVal, 10);
const num2 = parseInt(rightVal, 10);

if ((op === "/" || op === "%") && num2 === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
}

let res;
switch (op) {
    case "+": res = num1 + num2; break;
    case "-": res = num1 - num2; break;
    case "*": res = num1 * num2; break;
    case "/": res = num1 / num2; break;
    case "%": res = num1 % num2; break;
}

alert(res);
console.log(res);
}

setInterval(() => {
alert("Please, use me...");
}, 30000);
