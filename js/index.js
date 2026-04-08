// get text area
const display = document.getElementById("show-text");
// get all button
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