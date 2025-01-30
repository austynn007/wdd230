// Select the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button for adding chapters
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    // Create a new list item
    const li = document.createElement('li');
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    
    // Populate the list item's text with the input value
    li.textContent = input.value;
    
    // Set the delete button's text
    deleteButton.textContent = '❌';
    
    // Append the delete button to the list item
    li.append(deleteButton);
    
    // Append the new list item to the list
    list.append(li);
    
    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();  // Focus the input after deletion
    });
    
    // Focus back on the input for the next entry
    input.focus();
    
    // Clear the input field
    input.value = '';
  } else {
    // If the input is blank, alert the user and refocus on the input
    alert('Please enter a book and chapter.');
    input.focus();
  }
});