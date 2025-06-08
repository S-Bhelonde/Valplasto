import React, { useState } from "react";

const FreeSiteVisitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    siteAddress: "",
    workStarted: "",
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
    const { name, phone, email, address, siteAddress, workStarted } = formData;

    // WhatsApp link for sending message
    const whatsappMessage = `Hi, I'm ${name}.\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nSite Address: ${siteAddress}\nWork Started: ${workStarted}`;
    const whatsappLink = `https://wa.me/9766099437?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp with the message
    window.open(whatsappLink, "_blank");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Let Our Experts Help You</h2>
      <p style={styles.subtitle}>For instant assistance, call us on - 9175181013</p>
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
            placeholder="Enter your full name"
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
            placeholder="Enter your phone number"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
            placeholder="Enter your email address"
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
            placeholder="Enter your address"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Site Address:</label>
          <input
            type="text"
            name="siteAddress"
            value={formData.siteAddress}
            onChange={handleChange}
            style={styles.input}
            required
            placeholder="Enter the site address"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Has work started on site?</label>
          <select
            name="workStarted"
            value={formData.workStarted}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <p style={styles.disclaimer}>
          By proceeding, you are authorizing Valplasto Enterprises and its suggested contractors to get in touch with you through calls, SMS, or email.
        </p>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555",
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
  submitButton: {
    backgroundColor: "#FF7F32",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  disclaimer: {
    fontSize: "0.85rem",
    color: "#777",
    textAlign: "center",
  },
};

export default FreeSiteVisitForm;
