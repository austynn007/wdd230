const apiKey = '85aa339587f00e3ee72f31840104dbed'; 
const city = 'Ndikelionwu'; 

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        // Fetch current weather
        const currentResponse = await fetch(currentWeatherUrl);
        const currentData = await currentResponse.json();

        // Log the current weather data for debugging
        console.log('Current Weather Data:', currentData);

        // Display current weather
        displayCurrentWeather(currentData);

        // Fetch 5-day/3-hour forecast
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Log the forecast data for debugging
        console.log('Forecast Data:', forecastData);

        // Display 3-day forecast
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    const currentTemp = document.getElementById('current-temp');
    const weatherCondition = document.getElementById('weather-condition');

    if (currentTemp && weatherCondition) { // Check if elements exist
        if (data.cod === 200) { // Check if the API response is successful
            currentTemp.textContent = `${data.main.temp} °F`;
            weatherCondition.textContent = data.weather[0].description;
        } else {
            currentTemp.textContent = 'N/A';
            weatherCondition.textContent = 'Weather data unavailable';
        }
    } else {
        console.error('Error: Could not find weather elements in the HTML.');
    }
}

function displayForecast(data) {
    const forecastData = document.getElementById('forecast-data');
    if (forecastData) { // Check if the element exists
        forecastData.innerHTML = ''; // Clear existing content

        if (data.cod === '200') { // Check if the API response is successful
            // Group forecast data by day
            const dailyForecast = {};
            data.list.forEach(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
                if (!dailyForecast[date]) {
                    dailyForecast[date] = [];
                }
                dailyForecast[date].push(item);
            });

            // Display the next 3 days
            const forecastDays = Object.keys(dailyForecast).slice(0, 3);
            forecastDays.forEach(date => {
                const dayData = dailyForecast[date];
                const dayTemp = dayData.reduce((sum, item) => sum + item.main.temp, 0) / dayData.length;
                const dayCondition = dayData[0].weather[0].description;

                const forecastItem = document.createElement('div');
                forecastItem.classList.add('forecast-item');
                forecastItem.innerHTML = `
                    <p><strong>${date}</strong></p>
                    <p>Avg Temp: ${dayTemp.toFixed(1)} °F</p>
                    <p>Condition: ${dayCondition}</p>
                `;
                forecastData.appendChild(forecastItem);
            });
        } else {
            forecastData.innerHTML = '<p>Forecast data unavailable</p>';
        }
    } else {
        console.error('Error: Could not find forecast element in the HTML.');
    }
}

// Fetch weather data on page load
fetchWeather();