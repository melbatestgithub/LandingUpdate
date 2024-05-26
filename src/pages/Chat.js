import "./chat.css"
import Message from "../components/messages/Message"
const Chat = () => {
  return (
    <div className="full_container w-full">
      <div className="UserList">
       <div className="singleUser">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="userImg" />
        <span>melba bizuneh</span>
       </div>
       <div className="singleUser">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="userImg" />
        <span>melba bizuneh</span>
       </div>
       <div className="singleUser">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="userImg" />
        <span>melba bizuneh</span>
       </div>
      </div>
      <div className="chatBox w-full h-screen">
       <div className="chatBox-wrapper">
        <div className=" ">
        < Message/>
        < Message own={true}/>
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        < Message/> 
        </div>
        <div className=" flex mt-3 justify-between p-3 items-center">
          <textarea  className="w-[80%] h-[90px] p-3 border border-gray-300 focus:outline-none rounded-md focus:border-blue-400 "  placeholder="write something..."></textarea>
          <button className="bg-slate-800 px-3 py-2 text-white rounded-lg ">Send</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Chat
