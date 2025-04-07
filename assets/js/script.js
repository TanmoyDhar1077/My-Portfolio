// Animation
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
gsap.from("#desktop-nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Profile Section Animation (with delay for smooth appearance)
gsap.from("#profile .section__pic-container", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from("#profile .section__text", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

// About Section on Scroll (trigger animation when section comes into view)
gsap.from("#about .section__pic-container", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%", // Trigger animation when 80% of the section is visible
    toggleActions: "play none none none", // Play on scroll, no reset
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from("#about .about-details-container", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 100,
  opacity: 0,
  duration: 1,
});

// Animate Experience Section (on scroll)
gsap.from("#experience .details-container", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});

// Animate Projects Section (on scroll)
gsap.from("#projects .details-container", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});




function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.humburger-icon');
    menu.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
};

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Designer", "Frontend Developer", "Laravel Developer"];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

type();



