
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: false
},
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".pro-bun ", {
slidesPerView: 1,
centeredSlides: false,
slidesPerGroupSkip: 1,
grabCursor: true,
autoplay:{
delay: 2500,
disableOnInteraction: false,
loop: true,

},
keyboard: {
  enabled: true,
},
breakpoints: {
  769: {
    slidesPerView: 4,
    slidesPerGroup: 1,
  },
},
scrollbar: {
  el: ".swiper-scrollbar",
  dragSize: 400,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

});
var swiper = new Swiper(".dif-bun", {
slidesPerView: 1,
centeredSlides: false,
slidesPerGroupSkip: 1,
grabCursor: true,
//   autoplay:{
//   delay: 2500,
//   disableOnInteraction: false,
//   loop: true,

// },
keyboard: {
  enabled: true,
},
breakpoints: {
  769: {
    slidesPerView: 4,
    slidesPerGroup: 1,
  },
},
scrollbar: {
  el: ".swiper-scrollbar",
  dragSize: 400,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

});
var swiper = new Swiper(".biz", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
coverflowEffect: {
rotate: 0,
stretch: 0,
depth: 100,
modifier: 3,
slideShadows: true
},
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true
},
breakpoints: {
640: {
slidesPerView: 2
},
768: {
slidesPerView: 1
},
1024: {
slidesPerView: 2
},
1560: {
slidesPerView: 3
}
}
});