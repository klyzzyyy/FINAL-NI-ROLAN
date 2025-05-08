const navbar = document.querySelector('.navbar');
const secondContainer = document.querySelector('.second-container');

window.addEventListener('scroll', () => {
  const secondContainerTop = secondContainer.offsetTop; // Get the top position of the second container
  const scrollPosition = window.scrollY; // Get current scroll position
  
  // If scrolled past the second container, make navbar sticky
  if (scrollPosition >= secondContainerTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
let currentSection = 0;
let isScrolling = false;

const sections = document.querySelectorAll('.section');

window.addEventListener("wheel", (event) => {
  if (isScrolling) return; // Prevent multiple rapid scrolls

  isScrolling = true;

  if (event.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (event.deltaY < 0 && currentSection > 0) {
    currentSection--;
  }

  // Scroll to the next/previous section
  sections[currentSection].scrollIntoView({ behavior: "smooth" });

  // Timeout to allow smooth scrolling behavior
  setTimeout(() => {
    isScrolling = false;
  }, 500);
});

