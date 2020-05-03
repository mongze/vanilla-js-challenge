const name = document.querySelector(".input_name"),
  printSection = document.querySelector(".print_name"),
  formName = document.querySelector(".name_area .form");

const USER_LOCALSTORAGE = "currentUser",
  HIDE_CLASSNAME = "hide";

const saveName = (name) => {
  localStorage.setItem(USER_LOCALSTORAGE, name);
};

const printName = (name) => {
  formName.classList.add(HIDE_CLASSNAME);
  printSection.innerText = `${name}`;
};

const handleNameSubmit = (event) => {
  event.preventDefault();
  const currentValue = name.value;
  printName(currentValue);
  saveName(currentValue);
};

const askForName = () => {
  formName.addEventListener("submit", handleNameSubmit);
};

const getName = () => {
  const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
  if (currentUser === null) {
    askForName();
  } else {
    printName(currentUser);
  }
};

const initName = () => {
  getName();
};
initName();
