function weatherUpdate(response){
    let temperatureElement = document.querySelector("#weather-app-temperature-value");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("h1")
    cityElement.innerHTML = response.data.city;
    let weatherConditionElement = document.querySelector("#weatherCondition");
    weatherConditionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity"); 
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    let windSpeedElement = document.querySelector("#windSpeed");
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);


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

searchCity("Lisbon")