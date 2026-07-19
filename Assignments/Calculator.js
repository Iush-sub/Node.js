//Basic logic of calculator

const readline= require("readline-sync")




const number1= Number(readline.question("Enter the first number: "))
const number2=Number(readline.question("Enter the second number:"));
const operator=readline.question("Enter operations:")





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
    if(number1===0){
        console.log("Invalide.")
    }


     result = number1 / number2;
}

else
    console.log("Invalide operator. Try again")

console.log(result)

again= readline.question("Calculate again? (y/n): ")
while(again==="y")
{
    again=readline.question()
}