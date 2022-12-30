let modal_counter = 0;

function checkModalOpened(evt) {
  if (modal_counter != 0) {
    evt.preventDefault();
  }
};

document.addEventListener('wheel', checkModalOpened, { passive: false });
document.addEventListener('drag', checkModalOpened, { passive: false });
document.addEventListener('touchmove', checkModalOpened, { passive: false });

document.addEventListener('click', hideSideMenu);

function hideSideMenu(event) {
  if (event.target.matches("#closesidemenu *") || (!event.target.closest(".side-menu") && window.innerWidth < 1366)) {
    document.querySelector('.aside').classList.remove('aside--opened');

    if (!event.target.matches("#open_modalchat") && !event.target.closest("#open_modalchat") && !event.target.matches("#open_modalfeedback") && !event.target.closest("#open_modalfeedback")) {
      document.querySelector('.container__main').classList.remove('blurred');
    }
    modal_counter = 0;
  }
}

document.addEventListener('click', openSideMenu);

function openSideMenu(event) {
  if (event.target.matches("#open_burger") || event.target.closest("#open_burger")) {
    document.querySelector('.aside').classList.add('aside--opened');
    document.querySelector('.container__main').classList.add('blurred');
    modal_counter = 1;
  }
}


let windowSize = window.innerWidth;
if (windowSize >= 1366) {
  document.querySelector('.aside').classList.add('aside--opened');
  document.querySelector('.container__main').classList.remove('blurred');
} else {
  document.querySelector('.aside').classList.remove('aside--opened');
}

function WindowSize() {
  let ws = window.innerWidth;
  if (ws >= 1366) {
    document.querySelector('.aside').classList.add('aside--opened');
    document.querySelector('.container__main').classList.remove('blurred');
    modal_counter = 0;
  } else {
    document.querySelector('.aside').classList.remove('aside--opened');
    document.querySelector('.container__main').classList.remove('blurred');
    modal_counter = 0;
  }
};

window.addEventListener('resize', WindowSize);
