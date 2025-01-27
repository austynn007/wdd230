document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul.menuLinks');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');  // Use a class for toggling
        });
    }

    // Update last modified date
    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Placeholder for weather update - would be replaced with actual API calls
    const weatherTemperature = document.querySelector('.weather-card p:nth-child(2)');
    const weatherCondition = document.querySelector('.weather-card p:nth-child(3)');

    if (weatherTemperature && weatherCondition) {
        weatherTemperature.textContent = `Temperature: 🌡️ ${Math.floor(Math.random() * 20 + 60)}°F`;
        weatherCondition.textContent = `Condition: ${['Partly Cloudy', 'Sunny', 'Rainy'][Math.floor(Math.random() * 3)]}`;
    }
});