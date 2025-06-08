import React, { useState } from 'react';
import rainwaterImage from '../assets/rainwater_harvesting.png';
import groundwaterImage from '../assets/groundwater_seepage.png';
import oldBuildingImage from '../assets/old_building_waterproofing.png';

const Blogs = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedBlog(expandedBlog === index ? null : index);
  };

  const blogs = [
    {
      title: "🌧️ A Guide to Preparing Your Home for Rainwater Harvesting",
      image: rainwaterImage,
      summary:
        "Harnessing rainwater is essential for a sustainable future — and your roof is the perfect place to start. This guide explains the importance of rainwater harvesting, how to prepare your rooftop, and key maintenance tips.",
      content: (
        <>
          <p>
            In India, where water scarcity and unpredictable weather are on the rise, rainwater harvesting offers a practical and eco-friendly solution.
            With a well-maintained roof and proper waterproofing, you can collect and reuse rainwater efficiently.
          </p>
          <h4>✅ Key Benefits:</h4>
          <ul>
            <li>🌿 Eco-Friendly: Conserves groundwater</li>
            <li>💸 Cost Saving: Minimizes water bills</li>
            <li>🌱 Plant Friendly: Chemical-free water</li>
            <li>🚫 Prevents Flooding: Controls runoff</li>
          </ul>
          <h4>🛠️ 5-Step Roof Prep:</h4>
          <ol>
            <li>Inspect and clean your roof</li>
            <li>Install gutters</li>
            <li>Apply waterproofing</li>
            <li>Connect to tanks</li>
            <li>Maintain filters and drains</li>
          </ol>
          <h4>🧼 Maintenance Tips:</h4>
          <ul>
            <li>Clean gutters regularly</li>
            <li>Check for cracks/leaks</li>
            <li>Use filtration</li>
            <li>Reinforce waterproofing yearly</li>
          </ul>
          <p><strong>Note:</strong> Waterproofing + Harvesting = Smart Savings</p>
        </>
      ),
    },
    {
      title: "🚿 5 Signs of Groundwater Seepage & How to Solve Them",
      image: groundwaterImage,
      summary:
        "Groundwater seepage is a hidden threat that damages floors, walls, and even your home’s foundation silently. Let’s uncover the signs and how to fix them.",
      content: (
        <>
          <h4>🔍 Common Signs:</h4>
          <ol>
            <li>Damp skirting and swollen wood</li>
            <li>Chipping paint at floor level</li>
            <li>Mould at wall corners</li>
            <li>Cracks in tiles or floors</li>
            <li>Efflorescence (white salt deposits)</li>
          </ol>
          <h4>🛠️ Solutions:</h4>
          <p><strong>Quick Fixes:</strong></p>
          <ul>
            <li>Seal with epoxy</li>
            <li>Use dehumidifiers</li>
            <li>Temporary waterproof paint</li>
          </ul>
          <p><strong>Permanent Fixes:</strong></p>
          <ul>
            <li>Damp proofing chemicals</li>
            <li>Fix drainage slope</li>
            <li>Use pro-grade products like:</li>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>POLYALK WP:</strong> for bathrooms and tanks</li>
              <li><strong>SUNKOTE WP+:</strong> anti-fungal roof coating</li>
              <li><strong>SUNPRUFE PU1K:</strong> seamless membrane</li>
            </ul>
          </ul>
          <p><strong>Warning:</strong> Don't ignore signs — they worsen over time.</p>
          <p><strong>📞 Contact Valplasto Enterprises for expert inspection & solutions.</strong></p>
        </>
      ),
    },
    {
      title: "🧱 Waterproofing Essentials for Old Buildings: Key Areas to Address",
      image: oldBuildingImage,
      summary:
        "Waterproofing is essential in old buildings to avoid long-term structural issues. Learn about the critical zones and how to maintain them.",
      content: (
        <>
          <h4>🏠 Critical Waterproofing Zones:</h4>
          <ul>
            <li><strong>Roof & Terrace:</strong> prone to cracks; needs membrane coating</li>
            <li><strong>Bathrooms & Kitchens:</strong> waterproofing under tiles</li>
            <li><strong>Basements & Foundations:</strong> chemical and physical damp proofing</li>
          </ul>
          <h4>🧱 Additional Areas:</h4>
          <ul>
            <li>Exterior walls</li>
            <li>Balconies and parapets</li>
            <li>Doors and windows (caulking)</li>
            <li>Underground tanks and parking</li>
          </ul>
          <p><strong>💡 Tip:</strong> Schedule regular inspections and use premium waterproofing materials to extend the life of old buildings.</p>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8f8f8', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Blogs</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <h3 style={{ marginBottom: '0.75rem', color: '#2c3e50' }}>{blog.title}</h3>
            <div style={{ marginBottom: '1rem', color: '#555' }}>
              {expandedBlog === index ? blog.content : <p>{blog.summary}</p>}
            </div>
            <button
              onClick={() => toggleReadMore(index)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {expandedBlog === index ? 'Read Less' : 'Learn More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
