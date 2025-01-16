let tap=document.querySelectorAll(".tap_txt");
         console.log(tap)
         tap[0].classList.add("active");
        tap.forEach(function(taps){
            taps.addEventListener("click",function(){
                for(let i=0; i<tap.length; i++){
                    tap[i].classList.remove("active");
                }
                taps.classList.add("active");
            })
        })