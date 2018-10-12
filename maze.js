window.onload = function () {
    document.getElementById("boundary1").addEventListener("mouseover", mouseOver);
    
    function mouseOver() {
         let ele = document.getElementById("boundary1");
         ele.classList.add("youlose");
        }
}
