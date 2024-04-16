// Import the encodingChars function from the specified file
import { encodingChars } from "./encoding.js";

// Define an encrypt function that takes a message (msg) as input
export const encrypt = (msg) => {
  // Split the input message into an array of characters
  const arrChars = msg.split("");
  let text = "";

  // Reverse the order of characters in the array
  for (let i = arrChars.length - 1; i >= 0; i--) {
    text += arrChars[i];
  }

  // Split the reversed text into an array of words
  let aux = text.split(" ");
  text = "";
  // Reverse the order of words in the array
  for (let i = aux.length - 1; i >= 0; i--) {
    text += aux[i] + " ";
  }

  // Apply the encodingChars function to the reversed and rearranged text
  text = encodingChars(text);

  // Convert the resulting text to base64 encoding and trim any leading/trailing spaces
  return btoa(text.trim());
}
