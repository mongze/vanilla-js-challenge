const time = document.querySelector(".time");

const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  time.innerText =
    `${hours < 10 ? `0${hours}` : `${hours}`}:` +
    `${minutes < 10 ? `0${minutes}` : `${minutes}`}:` +
    `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};

const initClock = () => {
  getTime();
  setInterval(getTime, 1000);
};
initClock();