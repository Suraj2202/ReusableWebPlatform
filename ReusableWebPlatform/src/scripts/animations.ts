/**
 * Scroll Animations Engine
 * - Intersection Observer for reveal animations
 * - Parallax on hero background
 * - Lazy image loading with blur-up
 * - Counter animation for stats
 */

// ─── Scroll Reveal ─────────────────────────────────────────
const observerOptions: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach((el) => {
  revealObserver.observe(el);
});

// ─── Stagger children ───────────────────────────────────────
const staggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('[data-animate]');
        children.forEach((child) => child.classList.add('animated'));
        staggerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
);

document.querySelectorAll('[data-stagger]').forEach((el) => {
  staggerObserver.observe(el);
});

// ─── Hero Parallax ──────────────────────────────────────────
const heroSection = document.getElementById('hero');
const heroBg = heroSection?.querySelector('.hero-parallax') as HTMLElement | null;

if (heroBg) {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.4;
        heroBg.style.transform = `translate3d(0, ${rate}px, 0) scale(1.1)`;
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ─── Lazy Image Blur-Up ─────────────────────────────────────
const imgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        img.onload = () => img.classList.add('loaded');
        // If already cached
        if (img.complete) img.classList.add('loaded');
        imgObserver.unobserve(img);
      }
    });
  },
  { rootMargin: '100px' },
);

document.querySelectorAll('.img-lazy').forEach((img) => {
  imgObserver.observe(img);
});

// ─── Counter Animation ──────────────────────────────────────
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const target = el.dataset.count || el.textContent || '0';
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

function animateCounter(el: HTMLElement, target: string) {
  // Extract numeric part and suffix (e.g., "500+" → 500, "+")
  const match = target.match(/^([\d,]+)(.*)$/);
  if (!match) {
    el.textContent = target;
    return;
  }

  const numericTarget = parseInt(match[1].replace(/,/g, ''), 10);
  const suffix = match[2] || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(numericTarget * eased);

    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

document.querySelectorAll('[data-count]').forEach((el) => {
  counterObserver.observe(el);
});

// ─── Navbar background on scroll ────────────────────────────
const header = document.getElementById('site-header');
if (header) {
  let lastScroll = 0;

  const updateHeader = () => {
    const scrollY = window.scrollY;

    // Transparent → solid background
    if (scrollY > 50) {
      header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
      header.classList.remove('bg-white/0', 'backdrop-blur-none', 'shadow-none');
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
      header.classList.add('bg-white/0', 'backdrop-blur-none', 'shadow-none');
    }

    // Hide on scroll down, show on scroll up
    if (scrollY > lastScroll && scrollY > 400) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  // Run once on load
  updateHeader();
}

// ─── Page Transitions ───────────────────────────────────────

// Fade in on page load
document.body.classList.add('page-loaded');

// Custom smooth scroll with controlled duration
function smoothScrollTo(target: HTMLElement, duration = 800) {
  const targetRect = target.getBoundingClientRect();
  // Position target slightly above viewport top (-10%)
  const viewportOffset = window.innerHeight * 0.01;
  const scrollTarget = window.scrollY + targetRect.top - viewportOffset;
  const startY = window.scrollY;
  const distance = scrollTarget - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease in-out cubic
    const eased =
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Handle hash on page load — scroll and fade in simultaneously
if (window.location.hash) {
  const hashTarget = document.getElementById(window.location.hash.slice(1));
  if (hashTarget) {
    // Start scroll immediately — runs in parallel with the fade-in
    smoothScrollTo(hashTarget, 900);
  }
}

// Fade out before navigating to another page
document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('https://wa.me') ||
    link.getAttribute('target') === '_blank' ||
    link.hasAttribute('data-no-transition')
  ) {
    return;
  }

  link.addEventListener('click', (e) => {
    // Skip if modifier key held (new tab)
    const ev = e as MouseEvent;
    if (ev.ctrlKey || ev.metaKey || ev.shiftKey) return;

    e.preventDefault();
    document.body.classList.add('page-leaving');
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  });
});

// ─── Smooth Anchor Scroll ───────────────────────────────────
// Same-page #hash links: visible smooth scroll to center
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (link.hasAttribute('data-no-scroll')) return;

  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    e.preventDefault();
    smoothScrollTo(target, 800);
  });
});
