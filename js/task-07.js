const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

const onInputInput = () => {
  textSpan.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", onInputInput);
