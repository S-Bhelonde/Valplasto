import React, { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  const toggleChatBot = () => setIsOpen((prev) => !prev);

  const startConversation = () => {
    setIsStarted(true);
    setMessages([
      { sender: "bot", text: "Hi, I am your Chat Assistant. How can I help you today?" },
      { sender: "bot", text: "Please choose an option below:" },
    ]);
  };

  const handleMessageClick = (message) => {
    let reply = "";
    switch (message) {
      case "1":
        reply = "You can request a site visit by filling out the site visit form on our website.";
        break;
      case "2":
        reply = "We offer various services in the paint and construction domain.";
        break;
      case "3":
        reply = "To get a quote, please contact us with the details of your requirements.";
        break;
      case "4":
        reply = "You can contact us via our customer support email or phone.";
        break;
      default:
        reply = "Please choose a valid option.";
    }

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: `Option ${message}` },
      { sender: "bot", text: reply },
    ]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <div style={styles.chatButton} onClick={toggleChatBot}>
        <FaRobot size={40} color="#fff" />
      </div>

      {isOpen && (
        <div style={styles.chatPopup} ref={chatRef}>
          <div style={styles.chatHeader}>
            {/* Removed welcome message with business name */}
          </div>

          {!isStarted ? (
            <div>
              <p style={styles.helpText}>How can we help you?</p>
              <button onClick={startConversation} style={styles.startButton}>
                Start
              </button>
            </div>
          ) : (
            <div style={styles.chatMessages}>
              {messages.map((message, index) => (
                <div key={index} style={styles.messageContainer}>
                  <div
                    style={{
                      ...styles.message,
                      alignSelf: message.sender === "bot" ? "flex-start" : "flex-end",
                      backgroundColor: message.sender === "bot" ? "#f1f1f1" : "#FF7F32",
                      color: message.sender === "bot" ? "#000" : "#fff",
                    }}
                  >
                    {message.text}
                  </div>

                  {index === 1 && message.sender === "bot" && (
                    <div style={styles.options}>
                      <button style={styles.optionButton} onClick={() => handleMessageClick("1")}>
                        1. How can I request a site visit?
                      </button>
                      <button style={styles.optionButton} onClick={() => handleMessageClick("2")}>
                        2. What are the services provided?
                      </button>
                      <button style={styles.optionButton} onClick={() => handleMessageClick("3")}>
                        3. How can I get a quote?
                      </button>
                      <button style={styles.optionButton} onClick={() => handleMessageClick("4")}>
                        4. Contact information
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  chatButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#FF7F32",
    borderRadius: "50%",
    padding: "15px",
    cursor: "pointer",
    zIndex: 1001,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  chatPopup: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    width: "320px",
    padding: "15px",
    zIndex: 1000,
  },
  chatHeader: {
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  helpText: {
    marginBottom: "15px",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#FF7F32",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
  },
  chatMessages: {
    maxHeight: "300px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  message: {
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "80%",
    fontSize: "0.9rem",
  },
  options: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  optionButton: {
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "0.85rem",
  },
};

export default ChatBot;
