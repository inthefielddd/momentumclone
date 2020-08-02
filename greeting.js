const jsForm = document.querySelector(".js-form");
const input = jsForm.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const UESR_LS = "currentUser";
const SHOW_CN = "show"; //추가할 class 선언하고 display block 처리

function saveName(text) {
  localStorage.setItem(UESR_LS, text);
}

function handleSubmit(e) {
  e.preventDefault(); //이벤트를 막고
  const currentValue = input.value; //value 값 선언
  paintgreeting(currentValue);
  saveName(currentValue);
}

function paintgreeting(text) {
  jsForm.classList.remove(SHOW_CN);
  greeting.classList.add(SHOW_CN);
  greeting.innerHTML = `Hello ${text}`;

  //이름을 부르고
}

function askForForm() {
  jsForm.classList.add(SHOW_CN);
  greeting.classList.remove(SHOW_CN);
  jsForm.addEventListener("submit", handleSubmit);
  //폼을 부른다
}

function loadName() {
  const currentUser = localStorage.getItem(UESR_LS);
  if (currentUser === null) {
    askForForm();
  } else {
    paintgreeting(currentUser); //선언한 currentUser 값을 넣어줘야함, 그렇지 않을지 undefined.
  }
}

function init() {
  loadName();
}
init();
