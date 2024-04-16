// Import the 'crypto' module
import crypto from 'crypto';

// Define a function called 'genKey'
export const genKey = () => {
  // Generate 32 random bytes using a cryptographically secure random number generator
  const randomBytes = crypto.randomBytes(32);
  // Convert the random bytes to a hexadecimal string
  const key = randomBytes.toString('hex');
  // Return the generated key
  return key;
}
