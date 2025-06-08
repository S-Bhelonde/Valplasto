import React, { useState } from 'react';

import BITUMAG_Membrane from '../assets/BITUMAG_Membrane.png';
import BITUMAG_Membrane1 from '../assets/BITUMAG_Membrane1.png';
import BITUMAGBoard from '../assets/BITUMAG_Board.png';
import BITUMAGBoard1 from '../assets/BITUMAG_Board1.png';
import BITUMAGBoard2 from '../assets/BITUMAG_Board2.png';
import SelfAdhesiveMembrane from '../assets/Self_Adhesive_Membrane.png';
import SelfAdhesiveMembrane1 from '../assets/Self_Adhesive_Membrane1.png';
import SelfAdhesiveMembrane2 from '../assets/Self_Adhesive_Membrane2.png';


const products = [
  {
    name: "BITUMAG BM SELF AL Aluminum Surfaced Self Adhesive Membrane ",
    price: "₹1900/20kg",
    Puncture_resistance: ">220",
    Transversal_tensile_strength: "40/45",
    description: `BM SELF AL is a cold applied self-adhesive, flexible, waterproofing and protection membrane made from rubber modified bitumen compound with Aluminum surfaced solar reflective film on its upper side as protection layer. It has a detachable silicone film on the underside.`,
    images: [BITUMAG_Membrane, BITUMAG_Membrane1]
  },
  {
    name: "BITUMAG BM Board Fiberglass Impregnated Polymer Modified Bituminous Protection Board ",
    price: "₹3600/roll",
    Thickness: "4mm",
    Tensile_strength: "50/60",
    description: `BM Board are Polymer modified bituminous waterproofing membrane, which are reinforced with Glass fiber manufactured from a mixture of bitumen and selected polymers. They are guarded with two sides thermo fusible polyethylene film on both sides, enhanced with supreme waterproofing qualities, coupled with excellent properties such as dimensional stability and puncture resistance. They have good UV resistance and are quite durable `,
    images: [BITUMAGBoard, BITUMAGBoard1, BITUMAGBoard2 ]
  },
  {
    name: "Self Adhesive Membrane BM Self AL 1x 10 mtr ",
    price: "₹85/L",
    Thickness: "1.5mm",
    description: `Established in the year at 2019 at Nagpur, Maharashtra, We "Val Plasto Enterprises" a Proprietorship Firm, engaged as the foremost Wholesale Trader of Waterproofing Chemical, Tile Adhesive And many more.`,
    images: [SelfAdhesiveMembrane, SelfAdhesiveMembrane1, SelfAdhesiveMembrane2]
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

      <h1 style={styles.title}>Waterproofing Membranes</h1>
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
