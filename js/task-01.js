const bodyEl = document.body;
const paragrafEl = bodyEl.firstElementChild;
const listEl = paragrafEl.nextElementSibling;

const listItemsQuantityEl = listEl.children;
console.log(`Number of categories: ${listItemsQuantityEl.length}`);

const listItemsQuantity = listEl.childNodes;

listItemsQuantity.forEach((item) => {
  if (item.firstElementChild !== undefined) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  }
});

// const numberOfCategories = document.querySelectorAll(".item");
// console.log(
//   `Number of categories: ${document.querySelectorAll(".item").length}`
// );

// numberOfCategories.forEach((number) => {
//   console.log(`Category: ${number.querySelector("h2").textContent}`);
//   console.log(`Elements: ${number.querySelectorAll("li").length}`);
// });
