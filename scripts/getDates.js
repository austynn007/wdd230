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
});