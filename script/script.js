const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const scroller = document.querySelector(".scroller");
const nav = document.querySelector(".contained-ul");


//when the user clicks on the hamburger, it will be hided, displays the ul hidden on the phone mode and displays also the cross sign.
hamburger.onclick = function changeicon1() {
    cross.classList.add("crosshide");
    hamburger.classList.remove("hamburger");
    hamburger.classList.add("hamburgerhide");
    nav.classList.add("contained-ul-appear");
    nav.classList.remove("contained-ul");
}


//the opposite word of the first function
cross.onclick = function changeicon2() {
    cross.classList.remove("crosshide");
    hamburger.classList.add("hamburger");
    hamburger.classList.remove("hamburgerhide")
    nav.classList.remove("contained-ul-appear");
    nav.classList.add("contained-ul");
}


//when scroll passes the scoller sign it will disappear
function scrollerhider() {
    if (this.scrollY >= 550) scroller.classList.add("scrollerhide");
    else scroller.classList.remove("scrollerhide");
}
window.addEventListener("scroll", scrollerhider);