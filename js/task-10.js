function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
let amount = 0;

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

const onCreateButtonClick = () => {
  createBoxes(amount);
};
const createBoxes = (amount) => {
  const divs = [];
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    width += 10;
    height += 10;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }
  boxes.append(...divs);
};
createButton.addEventListener("click", onCreateButtonClick);

const onDestroyButtonClick = () => {
  for (let div of boxes.querySelectorAll("div")) {
    div.remove();
  }
  input.value = "";
};
destroyButton.addEventListener("click", onDestroyButtonClick);
