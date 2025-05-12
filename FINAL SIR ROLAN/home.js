const navbar = document.querySelector('.navbar');
const secondContainer = document.querySelector('.second-container');
const thirdContainer = document.querySelector('.third-container');
const fourthContainer = document.querySelector('.fourth-container');
const fifthContainer = document.querySelector('.fifth-container');

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
  }, 200);
});

// Scroll to section by index
function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    currentSection = index;
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const newsLink = document.querySelector('a[href="#news-section"]');

  if (newsLink) {
    newsLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector('#news-section').scrollIntoView({ behavior: "smooth" });
    });
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const strikersLink = document.querySelector('a[href="#strikers-section"]');
  
    if (strikersLink) {
      strikersLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('#strikers-section').scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const contentCreatorLink = document.querySelector('a[href="#content-creator-section"]');
  
    if (contentCreatorLink) {
      contentCreatorLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('#content-creator-section').scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const combatTutorialLink = document.querySelector('a[href="#combat-tutorial-section"]');
  
    if (combatTutorialLink) {
      combatTutorialLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('#combat-tutorial-section').scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  // Slider logic
  const track = document.querySelector('.slider-track');
  const boxes = document.querySelectorAll('.box');
  const boxWidth = 530;
  const maxSlide = boxes.length - 3;

  let currentSlide = 0;

  document.querySelector('.next').addEventListener('click', () => {
    if (currentSlide < maxSlide) {
      currentSlide++;
      track.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
    }
  });

  document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      track.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.slider-track');
  const boxes = document.querySelectorAll('.box');
  const boxWidth = 530; // 500px width + 30px margin
  const maxSlide = boxes.length - 3; // show 3 boxes at a time

  let currentSlide = 0;

  document.querySelector('.next').addEventListener('click', () => {
    if (currentSlide < maxSlide) {
      currentSlide++;
      track.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
    }
  });

  document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      track.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
    }
  });
});

  const thumbs = document.querySelectorAll('.character-thumb');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('selected'));
      thumb.classList.add('selected');

      const id = thumb.getAttribute('data-id');
      document.body.style.backgroundImage = `url('background-for-id-${id}.jpg')`;
    });
  });



