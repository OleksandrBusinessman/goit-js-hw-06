let counterValue = 0;
const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
let value = document.querySelector("#value");

const onDecrementButtonClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decrementButton.addEventListener("click", onDecrementButtonClick);

const onIncrementButtonClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
incrementButton.addEventListener("click", onIncrementButtonClick);
