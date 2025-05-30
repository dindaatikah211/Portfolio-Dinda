// script.js

// Tampilkan pesan di console
console.log("Welcome to Dinda's Portfolio Website");

// Smooth scroll untuk anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle menu
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

toggle.classList.toggle('active');

// Tutup menu saat item diklik
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Animasi muncul saat scroll (optional)
const sections = document.querySelectorAll("section");
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  if (!section.classList.contains("visible")) {
    observer.observe(section);
  }
});
