
(() => {
  const burgerRef = document.querySelector("[data-menu-burger]");
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  burgerRef.addEventListener("click", () => {
    burgerRef.classList.toggle("is-active");
    mobileMenuRef.classList.toggle("is-open");
  });

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();