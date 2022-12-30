
let showAllSectionText = document.querySelector('#section .section__btn-text');
let showAllSectionIcon = document.querySelector('#section .section__btn-img-box');

document.querySelector('#section .section__btn').addEventListener('click', toggleDescription);

function toggleDescription(event) {

    document.querySelector('.section__text').classList.toggle('section__text--showall');

  if(showAllSectionText.innerText == 'Читать далее') {
    showAllSectionText.innerText = 'Скрыть';
    showAllSectionIcon.classList.add('section__btn-img-box--rotated--180');
    } else {
      showAllSectionText.innerText = 'Читать далее';
      showAllSectionIcon.classList.remove('section__btn-img-box--rotated--180');
    }

}
