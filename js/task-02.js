const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsEl = ingredients.map((ingredient) => {
  const ingredienEl = document.createElement("li");
  ingredienEl.classList.add("item");
  ingredienEl.textContent = ingredient;
  return ingredienEl;
});

document.querySelector("#ingredients").append(...itemsEl);
