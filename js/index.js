const cabecalhoSubmenu = document.querySelector(".cabecalho__submenu");
const cabecalhoMenuHamburger = document.querySelector(".cabecalho__menu--hamburger");
const botaoHamburger = document.querySelector(".menu__hamburger--botao");
const hamburgerImagem = document.querySelector(".menu__hamburger--botao img");

botaoHamburger.addEventListener("click", (evento) => {
    console.log("Click");
    if(cabecalhoSubmenu.classList.contains("inativo")) {
        cabecalhoSubmenu.classList.remove("inativo");
        cabecalhoMenuHamburger.classList.add("ativo");
        botaoHamburger.classList.add("ativo");
        hamburgerImagem.src = "../img/menu_black_24dp_1.png";
    } else {
        cabecalhoSubmenu.classList.add("inativo");
        cabecalhoMenuHamburger.classList.remove("ativo");
        botaoHamburger.classList.remove("ativo");
        hamburgerImagem.src = "../img/Menu.svg";
    }
});