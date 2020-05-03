const weather = document.querySelector('.weather_area .temp'),
placeDom = document.querySelector('.weather_area .place');

const API_KEY = "7c38fda4d481012469f9c0725e8307df";
const COORDS = "coords";

const getWeather = (lati, long) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(response => {
      return response.json();
    }).then(json => {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `🌡 ${temperature}`; 
      placeDom.innerText = `@ ${place}`;
    });
}

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};
const handleGeoError = () => {
  console.log("error");
};
const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
};

const initWeather = () => {
  loadCoords();
};
initWeather();
