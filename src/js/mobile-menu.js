(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobileLinkRef = document.querySelector("[link-close]");
  const mobileLinkRef1 = document.querySelector("[link-close1]");
  const mobileLinkRef2 = document.querySelector("[link-close2]");
  const mobileLinkRef3 = document.querySelector("[link-close3]");
  const mobileLinkRef4 = document.querySelector("[link-close4]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileLinkRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileLinkRef1.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  mobileLinkRef2.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  mobileLinkRef3.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  mobileLinkRef4.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();