const apiKey = '5242dd46840876220d3c7bc48cec1cd2';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

const searchButton = document.getElementById('searchButton');
const locationInput = document.getElementById('locationInput');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', async () => {
    const location = locationInput.value;
    const response = await fetch(`${apiUrl}?q=${location}&appid=${apiKey}`);
    const data = await response.json();
    const weather = data.weather[0];
    locationElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${weather.temp}°C`;
    descriptionElement.textContent = `Description: ${weather.description}`;
});ssc