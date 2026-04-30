// ===== SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let autoSlide;

function initDots() {
  if (!dotsContainer) return;
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide]?.classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  document.querySelectorAll('.dot')[currentSlide]?.classList.add('active');
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
  resetAuto();
}

function resetAuto() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

// ===== NAV TOGGLE =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== LIKE BUTTON =====
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('poem-like')) {
    e.target.classList.toggle('liked');
    e.target.textContent = e.target.classList.contains('liked') ? '❤️ પ્રિય' : '🤍 પ્રિય';
  }
});

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = '✅ સફળતાપૂર્વક મોકલ્યો!';
    btn.style.background = '#2e7d32';
    setTimeout(() => {
      btn.textContent = 'સંદેશ મોકલો';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ===== INIT =====
if (slides.length) {
  initDots();
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4500);
}
