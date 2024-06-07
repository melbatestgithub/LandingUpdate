import "./chat.css";
import Message from "../components/messages/Message";
import { useState, useEffect } from "react";
import axios from 'axios';
import Conversation from "../components/conversation/Conversation";

const Chat = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).others : null;
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);
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
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  useEffect(() => {
    if (conversations.length > 0) {
      fetchFriendsData();
    }
  }, [conversations]);

  const fetchFriendsData = async () => {
    try {
      const friendsData = await Promise.all(
        conversations.map(async (conversation) => {
          const friendId = conversation.members.find(m => m !== user._id);
          // const res = await axios.get(`${baseUrl}/users/getAll/${friendId}`);
          // return res.data;
        })
      );
      setUsers(friendsData);
      console.log(friendsData);
    } catch (error) {
      console.error("Error fetching friend data:", error);
    }
  };

  return (
    <div className="full_container w-full">
      <div className="UserList">
        {conversations.map(c=>(
          <Conversation conversation={c} currentUser={user}/>
        ))}
      </div>
      <div className="chatBox w-full h-screen">
        <div className="chatBox-wrapper">
          <div className=" ">
            <Message />
            <Message own={true} />
            <Message />
            {/* Add more <Message /> components as needed */}
          </div>
          <div className="flex mt-3 justify-between p-3 items-center">
            <textarea className="w-[80%] h-[90px] p-3 border border-gray-300 focus:outline-none rounded-md focus:border-blue-400" placeholder="write something..."></textarea>
            <button className="bg-slate-800 px-3 py-2 text-white rounded-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
