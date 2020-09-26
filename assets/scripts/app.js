const defaultResult = 0;
let currentResult = defaultResult;

function createAndWriteOutput(operator, resultBefore , calcNumber){
    const calcDescr = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult , calcDescr);
}

function add(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", initialResult , enteredNumber);
}

function minus(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initialResult , enteredNumber);
}
function multy(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initialResult , enteredNumber);
}
function div(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initialResult , enteredNumber);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',minus);
multiplyBtn.addEventListener('click',multy);
divideBtn.addEventListener('click',div);


