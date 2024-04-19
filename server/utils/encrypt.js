// Import the encodingChars function from the specified file
import CryptoJS from "crypto-js";
import { decodingChars, encodingChars } from "./encoding.js";
import { toString } from "./binary.js";

// Define an encrypt function that takes a message (msg) as input
export const encrypt = (msg, key) => {
  // Split the input message into an array of characters
  console.log('PASO 1: ', msg);
  const arrChars = msg.split("");
  let text = "";
  
  // Reverse the order of characters in the array
  for (let i = arrChars.length - 1; i >= 0; i--) {
    text += arrChars[i];
  }
  console.log('PASO 2: ', text);
  
  // Split the reversed text into an array of words
  let aux = text.split(" ");
  text = "";
  // Reverse the order of words in the array
  for (let i = aux.length - 1; i >= 0; i--) {
    text += aux[i] + " ";
  }
  console.log('PASO 3: ', text);
  
  text = CryptoJS.AES.encrypt(text, key).toString()
  console.log('PASO 4: ', text);

  // Apply the encodingChars function to the reversed and rearranged text
  text = encodingChars(text);
  console.log('PASO 5: ', text);
  
  // Convert the text to base64 encoding and trim any leading/trailing spaces
  text = btoa(text.trim());
  console.log('PASO 6: ', text);
  
  return text;
}

export const decrypt = (msg, key) => {
  console.log('PASO 1: ', msg);

  let text = toString(msg);
  console.log('PASO 2: ', text);

  text = atob(text);
  console.log('PASO 3: ', text);
  
  text = decodingChars(text);
  console.log('PASO 4: ', text);
  
  const bytes  = CryptoJS.AES.decrypt(text, key);
  text = bytes.toString(CryptoJS.enc.Utf8);
  console.log('PASO 5: ', text);
  
  let aux = text.split(" ");
  text = "";
  // Reverse the order of words in the array
  for (let i = aux.length - 1; i >= 0; i--) {
    text += aux[i] + " ";
  }
  console.log('PASO 6: ', text);
  
  // Split the input message into an array of characters
  const arrChars = text.split("");
  text = "";
  // Reverse the order of characters in the array
  for (let i = arrChars.length - 1; i >= 0; i--) {
    text += arrChars[i];
  }
  console.log('PASO 7: ', text);
  
  return text;
}