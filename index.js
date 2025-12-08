    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const menuLinks = sidebar.querySelectorAll("a");

    sidebarToggle.addEventListener("click", () => {
        sidebarToggle.classList.toggle("active");
        sidebar.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
            sidebarToggle.classList.remove("active");
        });
    });

    // NOUVEAU : Script pour masquer/afficher la navbar au scroll
let lastScroll = 0;
const navbar = document.querySelector('nav.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Si on est en haut de la page, toujours afficher
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }
    
    // Si on scrolle vers le bas et qu'on a dépassé la hauteur de la navbar
    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
        // Scroll vers le bas - cacher la navbar
        navbar.classList.add('hidden');
    } 
    // Si on scrolle vers le haut
    else if (currentScroll < lastScroll) {
        // Scroll vers le haut - montrer la navbar
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});