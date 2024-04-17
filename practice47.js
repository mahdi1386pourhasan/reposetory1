var num1 = +prompt("Enter number 1:", 0);
var num2 = +prompt("Enter number 2:", 0);
var parametr = prompt("Enter a parametr:( / , + , * , - , **)");

switch (parametr) {
    case "/":
        taghsim(num1, num2)
        break;
    case "+":
        sum(num1, num2)
        break;
    case "-":
        menha(num1, num2)
        break;
    case "*":
        zarb(num1, num2)
        break;
    case "**":
        tavan(num1, num2)
        break;
    default:
        alert("Please enter a parametr")
}

function taghsim(num1, num2) {
    alert(num1 / num2)
}
function sum(num1, num2) {
    alert(num1 + num2)
}
function menha(num1, num2) {
    alert(num1 - num2)
}
function zarb(num1, num2) {
    alert(num1 * num2)
}
function tavan(num1, num2) {
    alert(num1 ** num2)
}
