const apiKey = 'e4e64b139344abed6d34d0eaea09d3a3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const gettempElement = document.querySelector(".temp");
const getcityElement = document.querySelector(".city");
const gethumidityElement = document.querySelector(".humidity");
const getwindElement = document.querySelector(".wind");
const getPressure = document.querySelector(".pressure");
const getClouds = document.querySelector(".clouds");
const getDescription = document.querySelector(".description");
const getDirection = document.querySelector(".direction");

async function checkWeather(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        getcityElement.textContent = data.name;
        gettempElement.textContent = `${Math.round(data.main.temp)}°C`;
        gethumidityElement.textContent = `${data.main.humidity}%`;
        getwindElement.textContent = `${data.wind.speed} m/s`;
        getPressure.textContent = `${data.main.pressure} hpa`;
        getClouds.textContent = ` ${data.clouds.all} %` ;
        getDescription.textContent = `${data.weather[0].description}`;
        getDirection.textContent = `${data.wind['deg']}°`;

        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    } catch (error) {
        console.error("Error occured:", error);
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    if (city.trim() !== "") {
        checkWeather(city);
    }
});