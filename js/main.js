// for Mobile Menu//

const navLinks = document.getElementById("mobile_menu");
const header = document.getElementsByClassName("header");
function showMenu(){
    navLinks.style.right = "0px";
}
function hideMenu(){
    navLinks.style.right = "-250px";
}

window.addEventListener("scroll", () => {
    if(window.scrollY === 100){
        header.style.background = "red";
    }
})
