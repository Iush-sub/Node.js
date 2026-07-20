//Basic logic of calculator
const readline= require("readline-sync")




function calculator(){








const number1= Number(readline.question("Enter the first number: "))

const operator=readline.question("Enter operations:")

const number2=Number(readline.question("Enter the second number:"));




let result; //Since the value changes time and again we declared result such that it value is not obliged to change.


//Subtraction
if(operator ==="-"){
    result = number1 - number2;
}

//Multiplication
else if(operator ==="*"){
     result = number1 * number2;
}

//Modulo
else if(operator ==="%"){
     result = number1 % number2;
}

//Division
else if(operator ==="/"){
    if(number2===0){
        console.log("Invalide.")
        calculator()
    }


     result = number1 / number2;
}

else
    console.log("Invalide operator. Try again")
    calculator()

console.log("Result " + result) 


let again= readline.question("Calculate again? (y/n): ")
if(again.toUpperCase()==="Y")
{
    calculator();
}
else
    console.log("Thank you") 
}

calculator()

