document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
    }

    // Get the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;
    }

    // Dark Mode Toggle
    const modeBtn = document.getElementById('mode');
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});

const hamburgerElement = document.querySelector('#hamburger');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});