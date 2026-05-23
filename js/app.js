// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Animate counters (for stat numbers on home page)
function animateCounter(el) {
  const raw = el.dataset.count;
  if (!raw) return;
  const isPlus = raw.includes('+');
  const target = parseInt(raw.replace(/\D/g, ''));
  const suffix = raw.replace(/[0-9]/g, '');
  let current = 0;
  const step = target / 40;
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + suffix;
    if (current >= target) clearInterval(interval);
  }, 30);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
