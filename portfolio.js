// ⭐ CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let errors = "";

    if (name === "") errors += "• Name is required.\n";
    if (email === "" || !email.includes("@")) errors += "• Valid email is required.\n";
    if (message === "") errors += "• Message cannot be empty.\n";

    if (errors) {
        alert(errors);
    } else {
        alert("Thank you! Your message has been received.");
    }
});

// ⭐ SKILL BAR ANIMATION
const skillBars = document.querySelectorAll(".skill-bar span");

function animateSkills() {
    skillBars.forEach(bar => {
        let value = bar.getAttribute("data-progress");
        bar.style.width = value + "%";
    });
}
window.addEventListener("scroll", animateSkills);

// ⭐ PROJECT CARD CLICK
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
    });
});

// ⭐ CANVAS DRAWING
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "lightblue";
ctx.fillRect(20, 20, 150, 80);

// ⭐ IMAGE SLIDER
let index = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("next").onclick = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
};

document.getElementById("prev").onclick = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
};

// ⭐ DARK / LIGHT MODE
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
};

// ⭐ BACK TO TOP
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
