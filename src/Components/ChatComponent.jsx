import { useState, useEffect, useRef } from "react";
import "./Chat.css"; // Import CSS for animations
import { useContext } from "react";
import { SocketContext } from "../ContextAPI/Soket";

const ChatComponent = ({ messages, userData, currrenChannel }) => {
  console.log(userData, currrenChannel);

  const socket = useContext(SocketContext);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("sendMessage", newMessage, currrenChannel, userData.data.id);
      setNewMessage("");
    }
  };

  //   useEffect(() => {
  //     // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, [messages]);

  return (
    <div className="h-[75%] w-full overflow-y-auto shadow-sm flex flex-col justify-end bg-gray-100">
      <div className="p-4 flex-grow flex flex-col">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map(({ content, senderId, id }) => {
            const isMine = senderId === userData.data.id;
            return (
              <div
                key={id}
                className={`message p-4 mb-6 max-w-[50%] rounded-b-xl ${
                  isMine
                    ? "bg-green-500 text-white self-end rounded-tl-xl ml-auto rounded-tr-xl"
                    : "bg-orange-500 text-white self-start rounded-tr-xl mr-auto rounded-tl-xl"
                }`}
              >
                {content}
              </div>
            );
          })
        ) : (
          <div className="text-center text-lg font-semibold mt-24">
            No Messages or No Conversation Selected
          </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex items-center p-4 bg-white shadow-md">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-md p-2 mr-2"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
