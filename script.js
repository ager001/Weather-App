const apiKey = "942f42a8f9a7d51b1a94550c25d20f63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
//I have created a function to fetch weather data from the OpenWeatherMap API
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }else{
        
    var data = await response.json();
    
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }  else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    } else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
    
    
}
//I have added an event listener to the search button to call the checkWeather function with the value from the search box when clicked
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
checkWeather();