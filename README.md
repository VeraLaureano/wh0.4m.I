# **Wh0.4m.I - Secret Chat Application**

Welcome to the Secret Chat Application! This Node.js and Socket.io-based platform enables users to engage in secure conversations. Here's an overview of how it works:

### Features

- **Room Access with Key**: Users need to enter a room using the corresponding key.
- **Message Encryption**: Messages sent to a room are encrypted with a unique encryption key.
- **Message Retrieval**: Each message is associated with an ID for retrieval purposes.
- **Double Layer Encryption**: Messages are encoded using an internal algorithm, then encrypted with the AES algorithm using the received key.
- **Binary Display**: Encrypted messages are converted into a string of binary digits for display.
- **Decryption Button**: Users can decrypt messages by providing the decryption key along with the ID.
- **Temporary Message Display**: Upon successful decryption, the message content is displayed momentarily.
- **Anonymity**: The chat does not store messages in a database to maintain user anonymity. Once the tab is closed, messages cannot be recovered.

### Project Structure

The project is organized into the following folders:

- **client**: Contains client-side views and logic.
- **server**: Houses the application logic and server configuration.
  - **events**: Socket.io events are organized into a separate layer for improved readability and scalability.

Feel free to explore and contribute to this secure chat platform!