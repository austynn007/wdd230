// URL to the JSON data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the div with id="cards"
const cards = document.querySelector('#cards');

// Fetch the JSON data and display it
async function getProphetData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayProphets(data.prophets); // Pass the array of prophets to the display function
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display the prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let numOfChildren = document.createElement('p');

    // Populate elements
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

    // Set image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(numOfChildren);
    card.appendChild(portrait);

    // Append card to the cards container
    cards.appendChild(card);
  });
};

// Call the function to fetch and display data
getProphetData();