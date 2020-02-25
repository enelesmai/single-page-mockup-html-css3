window.onscroll = function () { myFunction() };

var attend = document.getElementById("attend");

var sticky = attend.offsetHeight;

function myFunction() {
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight-sticky) {     
        attend.classList.remove("fixed-bottom");
    }else{
        attend.classList.add("fixed-bottom");
    }
}