var billAmt = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var calcBtn = document.querySelector(".calc-btn");
var output = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const input = inputVal();
  if (validateInput(input)) {
    validateAmt(input);
    calculate(input);
  } else {
    alert();
  }

  console.log(input.billAmtVal, input.cashGivenVal);
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
  return true;
}

function validateAmt(input) {
  if (input.cashGivenVal > input.billAmtVal) return true;
  else {
    output.innerText = "Cashgiven should be greater than Billamount.";
  }
}

function calculate() {
  console.log("yayy");
}

function alert() {
  output.innerText = "Enter positive values.";
}
