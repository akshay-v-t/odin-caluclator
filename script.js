let firstNum = 10;
let secondNum =5;
let operator = '';
let displayValue ='';
let a
let b



const buttons = document.querySelectorAll('button');
const inputText = document.querySelector('#input-box')



buttons.forEach((button) => {
    button.addEventListener("click", ()=>{

        inputText.value += button.id

        if(button.id ==='ac'){
            firstNum = null;
            secondNum = null;
            operator = '';
            displayValue = '';
            inputText.value ='';
        }
        else if(button.classList.contains('number')){

            displayValue += button.id

            inputText.value =  displayValue;

            
           
        }

        else if(button.classList.contains('operator')){

            if(displayValue){
                firstNum = parseFloat(displayValue);
                operator = button.id;
                displayValue='';
               
            }

        }
        else if(button.id === '='){

            if(displayValue){

                secondNum = parseFloat(displayValue);
                const result = operate(firstNum,secondNum,operator);
                inputText.value = result
                firstNum = result;
                secondNum = null;
                displayValue = ''
            }

        }
    })
}
)


const add = (a,b) => a+b ;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = function(firstNum,secondNum,operator){
    if(operator=== '+'){
        return add(firstNum,secondNum);
        
    }
    else if(operator==='-'){
        return subtract(firstNum,secondNum)
        
    }
    else if(operator==='*'){
        return multiply(firstNum,secondNum)
        
    }
    else if(operator==='/'){
        return divide(firstNum,secondNum)
        
    }
    
    


}





// console.log('add' + add(a,b))
// console.log('subtract' + subtract(a,b))
// console.log('multiply' + multiply(a,b))
// console.log('divide' + divide(a,b))




