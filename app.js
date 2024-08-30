

/*-------------------------------- Constants --------------------------------*/


const buttons = document.querySelectorAll('.button')
console.dir(buttons)

const calculator = document.querySelector('#calculator');

const display = document.querySelector('.display');

const operators = "+-/*"
/*-------------------------------- Variables --------------------------------*/

let screen = "";
let runningValue = 0;
let lastOperator = "";




/*------------------------ Cached Element References ------------------------*/





/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);

        let b = e.target.innerText;

        if (b == "=") {
            //this calculates the total result and update the screen
            compute() 
            screen = runningValue;
            
        } else if (b == "C") {
            screen = "";
        }

        else {
            const lastIndex = screen.length-1;
        //if last character on screen is an operator, and if b is an operator, 
        //if operators includes the last character and operators includes b then return (do nothing)
            if (operators.includes(screen[lastIndex]) && operators.includes(b)){
                return
            }
            screen += b;
        }
        display.innerText = screen
    });

});



// /*-------------------------------- Functions --------------------------------*/

const updateRunningValue = (value) => {

    if (lastOperator === '*') {
        runningValue = runningValue * value
        //runningvalue *= parseInt(screen[i])
    }
    else if (lastOperator === '/') {
        runningValue /= value
    }
    else if (lastOperator === '+') {
        runningValue += value
    }
    else if (lastOperator === '-') {
        runningValue -= value
    }
}



const compute = () => {
    //use screen to loop thru for numbers and operators
    //ex screen="9+9"
    for (i = 0; i < screen.length; i += 1) {
        if (i === 0) {
            runningValue = parseInt(screen[i])
        } else if (operators.includes(screen[i])) {
            lastOperator = screen[i]
        }
        else {
            const secondNum = parseInt(screen[i])
            updateRunningValue (secondNum)
        }
    }
    //add the 1st string to the runningValue to hold it
    //check for operator and hold it in the lastOperator variable
    //final condition - 2nd string is applied to the runningValue based upon the operator

}


