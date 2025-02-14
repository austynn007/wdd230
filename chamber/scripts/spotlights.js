const membersUrl = 'data/members.json';

async function fetchSpotlights() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = ''; // Clear existing content

    // Filter members with Silver or Gold membership
    const qualifiedMembers = members.filter(member => 
        member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
    );

    // Randomly select 2-3 members
    const selectedMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    selectedMembers.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        spotlight.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        `;
        spotlightContainer.appendChild(spotlight);
    });
}

fetchSpotlights();