// Convert a string to binary representation
export const toBinary = (string) => {
  let result = '';

  // Iterate through each character in the input string
  for (let i = 0; i < string.length; i++) {
    // Get the Unicode value (ASCII code) of the character
    const char = string.charCodeAt(i);
    // Convert the Unicode value to binary representation (base 2)
    const binary = char.toString(2); 
    // Ensure that the binary representation is 8 bits long (padded with zeros if needed)
    result += binary.padStart(8, '0');
  }
  
  return result;
}

// Convert a binary string back to its original string representation
export const toString = (binary) => {
  let result = '';

  // Process the binary string in chunks of 8 bits (1 byte)
  for (let i = 0; i < binary.length; i += 8) {
    // Extract an 8-bit segment from the binary string
    const binaryByte = binary.substr(i, 8); 
    // Convert the binary segment to its decimal value
    const decimalValue = parseInt(binaryByte, 2); 
    // Get the character corresponding to the decimal value
    const char = String.fromCharCode(decimalValue);
    // Append the character to the result
    result += char;
  }
  
  return result;
}
