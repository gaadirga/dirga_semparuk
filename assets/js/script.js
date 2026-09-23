// =========================================================
// DESA SEMPARUK
// Main JavaScript
// =========================================================


// ---------- MOBILE NAVBAR ----------

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}


// Tutup menu setelah memilih halaman
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("show");
        }
    });
});


// ---------- ACTIVE NAVIGATION ----------

const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }
});


// ---------- GALLERY LIGHTBOX ----------

const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach(image => {
    image.addEventListener("click", () => {
        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.zIndex = "9999";
        overlay.style.background = "rgba(10, 30, 45, 0.92)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.padding = "20px";
        overlay.style.cursor = "pointer";

        const preview = document.createElement("img");

        preview.src = image.src;
        preview.alt = image.alt || "Foto Desa Semparuk";

        preview.style.maxWidth = "95%";
        preview.style.maxHeight = "90vh";
        preview.style.objectFit = "contain";
        preview.style.borderRadius = "14px";
        preview.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";

        overlay.appendChild(preview);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});


// ---------- YEAR FOOTER ----------

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});