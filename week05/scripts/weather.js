// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with your API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=YOUR_API_KEY';

// Fetch weather data
async function apiFetch() {
  try {
    console.log('Fetching data from:', url); // Debugging: Log the API URL
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data); // Debugging: Log the API response
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching weather data:', error); // Debugging: Log any errors
  }
}

// Display weather data
function displayResults(data) {
  console.log('Displaying results:', data); // Debugging: Log the data
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log('Icon URL:', iconsrc); // Debugging: Log the icon URL
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  captionDesc.textContent = data.weather[0].description;
}

// Call the function to fetch and display data
apiFetch();