//select all id
const condition = document.getElementById(`condition`);
const city = document.getElementById(`city`);
const country = document.getElementById(`country`);
const mainTaxt = document.getElementById(`main`);
const description = document.getElementById(`description`);
const temp = document.getElementById(`temp`);
const pressure = document.getElementById(`pressure`);
const humidity = document.getElementById(`humidity`);
const cityInput = document.getElementById(`city-input`);
const history = document.getElementById(`history`);
const masterHistory = document.getElementById(`master-history`);
const API_KEY = "35cd73b5e1d07819e13570bddc14bf7a";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const ICON_URL = `https://openweathermap.org/img/wn/`;
const DEFULT_CITY = `pabna,bd`;

window.onload = function () {
  navigator.geolocation.getCurrentPosition(
    (s) => {
      //console.log(s);
      getWeatherData(null, s.coords);
    },
    (e) => {
      //console.log(e);
      getWeatherData();
    }
  );

  //search weather update  by input box
  cityInput.addEventListener(`keypress`, function (e) {
    if (e.key === `Enter`) {
      if (e.target.value) {
        getWeatherData(e.target.value);
        e.target.value = ``;
      } else {
        alert("please enter a valid city name.");
      }
    }
  });
};

function getWeatherData(city = DEFULT_CITY, coords) {
  let url = BASE_URL;
  city === null
    ? (url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}`)
    : (url = `${url}&q=${city}`);

  //API Request create
  axios
    .get(url)
    .then(({ data }) => {
      // console.log(res.data);
      // console.log(data.main.humidity);
      let weather = {
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };
      setWeather(weather);
    })

    .catch((err) => {
      //console.log(err);
      alert("city not found");
    });
}
//weather update set in inner html
function setWeather(weather) {
  condition.src = `${ICON_URL}${weather.icon}.png`;
  city.innerHTML = weather.name;
  country.innerHTML = weather.country;
  mainTaxt.innerHTML = weather.main;
  description.innerHTML = weather.description;
  temp.innerHTML = weather.temp;
  pressure.innerHTML = weather.pressure;
  humidity.innerHTML = weather.humidity;
}
