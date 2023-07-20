const heading = document.getElementById('heading');
const toggleBtn = document.getElementById('toggleBtn');
let isToggled = false;

toggleBtn.addEventListener('click', () => {
  if (isToggled) {
    heading.textContent = 'The most affordable learning platform';
  } else {
    heading.textContent = 'PW Skills';
  }
  isToggled = !isToggled;
});