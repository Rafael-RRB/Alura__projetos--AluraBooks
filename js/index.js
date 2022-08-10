const cabecalho = document.querySelector(".cabecalho__menu");
const cabecalhoSubmenu = document.querySelector(".cabecalho__submenu");
const cabecalhoMenuHamburger = document.querySelector(".cabecalho__menu--hamburger");
const botaoHamburger = document.querySelector(".menu__hamburger--botao");
const hamburgerImagem = document.querySelector(".menu__hamburger--botao img");

const submenuHamburger = document.querySelector(".cabecalho__submenu");
const submenuMenuMeio = document.querySelector(".menu__meio--submenu");

var telaPosY = 0;

botaoHamburger.addEventListener("click", (evento) => {
    console.log("Click");
    if(cabecalhoSubmenu.classList.contains("inativo")) {
        cabecalhoSubmenu.classList.remove("inativo");
        cabecalhoMenuHamburger.classList.add("ativo");
        botaoHamburger.classList.add("ativo");
        hamburgerImagem.src = "img/menu_black_24dp_1.svg";
    } else {
        cabecalhoSubmenu.classList.add("inativo");
        cabecalhoMenuHamburger.classList.remove("ativo");
        botaoHamburger.classList.remove("ativo");
        hamburgerImagem.src = "img/Menu.svg";
    }
});

window.addEventListener("scroll", event => {
  telaPosYAntigo = telaPosY;
  telaPosY = window.pageYOffset;
  telaHeaderAltura = parseInt(getComputedStyle(document.querySelector(".cabecalho__menu")).height);
  
  if(getComputedStyle(submenuHamburger).display === "none" && getComputedStyle(submenuMenuMeio).display === "none") {
    if(telaPosY > telaPosYAntigo && telaPosY > telaHeaderAltura) {
      cabecalho.classList.add("cabecalho__menu-esconde");
    } else if (telaPosY < telaPosYAntigo) {
      cabecalho.classList.remove("cabecalho__menu-esconde");
    }
  }
});