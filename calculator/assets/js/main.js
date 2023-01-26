function operateCal(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            break;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', btnClick);
});

const display = document.getElementById('display');
let displayTxt = display.textContent;

function clearDisplay() {
    displayTxt = '';
    display.textContent = displayTxt;
}

function del() {
    displayTxt = display.textContent;
    display.textContent = displayTxt.substring(0, displayTxt.length - 1);
}

function show(btnValue) {
    displayTxt = display.textContent;

    if(isCalculating) {
        displayTxt = '';
        isCalculating = false;
    }

    if(btnValue === '.' && displayTxt.includes('.')) {
        return;
    }
    displayTxt += btnValue;

    if(displayTxt.length > 9){
        displayTxt = displayTxt.substring(0, 9);
    }
    display.textContent = displayTxt;
}


let num1;
let isCalculating = true;
let lastOperator;

function btnClick(e) {
    const btnValue = this.textContent;

    switch (btnValue) {
        case 'AC':
            clearDisplay();
            isCalculating = false;
            break;
        case 'Del':
            del();
            isCalculating = false;
            break;
        case '%':
        case '/':
        case '*':
        case '-':
        case '+':
            displayTxt = display.textContent;
            num1 = Number(displayTxt);
            isCalculating = true;
            lastOperator = btnValue;
            break;
        case '=':
            displayTxt = display.textContent;
            displayTxt = operateCal(lastOperator, num1, Number(displayTxt)).toString();
            if(displayTxt === 'Infinity'){
                displayTxt = '0';
                alert('Can not divide by 0');
            }
            if(displayTxt.length > 9){
                displayTxt = displayTxt.substring(0, 9);
            }  
            display.textContent = displayTxt;
            isCalculating = true;
            break;
        default:
            show(btnValue);
            break;
    }
}