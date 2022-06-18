const menuBtn = document.querySelector(".menu-btn");
const menuBurger = document.querySelector(".menu-btn__burger");
const menuNav = document.querySelector(".menu-nav");
const menuNavItems = document.querySelector(".menu-nav__items");
const menuNavList = document.querySelectorAll(".menu-nav__item");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    menuBurger.classList.add("open");
    menuNav.classList.add("open");
    menuNavItems.classList.add("open");
    menuNavList.forEach((item) => item.classList.add("open"));

    isOpen = true;
  } else {
    menuBurger.classList.remove("open");
    menuNav.classList.remove("open");
    menuNavItems.classList.remove("open");
    menuNavList.forEach((item) => item.classList.remove("open"));

    isOpen = false;
  }
});
