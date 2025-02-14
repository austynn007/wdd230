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

    // Lazy loading for images
    const images = document.querySelectorAll(".main-content img[data-src]");

    const loadImage = (img) => {
        img.setAttribute("src", img.getAttribute("data-src"));
        img.onload = () => {
            img.removeAttribute("data-src");
        };
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach((img) => {
        imageObserver.observe(img);
    });

    // Visit message logic
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();
    const msToDays = 86400000; // Milliseconds in a day

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / msToDays);

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentDate);

    // Calendar logic
    const calendarBody = document.querySelector("#calendar tbody");
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();

    let calendarHtml = "";
    let day = 1;

    for (let i = 0; i < 6; i++) {
        calendarHtml += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                calendarHtml += "<td></td>";
            } else if (day > lastDay.getDate()) {
                break;
            } else {
                calendarHtml += `<td>${day}</td>`;
                day++;
            }
        }
        calendarHtml += "</tr>";
        if (day > lastDay.getDate()) {
            break;
        }
    }

    calendarBody.innerHTML = calendarHtml;
});