        let arrow=document.querySelectorAll(".d2_name");
        let sit=document.querySelectorAll(".s_depth2");
        
        arrow[0].addEventListener("click", function(e){
            e.preventDefault(); 
           sit.forEach(function(k){
            k.classList.remove("active");
           })
            sit[0].classList.add("active");
         
        })
        arrow[1].addEventListener("click", function(e){
            e.preventDefault(); 
            sit.forEach(function(k){
                k.classList.remove("active");
               })
            sit[1].classList.add("active");
            
        })