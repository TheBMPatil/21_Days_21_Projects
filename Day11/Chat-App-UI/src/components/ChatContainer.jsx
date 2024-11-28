import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState({
    _id: "2",
    profilePic: "/avatar.png",
    name: "John Doe",
  }); // Mock selected user
  const [authUser] = useState({
    _id: "1",
    profilePic: "/avatar.png",
    name: "Jane Doe",
  }); // Mock authenticated user

  const messageEndRef = useRef(null);

  // Simulate fetching messages
  useEffect(() => {
    setIsMessagesLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setMessages([
        {
          _id: "m1",
          senderId: "1",
          text: "Hello!",
          createdAt: new Date().toISOString(),
        },
        {
          _id: "m2",
          senderId: "2",
          text: "Hi, how are you?",
          createdAt: new Date().toISOString(),
        },
      ]);
      setIsMessagesLoading(false);
    }, 1000);
  }, [selectedUser._id]);

  // Scroll to the latest message
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            ref={messageEndRef}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {new Date(message.createdAt).toLocaleTimeString()}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
