// Напиши скрипт который:

// 1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
//  заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// 1).

const quantityCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', quantityCategories.length);

// 2).

quantityCategories.forEach(element => {
    const titleEl = element.firstElementChild.textContent;
    console.log(`Category: ${titleEl}`);
    const ulChildRef = element.lastElementChild.children.length;
    console.log(`Elements: ${ulChildRef}`);
});
