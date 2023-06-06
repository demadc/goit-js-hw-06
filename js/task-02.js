const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEls = [...ingredients].map(item => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  itemEl.classList.add("item");
  return itemEl;
})
//console.log("🚀 ~ ingredientsEls:", ingredientsEls)

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsEls);
