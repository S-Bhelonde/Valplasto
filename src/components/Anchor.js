import React, { useState } from 'react';

import Fosroc_Lokfix_E45_T from '../assets/Fosroc_Lokfix_E45_T.png';
import Fosroc_Lokfix_E45_T_1 from '../assets/Fosroc_Lokfix_E45_T_1.png';
import Fosroc_Lokfix_E45_T_2 from '../assets/Fosroc_Lokfix_E45_T_2.png';
import Lokfix_P from '../assets/Lokfix_P.png';
import Lokfix_P_1 from '../assets/Lokfix_P_1.png';


const products = [
  {
    name: " Fosroc Lokfix E45 T ",
    price: "₹1050/pack",
    Form_of_chemical : "Liquid",
    description: `Styrene free vinyl-ester resin based cartridge system, for anchoring reinforcement and fixings into a variety of substrates. Extended setting for hot climates. 

Uses
For concrete (solid, porous and light), masonry and hollow bricks.
  Accredited* for use in dry, wet and flooded concrete substrates, internal and external exposure.
 Can be used with cracked concrete
 Fixing of post installed reinforcement and tension anchors
  Anchoring of threaded rod fixings
 Can be applied to a wide variety of fixing and rebar sizes
 For horizontal, vertical and overhead application
 Bonding and surface crack sealing applications prior to Nitofill injection.
 C1 and C2 seismic resistance`,
    images: [Fosroc_Lokfix_E45_T, Fosroc_Lokfix_E45_T_1, Fosroc_Lokfix_E45_T_2 ]
  },

  {
    name: " Fosroc Lokfix P ",
    price: "₹500/kg",
    Form_of_chemical : "Paste",
    description: `Lokfix P, pumpable grade,
Is used for high strength corrosion resistant anchoring of bolts and bars from 10 - 51mm diameter into concrete, rock, masonry or brickwork where high speed of installation and early application of load is required in overhead and horizontal applications.

AREA OF APPLICATION
Staircase
Structure repairsvertical connections
Grills
Gates
Column / Beam Extensions`,
    images: [Lokfix_P, Lokfix_P_1]
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

      <h1 style={styles.title}>Anchor Products</h1>
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
            <p style={styles.detail}><strong>Form of chemical:</strong> {product.Form_of_chemical}</p>
            <p style={styles.description}><strong>Product description:</strong>{product.description}</p>
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
