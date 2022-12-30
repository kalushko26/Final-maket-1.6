const wrapper = document.querySelector(".container__main")
const blur = document.querySelector(".blurred")
const aside = document.querySelector('.aside');
const asideClose = document.querySelector('.aside--opened');

// Открыть / Закрыть FEED BACK

const btnFeed = document.querySelectorAll(".style-feedback")
const runFeed = document.querySelector(".run-feedback")
const btnFeedClose = document.querySelectorAll(".close-feedback")

for (let el of btnFeed) {
  el.addEventListener("click", () => {

    runFeed.classList.add("btn-hidden");
    aside.classList.remove('aside--opened');
    blur.classList.add('blurred-block')
        document.getElementById("login-namt").focus({preventScroll:true});
  });
}

for (let el of btnFeedClose) {
  el.addEventListener("click", () => {
    blur.classList.remove('blurred-block')
    runFeed.classList.remove("btn-hidden");
  });
}

//   Открыть / Закрыть CALL BACK

const btnCall = document.querySelectorAll(".style-callback")
const runCall = document.querySelector(".run-callback")
const btnCallClose = document.querySelectorAll(".close-callback")

for (let el of btnCall) {
  el.addEventListener("click", () => {
    runCall.classList.add("btn-hidden");
    aside.classList.remove('aside--opened');
    blur.classList.add('blurred-block')
    document.getElementById("login-namt").focus({preventScroll:true});
  });
}

for (let el of btnCallClose) {
  el.addEventListener("click", () => {
    blur.classList.remove('blurred-block')
    runCall.classList.remove("btn-hidden");
  });
}

for(item of asideCallbackBtn) {
  item.addEventListener('click', function() {
  callback.classList.add('callBack__open')
  callback.classList.remove('callBack__hidden')

  aside.classList.remove('aside__open');
  blur.classList.add('blur-block');
  document.getElementById("callBack__phone").focus({preventScroll:true});
});
}
