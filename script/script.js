const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const scroller = document.querySelector(".scroller");
const nav = document.querySelector(".contained-ul");
const navbar = document.querySelector("nav");


//when the user clicks on the hamburger, it will be hided, displays the ul hidden on the phone mode and displays also the cross sign.
function changeicon1() {
    cross.classList.add("crosshide");
    hamburger.classList.remove("hamburger");
    hamburger.classList.add("hamburgerhide");
    nav.classList.add("contained-ul-appear");
}
hamburger.addEventListener("click", changeicon1);


//the opposite operation of the first function
function changeicon2() {
    cross.classList.remove("crosshide");
    hamburger.classList.add("hamburger");
    hamburger.classList.remove("hamburgerhide")
    nav.classList.remove("contained-ul-appear");
}

cross.addEventListener("click", changeicon2);


//when scroll passes the scoller sign it will disappear
function scrollerhider() {
    if (this.scrollY >= 600) scroller.classList.add("scrollerhide");
    else scroller.classList.remove("scrollerhide");
}

window.addEventListener("scroll", scrollerhider);

//add shadow when some scroll happening
function navbarshadow() {
    if (this.scrollY >= 90) {
        navbar.classList.add("nav_bar_shadow");
    } else {
        navbar.classList.remove("nav_bar_shadow");
    }
}

window.addEventListener("scroll", navbarshadow);