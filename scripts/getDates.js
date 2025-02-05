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

    // Visit Counter
    const visitCounterElement = document.getElementById('visit-counter');
    if (visitCounterElement) {
        let visitCount = localStorage.getItem('visitCount') || 0;
        visitCount++;
        localStorage.setItem('visitCount', visitCount);
        visitCounterElement.textContent = visitCount;
    }

    // Hamburger Menu Toggle
    const hamburgerElement = document.querySelector('#hamburger');
    const navElement = document.querySelector('.menuLinks');
    if (hamburgerElement && navElement) {
        hamburgerElement.addEventListener('click', () => {
            navElement.classList.toggle('open');
            hamburgerElement.classList.toggle('open');
        });
    }
});

// Get Current Year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Get Last Modified Date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;