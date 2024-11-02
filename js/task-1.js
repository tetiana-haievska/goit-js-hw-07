const categoryList = document.querySelector('#categories');
const categoryItem = categoryList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach((item) => {
  const itemTitle = item.querySelector('h2').textContent;
  const itemCount = item.querySelectorAll('li').length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${itemCount}`);
});
