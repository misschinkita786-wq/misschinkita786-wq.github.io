// Tarot Chinkita Premium Website

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) scale(1)";
    });
});
