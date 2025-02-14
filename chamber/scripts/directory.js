const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#directory");

// Fetch member data from JSON
async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

// Display members in grid or list view
function displayMembers(members) {
    display.innerHTML = ""; // Clear existing content

    members.forEach(member => {
        const section = document.createElement("section");
        section.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.description}</p>
        `;
        display.appendChild(section);
    });
}

// Event listeners for view toggle
gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

// Load members on page load
getMembers();