// Get the DOM elements with the specified IDs
const codeBlock = document.getElementById('code');
const form = document.getElementById('form-home'); 
const input = document.getElementById('input-home');

// Generate random values for variables a, b, and c
const a = Math.floor(Math.random() * 50) + 1;
const b = Math.floor(Math.random() * 50) + 1;
const c = Math.floor(Math.random() * 99) + 1;

// Define a test function that takes three parameters: a, b, and c
const test = (a, b, c) => {
  // Perform some arithmetic operations on the parameters
  let d = a + b - c;
  let e = a;
  a = b;
  b = a;
  a = e;
  // Check if d is not equal to 0
  if (d !== 0) 
    // Return a calculated value if the condition is true
    return (2*b + c - a + 2*e) / d
  // Return a calculated value if the condition is false
  return  2*b + c - a + 2*e
}

// Generate a code string using template literals with the random values
const code = `
a = ${a}; <br />
b = ${b}; <br />
c = ${c}; <br />
<br />
def calc(a, b, c): <br />
  · d = a + b - c <br />
  · e = a <br />
  · a = b <br />
  · b = a <br />
  · a = e <br />
  · if d != 0: <br />
    · · return (2*b + c - a + 2*e) / d <br />
  · return  2*b + c - a + 2*e <br />
  <br />
print(calc(c, c-a, b)) <br />
`
// Set the inner HTML of the code block element to the generated code string
codeBlock.innerHTML = code

// Add an event listener to the form for the submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if the input value is not empty
  if (input.value) {
    // Check if the input value matches the expected value calculated by the test function
    if (Math.floor(input.value) === Math.floor(test(c, c - a, b))) {
      // Store a flag in session storage indicating successful submission
      sessionStorage.setItem('pass', true);
      // Redirect the user to the "/join" page
      window.location.replace("/join");
    }

    // Reset the input value
    input.value = '';
  }
});
