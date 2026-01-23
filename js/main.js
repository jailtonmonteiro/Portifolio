/* =========================
   MENU ATIVO CONFORME SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav a");

function updateActiveMenu() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveMenu);


/* =========================
   SCROLL SUAVE AO CLICAR
========================= */
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 40,
            behavior: "smooth"
        });
    });
});


/* =========================
   MOUSE SPOTLIGHT (OTIMIZADO)
========================= */
const spotlight = document.getElementById("mouse-spotlight");

let mouseX = 0;
let mouseY = 0;
let isTicking = false;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isTicking) {
        window.requestAnimationFrame(() => {
            spotlight.style.left = `${mouseX}px`;
            spotlight.style.top = `${mouseY}px`;
            isTicking = false;
        });
        isTicking = true;
    }
});
