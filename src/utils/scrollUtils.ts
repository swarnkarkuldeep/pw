// Function to smoothly scroll to a specific element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Function to determine if an element is in viewport
export const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to determine which section is currently active
export const getActiveSection = () => {
  const sections = document.querySelectorAll('section');
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - window.innerHeight / 3 && 
        window.pageYOffset < sectionTop + sectionHeight - window.innerHeight / 3) {
      currentSection = section.id;
    }
  });
  
  return currentSection;
};