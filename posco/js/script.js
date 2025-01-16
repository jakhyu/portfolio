
$(function() {

    $(".menu-link").click(function(e) {
    e.preventDefault();

    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");

});
});

// let tits = document.querySelectorAll(".tit");
// let lnbs = document.querySelectorAll(".lnb");

// function activateAccordion() {
// tits.forEach(function(tit) {
// tit.addEventListener("click", function() {
//     if (window.innerWidth >= 800) return;

//     let sub = this.nextElementSibling;
    
//     if (tit.classList.contains("active") === false) {
//         for (let i = 0; i < lnbs.length; i++) {
//             lnbs[i].style.maxHeight = 0 + "px";
//         }
//         sub.style.maxHeight = sub.scrollHeight + "px";
//         for (let k = 0; k < tits.length; k++) {
//             tits[k].classList.remove("active");
//         }
//         this.classList.add("active");
//     } else {
//         this.classList.remove("active");
//         sub.style.maxHeight = 0 + "px";
//     }
// });
// });
// }

// function handleResize() {
// if (window.innerWidth >= 800) {
// tits.forEach(function(tit) {
//     let sub = tit.nextElementSibling;
//     sub.style.maxHeight = sub.scrollHeight + "px";
//     tit.classList.remove("active"); 
// });
// } else {
// tits.forEach(function(tit) {
//     let sub = tit.nextElementSibling;
//     sub.style.maxHeight = 0 + "px";
// });
// activateAccordion(); 
// }
// }

// window.addEventListener("resize", handleResize);
// handleResize(); 
let tits = document.querySelectorAll(".tit");
let lnbs = document.querySelectorAll(".lnb");

function resetAccordion() {
    lnbs.forEach(lnb => lnb.style.maxHeight = "0px");
    tits.forEach(tit => tit.classList.remove("active"));
}

function activateAccordion() {
    tits.forEach(function(tit) {
        tit.addEventListener("click", function() {
            if (window.innerWidth >= 800) return;

            let sub = this.nextElementSibling;
            if (!tit.classList.contains("active")) {
                resetAccordion();
                sub.style.maxHeight = sub.scrollHeight + "px";
                tit.classList.add("active");
            } else {
                tit.classList.remove("active");
                sub.style.maxHeight = "0px";
            }
        });
    });
}

function handleResize() {
    if (window.innerWidth >= 800) {
        tits.forEach(function(tit) {
            let sub = tit.nextElementSibling;
            sub.style.maxHeight = sub.scrollHeight + "px";
            tit.classList.remove("active");
        });
    } else {
        resetAccordion();
        activateAccordion();
    }
}

let resizeTimer;
window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 100); // 디바운싱 적용
});

handleResize();


let tabitem=document.querySelectorAll(".tab");
let pannels=document.querySelectorAll(".tabpanel");

tabitem.forEach(function(item, idx){
    item.addEventListener("click", function(e){
        e.preventDefault();
        for(let i=0; i<tabitem.length; i++){
            tabitem[i].classList.remove("active");
            pannels[i].classList.remove("active");
        }
        this.classList.add("active");
        pannels[idx].classList.add("active");
    })
});

var topButton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.opacity = "1"; 
    } else {
        topButton.style.opacity = "0"; //
    }
}

topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

    

 
    


   
              