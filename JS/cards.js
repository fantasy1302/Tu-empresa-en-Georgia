const cardColor = document.querySelector('.card-body');
const tbcLogo = document.querySelector('.tbc-logo');
const bogLogo = document.querySelector('.bog-logo');
const libLogo = document.querySelector('.liberty-logo');
const libLine1 = document.querySelector('.LINE-1');
const libLine2 = document.querySelector('.LINE-2');
const libLine3 = document.querySelector('.LINE-3');
const credoLogo = document.querySelector('.credo-logo');
const credoText = document.querySelector('.credo-text');

function colorChangingTbc () {
  cardColor.style.fill = "#00aeef";
  cardColor.style.transition = "2s";
  tbcLogo.style.display = "inline";
  tbcLogo.style.transition = "2s";
  bogLogo.style.display = "none";
}

function colorChangingLb () {
  cardColor.style.fill = "#00aeef";
  cardColor.style.transition = "fill 2s ease";
  tbcLogo.style.display = "none";
  bogLogo.style.display = "none";
  cardColor.style.fill = "#000b0b";
  libLogo.style.display = "inline";
}

function colorChangingCredo () {
  libLogo.style.display = "none";
  credoLogo.style.display = "inline";
  credoLogo.style.transition = "display 3s ease";
  credoText.style.display = "inline";
    cardColor.style.transition = "fill 2.5s ease";
  cardColor.style.fill = "url(#credo-gradient)"; 
}

setTimeout(colorChangingTbc, 3400);
setTimeout(colorChangingLb, 6200);
setTimeout(colorChangingCredo, 11000);