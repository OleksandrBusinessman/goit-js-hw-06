const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsEl = ingredients.map((ingredient) => {
  const ingrediensEl = document.createElement("li");
  ingrediensEl.classList.add("item");
  ingrediensEl.textContent = ingredient;
  return ingrediensEl;
});

const listEl = document.querySelector("#ingredients");

listEl.append(...itemsEl);
