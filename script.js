// FAQ toggle
document.querySelectorAll('.faq-q').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-a');

    item.classList.toggle('open');
    answer.classList.toggle('open');
  });
});

// Fade-in on scroll
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((element) => {
  fadeInObserver.observe(element);
});
