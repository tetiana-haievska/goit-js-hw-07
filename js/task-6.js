function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let sizes = 30;

create.addEventListener('click', createMarkup);

function createMarkup() {
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    return;
  }
  createBoxes(+input.value);
}
function createBoxes(amount) {
  box.innerHTML = '';
  sizes = 30;

  const boxesArr = [];

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${sizes}px`;
    newBox.style.height = `${sizes}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxesArr.push(newBox);

    sizes += 10;
  }
  box.append(...boxesArr);
}
destroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  box.innerHTML = '';
  input.value = '';
  sizes = 30;
}
