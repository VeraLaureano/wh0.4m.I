// Get references to the HTML elements
const formJoin = document.getElementById('form-join'); // Reference to the form element
const inputJoin = document.getElementById('input-join'); // Reference to the input field

// Add an event listener for form submission
formJoin.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Check if the input value has a length less than 12 characters
  if (inputJoin.value.length < 6) {
    // If so, display an alert message
    window.alert('K3y r0om min l3ngth 6');
    return; // Exit the function
  }

  // If the input value is not empty
  if (inputJoin.value) {
    // Store the input value in the session storage with the key 'key_room'
    sessionStorage.setItem('key_room', inputJoin.value);
    inputJoin.value = ''; // Clear the input field
    // Redirect the user to the '/chat' page
    window.location.replace("/chat");
  }
});
