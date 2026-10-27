/* ============================================================
   PORTFOLIO WEBSITE — MAIN JAVASCRIPT
   IT4048 | Version Control with Git & GitHub
   ============================================================ */

"use strict";

// ============================================================
// 1. NAVBAR — Scroll effect & active link highlighting
// ============================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Add blur/shadow on scroll
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active nav link based on scroll position
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================================
// 2. HAMBURGER MENU — Mobile toggle
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navLinksMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksMenu.classList.remove('open');
  });
});

// ============================================================
// 3. TYPING ANIMATION — Hero tagline
// ============================================================
const typingText = document.getElementById('typing-text');
const phrases = [
  'Cyber Security Enthusiast',
  'B.Tech CSE Student',
  'Python & Web Developer',
  'Problem Solver & Quick Learner',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 120;
let deletingDelay = 60;
let pauseDelay = 1800;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Typing forward
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      // Pause then start deleting
      isDeleting = true;
      setTimeout(typeEffect, pauseDelay);
      return;
    }
    setTimeout(typeEffect, typingDelay);
  } else {
    // Deleting
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 400);
      return;
    }
    setTimeout(typeEffect, deletingDelay);
  }
}
// Start typing after a short delay
setTimeout(typeEffect, 800);

// ============================================================
// 4. FADE-IN ON SCROLL — IntersectionObserver
// ============================================================
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger children in the same parent
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100 * (idx % 4));
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

fadeEls.forEach(el => fadeObserver.observe(el));

// ============================================================
// 5. SKILL BARS — Animate on scroll
// ============================================================
const skillFills = document.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ============================================================
// 6. CONTACT FORM — Validation & Success Message
// ============================================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

function showError(fieldId, message) {
  document.getElementById(`${fieldId}-error`).textContent = message;
}
function clearError(fieldId) {
  document.getElementById(`${fieldId}-error`).textContent = '';
}
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Clear previous errors
  clearError('name'); clearError('email'); clearError('message');
  formSuccess.classList.remove('show');

  // Validate name
  if (!name) {
    showError('name', 'Please enter your full name.');
    valid = false;
  } else if (name.length < 2) {
    showError('name', 'Name must be at least 2 characters.');
    valid = false;
  }

  // Validate email
  if (!email) {
    showError('email', 'Please enter your email address.');
    valid = false;
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address.');
    valid = false;
  }

  // Validate message
  if (!message) {
    showError('message', 'Please enter a message.');
    valid = false;
  } else if (message.length < 10) {
    showError('message', 'Message must be at least 10 characters.');
    valid = false;
  }

  if (valid) {
    // Show success (no backend in this demo)
    formSuccess.classList.add('show');
    contactForm.reset();
    // Hide success message after 5 seconds
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }
});

// ============================================================
// 7. PARTICLES CANVAS — Hero background animation
// ============================================================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    // Alternate between purple and teal
    this.color = Math.random() > 0.5 ? '108, 99, 255' : '0, 212, 170';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fill();
  }
}

// Create particles
for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

// Draw connecting lines between nearby particles
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(108, 99, 255, ${0.12 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ============================================================
// 8. SMOOTH SCROLL — For all anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});
