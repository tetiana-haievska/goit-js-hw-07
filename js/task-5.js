function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', handleClick);
function handleClick() {
  const newBgColor = getRandomHexColor();
  document.body.style.backgroundColor = newBgColor;
  bgColor.textContent = newBgColor;
}
