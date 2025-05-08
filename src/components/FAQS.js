import React, { useState } from 'react';

const faqs = [
  {
    question: "What is waterproofing and why is it important?",
    answer:
      "Waterproofing is the process of making a surface water-resistant to prevent water infiltration. It's essential to protect structures from water damage, mold, and deterioration.",
  },
  {
    question: "Where should waterproofing be applied in a home?",
    answer:
      "Waterproofing should be applied in areas exposed to moisture like roofs, basements, bathrooms, balconies, water tanks, and external walls.",
  },
  {
    question: "Can waterproofing be done on old buildings?",
    answer:
      "Yes, waterproofing can be applied to existing structures during renovation to fix leaks, cracks, and dampness issues.",
  },
  {
    question: "How long does waterproofing last?",
    answer:
      "High-quality waterproofing can last 7–15 years depending on the material used, surface conditions, and environmental factors.",
  },
  {
    question: "Does Valplasto Enterprises offer inspection services?",
    answer:
      "Yes, we offer site inspections to assess waterproofing needs and provide custom solutions tailored to your building's condition.",
  },
];

const WaterproofingFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Waterproofing FAQs</h2>
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem} onClick={() => toggleFAQ(index)}>
            <div style={styles.question}>
              <h4 style={{ margin: 0 }}>{faq.question}</h4>
              <span style={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p style={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  },
  faqList: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '20px',
  },
  faqItem: {
    borderBottom: '1px solid #ddd',
    padding: '15px 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '18px',
    color: '#222',
  },
  icon: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  answer: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default WaterproofingFAQs;
