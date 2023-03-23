const form = document.querySelector(".login-form");

const onButtonLoginClick = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля!!!");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  if (email.value !== "" && password.value !== "") {
    console.log(userData);
  }
  event.currentTarget.reset();
};
form.addEventListener("submit", onButtonLoginClick);
