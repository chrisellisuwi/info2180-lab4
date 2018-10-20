window.onload = function () {
   /* Ex 1 
    document.getElementById("boundary1").addEventListener("mouseover", mouseOver);
    
    function mouseOver() {
         let ele = document.getElementById("boundary1");
         ele.classList.add("youlose");
        }
    */
    
    //Ex 2
    let bound = document.querySelectorAll("div.boundary");
    
    function loseFunc() {
        for (let j = 0; j < bound.length; j++)
            bound[j].classList.add("youlose");
        document.getElementById("status").innerHTML = "You Lose!"; // Ex 5
    }
    
    for (let i = 0; i < bound.length; i++)
        bound[i].addEventListener("mouseover", loseFunc);
    
    //Ex 3
    document.getElementById("end").addEventListener("mouseover", 
        function (){
            if (document.querySelectorAll(".youlose").length === 0){
               // alert("You Win!");
               document.getElementById("status").innerHTML = "You Win!"; //Ex 5
            }
        });
        
     //Ex 4 
    document.getElementById("start").addEventListener("click", 
        function (){
            if (document.querySelectorAll(".youlose").length > 0){
                let loss= document.querySelectorAll(".youlose");
                for (let i = 0; i < loss.length; i++){
                    loss[i].classList.remove("youlose");
                }
            }
            document.getElementById("maze").addEventListener("mouseleave", loseFunc); //Ex 6
            document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.' //Ex 5
        });
}