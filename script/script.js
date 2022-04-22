const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const scroller = document.querySelector(".scroller");
const nav = document.querySelector(".contained-ul");
const navbar = document.querySelector("nav");


//when the user clicks on the hamburger, it will be hided, displays the ul hidden on the phone mode and displays also the cross sign.
hamburger.onclick = function changeicon1() {
    cross.classList.add("crosshide");
    hamburger.classList.remove("hamburger");
    hamburger.classList.add("hamburgerhide");
    nav.classList.add("contained-ul-appear");
}


//the opposite operation of the first function
cross.onclick = function changeicon2() {
    cross.classList.remove("crosshide");
    hamburger.classList.add("hamburger");
    hamburger.classList.remove("hamburgerhide")
    nav.classList.remove("contained-ul-appear");
}


//when scroll passes the scoller sign it will disappear
function scrollerhider() {
    if (this.scrollY >= 600) scroller.classList.add("scrollerhide");
    else scroller.classList.remove("scrollerhide");
}

//add shadow when some scroll happening
function navbarshadow() {
    if (this.scrollY >= 90) {
        navbar.classList.add("nav_bar_shadow");
    } else {
        navbar.classList.remove("nav_bar_shadow");
    }
}

window.addEventListener("scroll", scrollerhider);
window.addEventListener("scroll", navbarshadow);