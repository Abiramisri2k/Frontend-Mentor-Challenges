const billInput = document.getElementById("billInput");
const peopleInput = document.getElementById("peopleInput");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTip = document.getElementById("customTip");
const tipAmountDisplay = document.getElementById("tipAmount");
const totalAmountDisplay = document.getElementById("totalAmount");
const resetBtn = document.getElementById("resetBtn");
const peopleError = document.querySelector(".people label span");

let billAmount;
let tipPercentage;
let numberOfPeople;

function calculate() {

  if (billAmount > 0 && numberOfPeople > 0) {
    const tipPerPerson = (billAmount * tipPercentage) / 100 / numberOfPeople;
    const totalPerPerson = billAmount / numberOfPeople + tipPerPerson;

    tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    resetBtn.classList.add("active");
  } else {
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
  }
}

billInput.addEventListener("input", (e) => {
  billAmount = parseFloat(e.target.value) || 0;
  calculate();
});

peopleInput.addEventListener("input", (e) => {
  numberOfPeople = parseInt(e.target.value);

  if (!numberOfPeople || numberOfPeople === 0) {
    peopleError.classList.add("empty");
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    return;
  } else {
    peopleError.classList.remove("empty");
  }

  calculate();
});


tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    customTip.value = "";
    button.classList.add("active");

    customTip.value = ""; 
    tipPercentage = parseFloat(button.dataset.tip);
    calculate();
  });
});

customTip.addEventListener("input", (e) => {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  tipPercentage = parseFloat(e.target.value) || 0;
  calculate();
});
resetBtn.addEventListener("click", () => {
  billAmount = 0;
  tipPercentage = 0;
  numberOfPeople = 0;
  billInput.value = " ";
  peopleInput.value = " ";
  customTip.value = "";
  tipAmountDisplay.textContent = "$0.00";
  totalAmountDisplay.textContent = "$0.00";
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  resetBtn.classList.remove("active");
});