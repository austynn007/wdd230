const banner = document.getElementById('meet-greet-banner');
const closeButton = document.getElementById('close-banner');

// Show banner only on Mondays, Tuesdays, and Wednesdays
const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
if (today >= 1 && today <= 3) { // Monday (1), Tuesday (2), Wednesday (3)
    banner.style.display = 'block';
}

// Close banner when the close button is clicked
closeButton.addEventListener('click', () => {
    banner.style.display = 'none';
});