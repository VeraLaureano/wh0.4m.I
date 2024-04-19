import { io } from "../index.js";
import { decrypt } from "../utils/encrypt.js"
import { logInfo } from "../utils/loggers.js";

export const seeEvent = (msg, key, id) => {
  const message = decrypt(msg, key);

  logInfo("========================");
  logInfo(message);
  logInfo("========================");

  io.to(id).emit('see', message);
} 