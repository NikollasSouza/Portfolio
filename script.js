// ===== Scroll Reveal =====
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
});

sr.reveal('header .overlay h1, header .overlay p, .btn');
sr.reveal('.container', { interval: 200 });
sr.reveal('.parallax2 .overlay h2, .parallax2 ul');

// ===== Dark Mode Toggle =====
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Modo Escuro';
toggleBtn.id = 'darkModeToggle';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Loader Inicial (opcional) =====
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
});
