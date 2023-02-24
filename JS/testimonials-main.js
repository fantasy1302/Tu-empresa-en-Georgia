const testimonials = document.querySelectorAll('.testimonials__block');
const dots = document.querySelectorAll('.testimonials__button');
const bgImage = document.querySelector('.testimonials__section--bg');
const bgColor = document.querySelector('.testimonials__section');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('testimonials--active');
    });
    testimonials[index].classList.add('testimonials--active');
    dots.forEach(dot => {
      dot.classList.remove('testimonials__button--active');
    });
    dot.classList.add('testimonials__button--active');
    switch (index) {
      case 0:
        bgImage.style.transition = 'all 0.9s ease';
        bgImage.src = "Images/man-cafe.jpg";
        bgColor.style.backgroundColor = '#2B6EEA';
        bgColor.style.transition = 'all 0.9s ease';
        break;
      case 1:
        bgImage.style.transition = 'all 0.9s ease';
        bgImage.src = "Images/tech-bg.jpg";
        bgColor.style.backgroundColor = '#00C4C4';
        bgColor.style.transition = 'all 0.9s ease';
        break;
      case 2:
        bgImage.style.transition = 'all 0.9s ease';
        bgImage.src = "Images/bg-3.jpg";
        bgColor.style.backgroundColor = '#ffcb57';
        bgColor.style.transition = 'all 0.9s ease';
        break;
      case 3:
        bgImage.style.transition = 'all 0.9s ease';
        bgImage.src = "Images/bg-4.jpg";
        bgColor.style.backgroundColor = '#ff333d';
        bgColor.style.transition = 'all 0.9s ease';
        break;
      case 4:
        bgImage.style.transition = 'all 0.9s ease';
        bgImage.src = "Images/bg-5.jpg";
        bgColor.style.backgroundColor = '#a960ee';
        bgColor.style.transition = 'all 0.9s ease';
        break;
    }
  });
});