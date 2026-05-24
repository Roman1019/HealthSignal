const swiper = new Swiper(".experts-swiper", {
  slidesPerView: 4,
  spaceBetween: 40,

  pagination: {
    el: ".experts-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".feedback-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    loop: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    speed: 600,
  });
});
