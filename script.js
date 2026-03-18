/* --- LIGHTBOX LOGIC --- */
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    
    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
        document.body.style.overflow = "hidden"; // Stop background scrolling
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling again
    }
}

/* --- RSVP & RIPPLE LOGIC --- */
function openRSVP() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeJkOzr9tGsnB1nw1awv_avRHPzJZIRxp7CTlTh_Fdl2CKwVw/viewform", "_blank");
}

// Add Ripple Effect Listener
document.addEventListener("DOMContentLoaded", () => {
    const rsvpBtn = document.querySelector(".rsvpButton");
    if (rsvpBtn) {
        rsvpBtn.addEventListener("click", function (e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";

            this.appendChild(ripple);
            setTimeout(() => { ripple.remove(); }, 600);
        });
    }
});

/* --- COUNTDOWN TIMER --- */
const targetDate = new Date("April 12, 2026 12:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) return;

    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

/* ========================= */
/* --- CAROUSEL FIXED --- */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    let isAnimating = false;
    let autoSlide;

    function updateCarousel() {
        if (!track) return;

        isAnimating = true;

        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${index * 100}%)`;

        setTimeout(() => {
            isAnimating = false;
        }, 500); // match transition duration
    }

    function nextSlide() {
        if (isAnimating) return;

        index = (index + 1) % slides.length;
        updateCarousel();
        resetAutoSlide();
    }

    function prevSlide() {
        if (isAnimating) return;

        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => {
            index = (index + 1) % slides.length;
            updateCarousel();
        }, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);

    startAutoSlide();
});

/* --- BACK TO TOP LOGIC --- */
let mybutton = document.getElementById("myBtn");

// Shows the button when user scrolls down 300px
window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
});

// Smoothly glides the page back to the top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* CLOSE MOBILE MENU AFTER CLICK */
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', () => {
        const content = document.querySelector('.dropdown-content');
        if (content) {
            content.style.display = 'none';
            // Reset after a moment so it can be opened again
            setTimeout(() => {
                content.style.removeProperty('display');
            }, 500);
        }
    });
});
