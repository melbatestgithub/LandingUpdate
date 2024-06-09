import "./chat.css";
import Message from "../components/messages/Message";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Conversation from "../components/conversation/Conversation";
import { io } from "socket.io-client";

const Chat = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).others : null;
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();
  const baseUrl = "http://localhost:5600/api";

  useEffect(() => {
    socket.current = io("ws://localhost:5800");
    socket.current.on("getMessage", (data) => {
      console.log("Message received from socket:", data);
      setArrivalMessage({
        sender: data.senderId,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (user?._id) {
      socket.current.emit("addUser", user._id);
      socket.current.on("getUsers", (users) => {
        console.log("Connected users:", users);
      });
    }
  }, [user]);

  useEffect(() => {
    if (user && user._id) {
      fetchConversations();
    }
  }, [user]);

  const fetchConversations = async () => {
    try {
      const res = await axios.get(`${baseUrl}/conversations/${user._id}`);
      setConversations(res.data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${baseUrl}/messages/${currentChat._id}`);
        setMessages(res.data);
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };

    if (currentChat) {
      getMessages();
    }
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageObj = {
      sender: user._id,
      message: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find((member) => member !== user._id);
    console.log("Sending message:", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(`${baseUrl}/messages`, messageObj);
      setMessages((prevMessages) => [...prevMessages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log("Error sending message:", error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="full_container w-full">
      <div className="UserList">
        {conversations.map((c) => (
          <div key={c._id} onClick={() => setCurrentChat(c)}>
            <Conversation conversation={c} currentUser={user} />
          </div>
        ))}
      </div>
      <div className="chatBox w-full h-screen">
        <div className="chatBox-wrapper">
          {currentChat ? (
            <>
              <div>
                <div>
                  {messages.map((m) => (
                    <div key={m._id} ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex mt-3 justify-between p-3 items-center">
                <textarea
                  className="w-[80%] h-[90px] p-3 border border-gray-300 focus:outline-none rounded-md focus:border-blue-400"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button
                  className="bg-slate-800 px-3 py-2 text-white rounded-lg"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="empty-chat">Open a conversation to start</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
