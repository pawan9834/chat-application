import React, { useEffect, useState } from "react";
import avatar from "../assets/default.jpg";
import SearchModal from "../components/SearchModal";
import chatData from "../data/Chats";
import { formatTimestamp } from "../utils/formatsTimestamp";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const loggedInUserUid = "6BjHfKIogUdLA1ZEJ5mtdILjZFr2";

  useEffect(() => {
    // Sort chats by lastMessageTimestamp in descending order (newest first)
    const sortedChats = [...chatData].sort((a, b) => {
      // Get timestamp in milliseconds for chat A
      const timeA = a.lastMessageTimestamp
        ? a.lastMessageTimestamp.seconds * 1000 +
          a.lastMessageTimestamp.nanoseconds / 1000000
        : 0;
      // Get timestamp in milliseconds for chat B
      const timeB = b.lastMessageTimestamp
        ? b.lastMessageTimestamp.seconds * 1000 +
          b.lastMessageTimestamp.nanoseconds / 1000000
        : 0;
      // Sort in descending order (newest first)
      return timeB - timeA;
    });
    setChats(sortedChats);
  }, []);

  // Find the logged-in user from the first chat or use fallback
  const loggedInUser = chats[0]?.users.find(
    (user) => user.uid === loggedInUserUid
  ) || {
    fullName: "User Name",
    username: "chat user",
    image: avatar,
  };

  return (
    <section className="relative hidden lg:flex flex-col items-start justify-start bg-white h-[100vh] w-[100%] md:w-[480px]">
      <header className="flex items-center justify-between w-[100%] lg:border-b border-b-1 border-[#000] p-4 sticky top-0 z-[100]">
        <main className="flex items-center gap-3">
          <img
            src={loggedInUser.image || avatar}
            alt={`${loggedInUser.fullName}'s avatar`}
            className="w-[44px] h-[44px] object-cover rounded-full"
          />
          <span>
            <h3 className="p-0 font-semibold text-[#2a3d39] md:text-[17px]">
              {loggedInUser.fullName}
            </h3>
            <p className="p-0 font-light text-[#2a3d39] text-[15px]">
              {loggedInUser.username}
            </p>
          </span>
        </main>
        <button className="bg-[#d9f2ed] p-2 w-[35px] h-[35px] flex items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#01aa85"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ellipsis-vertical"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </header>
      <div className="w-[100%] mt-[10px] px-[5px]">
        <header className="flex items-center justify-between">
          <h3 className="text-[16px]">Messages ({chats?.length || 0})</h3>
          <SearchModal />
        </header>
      </div>
      <main
        className="flex flex-col items-start mt-[1.5rem] pb-3 w-[100%] hide-scrollbar"
        style={{ overflowY: "scroll" }}
      >
        {chats?.map((chat) => {
          // Find the other user in the chat
          const otherUser = chat.users.find(
            (user) => user.uid !== loggedInUserUid
          );

          return (
            <button
              key={chat.id}
              className="flex items-start justify-between w-[100%] border-b border-[#9090902c] px-5 py-2 hide-scrollbar"
            >
              <div className="flex items-start gap-3">
                <img
                  src={otherUser?.image || avatar}
                  alt={`${otherUser?.fullName}'s avatar`}
                  className="h-[40px] w-[40px] rounded-full object-cover"
                />
                <span>
                  <h2 className="p-0 font-semibold text-[#2a3d39] text-left text-[17px]">
                    {otherUser?.fullName || "Unknown User"}
                  </h2>
                  <p className="p-0 font-light text-[#2a3d39] text-left text-[14px]">
                    {chat.lastMessage || "No message"}
                  </p>
                </span>
              </div>
              <p className="p-0 font-regular text-gray-400 text-left text-[11px]">
                {formatTimestamp(chat.lastMessageTimestamp, false)}
              </p>
            </button>
          );
        })}
      </main>
    </section>
  );
};

export default ChatList;