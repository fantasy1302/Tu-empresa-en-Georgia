const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const bgImage = document.querySelector('.testimonials-section-bg');
const bgColor = document.querySelector('.testimonials-section');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('ct-active');
    });
    testimonials[index].classList.add('ct-active');
    dots.forEach(dot => {
      dot.classList.remove('dot-active');
    });
    dot.classList.add('dot-active');
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
}); const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const bgImage = document.querySelector('.testimonials-section-bg');
    const bgColor = document.querySelector('.testimonials-section');

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        testimonials.forEach(testimonial => {
          testimonial.classList.remove('ct-active');
        });
        testimonials[index].classList.add('ct-active');
        dots.forEach(dot => {
          dot.classList.remove('dot-active');
        });
        dot.classList.add('dot-active');
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
    });