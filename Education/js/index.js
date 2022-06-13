// burger = document.querySelector(".burber");
// navbar = document.querySelector(".navbar");
// navList = document.querySelector(".navlist");
// rightNav = document.querySelector(".rightNav");

// burger.addEventListener('click', () => {
//   rightNav.classList.toggle("v-class-resp");
//   navList.classList.toggle("v-class-resp");
//   navbar.classList.toggle("h-nav-resp");
// });

const burger = document.querySelector(".burger")
const navbar = document.querySelector(".navbar")
const navList = document.querySelector(".nav-list")
const rightnav = document.querySelector(".rightnav")

burger.addEventListener("click" ,() => {
        navList.classList.toggle("v-class-resp");
        rightnav.classList.toggle("v-class-resp");
        navbar.classList.toggle("h-nav-resp");
});

