// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

if (window.innerWidth > 768) {
    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            gsap.set(follower, {
                css: {
                    left: posX - 0,
                    top: posY - 0
                }
            });
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    document.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// --- MOBILE MENU ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});


// --- GSAP ANIMATIONS ---
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Animations (Initial Load)
const tl = gsap.timeline();

tl.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from(".reveal-text", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.5")
.from(".scroll-indicator", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out"
}, "-=0.5");

// 2. Scroll Animations

// About Section
gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Skills Section
gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

// Projects Section
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 70%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Contact Section
gsap.from(".contact-info, .contact-form", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

// Parallax effect on Hero Background
gsap.to(".hero-bg", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 200,
    ease: "none"
});
