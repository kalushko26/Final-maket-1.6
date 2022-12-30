
let showAllCategoriesText = document.querySelector('#repaircategory .section__btn-text');
let showAllCategoriesIcon = document.querySelector('#repaircategory .section__btn-img-box');

document.querySelector('#repaircategory .section__btn').addEventListener('click', toggleDescription);

function toggleDescription(event) {

  document.querySelector('.swiper--height--300').classList.toggle('swiper--showall');

  if (showAllCategoriesText.innerText == 'Показать все') {
    showAllCategoriesText.innerText = 'Скрыть';
    showAllCategoriesIcon.classList.add('section__btn-img-box--rotated--180');
  } else {
    showAllCategoriesText.innerText = 'Показать все';
    showAllCategoriesIcon.classList.remove('section__btn-img-box--rotated--180');
  }

}
