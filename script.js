// Define variables for DOM elements
const search_bar = document.getElementById("search_bar");
const search_btn = document.getElementById("search_btn");
const temp = document.getElementById("temp");
const cities = document.getElementById("city");
const country = document.getElementById("country");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const image = document.getElementById("image");

// API endpoint and API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "a3e1a5beb3fe43e762c26fb40b84880a";

// Function to fetch weather data for a given city
async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Update DOM elements with weather data
    cities.textContent = data.name;
    country.textContent = data.sys.country;
    temp.textContent = `${Math.round(data.main.temp - 273)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/hr`;
    image.setAttribute("src", `images/${data.weather[0].main}.png`);
    image.setAttribute("alt", data.weather[0].main);
    console.log(data.weather[0].main);
  } catch (error) {
    console.error("Some error occur");
  }
}

// Add a click event listener to the search button
search_btn.addEventListener("click", () => {
  fetchWeatherData(search_bar.value);
});
