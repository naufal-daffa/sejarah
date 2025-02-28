// Animasi Scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.style.animationDelay = `${index * 0.3}s`;
        card.classList.add('animate__fadeIn');
      }
    });
  });