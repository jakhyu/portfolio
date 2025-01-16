function init() {

}
init();

AOS.init();


$(window).on('scroll',function(){
if($(window).scrollTop()){
    $('#header').addClass('active');
}else{
    $('#header').removeClass('active');
}
});

$(window).on('scroll',function(){
if($(window).scrollTop()){
    $('.back').addClass('active');
}else{
    $('.back').removeClass('active');
}
});
$(window).on('scroll',function(){
if($(window).scrollTop()){
    $('.btn-icon').addClass('active');
}else{
    $('.btn-icon').removeClass('active');
}
});
$(window).on('scroll',function(){
if($(window).scrollTop()){
    $('.op-an').addClass('active');
}else{
    $('.op-an').removeClass('active');
}
});


let gnbLink=document.querySelectorAll(".gnb-link");
let openMenu=document.querySelector(".open-menu");
let mobileWrap=document.querySelector(".mobile-wrap");

let w=window.innerWidth;
let header=document.querySelector("#header");

window.addEventListener("resize", function(){
w=window.innerWidth;
console.log(w)
if(w>1100){
    header.classList.remove("fixed")
    mobileWrap.classList.remove("active");
    openMenu.classList.remove("active");
}

});
openMenu.addEventListener("click", function(){
this.classList.toggle("active");
mobileWrap.classList.toggle("active");
})
var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 3,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
keyboard: true,
breakpoints: {
    600:{
        slidesPerView: 2, 
        spaceBetween: 3,
    },
    800: {
            slidesPerView: 3, 
            spaceBetween: 3,
        },
    }
});