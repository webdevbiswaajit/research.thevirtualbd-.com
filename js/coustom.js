var toggleBtn = document.getElementById("toggle_btn");
var mobileMenu = document.getElementById("mobileMenu");
function toggleMenu() {
  if (mobileMenu.style.display == "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".postSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".recharchSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// seemore seeless
$(document).ready(function () {
  var list = $(".partners__ul li");
  var numToShow = 10;
  var button = $(".partners__button__a");
  var numInList = list.length;
  var isShowing = true;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    if (isShowing) {
      list.slice(showing - 1, showing + numToShow).fadeIn(100, onFadeComplete);
    } else {
      list.slice(showing - numToShow, numInList).fadeOut(100, onFadeComplete);
    }
  });

  function onFadeComplete() {
    var nowShowing = list.filter(":visible").length;

    if (nowShowing == numInList && isShowing) {
      isShowing = false;
      button.text("Show less");
    } else if (isShowing) {
      button.text("Show more");
    }

    if (nowShowing == numToShow) {
      button.text("Show more");
      isShowing = true;
    }
  }
});
