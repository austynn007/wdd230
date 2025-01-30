// Select the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to display a chapter in the list
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);
  
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Function to save chapters to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to retrieve chapters from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove the '❌'
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// Initialize chapters array
let chaptersArray = getChapterList() || [];

// Display existing chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add event listener to the button for adding chapters
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  } else {
    // If the input is blank, alert the user and refocus on the input
    alert('Please enter a book and chapter.');
    input.focus();
  }
});