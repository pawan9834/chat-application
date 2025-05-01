import React, { useEffect, useMemo, useState, useRef } from 'react';
import avatar from '../assets/default.jpg';
import messageData from '../data/Messagedata';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const senderEmail = "baxo@mailinator.com";
  const messagesEndRef = useRef(null);

 
  useEffect(() => {
    setMessages(messageData);
  }, []);

 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

 
  const sortMessages = useMemo(() => {
    return [...messages].sort((a, b) => {
      const aTimestamp = a.timestamp.seconds + a.timestamp.nanoseconds / 1e9;
      const bTimestamp = b.timestamp.seconds + b.timestamp.nanoseconds / 1e9;
      return aTimestamp - bTimestamp;
    });
  }, [messages]);

 
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

 
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      timestamp: {
        seconds: Math.floor(Date.now() / 1000),
        nanoseconds: (Date.now() % 1000) * 1e6,
      },
      sender: senderEmail,
      text: inputText.trim(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText('');
  };

  return (
    <section className="flex flex-col h-screen w-full bg-gray-100">
      {/* Header */}
      <header className="flex items-center p-4 bg-white border-b border-gray-200 shadow-sm">
        <img src={avatar} alt="avatar" className="w-12 h-12 object-cover rounded-full" />
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-800">Chat User</h3>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="flex flex-col space-y-3">
          {sortMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === senderEmail ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex items-start max-w-[70%] ${
                  msg.sender === senderEmail ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {msg.sender !== senderEmail && (
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-8 h-8 object-cover rounded-full mt-1"
                  />
                )}
                <div
                  className={`mx-2 p-3 rounded-lg shadow-sm ${
                    msg.sender === senderEmail
                      ? 'bg-teal-500 text-white'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <p className="text-sm break-words">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {formatTimestamp(msg.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Form */}
      <footer className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Write your message..."
            className="flex-1 p-2 text-gray-800 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </form>
      </footer>
    </section>
  );
};

export default ChatBox;