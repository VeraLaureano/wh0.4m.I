// Define a function called seeEvent that takes three parameters: msg, key, and id
export const seeEvent = (msg, key, id) => {
  // Decrypt the message using the provided key
  const message = decrypt(msg, key);

  // Log a separator for better visualization
  logInfo("========================");

  // Log the decrypted message
  logInfo(message);

  // Log a separator for better visualization
  logInfo("========================");

  // Emit a 'see' event to the specified client (id) with the decrypted message
  io.to(id).emit('see', message);
}
