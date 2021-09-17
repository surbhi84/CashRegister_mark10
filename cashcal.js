var billAmt = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var calcBtn = document.querySelector(".calc-btn");
var output = document.querySelector(".output-div");

calcBtn.addEventListener("click",clickHandler);

function clickHandler(){
const input = inputVal();



console.log(input.billAmtVal,input.cashGivenVal);
}

function inputVal() {
return{
    billAmtVal : parseFloat(billAmt.value),
    cashGivenVal : parseFloat(cashGiven.value),
};   
}