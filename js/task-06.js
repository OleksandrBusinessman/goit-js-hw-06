const input = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  if (event.currentTarget.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else if (
    event.currentTarget.value.length === Number(input.dataset.length)
  ) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", onInputBlur);
