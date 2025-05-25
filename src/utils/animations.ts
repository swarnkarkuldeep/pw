// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all elements with the 'reveal' class
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
};

// Function to add staggered animations
export const staggerChildren = (parentSelector: string, staggerDelay: number = 0.1) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const children = parent.children;
  Array.from(children).forEach((child, index) => {
    (child as HTMLElement).style.animationDelay = `${index * staggerDelay}s`;
  });
};

// Function to add animation on hover
export const addHoverAnimation = (selector: string, animationClass: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add(animationClass);
    });
    el.addEventListener('animationend', () => {
      el.classList.remove(animationClass);
    });
  });
};
