var billAmt = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var calcBtn = document.querySelector(".calc-btn");
var output = document.querySelector(".output-div");
var noOfNotes = document.querySelectorAll("#no-of-notes");

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

function calculate(input) {
  var change = input.cashGivenVal - input.billAmtVal;
  const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  for (let i = 0; i < notes.length; i++) {
    const numNote = Math.trunc(change / notes[i]);
    change %= notes[i];
    console.log(numNote, change, notes[i]);

    noOfNotes[i].innerText = numNote;
  }
}

function alert() {
  output.innerText =
    "Error: The values cant be null,negative or zero and the cashgiven should be greater than bill amount";
}
