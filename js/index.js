// // text area
// let displayInput = document.getElementById("show-text");

// // get all clicked button elements in text area
// let buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     displayInput.value += event.target.innerText;
//   });
// });

// // submit button click event to show result
// let submitButton = document.getElementById("submit")
// submitButton.addEventListener('click', () => {
//   let output = displayInput.value;
//   let expression = output.replace('=', '')
//     .replace(/x²/g, '**2')
//     .replace(/x³/g, '**3')
//     .trim();
//   let solution = eval(expression);
//   displayInput.value = solution;
// });

// // clear button event
// let clearButton = document.getElementById("clearbtn")
// clearButton.addEventListener('click', () => {
//   displayInput.value = "";
// });

// // square value
// let squareButton = document.getElementById("squarebtn");
// squareButton.addEventListener("click", () => {
//   let square = displayInput.value;
//   if (square !== "") {
//     let num = Number(square);

//     if (!isNaN(num)) {
//       displayInput.value = num ** 2;
//     }
//   }
// });

// // cube value
// let cubeButton = document.getElementById("cubebtn");
// cubeButton.addEventListener("click", () => {
//   let cube = displayInput.value;
//   if (cube !== "") {
//     let num = Number(cube);

//     if (!isNaN(num)) {
//       displayInput.value = num ** 3;
//     }
//   }
// });

const display = document.getElementById("show-text");
const button = document.querySelectorAll("button");

let num1 = "";
let num2 = "";
let operator = "";

button.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "C") {
      display.value = "";
      num1 = num2 = operator = "";
    }
    else if (value === "=") {
      if (num1 && num2 && operator) {
        let a = parseFloat(num1);
        let b = parseFloat(num2);
        let result;

        switch (operator) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = b === 0 ? 'error' : a / b;
            break;

        }
        display.value = result;
      }
    }
    else if (value === "x²") {
      let n = parseFloat(display.value);
      display.value = n * n;
      num1 = display.value;
    }

    else if (value === "x³") {
      let n = parseFloat(display.value);
      display.value = n * n * n;
      num1 = display.value;
    }

    else if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      num1 = display.value;
      display.value += value;
    }

    else {
      display.value += value;

      if (!operator) {
        num1 = display.value;
      }
      else {
        num2 = display.value.split(operator)[1];
      }
    }

  });
});