const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
textSpan.style.fontSize = `${input.value}px`;

const onInputInput = () => {
  textSpan.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", onInputInput);
