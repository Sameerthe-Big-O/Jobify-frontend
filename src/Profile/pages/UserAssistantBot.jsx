import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "User", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await fetch("http://localhost:3000/bot/general", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = data.message;
      setMessages([...newMessages, { sender: "Bot", text: botMessage }]);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const renderMessage = (msg, index) => {
    if (
      msg.sender === "Bot" &&
      msg.text.startsWith("<code>") &&
      msg.text.endsWith("</code>")
    ) {
      return (
        <div
          key={index}
          className="my-2 p-3 rounded-lg bg-gray-300 text-black self-start"
        >
          <strong>{msg.sender}:</strong>
          <pre className="pre">
            <code>{msg.text.slice(6, -7)}</code>
          </pre>
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className={`my-2 p-3 rounded-lg ${
            msg.sender === "User"
              ? "bg-blue-500 text-white self-end"
              : "bg-gray-300 text-black self-start"
          }`}
        >
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-[70vh] bg-gray-100">
      <div className="flex-grow p-4 overflow-auto">
        <div className="w-full mx-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-3 rounded-lg ${
                msg.sender === "User"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </div>
      <form className="flex p-4 bg-white border-t" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here"
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
