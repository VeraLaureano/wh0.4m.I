// Import the encodingChars and decodingChars functions from the specified files
import CryptoJS from "crypto-js";
import { decodingChars, encodingChars } from "./encoding.js";
import { toBinary, toString } from "./binary.js";

// Define an encrypt function that takes a message (msg) and a key as input
export const encrypt = (msg, key) => {
  // Step 1: Split the input message into an array of characters
  const arrChars = msg.split("");
  let text = "";
  
  // Step 2: Reverse the order of characters in the array
  for (let i = arrChars.length - 1; i >= 0; i--) {
    text += arrChars[i];
  }
  
  // Step 3: Split the reversed text into an array of words and reverse the order of words
  let aux = text.split(" ");
  text = "";
  for (let i = aux.length - 1; i >= 0; i--) {
    text += aux[i] + " ";
  }
  
  // Step 4: Encrypt the text using AES encryption with the provided key
  text = CryptoJS.AES.encrypt(text, key).toString()

  // Step 5: Apply the encodingChars function to the reversed and rearranged text
  text = encodingChars(text);
  
  // Step 6: Convert the text to base64 encoding and trim any leading/trailing spaces
  text = btoa(text.trim());
  
  text = toBinary(text);

  return text;
}

// Define a decrypt function that takes a message (msg) and a key as input
export const decrypt = (msg, key) => {
  // Step 1: Display the received message
  // Step 2: Convert the message from binary to string
  let text = toString(msg);

  // Step 3: Convert the text from base64 encoding back to string
  text = atob(text);
  console.log('STEP 3: ', text);
  
  // Step 4: Apply the decodingChars function to the decoded text
  text = decodingChars(text);

  // Step 5: Decrypt the text using AES decryption with the provided key
  const bytes  = CryptoJS.AES.decrypt(text, key);
  text = bytes.toString(CryptoJS.enc.Utf8);
  
  // Step 6: Split the decrypted text into an array of words and reverse the order of words
  let aux = text.split(" ");
  text = "";
  for (let i = aux.length - 1; i >= 0; i--) {
    text += aux[i] + " ";
  }
  
  // Step 7: Split the decrypted text into an array of characters and reverse the order of characters
  const arrChars = text.split("");
  text = "";
  for (let i = arrChars.length - 1; i >= 0; i--) {
    text += arrChars[i];
  }
  
  return text.trim();
}
