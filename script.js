// Dynamisk navigering och footer
document.addEventListener("DOMContentLoaded", () => {
    // Ladda in navigation
    fetch("nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load navigation");
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("header").outerHTML = data;

            // Kolla om länken ".home-link" finns innan vi lägger till eventlyssnaren
            const homeLink = document.querySelector(".home-link");
            if (homeLink) {
                homeLink.onclick = function () {
                    console.log("Hem-länken klickad!");
                };
            }
        })
        .catch(error => console.error("Navigation error:", error));

    // Ladda in footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer");
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("footer").outerHTML = data;

            // Kolla om eventuella footer-element behöver eventlyssnare (lägg till vid behov)
        })
        .catch(error => console.error("Footer error:", error));
});

// Hanterar menyvisning på mobiler
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  navMenu.classList.toggle("show");
});