const baseURL = "https://austynn007.github.io/wdd230/";
const linksURL = "https://austynn007.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const card = document.querySelector('.learning-activities ul');
    card.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;

            weekItem.appendChild(linkElement);

            if (index < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(' - '));
            }
        });

        card.appendChild(weekItem);
    });
}

getLinks();