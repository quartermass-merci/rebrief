/* REBRIEF — interactions.
   · Smooth anchor scroll (accounts for sticky header)
   · House-ad selector: click panel to focus; click active panel to open lightbox
   · Lightbox: open/close/esc
   · Parody banner: close
   · Subscribe form: vanilla validation + loading state + error display
*/

(() => {
  'use strict';

  /* ---------- Fit-to-line headline (data-fit) ---------- */
  function fitLine(el) {
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;
    const cs = getComputedStyle(container);
    const availableWidth = container.clientWidth
      - parseFloat(cs.paddingLeft || 0)
      - parseFloat(cs.paddingRight || 0);
    if (availableWidth < 300) return; // let CSS fallback handle mobile
    el.style.whiteSpace = 'nowrap';
    let min = 14, max = 110, best = min;
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      el.style.fontSize = mid + 'px';
      if (el.scrollWidth <= availableWidth) {
        best = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    el.style.fontSize = best + 'px';
  }
  function fitAll() {
    document.querySelectorAll('[data-fit]').forEach(fitLine);
  }
  // expose for runtime use
  window.fitAll = fitAll;
  // Run immediately, after DOMContentLoaded, after fonts load, and on a delayed schedule
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fitAll);
  } else {
    fitAll();
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAll);
  }
  // Retry timer in case fonts load late or CSS swaps
  setTimeout(fitAll, 300);
  setTimeout(fitAll, 1000);
  setTimeout(fitAll, 2500);
  window.addEventListener('load', fitAll);
  let fitRaf;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(fitRaf);
    fitRaf = requestAnimationFrame(fitAll);
  });

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- House-ad selector ---------- */
  const panels = document.querySelectorAll('.ad-panel');
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      if (panel.classList.contains('is-active')) {
        openLightbox(panel.dataset.img, panel.dataset.credit);
      } else {
        panels.forEach(p => p.classList.remove('is-active'));
        panel.classList.add('is-active');
      }
    });
  });

  /* ---------- Lightbox with prev/next ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCredit = document.getElementById('lightbox-credit');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let lightboxIndex = 0;
  const lightboxItems = Array.from(panels).map(p => ({
    img: p.dataset.img,
    credit: p.dataset.credit
  }));

  function showLightboxItem(idx) {
    if (!lightboxItems.length) return;
    lightboxIndex = ((idx % lightboxItems.length) + lightboxItems.length) % lightboxItems.length;
    const item = lightboxItems[lightboxIndex];
    lightboxImg.src = item.img;
    lightboxImg.alt = item.credit || '';
    lightboxCredit.textContent = item.credit || '';
    if (lightboxCounter) lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
  }

  function openLightbox(src, credit) {
    if (!lightbox) return;
    const idx = lightboxItems.findIndex(i => i.img === src);
    showLightboxItem(idx >= 0 ? idx : 0);
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showLightboxItem(lightboxIndex - 1); });
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showLightboxItem(lightboxIndex + 1); });
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.getAttribute('aria-hidden') !== 'false') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showLightboxItem(lightboxIndex + 1);
    if (e.key === 'ArrowLeft') showLightboxItem(lightboxIndex - 1);
  });

  /* ---------- Parody banner close ---------- */
  const parodyClose = document.getElementById('parody-close');
  const parodyBanner = document.getElementById('parody-banner');
  if (parodyClose && parodyBanner) {
    parodyClose.addEventListener('click', () => {
      parodyBanner.classList.add('is-closed');
    });
  }

  /* ---------- Subscribe form (vanilla, zod-style schema) ---------- */
  const form = document.getElementById('subscribe-form');
  if (form) {
    const submitBtn = document.getElementById('form-submit');
    const statusEl = document.getElementById('form-status');

    const schema = {
      name: (v) => {
        if (!v || !v.trim()) return 'Please enter your name.';
        if (v.trim().length < 2) return 'Your name feels a bit short.';
        return null;
      },
      email: (v) => {
        if (!v || !v.trim()) return 'Please enter an email.';
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
        if (!ok) return 'That doesn\'t look like a valid email.';
        return null;
      }
    };

    function setError(field, message) {
      const input = form.querySelector(`input[name="${field}"]`);
      const errEl = form.querySelector(`.form-error[data-for="${field}"]`);
      const wrapper = input ? input.closest('.form-field') : null;
      if (!input || !errEl || !wrapper) return;
      if (message) {
        wrapper.classList.add('has-error');
        errEl.textContent = message;
        input.setAttribute('aria-invalid', 'true');
      } else {
        wrapper.classList.remove('has-error');
        errEl.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      let hasErrors = false;
      Object.keys(schema).forEach(field => {
        const msg = schema[field](data.get(field));
        setError(field, msg);
        if (msg) hasErrors = true;
      });

      if (hasErrors) {
        statusEl.textContent = 'Fix the fields above and try again.';
        statusEl.className = 'form-status is-error';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      statusEl.textContent = 'Sending…';
      statusEl.className = 'form-status';

      await new Promise(r => setTimeout(r, 1100));

      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
      statusEl.textContent = 'Thanks — check your inbox. Substack confirmation incoming.';
      statusEl.className = 'form-status is-success';
      form.reset();
    });

    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => setError(input.name, null));
    });
  }
})();
