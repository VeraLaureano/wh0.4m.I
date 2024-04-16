import { encodingChars } from "./encoding.js";

export const encrypt = (msg) => {
  const arrChars = msg.split("");
  let text = "";
  
  for (let i = arrChars.length - 1; i >= 0; i--) {
    text += arrChars[i]
  }
  
  let aux = text.split(" ");
  text = "";
  for (let i = aux.length - 1; i >= 0; i--) {
      text += aux[i] + " ";
  }

  text = encodingChars(text)

  return btoa(text.trim());
}