'use strict'

let operand  = process.argv[2];
let parameter_1 = process.argv[3];
let parameter_2 = process.argv[4];

let output;

function calculate(){
    switch(operand){
        case "add":
        output = parseFloat(parameter_1) + parseFloat(parameter_2);
        break;
        case "subtract":
        output = parseFloat(parameter_1) - parseFloat(parameter_2);
        break;
        case "multiply":
        output = parseFloat(parameter_1) * parseFloat(parameter_2);
        break;
        case "divide":
        output = parseFloat(parameter_1) / parseFloat(parameter_2);
        break;
        case "remainder":
        output = parseFloat(parameter_1) % parseFloat(parameter_2);
        break;
    }

    return output;
}

calculate();
console.log(output);