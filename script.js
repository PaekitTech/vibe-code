// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const words = ["Developer", "Programmer", "Software Engineer", "Moodeng", "Youtuber in the future?"];
let idx = 0;
const wordSpan = document.getElementById("changing-word");

setInterval(() => {
  wordSpan.classList.add("fade");
  setTimeout(() => {
    idx = (idx + 1) % words.length;
    wordSpan.textContent = words[idx];
    wordSpan.classList.remove("fade");
  }, 600); // match transition duration
}, 2000);

// Typewriter effect for the hero description (type and delete)
const text = "I create thoughtful digital and programing experiences.";
const typewriter = document.getElementById("typewriter");
let i = 0;
let typing = true;

function typewriterEffect() {
  if (typing) {
    if (i <= text.length) {
      typewriter.textContent = text.slice(0, i);
      i++;
      setTimeout(typewriterEffect, 40);
    } else {
      typing = false;
      setTimeout(typewriterEffect, 1200); // Pause before deleting
    }
  } else {
    if (i >= 0) {
      typewriter.textContent = text.slice(0, i);
      i--;
      setTimeout(typewriterEffect, 20);
    } else {
      typing = true;
      setTimeout(typewriterEffect, 600); // Pause before typing again
    }
  }
}

typewriterEffect();

document.getElementById('scrollTopLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('a[href="#work"]').addEventListener('click', function(e) {
  e.preventDefault();
  const workSection = document.getElementById('work');
  const rect = workSection.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
  window.scrollTo({ top: offset, behavior: 'smooth' });
});