// Shared Header & Footer injected into every page
(function () {
  const basePath = window.location.pathname.startsWith('/MintPeople') ? '/MintPeople' : '';

  const navHTML = `
  <header class="site-header" id="siteHeader">
    <div class="container header__inner">
      <a href="${basePath}/index.html" class="site-logo">
        <span class="logo-mint">Mint</span><span class="logo-people">People</span>
      </a>
      <nav class="main-nav" id="mainNav">
        <a href="${basePath}/index.html" class="nav-link">Home</a>
        <a href="${basePath}/about.html" class="nav-link">About</a>
        <div class="nav-dropdown">
          <button class="nav-link nav-link--dropdown" aria-expanded="false">
            Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="dropdown-menu">
            <a href="${basePath}/services/recruitment-staffing.html">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
              <div><strong>Recruitment &amp; Staffing</strong><span class="dd-sub">Find the right talent, fast</span></div>
            </a>
            <a href="${basePath}/services/hr-consulting.html">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
              <div><strong>HR Consulting</strong><span class="dd-sub">Structured HR systems</span></div>
            </a>
            <a href="${basePath}/services/payroll-compliance.html">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
              <div><strong>Payroll &amp; Compliance</strong><span class="dd-sub">Accurate &amp; timely payroll</span></div>
            </a>
            <a href="${basePath}/services/campus-hiring.html">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>
              <div><strong>Campus Hiring</strong><span class="dd-sub">Industry-ready graduates</span></div>
            </a>
            <a href="${basePath}/services/corporate-training.html">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
              <div><strong>Corporate Training</strong><span class="dd-sub">Build future-ready teams</span></div>
            </a>
            <a href="${basePath}/services.html" class="dd-all">View All Services →</a>
          </div>
        </div>
        <a href="${basePath}/partners.html" class="nav-link">Partners</a>
        <a href="${basePath}/contact.html" class="nav-link">Contact</a>
        <a href="${basePath}/contact.html" class="btn btn--primary btn--sm">Get Started</a>
      </nav>
      <button class="burger" id="burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  const footerHTML = `
  <footer class="site-footer">
    <div class="container footer__top">
      <div class="footer__brand">
        <a href="${basePath}/index.html" class="site-logo footer-logo">
          <span class="logo-mint">Mint</span><span class="logo-people">People</span>
        </a>
        <p>Your Organization, Our Orientation.<br>People-focused HR solutions for businesses across India.</p>
        <div class="footer__social">
          <a href="#" aria-label="LinkedIn" class="social-icon">in</a>
          <a href="#" aria-label="Twitter" class="social-icon">𝕏</a>
          <a href="#" aria-label="Instagram" class="social-icon">ig</a>
        </div>
      </div>
      <div class="footer__nav">
        <div class="footer__col">
          <h5>Services</h5>
          <a href="${basePath}/services/recruitment-staffing.html">Recruitment &amp; Staffing</a>
          <a href="${basePath}/services/hr-consulting.html">HR Consulting</a>
          <a href="${basePath}/services/payroll-compliance.html">Payroll &amp; Compliance</a>
          <a href="${basePath}/services/campus-hiring.html">Campus Hiring</a>
          <a href="${basePath}/services/corporate-training.html">Corporate Training</a>
        </div>
        <div class="footer__col">
          <h5>Company</h5>
          <a href="${basePath}/about.html">About Us</a>
          <a href="${basePath}/partners.html">Partners</a>
          <a href="${basePath}/contact.html">Contact Us</a>
        </div>
        <div class="footer__col">
          <h5>Get in Touch</h5>
          <a href="mailto:people@mintpeople.in">people@mintpeople.in</a>
          <a href="tel:+918593000575">+91-8593000575</a>
          <span class="footer__hours">Mon – Sat, 9am – 6pm IST</span>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <span>© 2025 MintPeople. All rights reserved.</span>
        <span>People-first HR solutions across India.</span>
      </div>
    </div>
  </footer>`;

  // Inject header
  const headerTarget = document.getElementById('header-placeholder');
  if (headerTarget) headerTarget.outerHTML = navHTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  // Nav scroll effect
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  // Mobile burger
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { nav.classList.remove('open'); burger.classList.remove('open'); });
    });
  }

  // Dropdown
  const dropBtn = document.querySelector('.nav-link--dropdown');
  const dropMenu = document.querySelector('.dropdown-menu');
  if (dropBtn && dropMenu) {
    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = dropMenu.classList.toggle('open');
      dropBtn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', () => {
      dropMenu.classList.remove('open');
      dropBtn && dropBtn.setAttribute('aria-expanded', false);
    });
    dropMenu.addEventListener('click', e => e.stopPropagation());
  }

  // Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(a => {
    const href = a.getAttribute('href');
    const isHome = href === `${basePath}/` || href === `${basePath}/index.html`;
    const isCurrentHome = currentPath === `${basePath}/` || currentPath === `${basePath}/index.html`;
    if ((isHome && isCurrentHome) || (!isHome && href && currentPath.includes(href.split('/').pop()))) {
      a.classList.add('active');
    }
  });

  // Scroll fade-in animation (runs on all pages)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 60);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Contact form handling (shared)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="btn-spinner"></span> Sending…';
      btn.disabled = true;
      setTimeout(() => {
        const success = document.getElementById('formSuccess');
        if (success) success.classList.add('visible');
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1400);
    });
  }
})();
