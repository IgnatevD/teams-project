$(document).ready(function(){
  const burgerRef = document.querySelector("[data-menu-burger]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelectorAll("[data-menu-close]");
  
  burgerRef.addEventListener("click", () => {
    burgerRef.classList.toggle("is-active");
    mobileMenuRef.classList.toggle("is-open");
  });
  mobileBtnClose.forEach(e => {
    e.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      burgerRef.classList.toggle("is-active");
    });
  });
});