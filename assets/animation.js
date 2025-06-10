document.addEventListener("DOMContentLoaded", function () {
  // Animate Hero Section
  anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
    .add({
      targets: '.anime-hero-image-mobile',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 300,
    })
    .add({
      targets: '.anime-hero-text p, .anime-hero-text h1, .anime-hero-text p.mb-8',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(200),
    })
    .add({
      targets: '.anime-hero-image img',
      opacity: [0, 1],
      translateX: [50, 0],
    }, '-=800') // slightly overlaps
    .add({
      targets: '.anime-hero-buttons',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 200,
    }, '-=600');

  // Animate Buttons with Scale In
  anime({
    targets: '.anime-hero-buttons a',
    opacity: [0, 1],
    scale: [0.7, 1.1, 1],
    translateY: [30, 0],
    delay: anime.stagger(100, { start: 100 }),
    duration: 200,
    easing: 'easeInExpo(1, .8)'
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about');
  let animated = false; // flag to animate only once

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true; // so it runs only once

        anime.timeline({
          easing: 'easeOutExpo',
          duration: 1000,
        })
          .add({
            targets: '.about-image',
            opacity: [0, 1],
            scale: [0.8, 1],
          })
          .add({
            targets: '.about-text',
            opacity: [0, 1],
            translateX: [-50, 0],
          }, '-=700'); // overlap animation

        observer.unobserve(aboutSection); // stop observing after animation
      }
    });
  }, {
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  observer.observe(aboutSection);
});

// Intersection Observer to detect when #why-choose-us is visible
const target = document.querySelector('#why-choose-us');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSection();
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

observer.observe(target);

function animateSection() {
  // Animate heading
  anime({
    targets: '.animate-heading',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
  });

  // Animate subtext with delay
  anime({
    targets: '.animate-subtext',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: 300,
    duration: 700,
  });

  // Animate features one by one with staggered delay
  const features = document.querySelectorAll('.animate-feature');
  features.forEach((feature, i) => {
    anime({
      targets: feature,
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      delay: 500 + i * 150,
      duration: 800,
    });
  });
}

anime({
  targets: '#menu-title',
  opacity: [0, 1],
  scale: [0.8, 1],
  easing: 'easeOutExpo',
  duration: 1000,
  delay: 500
});

let menuAnimated = false;

function animateMenuBoxes() {
  const boxes = document.querySelectorAll('.menu-category');
  boxes.forEach((box, index) => {
    anime({
      targets: box,
      opacity: [0, 1],
      translateY: [40, 0],
      delay: index * 200,
      duration: 1200,
      easing: 'easeOutExpo'
    });
    box.classList.remove('translate-y-10', 'opacity-0');
  });
}

window.addEventListener('scroll', () => {
  if (menuAnimated) return;

  const section = document.getElementById('menu');
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    animateMenuBoxes();
    menuAnimated = true; // ensures animation runs only once
  }
});

function toggleItems(button) {
  const items = button.parentElement.querySelectorAll('.extra-item');
  const hidden = items[0].classList.contains('hidden');
  items.forEach(el => el.classList.toggle('hidden'));
  button.textContent = hidden ? "Show Less" : "Show More";
}