import "./chat.css";
import Message from "../components/messages/Message";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Conversation from "../components/conversation/Conversation";

const Chat = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).others : null;
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  const baseUrl = "http://localhost:5600/api";

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
    const getMessage = async () => {
      try {
        const res = await axios.get(`${baseUrl}/messages/${currentChat._id}`);
        setMessage(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (currentChat) {
      getMessage();
    }
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageObj = {
      sender: user._id,
      message: newMessage,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post(`${baseUrl}/messages`, messageObj);
      setMessage((prevMessages) => [...prevMessages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

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
                  {message.map((m) => (
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
