$(document).ready(function(){
  const burgerRef = document.querySelector("[data-menu-burger]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  burgerRef.addEventListener("click", () => {
    burgerRef.classList.toggle("is-active");
    mobileMenuRef.classList.toggle("is-open");
  });
});