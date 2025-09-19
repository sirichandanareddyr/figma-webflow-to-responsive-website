
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
  // Simple horizontal scroll for carousel
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.carousel-track');
  wrapper.querySelector('.prev').addEventListener('click', () => {
    track.scrollBy({ left: -240, behavior: 'smooth' });
  });
  wrapper.querySelector('.next').addEventListener('click', () => {
    track.scrollBy({ left: 240, behavior: 'smooth' });
  });
});

  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let cardWidth = document.querySelector('.pro-card').offsetWidth + 20; // card + gap

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  // Update card width on resize
  window.addEventListener('resize', () => {
    cardWidth = document.querySelector('.pro-card').offsetWidth + 20;
  });


// Testimonial slider nav
document.querySelectorAll('.testimonial-slider').forEach(slider => {
  const track = slider.querySelector('.testimonial-track');
  slider.querySelector('.t-prev').addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });
  slider.querySelector('.t-next').addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    item.classList.toggle('active');
  });
});

});
