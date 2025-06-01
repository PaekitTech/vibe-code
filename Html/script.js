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
    if (i > 0) { // Only delete down to 0, not negative
      i--;
      typewriter.textContent = text.slice(0, i);
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
  if (workSection) {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const sectionTop = workSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - headerHeight - 10, // 10px extra space
      behavior: 'smooth'
    });
  }
});

document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault();
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - headerHeight - 10, // 10px extra space
      behavior: 'smooth'
    });
  }
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 40) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});