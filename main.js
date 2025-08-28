// Step 1 - Find all the elements we need to interact with
const num1Input = document.getElementById('number1')
const num2Input = document.getElementById('number2')
const operatorSelect = document.getElementById('operator')
const calculateButton = document.getElementById('calculateButton')
const resultSpan = document.getElementById('result')

// Step 2 - Add an event listener to the button to call a function when clicked
calculateButton.addEventListener('click', calculate)

function calculate() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const operator = operatorSelect.value;

    let result

    // if num 1 is not a number or num 2 is not a number, make result "Two numbers were not given. Please try again."

    if (true) // Change to else statement once if statement above is complete.
    {
        if (operator === "+") {result = num1 + num2}

        else if (operator === "-") {result = num1 - num2}

        else if (operator === "*") {result = num1 * num2}

        else if (operator === "/") {result = num1 / num2}
    }
    
    // Step 3 - update the result span with the result of the calculation
    resultSpan.innerText = result;
}