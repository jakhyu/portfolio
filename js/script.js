let gnbLink=document.querySelectorAll(".gnb-link");
let openMenu=document.querySelector(".open-menu");
let mobileWrap=document.querySelector(".mobile-wrap");


gnbLink.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        let target=this.getAttribute("href");
        let targetPos=document.querySelector(target).offsetTop
        console.log(targetPos)
        window.scrollTo({top:targetPos, behavior:"smooth"})
        mobileWrap.classList.remove("active");
        openMenu.classList.remove("active");
      
    })
});

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

window.addEventListener("scroll", function(){
    let scroll=window.scrollY;
    if(w<=1100){
        if(scroll>header.offsetHeight){
            header.classList.add("fixed")
        }else{
            header.classList.remove("fixed")
        }
        
    }
    // for(let k=0; k<links.length;k++){
    //     if(scroll>=secTop[k] && scroll<secTop[k]+w){
    //         for(let i=0; i<links.length;i++){
    //        links[i].classList.remove("on")
    //         } 
    //         links[k].classList.add("on")
    //     }
    // }
    
})

openMenu.addEventListener("click", function(){
    this.classList.toggle("active");
    mobileWrap.classList.toggle("active");
})


let portLink=document.querySelectorAll(".port-link")
let modal=document.querySelector(".gr-modal")
let btnClose=document.querySelector(".btn-close")
let asideThum=document.querySelector("#aside-thum")
let portImg=document.querySelectorAll(".port-link img")
portLink.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        //let num=portImg[1].getAttribute("data-idx");
        let num=this.children[0].children[0].getAttribute("data-idx")
        console.log(num)
        modal.style.display="block";
        asideThum.setAttribute("src", `./port/graphic/gr_${num}.jpg`)
        
    })
})

btnClose.addEventListener("click", function(){
    modal.style.display="none"
})