import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isNameEntered && !isChatOpen) {
      setIsNameEntered(false); // Reset name entered status
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameEntered(true);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages([`Hello ${name}, how can I help you today?`]);
    }, 1000); // Simulate typing delay
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, `${name}: ${input}`]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages([
        ...messages,
        `${name}: ${input}`,
        'Developer will get back to you shortly. Due to high demand, contact us via email at joejassyio@gmail.com. Thank you!'
      ]);
    }, 1000); // Simulate typing delay
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="chat-container">
      <div className={`chat-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <i className="fas fa-comments"></i>
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat with us</span>
            <button className="close-btn" onClick={handleCloseChat}>x</button>
          </div>
          <div className="chat-body">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="message">{message}</div>
              ))}
              {typing && <div className="message typing">Developer is typing...</div>}
            </div>
            {isNameEntered ? (
              <form onSubmit={handleMessageSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <button type="submit">Send</button>
              </form>
            ) : (
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                />
                <button type="submit">Start Chat</button>
              </form>
            )}
          </div>
        </div>
      )}
      {isChatOpen && (
        <div className="close-icon" onClick={handleCloseChat}>
          <i className="fas fa-times"></i>
        </div>
      )}
    </div>
  );
};

export default Chat;
