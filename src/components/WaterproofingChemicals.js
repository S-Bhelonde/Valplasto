import React, { useState } from "react";

const WaterproofingChemicals = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Use href links to product images
  const products = [
    {
      id: 1,
      name: "Chemical A",
      images: [
        "https://via.placeholder.com/150/1",
        "https://via.placeholder.com/150/2",
        "https://via.placeholder.com/150/3",
      ],
      mrp: "₹1200",
      weight: "5kg",
      shortDescription: "High-performance waterproofing chemical.",
    },
    {
      id: 2,
      name: "Chemical B",
      images: [
        "https://via.placeholder.com/150/4",
        "https://via.placeholder.com/150/5",
      ],
      mrp: "₹900",
      weight: "3kg",
      shortDescription: "Protects against water seepage and cracks.",
    },
    {
      id: 3,
      name: "Chemical C",
      images: [
        "https://via.placeholder.com/150/6",
      ],
      mrp: "₹1500",
      weight: "10kg",
      shortDescription: "Ideal for terraces and basements.",
    },
  ];

  return (
    <div style={styles.container}>
      <style>{`
        .product-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .image-popup {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .image-popup img {
          max-width: 90%;
          max-height: 90%;
          border: 5px solid white;
          border-radius: 10px;
        }

        .thumbnail-group img {
          width: 60px;
          height: 60px;
          margin-right: 5px;
          border-radius: 4px;
          cursor: pointer;
          object-fit: cover;
        }
      `}</style>

      <img
        src="https://via.placeholder.com/800x200"
        alt="Waterproofing Banner"
        style={styles.topImage}
      />
      <h2 style={styles.heading}>Waterproofing Chemicals</h2>
      <p style={styles.info}>
        Waterproofing chemicals are essential for protecting buildings from water
        damage. They are used in basements, roofs, walls, and terraces to prevent
        leakage and dampness.
      </p>

      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card} className="product-card">
            <div className="thumbnail-group">
              {product.images.map((img, index) => (
                <a href={img} target="_blank" rel="noopener noreferrer" key={index}>
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => setSelectedImage(img)}
                  />
                </a>
              ))}
            </div>
            <h3>{product.name}</h3>
            <p><strong>MRP:</strong> {product.mrp}</p>
            <p><strong>Weight:</strong> {product.weight}</p>
            <p>{product.shortDescription}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged View" />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#f5f5f5",
  },
  topImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#333",
  },
  info: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  },
  products: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    width: "calc(33.333% - 20px)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
};

export default WaterproofingChemicals;
