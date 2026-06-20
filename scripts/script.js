// =========================
// script.js
// =========================

// MENU MOBILE

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
});

// FECHAR MENU AO CLICAR NUM LINK
const navLink = document.querySelectorAll(".nav-list a");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("active");
    });
});

// HEADER COM SOMBRA AO ROLAR
const header = document.getElementById("header");

function atualizarHeader() {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", atualizarHeader);
atualizarHeader();

// ANIMAÇÃO DE REVEAL AO ROLAR
const elementosReveal = document.querySelectorAll(".reveal");

function revealScroll() {
    const alturaJanela = window.innerHeight;

    elementosReveal.forEach((elemento) => {
        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < alturaJanela - 80) {
            elemento.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealScroll);
revealScroll();

// ANO ATUAL NO FOOTER
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();