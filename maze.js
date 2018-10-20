window.onload = function () {
   /* Ex 1 
    document.getElementById("boundary1").addEventListener("mouseover", mouseOver);
    
    function mouseOver() {
         let ele = document.getElementById("boundary1");
         ele.classList.add("youlose");
        }
    */
    
    
    let bound = document.querySelectorAll("div.boundary");
    
    for (let i = 0; i < bound.length; i++){
        
        bound[i].addEventListener("mouseover", 
            function() {
                bound[i].classList.add("youlose");
            })
    };
    
}
