const display = document.getElementById("display");
const numButtons = document.querySelectorAll("#nums .numButton");

let expression = "";
let previousResult = null;

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.textContent;
    display.textContent = expression;
  });
});

const equalsButton = document.getElementById("equalsButton");

equalsButton.addEventListener("click", () => {
  if (expression.length > 0) {
    const result = eval(expression);
    display.textContent = result;
    expression = result.toString();
  }
});

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", () => {
  expression = expression.slice(0, -1);
  display.textContent = expression;
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
  expression = "";
  display.textContent = "";
});
