import React, { useState, useEffect, useContext } from "react";
import Input from "../Components/Input";
import Img1 from "../assets/Images/avatar.svg";
import tutorialsdev from "../assets/Images/tutorialsdev.png";
import { SocketContext } from "../ContextAPI/Soket";
import Person from "../assets/Images/companylogo.jpg";
import ChatComponent from "../Components/ChatComponent";


function ChatPage() {
  const socket = useContext(SocketContext);

  const [messages, setMessages] = useState([]);
  const [chatUser, setChatUers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("token"));
  const [currrenChannel, setCurrentChannel] = useState("");
  const UserEmail = userData.data.email;

  const retriveChatHistory = (old, newUser) => {
    if (socket.connected) {
      socket.emit("checkRoom", old, newUser);
    } else {
      console.error("Socket is not connected.");
    }
  };

  useEffect(() => {
    const handleRoom = (room) => {
      setCurrentChannel(room);
      socket.emit("oldMessages", room);
    };

    const handleAllMessage = (messages) => {
      setMessages([...messages]);
    };

    const handleNewMessage = (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    };

    socket.on("room", handleRoom);
    socket.on("allMessage", handleAllMessage);
    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("room", handleRoom);
      socket.off("allMessage", handleAllMessage);
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  useEffect(() => {
    const fetchIntialChats = async () => {
      socket.emit("allRooms", UserEmail);

      socket.on("userRooms", async (rooms) => {
        let userArray = rooms.map((rooma) => rooma.room.split("-"));
        let userFetchArray = [];

        for (let user of userArray) {
          user.forEach((userEmail) => {
            if (userEmail !== UserEmail) {
              userFetchArray.push(userEmail);
            }
          });
        }

        let userDetail = [];

        try {
          for (let email of userFetchArray) {
            const res = await fetch(
              `http://localhost:3000/api/user/userByEmail`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
              }
            );
            const { data } = await res.json();
            if (data[0]) userDetail.push(data[0]);
          }
          setChatUers(userDetail);
        } catch (error) {
          socket.emit("error", "Failed to fetch user data");
        }
      });
    };

    fetchIntialChats();
  }, [UserEmail, socket]);

  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-secondary overflow-scroll">
        <div className="flex items-center my-8 mx-14">
          <div>
            <img
              src={tutorialsdev}
              width={75}
              height={75}
              className="border border-primary p-[2px] rounded-full"
            />
          </div>
          <div className="ml-8">
            <p className="text-lg font-light">{userData?.data?.name}</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {chatUser.length > 0 ? (
              chatUser.map(({ _id, profilePicture, email, name }) => (
                <div
                  key={_id}
                  onClick={() => retriveChatHistory(UserEmail, email)}
                  className="flex items-center py-8 border-b border-b-gray-300 cursor-pointer"
                >
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img
                        src={Person}
                        className="w-[60px] h-[60px] rounded-full p-[2px] border loborder-primary"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-600">
                        {email}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-lg font-semibold mt-24">
                No Conversations
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen overflow-scroll-y bg-white flex flex-col items-center">
        {messages?.receiver?.fullName && (
          <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 py-2">
            <div className="cursor-pointer">
              <img src={Img1} width={60} height={60} className="rounded-full" />
            </div>
            <div className="ml-6 mr-auto">
              <h3 className="text-lg">{messages?.receiver?.fullName}</h3>
              <p className="text-sm font-light text-gray-600">
                {messages?.receiver?.email}
              </p>
            </div>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-outgoing"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <line x1="15" y1="9" x2="20" y2="4" />
                <polyline points="16 4 20 4 20 8" />
              </svg>
            </div>
          </div>
        )}
        <ChatComponent
          userData={userData}
          messages={messages}
          currrenChannel={currrenChannel}
        />
      </div>
    </div>
  );
}

export default ChatPage;
