const colors = ['#007bff', '#ff0000', '#00ff00', '#ff9900', '#800080', '#ff69b4', '#008080', '#800000'];

const changeColorButton = document.getElementById('changeColorButton');

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

changeColorButton.addEventListener('click', function() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});