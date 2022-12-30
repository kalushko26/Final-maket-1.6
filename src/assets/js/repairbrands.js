
let showAllBrandsText = document.querySelector('#repairbrands .section__btn-text');
let showAllBrandsIcon = document.querySelector('#repairbrands .section__btn-img-box');

document.querySelector('#repairbrands .section__btn').addEventListener('click', toggleDescription);

function toggleDescription(event) {

    document.querySelector('.swiper').classList.toggle('swiper--showall');

  if(showAllBrandsText.innerText == 'Показать все') {
    showAllBrandsText.innerText = 'Скрыть';
    showAllBrandsIcon.classList.add('section__btn-img-box--rotated--180');
    } else {
      showAllBrandsText.innerText = 'Показать все';
      showAllBrandsIcon.classList.remove('section__btn-img-box--rotated--180');
    }

}
