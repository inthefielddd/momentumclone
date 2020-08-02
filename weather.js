const weather = document.querySelector(".js-weather");
const API_KEY = "4f1830493087dc280ac782de8ded3e9b";
const COORDS = "coords"; //string 선언(key값으로 넣어질)

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      // console.log(response.json()); //자바스크립트의 object 가져온데이터 처리중 기다리는중
      return response.json();
    })
    .then(function (json) {
      // console.log(json); //위에서 json 데이터가 잘 준비되면, object를 가져옴
      const temperature = json.main.temp;
      const place = json.name;
      const country = json.sys.country;
      weather.innerText = `${temperature} @ ${place} ${country}`;
    });
}
//then은 데이터가 완전히 들어온다음에 호출
//fetch가 완료되고 실행

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude; //
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
//geocurrentposition 세개의 인자 줄 수있는데(순서대로 작성해야함)(sucess, error, option)

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
