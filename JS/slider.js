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
    });
    var faceId = document.getElementById("Face-ID");
    var check = document.querySelector(".check");
    var phoneSection = document.querySelector(".phone-section");
    
    window.addEventListener('scroll', function() {
      var rect = phoneSection.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        window.addEventListener('wheel', function(event) {
          if (event.deltaY > 0) {
            faceId.style.display = "none";
            check.style.display = "flex";
          } 
        });
      }
    });
    
    
    
    VANTA.GLOBE({
      el: "#globe-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3f82ff,
      size: 2.2,
      backgroundColor: 0x0c263f
    })
    var gradient = new Gradient()
    gradient.initGradient('#ba-gradient-canvas');
    // Get Modal
    var modal = document.getElementById('myModal');

    // Get pseudoelement to open Modal
    var btn = document.getElementById("sized");

    // Get the <span> element to close Modal
    var span = document.getElementsByClassName("close")[0];

    // When user clicks button, open Modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When user clicks Close (x), close Modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When user clicks anywhere outside of the Modal, close Modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    