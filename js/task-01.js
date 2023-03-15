const numberOfCategories = document.querySelectorAll(".item");
console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);

numberOfCategories.forEach((number) => {
  console.log(`Category: ${number.querySelector("h2").textContent}`);
  console.log(`Elements: ${number.querySelectorAll("li").length}`);
});
