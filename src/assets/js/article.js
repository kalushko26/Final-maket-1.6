let showAllCategoriesText = document.querySelector('.article__btn-text');
let showAllCategoriesIcon = document.querySelector('.article__btn-img-box');



document.querySelector('.article__btn').addEventListener('click', toggleDescription);

function toggleDescription(event) {

  document.querySelector('.article__text').classList.toggle('article__text--showall');

  if (showAllCategoriesText.innerText == 'Читать далее') {
    showAllCategoriesText.innerText = 'Скрыть';
    showAllCategoriesIcon.classList.add('article__btn-img-box--rotated--180');
  } else {
    showAllCategoriesText.innerText = 'Читать далее';
    showAllCategoriesIcon.classList.remove('article__btn-img-box--rotated--180');
  }


}
