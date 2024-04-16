export const toBinary = (string) => {
  let result = '';

  for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i);
      const binary = char.toString(2); 
      result += binary.padStart(8, '0');
    }
    
  return result;
}

export const toString = (binary) => {
  let result = '';

  for (let i = 0; i < binary.length; i += 8) {
      const binaryBite = binary.substr(i, 8); 
      const decimalValue = parseInt(binaryBite, 2); 
      const char = String.fromCharCode(decimalValue);
      result += char;
  }
  
  return result;
}