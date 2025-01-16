/*객체 저장소*/
let btn=document.querySelector(".btn_family");
let site=document.querySelector(".family_site");

    btn.addEventListener("click", function(e){
    e.preventDefault();
    site.classList.toggle("open");
    return false;
})
/*뒤로가기*/
let back=document.querySelectorAll(".btn_back");  
document.querySelector(".btn_back").addEventListener("click",function(){
    history.back();
})



