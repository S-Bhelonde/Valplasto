import React, { useState } from "react";
import { FaRobot } from "react-icons/fa"; // For the bot icon

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const startConversation = () => {
    setIsStarted(true);
    setMessages([
      { sender: "bot", text: "Hi, I am Asian Paints Chat Assistant. Thank you for reaching out to us. How can I help you today?" },
      { sender: "bot", text: "1. How can I request a site visit?" },
      { sender: "bot", text: "2. What are the services provided by Valplasto Enterprises?" },
      { sender: "bot", text: "3. How can I get a quote?" },
      { sender: "bot", text: "4. Contact information" },
    ]);
  };

  const handleMessageClick = (message) => {
    let reply = "";
    switch (message) {
      case "1":
        reply = "You can request a site visit by filling out the site visit form on our website.";
        break;
      case "2":
        reply = "Valplasto Enterprises offers various services in the paint and construction domain.";
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
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
      { sender: "bot", text: reply },
    ]);
  };

  return (
    <div>
      <div style={styles.chatButton} onClick={toggleChatBot}>
        <FaRobot size={40} color="#FF7F32" />
      </div>

      {isOpen && (
        <div style={styles.chatPopup}>
          <div style={styles.chatHeader}>
            <img src="your-logo.png" alt="Valplasto Logo" style={styles.logo} />
            <h3 style={styles.welcomeText}>Welcome to Valplasto Enterprises</h3>
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
                      }}
                    >
                      {message.text}
                    </div>
                    {message.sender === "bot" && message.text.includes("How can I help you today?") && (
                      <div style={styles.options}>
                        <button onClick={() => handleMessageClick("1")}>How can I request a site visit?</button>
                        <button onClick={() => handleMessageClick("2")}>What are the services?</button>
                        <button onClick={() => handleMessageClick("3")}>How can I get a quote?</button>
                        <button onClick={() => handleMessageClick("4")}>Contact information</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
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
  },
  chatPopup: {
    position: "fixed",
    bottom: "60px",
    right: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    padding: "15px",
    zIndex: 1000,
  },
  chatHeader: {
    textAlign: "center",
  },
  logo: {
    width: "100px",
    marginBottom: "10px",
  },
  welcomeText: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  helpText: {
    marginBottom: "15px",
  },
  startButton: {
    backgroundColor: "#FF7F32",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  chatMessages: {
    maxHeight: "300px",
    overflowY: "auto",
    marginTop: "10px",
  },
  messageContainer: {
    marginBottom: "10px",
  },
  message: {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#f1f1f1",
    maxWidth: "80%",
  },
  options: {
    marginTop: "10px",
  },
};

export default ChatBot;
