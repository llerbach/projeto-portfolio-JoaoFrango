const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

/*trocar o icone de lista para o X e add e remover o menu*/
menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});
