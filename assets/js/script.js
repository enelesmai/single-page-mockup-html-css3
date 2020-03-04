var attend = document.getElementById("attend");
var sticky = attend.offsetHeight;
var windowHeight = window.innerHeight;
var bodyHeight = document.body.offsetHeight;

window.onscroll = function () { myFunction() };
window.onresize = function() { resizeW() };

function myFunction() {
    if ((windowHeight + window.scrollY) >= bodyHeight - sticky) {     
        attend.classList.remove("fixed-bottom");
    }else{
        attend.classList.add("fixed-bottom");
    }
}

function resizeW(){
    windowHeight = window.innerHeight;
    bodyHeight = document.body.offsetHeight;
}
