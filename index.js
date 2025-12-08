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