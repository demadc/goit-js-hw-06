const categoriesEls = document.querySelector('#categories');
const categoriesItems = categoriesEls.children;
console.log("🚀 Number of categories:", categoriesItems.length)
const categoryOfEls = [...categoriesItems].forEach(item => {
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.children.length)
})


 