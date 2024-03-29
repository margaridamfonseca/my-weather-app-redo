function weatherUpdate(response){
    let temperatureElement = document.querySelector("#weather-app-temperature-value");
    let cityElement = document.querySelector("h1")    
    let weatherConditionElement = document.querySelector("#weatherCondition");    
    let humidityElement = document.querySelector("#humidity"); 
    let windSpeedElement = document.querySelector("#windSpeed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-temperature-icon" />`;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    weatherConditionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);

    getforecast(response.data.city)
}

function formatDate(date){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
   return `${day} ${hours}:${minutes}`; 
}

function searchCity(city){
    let apiKey ="8dod4a3bd4def17f159b978bb700cbt9"
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric` 
    axios.get(apiUrl).then(weatherUpdate);
}


function provideCity(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#form-search-box")
    searchCity(searchInputElement.value)
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit", provideCity)

function getforecast(city) {
    let apiKey = "8dod4a3bd4def17f159b978bb700cbt9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
}


function displayForecast() {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    let forecastHtml = "";

    days.forEach( function(day){
        forecastHtml = forecastHtml +
        `<div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature-max">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature-min">9º</div>
        </div>
        </div>`
    })

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
}

searchCity("Lisbon")




