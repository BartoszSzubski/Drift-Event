const hamburgerMenu = document.querySelector("#hamburger-menu");
const mainNavbar = document.querySelector("#navbar");
const content = document.querySelector(".content");

hamburgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mainNavbar.classList.toggle("navbar--active");
  hamburgerMenu.classList.toggle("hamburger--open");
  content.style.display = content.style.display === "none" ? "block" : "none";
}
