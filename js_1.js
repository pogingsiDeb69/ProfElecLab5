
//1a
let num = 2;
let name = "Deborah";
let bool = true;

let num1 = parseFloat(prompt("Enter first number"));
let num2 = parseFloat(prompt("Enter second number"));

let operation =prompt("Enter operation");
console.log("The operator is "+ operation);

let total;
//1b, 1c, 1d
if(operation === "+"){
    total = num1 + num2;
    console.log("The total is "+ total);
}
else if(operation ==="-"){
    total = num1 - num2;
    console.log("The total is "+ total);
}
else if(operation ==="*"){
    total = num1 * num2;
    console.log("The total is "+ total);
}
else if(operation === "/"){
    total = num1 / num2;
    console.log("The total is "+ total);
}
else{
    console.log("Invalid Operator");
}
