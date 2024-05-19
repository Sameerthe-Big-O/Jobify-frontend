import io from "socket.io-client";
import react from "react";
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
export const socket = io(URL, {
  autoConnect: false,
  connectionStateRecovery: {},
});

export const SocketContext = react.createContext();
