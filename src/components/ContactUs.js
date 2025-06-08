import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import contactBanner from "../assets/contact_us.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, address, message } = formData;

    const whatsappMessage = `Hi, I'm ${name}.\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/919766099437?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {/* Banner Image */}
      <img
  src={contactBanner}
  alt="Val Plasto Contact Banner"
  style={styles.bannerImage}
/>


      {/* Main Content */}
      <div style={styles.mainContainer}>
        {/* Left Side - Company Information */}
        <div style={styles.leftSide}>
          <h2 style={styles.leftTitle}>Contact Information</h2>
          <div style={styles.infoItem}>
            <FaBuilding style={styles.icon} />
            Valplasto Enterprises
          </div>
          <div style={styles.infoItem}>
            <FaMapMarkerAlt style={styles.icon} />
            141, Priti Society, Behind Sundar Factory,Durga Mata Nagar, Koradi Road, Nagpur - 441111
          </div>
          <div style={styles.infoItem}>
            <FaPhoneAlt style={styles.icon} />
            +91 97660 99437/ 9175181013
          </div>
          <div style={styles.infoItem}>
            <FaEnvelope style={styles.icon} />
            valplasto@gmail.com
          </div>
          <div style={styles.infoItem}>
            <FaClock style={styles.icon} />
            Monday - Sunday, 9:00 AM - 9:00 PM
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={styles.rightSide}>
          <h2 style={styles.rightTitle}>Get in Touch with Us</h2>
          <p style={styles.subText}>
            Please fill in the contact form below and we will reach you within 24 hours.
          </p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>
            <button type="submit" style={styles.submitButton}>Submit</button>
          </form>
        </div>

        {/* Google Map */}
        <div style={styles.mapContainer}>
          <iframe
            title="Valplasto Enterprises Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.0005084693835!2d79.08337867467398!3d21.230456682066777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c102a54b7f47%3A0x84b5793a9ec1dfeb!2sPriti%20Society%2C%20Koradi%20Rd%2C%20Nagpur%2C%20Maharashtra%20441011!5e0!3m2!1sen!2sin!4v1714826187930!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="rounded-lg shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

const styles = {
  bannerContainer: {
    width: "100%",
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
    maxHeight: "420px",
  },
  mainContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  leftSide: {
    flex: "1",
    padding: "20px",
    borderRight: "1px solid #ddd",
    minWidth: "300px",
  },
  leftTitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  infoItem: {
    marginBottom: "15px",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    color: "#000",
  },
  icon: {
    marginRight: "10px",
    fontSize: "1.2rem",
    color: "#000",
  },
  rightSide: {
    flex: "2",
    padding: "20px",
    minWidth: "300px",
  },
  rightTitle: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  subText: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
    height: "100px",
  },
  submitButton: {
    backgroundColor: "#FF7F32",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    alignSelf: "center",
    width: "150px",
  },
  mapContainer: {
    marginTop: "20px",
    width: "100%",
  },
  bannerContainer: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    overflow: "hidden",
  },
  
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }
  
};

export default ContactUs;
