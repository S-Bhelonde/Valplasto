import React, { useState } from 'react';

import Fosroc_Polyurethane_Sealants_Nitoseal_PU40 from '../assets/Fosroc_Polyurethane_Sealants_Nitoseal_PU40.png';
import Fosroc_Polyurethane_Sealants_Nitoseal_PU40_1 from '../assets/Fosroc_Polyurethane_Sealants_Nitoseal_PU40_1.png';
import Fosroc_Polyurethane_Sealants_Nitoseal_PU40_2 from '../assets/Fosroc_Polyurethane_Sealants_Nitoseal_PU40_2.png';
import Fosroc_Polysulphide_Sealant_Thioflex_600 from '../assets/Fosroc_Polysulphide_Sealant_Thioflex_600.png';
import Fosroc_Polysulphide_Sealant_Thioflex_600_1 from '../assets/Fosroc_Polysulphide_Sealant_Thioflex_600_1.png';
import Fosroc_Polysulphide_Sealant_Thioflex_600_2 from '../assets/Fosroc_Polysulphide_Sealant_Thioflex_600_2.png';


const products = [
  {
    name: "Fosroc Polyurethane Sealants (Nitoseal PU40)",
    price: "₹600/piece",
    Strength : "High",
    description: `Nitoseal PU40 is suitable for sealing joints in concrete, brickwork, blockwork, precast panels, stone cladding, perimeter sealing around doors and windows, and non-trafficked floor joints

Nitoseal PU40 is a one part, low modulus gun-grade elastomeric sealant based on polyurethane technology. Nitoseal PU40 may be applied to joints between 10 and 35mm wide. To minimise stress imposed on the joint sealant, all moving joints should be designed to an optimum width to depth ratio of 2:1 with an overriding minimum depth of 10mm. For joint widths exceeding 35mm, please contact your local Fosroc Technical Service Department.`,
    images: [Fosroc_Polyurethane_Sealants_Nitoseal_PU40, Fosroc_Polyurethane_Sealants_Nitoseal_PU40_1, Fosroc_Polyurethane_Sealants_Nitoseal_PU40_2]
  },
  {
    name: "Fosroc Polysulphide Sealant(Thioflex 600) ",
    price: "₹270/kg",
    description: `Multi-component, gun and pouring grade, polysulfide sealant
Uses
Sealing movement joints in building and civil engineering structures,
including superstructures,
floors,
basements and subways.
Advantages
  Meets key international standards
  Forms a tough, elastic, rubber-like seal
 Accommodates continuous and pronounced cyclic movement
  Excellent adhesion to most common substrates, including primed concrete, glass, aluminium and stainless steel
 High resistance to ageing reduces physical damage due to climatic extremes .`,
    images: [Fosroc_Polysulphide_Sealant_Thioflex_600, Fosroc_Polysulphide_Sealant_Thioflex_600_1, Fosroc_Polysulphide_Sealant_Thioflex_600_2 ]
  },

];

const ProductShowcase = () => {
  const [preview, setPreview] = useState({
    productIndex: null,
    imageIndex: null
  });

  const openPreview = (productIndex, imageIndex) => {
    setPreview({ productIndex, imageIndex });
  };

  const closePreview = () => {
    setPreview({ productIndex: null, imageIndex: null });
  };

  const changeImage = (direction) => {
    const { productIndex, imageIndex } = preview;
    const totalImages = products[productIndex].images.length;
    let newIndex = imageIndex + direction;

    if (newIndex < 0) newIndex = totalImages - 1;
    if (newIndex >= totalImages) newIndex = 0;

    setPreview({ productIndex, imageIndex: newIndex });
  };

  const currentImage = preview.productIndex !== null
    ? products[preview.productIndex].images[preview.imageIndex]
    : null;

  return (
    <div style={styles.container}>
      <style>{`
        .image-wrapper img {
          transition: transform 0.4s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          cursor: pointer;
        }
        .image-wrapper:hover img {
          transform: scale(1.2);
        }
        .image-wrapper {
          width: 100px;
          height: 100px;
          overflow: hidden;
          border-radius: 12px;
          flex-shrink: 0;
        }
        .modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal img {
          max-width: 90vw;
          max-height: 90vh;
          border-radius: 16px;
          transition: transform 0.3s ease;
        }
        .modal img:hover {
          transform: scale(1.1);
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 2.5rem;
          color: white;
          cursor: pointer;
        }
        .modal-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 3rem;
          color: white;
          cursor: pointer;
          user-select: none;
          padding: 0 1rem;
        }
        .left-arrow {
          left: 20px;
        }
        .right-arrow {
          right: 20px;
        }
      `}</style>

      <h1 style={styles.title}>Polyurethane Sealent</h1>
      <div style={styles.grid}>
        {products.map((product, pIndex) => (
          <div key={pIndex} style={styles.card}>
            <div style={styles.imageSlider}>
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="image-wrapper"
                  onClick={() => openPreview(pIndex, i)}
                >
                  <img src={img} alt={`${product.name}-${i}`} loading="lazy" />
                </div>
              ))}
            </div>
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.detail}><strong>Price:</strong> {product.price}</p>
            <p style={styles.detail}><strong>Color:</strong> {product.color}</p>
            <p style={styles.detail}><strong>Weight:</strong> {product.weight}</p>
            <p style={styles.description}>{product.description}</p>
          </div>
        ))}
      </div>

      {currentImage && (
        <div className="modal" onClick={closePreview}>
          <span className="modal-close" onClick={closePreview}>&times;</span>
          <span className="modal-arrow left-arrow" onClick={(e) => { e.stopPropagation(); changeImage(-1); }}>&#10094;</span>
          <img src={currentImage} alt="Preview" onClick={(e) => e.stopPropagation()} />
          <span className="modal-arrow right-arrow" onClick={(e) => { e.stopPropagation(); changeImage(1); }}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff8f0',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#7b3f00',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    transition: 'transform 0.3s',
    textAlign: 'center'
  },
  imageSlider: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    marginBottom: '1rem',
    scrollSnapType: 'x mandatory'
  },
  name: {
    fontSize: '1.6rem',
    color: '#3d2b1f',
    margin: '1rem 0 0.5rem'
  },
  detail: {
    fontSize: '1rem',
    color: '#555',
    margin: '0.2rem 0'
  },
  description: {
    marginTop: '1rem',
    whiteSpace: 'pre-line',
    fontSize: '0.95rem',
    color: '#666'
  }
};

export default ProductShowcase;
