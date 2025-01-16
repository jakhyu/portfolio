
// let sjnav=document.querySelector(".m_nav_wrap");
// let mnav=document.querySelector(".menu");
//     mnav.addEventListener("click",function(){
//         sjnav.classList.add("on")
//     })

// let tits=document.querySelectorAll(".m_tit");
// console.log(tits);
// tits[0].classList.add("active");
// tits[0].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[1].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[2].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[3].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[4].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[5].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[6].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
// tits[7].addEventListener("click",function(){
//     for(let k=0; k<tits.length; k++){
//     tits[k].classList.remove("active");
//     }
//     this.classList.add("active")
// })
const tits = document.querySelectorAll(".m_tit");
console.log(tits);

tits.forEach((tit) => {
    tit.addEventListener("click", function () {
        tits.forEach((t) => t.classList.remove("active")); // 모든 탭의 active 제거
        this.classList.add("active"); // 현재 탭에 active 추가
    });
});

// 첫 번째 탭 활성화
if (tits.length > 0) {
    tits[0].classList.add("active");
}

tits.forEach((tit) => {
    tit.addEventListener("click", function () {
        tits.forEach((t) => t.classList.remove("active")); // 모든 탭의 active 제거
        this.classList.add("active"); // 현재 탭에 active 추가
    });
});