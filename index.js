const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const btnEl = document.getElementById("calculate");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;

  if ((billValue < 0) | (tipValue < 0)) {
    alert("Please enter positive values only!");
  } else {
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = `$${totalValue.toFixed(2)}`;
  }
}

btnEl.addEventListener("click", calculateTotal);
