
var gradient = new Gradient()
gradient.initGradient('#gradient-canvas');
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
  