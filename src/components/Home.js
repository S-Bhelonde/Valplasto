// Home.jsx
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShieldAlt, FaThList, FaComments, FaChartLine, FaWarehouse } from "react-icons/fa";
import DistributorCarousel from "./DistributorCarousel";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import CharacterIcon from "../assets/chatbot_icon.png";
import Step1Img from "../assets/step1.png";
import Step2Img from "../assets/step2.png";
import Step3Img from "../assets/step3.png";
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";


const images = [Slide1, Slide2,slide3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleChatBot = () => setIsOpen(!isOpen);
  const closeChatBot = () => {
    setIsOpen(false);
    setIsStarted(false);
    setMessages([]);
  };
  const startConversation = () => setIsStarted(true);

  const questions = [
    { id: "1", text: "How can I request a site visit?", answer: "You can request a site visit by filling out the site visit form on our website." },
    { id: "2", text: "What are the services provided by Valplasto Enterprises?", answer: "Valplasto Enterprises offers various services in waterproofing." },
    { id: "3", text: "How can I get a quote?", answer: "To get a quote, please contact us with the details of your requirements." },
    { id: "4", text: "Contact information", answer: "You can contact us via our customer support email or phone." },
  ];

  const handleQuestionClick = (question) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question.text },
      { sender: "bot", text: question.answer },
    ]);
  };

  return (
    <div>
      <style>{`
        .image-slider { width: 100%; overflow: hidden; margin-bottom: 20px; }
        .slider-image { width: 100%; height: auto; object-fit: cover; transition: opacity 0.5s ease-in-out; }
      `}</style>

      <div className="image-slider">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
      </div>

      <section className="hero">
        <h1>Welcome to Valplasto Enterprises</h1>
        <p>Construction chemicals and waterfrooping solutions.</p>
      </section>

      <section className="hero1">
        <h1>Why Choose Us?</h1>
        <p>
        Valplasto Enterprises is a leading brand for waterproofing solutions and providing top-notch waterproofing services.
          The brand has in place exclusive solutions for different surface areas, hence it's a one-stop shop for all your water leakage hassles.
          Whether you're looking to repair, renovate, or for a new construction. Valplasto Enterprises has you covered.
          Our services are designed to provide long-lasting durability, ensuring your peace of mind.
          Choose us for quality waterproofing solutions that deliver exceptional results, keeping your home safe and dry for years to come.
        </p>
      </section>

      <WhyChooseUs />

      <section className="hero1">
        <h1>Waterproofing Services in India</h1>
        <p>
          In India's diverse and tropical climate, heavy rainfall and humidity can cause serious structural problems like seepage and leakages.
          <strong> Valplasto Enterprises</strong> offers comprehensive waterproofing solutions designed to safeguard your property from top to bottom — roofs, terraces, walls, basements, and foundations.
          <br /><br />
          Our specialized waterproofing services ensure long-lasting protection, keeping your home or commercial space safe, dry, and structurally sound.
          With years of expertise and the use of high-quality materials and advanced techniques, we guarantee superior results that withstand India's toughest weather conditions.
          <br /><br />
          Whether it's preventive waterproofing for new construction or repairs for existing structures, our expert team is committed to delivering reliable solutions tailored to your needs.
          <br /><br />
          Don’t let water damage weaken your property.
          Choose <strong>Valplasto Enterprises</strong> — your trusted partner for durable, effective, and affordable waterproofing services that stand the test of time.
        </p>
        <button style={styles.knowMoreButton}>
          <Link to="/Waterproofing_solutions" style={{ textDecoration: "none", color: "white" }}>
            Know More
          </Link>
        </button>
      </section>

      <section className="how-we-work-section">
        <h2 className="section-title">How We Work</h2>
        <div className="work-steps" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {[Step1Img, Step2Img, Step3Img].map((img, idx) => {
            const descs = [
              "Our technicians initially inspect your site at no extra cost.",
              "Our trained and qualified applicators can complete even the most challenging tasks.",
              "We document the process for warranty and test treated areas."
            ];
            return (
              <div key={idx} style={{ textAlign: "center", padding: "20px", maxWidth: "250px" }}>
                <img src={img} alt={`Step ${idx + 1}`} className="step-image" />
                <p>{descs[idx]}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="hero" style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>What Our Customers Say</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {[
            { name: "Ravi Kumar", review: "Excellent service! My terrace no longer leaks." },
            { name: "Sneha Patel", review: "Top-notch waterproofing solutions. Highly recommended!" },
            { name: "Ajay Mehta", review: "Great value for money and timely work." }
          ].map((r, i) => (
            <div key={i} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
              <p style={{ fontStyle: "italic" }}>"{r.review}"</p>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>– {r.name}</p>
            </div>
          ))}
        </div>
      </section>

       {/* ✅ Added DistributorCarousel just before chatbot */}
      <DistributorCarousel />

      <section className="content" id="chatbot">
        <div>
          <div style={styles.chatBotContainer} onClick={toggleChatBot}>
            <div style={styles.speechBubble}>Hi! How can I help you?</div>
            <img src={CharacterIcon} alt="Chat Assistant" style={styles.chatCharacter} />
          </div>

          {isOpen && (
            <div style={styles.chatPopup}>
              <div style={styles.chatHeader}>
                <img src="your-logo.png" alt="Valplasto Logo" style={styles.logo} />
                <h3 style={styles.welcomeText}>Welcome to Valplasto Enterprises</h3>
                <button onClick={closeChatBot} style={styles.closeButton}>
                  <IoMdClose size={20} />
                </button>
              </div>

              {!isStarted ? (
                <div style={{ textAlign: "center" }}>
                  <p style={styles.helpText}>How can we help you?</p>
                  <button onClick={startConversation} style={styles.startButton}>Start</button>
                </div>
              ) : (
                <div style={styles.chatBody}>
                  <div style={styles.greetingBox}>
                    Hi, I am Valplasto Enterprises Chat Assistant. How can I help you today?
                  </div>
                  <div style={styles.questionsContainer}>
                    {questions.map((q) => (
                      <button key={q.id} onClick={() => handleQuestionClick(q)} style={styles.questionButton}>
                        {q.text}
                      </button>
                    ))}
                  </div>
                  <div style={styles.messagesContainer}>
                    {messages.map((msg, index) => (
                      <div key={index} style={{ alignSelf: msg.sender === "user" ? "flex-end" : "flex-start" }}>
                        <div style={{
                          ...styles.message,
                          backgroundColor: msg.sender === "user" ? "#FF7F32" : "#f1f1f1",
                          color: msg.sender === "user" ? "#fff" : "#000"
                        }}>{msg.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};


const WhyChooseUs = () => {
  const features = [
    { icon: <FaShieldAlt size={28} color="#FF7F32" />, title: "Reliable Waterproofing", description: "Protects structures from leakage, seepage, and dampness." },
    { icon: <FaThList size={28} color="#FF7F32" />, title: "Diverse Product Range", description: "Wide variety from membranes to coatings and sealants." },
    { icon: <FaComments size={28} color="#FF7F32" />, title: "Clear Communication", description: "Prompt support and transparent service." },
    { icon: <FaChartLine size={28} color="#FF7F32" />, title: "Growth & Profitability", description: "Reliable supply and competitive pricing." },
    { icon: <FaWarehouse size={28} color="#FF7F32" />, title: "Local Stock", description: "Fast delivery via Maharashtra-based inventory." }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.featuresGrid}>
        {features.map((f, idx) => (
          <div key={idx} style={styles.featureCard}>
            <div style={styles.icon}>{f.icon}</div>
            <h3 style={styles.title}>{f.title}</h3>
            <p style={styles.description}>{f.description}</p>
          </div>
        ))}
      </div>
      </div>
  );
};

const styles = {
  chatBotContainer: {
    position: "fixed", bottom: "80px", right: "20px", display: "flex", alignItems: "flex-end", gap: "10px", cursor: "pointer", zIndex: 2000,
  },
  chatCharacter: { height: "120px", width: "auto" },
  speechBubble: {
    backgroundColor: "white", color: "#333", padding: "10px 15px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: "0.95rem", maxWidth: "180px"
  },
  chatPopup: {
    position: "fixed", bottom: "160px", right: "20px", backgroundColor: "#ffe", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", width: "320px", padding: "15px", zIndex: 2001, display: "flex", flexDirection: "column"
  },
  chatHeader: { position: "relative", textAlign: "center", paddingBottom: "10px" },
  logo: { width: "80px", marginBottom: "8px" },
  welcomeText: { fontSize: "1.2rem", marginBottom: "5px" },
  helpText: { marginBottom: "15px" },
  closeButton: { position: "absolute", top: "10px", right: "10px", background: "none", border: "none", cursor: "pointer", color: "#000" },
  startButton: {
    backgroundColor: "#FF7F32", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", fontSize: "1rem"
  },
  knowMoreButton: {
    marginTop: "15px", padding: "10px 20px", backgroundColor: "#FF7F32", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "1rem"
  },
  chatBody: { display: "flex", flexDirection: "column", gap: "15px", overflowY: "auto", maxHeight: "400px" },
  greetingBox: {
    backgroundColor: "#f1f1f1", padding: "10px", borderRadius: "6px", fontSize: "0.9rem", color: "#000"
  },
  questionsContainer: { display: "flex", flexDirection: "column", gap: "8px" },
  questionButton: {
    backgroundColor: "#FF7F32", color: "white", border: "none", padding: "8px", borderRadius: "4px", cursor: "pointer", textAlign: "left", fontSize: "0.9rem"
  },
  messagesContainer: { display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" },
  message: { padding: "10px", borderRadius: "10px", maxWidth: "80%", wordWrap: "break-word", fontSize: "0.9rem" },
  container: { padding: "20px" },
  heading: { textAlign: "center", fontSize: "1.5rem", marginBottom: "20px" },
  featuresGrid: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" },
  featureCard: { backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", maxWidth: "300px", textAlign: "center" },
  icon: { marginBottom: "10px" },
  title: { fontSize: "1.1rem", fontWeight: "bold", marginBottom: "8px" },
  description: { fontSize: "0.9rem" }
};


export default Home;
