const cabecalho = document.querySelector(".cabecalho__menu");
const cabecalhoSubmenu = document.querySelector(".cabecalho__submenu");
const cabecalhoMenuHamburger = document.querySelector(".cabecalho__menu--hamburger");
const botaoHamburger = document.querySelector(".menu__hamburger--botao");
const hamburgerImagem = document.querySelector(".menu__hamburger--botao img");

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
  telaHTMLPaddingTop = parseInt(getComputedStyle(document.querySelector("html")).paddingTop);
  if(telaPosY > telaPosYAntigo && telaPosY > telaHTMLPaddingTop) {
    cabecalho.classList.add("cabecalho__menu-dinamico");
  } else if (telaPosY < telaPosYAntigo) {
    cabecalho.classList.remove("cabecalho__menu-dinamico");
  }
});