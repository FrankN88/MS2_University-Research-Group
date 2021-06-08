/*
* Creating a Weather app by using "Open Weather Mobile App"
*/
// Declaring constants
const apikey = "87036bfed71d7524c41a4f9923b393b7"; // API key
const main = document.getElementById("main");
const weatherForm = document.getElementById("weather-form");
const search = document.getElementById("search-weather");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

// The async and await keywords enable the asynchronous function
async function getWeatherByLocation(city) { 
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
}
// Adding weather to the page
function addWeatherToPage(data) { 
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

    // Cleanup
    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

weatherForm.addEventListener("submit", (e) => { // Adding event listener
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});