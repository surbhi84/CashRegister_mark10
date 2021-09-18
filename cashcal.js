var billAmt = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var calcBtn = document.querySelector(".calc-btn");
var output = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const input = inputVal();
  if (validateInput(input)) {
    calculate(input);
  } else {
    alert();
  }
}

function inputVal() {
  return {
    billAmtVal: parseFloat(billAmt.value),
    cashGivenVal: parseFloat(cashGiven.value),
  };
}

function validateInput(input) {
  if (isNaN(input.billAmtVal) || isNaN(input.cashGivenVal)) return false;
  if (input.billAmtVal <= 0 || input.cashGivenVal <= 0) return false;
  if (input.cashGivenVal < input.billAmtVal) return false;
  return true;
}

function calculate(input) {}

function alert() {
  output.innerText =
    "Error: The values cant be null,negative or zero and the cashgiven should be greater than bill amount";
}
