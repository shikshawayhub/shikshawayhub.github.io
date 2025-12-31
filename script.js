/* ================= NAVBAR BURGER MENU ================= */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
  body.classList.toggle('no-scroll');
});

/* Close menu on link click (mobile UX) */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('open');
    body.classList.remove('no-scroll');
  });
});

/* ================= NAVBAR SCROLL EFFECT ================= */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let slideInterval;

/* Show slide */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

/* Auto slider */
function startSlider() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

/* Pause on hover (desktop) */
const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
  heroSlider.addEventListener('mouseenter', stopSlider);
  heroSlider.addEventListener('mouseleave', startSlider);
}

/* Mobile swipe support */
let startX = 0;

heroSlider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

heroSlider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    currentIndex = (currentIndex + 1) % slides.length;
  } else if (diff < -50) {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }

  showSlide(currentIndex);
});

/* Start slider */
startSlider();

/* ================= GOOGLE FORM MODAL ================= */
const modal = document.getElementById('formModal');

function openForm() {
  modal.classList.add('active');
  body.classList.add('no-scroll');
}

function closeForm() {
  modal.classList.remove('active');
  body.classList.remove('no-scroll');
}

/* Close modal on outside click */
window.addEventListener('click', e => {
  if (e.target === modal) {
    closeForm();
  }
});


