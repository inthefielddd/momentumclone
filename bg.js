const body = document.querySelector("body");
const IMG_NUMBER = 8;
const BG_CN = "bgImage";

function paintImage(imgnumber) {
  const image = new Image();
  image.src = `bg/${imgnumber + 1}.jpg`;
  image.classList.add(BG_CN);
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}
init();
