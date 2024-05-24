import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (description.trim() === "") return;

    const newMessages = [...messages, { sender: "User", text: description }];
    setMessages(newMessages);
    setDescription("");

    try {
      const response = await fetch(
        "http://localhost:3000/bot/generate-questions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role, level, description: description }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = data.message;
      const questionsArray = botMessage
        .split("\n")
        .filter((question) => question.trim());
      console.log(questionsArray);
      setQuestions(questionsArray);
      setMessages([...newMessages, { sender: "Bot", text: botMessage }]);
    } catch (error) {
      console.error("Error communicating with backend:", error);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] bg-gray-100">
      <div className="flex-grow p-4 overflow-auto">
        <div className="max-full mx-auto">
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
        <ul>
          {questions &&
            questions.length > 0 &&
            questions.map((question, index) => {
              return (
                <li
                  key={index}
                  className="p-3 bg-gray-100 my-2 rounded-lg text-black"
                >
                  <b>{question}</b>
                </li>
              );
            })}
        </ul>
      </div>
      <form className="flex p-4 bg-white border-t" onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
      <form
        className="flex p-4 bg-white border-t"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter role"
          className="flex-grow p-2 border rounded-lg"
        />
        <input
          type="text"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Enter level"
          className="flex-grow p-2 border rounded-lg ml-2"
        />
        <button
          onClick={handleSubmit}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Generate Questions
        </button>
      </form>
    </div>
  );
};

export default Chat;
