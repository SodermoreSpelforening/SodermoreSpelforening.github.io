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

// Modal hantering
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// Kontrollera om btn och span finns innan vi försöker sätta eventlyssnare
if (btn) {
    btn.onclick = function () {
        modal.style.display = "block";
    };
}

if (span) {
    span.onclick = function () {
        modal.style.display = "none";
    };
}

// När användaren klickar var som helst utanför modalen, stäng den
if (modal) {
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Lightbox funktion
const lightbox = document.querySelector('.lightbox');
const images = document.querySelectorAll('img');

// Lägg till klickhändelse på alla bilder om lightbox finns
if (lightbox) {
    images.forEach(img => {
        img.addEventListener('click', function () {
            const src = img.src;
            lightbox.innerHTML = `<img src="${src}" alt="Ljusbox bild">`;
            lightbox.classList.add('active');
        });
    });

    // Stäng lightbox när användaren klickar på den
    lightbox.addEventListener('click', function () {
        lightbox.classList.remove('active');
    });
}
