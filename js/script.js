// Simple alert function
function showAlert() {
    alert("Button Clicked! Welcome to the site.");
}

// Form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
    } else {
        alert("Message Sent Successfully!");
    }
});
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function prevSlide() {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Show first slide
showSlide(slideIndex);
// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
// Back-to-Top Button
let backToTop = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Hide loader after page loads
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};
// Toggle Mobile Menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    let menu = document.getElementById("mobile-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
// Scroll Reveal Effect
function revealSections() {
    let sections = document.querySelectorAll(".reveal");
    let windowHeight = window.innerHeight;

    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

// Run function on scroll
window.addEventListener("scroll", revealSections);

// Initial check on page load
revealSections();
