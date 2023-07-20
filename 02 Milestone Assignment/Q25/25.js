const movingImage = document.getElementById('movingImage');
let posX = 250; // Initial X position
let posY = 250; // Initial Y position
const stepSize = 10; // Number of pixels the image moves per key press

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      posY -= stepSize;
      break;
    case 'ArrowDown':
      posY += stepSize;
      break;
    case 'ArrowLeft':
      posX -= stepSize;
      break;
    case 'ArrowRight':
      posX += stepSize;
      break;
  }

  // Update the position of the image
  movingImage.style.left = posX + 'px';
  movingImage.style.top = posY + 'px';
});