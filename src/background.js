const body = document.querySelector('body');

const IMAGE_NUMBER = 5;

const paintImage = number => {
  const imageWrap = document.createElement('div');
  const image = new Image();
  image.src = `img/background${number}.jpg`;
  image.classList.add('background');
  imageWrap.classList.add('background_box');
  imageWrap.appendChild(image);
  body.prepend(imageWrap);
}

const generateRandom = () => {
  const number = Math.floor(Math.random()*IMAGE_NUMBER + 1);
  return number;
}

const initBackground = () => {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}
initBackground();