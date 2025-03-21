const apiKey = "9cead32cbb85eb8990424ba4094dbe00";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const temp = document.querySelector(".weather .temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const cardBeforeSearch = document.querySelector(".card-before-search")
const hideData = document.querySelector(".hide")


async function checkWeather(searchedCity){
    const response = await fetch(apiURL + searchedCity + `&appid=${apiKey}`);
    
    var data = await response.json();
    city.innerText = data.name;
    temp.innerText = (parseInt(data.main.temp))+ "°c"; 
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + "km/h";
    console.log(data);
    
    switch(data.weather[0].main){
        case "Clouds" : weatherIcon.src = "images/clouds.png";
        break;
        case "Clear" : weatherIcon.src = "images/clear.png";
        break;
        case "Rain" : weatherIcon.src = "images/rain.png";
        break;
        case "Drizzle" : weatherIcon.src = "images/drizzle.png";
        break;
        case "Mist" : weatherIcon.src = "images/mist.png";
        break;
        default: weatherIcon.src = "images/clouds.png";
       }
       
}

// let searchWeather = (value)=>{
//     hideData.classList.remove("hide");
//     cardBeforeSearch.classList.remove("card-before-search")
    
// checkWeather(searchBox.value);
// }

searchBtn.addEventListener("click", ()=>{
    hideData.classList.remove("hide");
    cardBeforeSearch.classList.remove("card-before-search")
    
checkWeather(searchBox.value);
});

// searchBtn.addEventListener("keypress", (value)=>{
//    if(value.key=="Enter"){
//     searchWeather(value);
//    }
// })





