import React, { useState } from 'react';

import fosroc_conplast from '../assets/fosroc_conplast.png';
import conplast_sp430 from '../assets/conplast_sp430.png';
import conplast_sp430_1 from '../assets/conplast_sp430_1.png';
import fosroc_conplast_p211_1 from '../assets/fosroc_conplast_p211_1.png';
import fosroc_conplast_p211_2 from '../assets/fosroc_conplast_p211_2.png';
import fosroc_conplast_p211 from '../assets/fosroc_conplast_p211.png';
import AsianPaintsCemboost200 from '../assets/Asian_Paints_Cemboost_200.png';
import AsianPaintsCemboost2001 from '../assets/Asian_Paints_Cemboost_200_1.png';
import AsianPaintsCemboost2002 from '../assets/Asian_Paints_Cemboost_200_2.png';
import AsianPaintsCemboost2003 from '../assets/Asian_Paints_Cemboost_200_3.png';
import FosrocAuramix300 from '../assets/Fosroc_Auramix_300.png';
import FosrocAuramix3001 from '../assets/Fosroc_Auramix_300_1.png';
import Fosroc_Conplast_Constructive_Solutions_Wl_Xtra from '../assets/Fosroc_Conplast_Constructive_Solutions_Wl_Xtra.png';
import Fosroc_Conplast_Constructive_Solutions_Wl_Xtra1 from '../assets/Fosroc_Conplast_Constructive_Solutions_Wl_Xtra1.png';

const products = [
  {
    name: "Fosroc Conplast P211",
    price: "₹299/kg",
    color: "Sky Blue",
    weight: "200g",
    description: `Water reducing concrete admixture Conplast P211 is a chloride free water reducing admixture based on selected sugar-reduced lignosulphonates. It is supplied as a brown solution which instantly disperses in water. Conplast P211 disperses the fine particles in the concrete mix, enabling the water content of the concrete to perform more effectively and improving the consistency of the concrete. This produces higher levels of workability for the same water content, allowing benefits such as water reduction and increased strengths to be taken.

    Manifestation: A brown liquid
    1.160-1.190 specific gravity at 25 °C
    Content of chloride: Nil to IS:456
    Entrainment of the air is typically under 1.5%. At typical doses, more air is entrained.
    Less than 5.0g of Na2O equivalent per litre of admixture is the typical alkali level.
    Fosroc Conplast P211 is a practical method for creating concrete of superior quality.
    Uses: To improve the effectiveness of the water content of a concrete mix.
    Advantages: Allows specified strength grades to be met at reduced cement content or increased workability.
    Chloride free, safe for use in prestressed and reinforced concrete.
    Standards compliance: IS:9103-1999, IS : 2645 : 2003, ASTM C494 Type A`,
    images: [fosroc_conplast_p211, fosroc_conplast_p211_1, fosroc_conplast_p211_2]
  },
  {
    name: "Fosroc Conplast Sp430 G8",
    price: "₹349",
    color: "Cream",
    weight: "250g",
    description: `Conplast SP430 G8 is based on Sulphonated Napthalene Polymers and supplied as a brown liquid instantly dispersible in water.
    
    Main Uses:
    - Excellent acceleration of strength gain.
    - Major increase in strength at all ages.
    - Improves durability and pumpability.
    
    Advantages:
    - Strength at early ages.
    - Reduced permeability.
    - Improved particle dispersion.`,
    images: [fosroc_conplast, conplast_sp430_1, conplast_sp430]
  },
  {
    name: "Asian Paints Cemboost 200",
    price: "₹170/kg",
    weight: "20L",
    description: `An integral liquid waterproofing compound. CemBoost 200 strengthens the cement mix and reduces water permeability.`,
    images: [AsianPaintsCemboost200, AsianPaintsCemboost2001, AsianPaintsCemboost2002, AsianPaintsCemboost2003]
  },
  {
    name: "Fosroc Auramix 300",
    price: "₹13500/drum",
    weight: "250kg",
    description: `Auramix 300 combines the properties of water reduction and workability retention.`,
    images: [FosrocAuramix300, FosrocAuramix3001]
  },
  {
    name: "Fosroc Conplast Constructive Solutions Wl Xtra",
    price: "₹85/L",
    color: "Sky Blue",
    weight: "200g",
    description: `WL Xtra is an integral waterproofing admixture for concrete and mortar. Features advanced technology for higher grade concrete, corrosion resistance, and high strength.`,
    images: [Fosroc_Conplast_Constructive_Solutions_Wl_Xtra, Fosroc_Conplast_Constructive_Solutions_Wl_Xtra1]
  }
];

const ProductShowcase = () => {
  const [preview, setPreview] = useState({ productIndex: null, imageIndex: null });

  const openPreview = (productIndex, imageIndex) => setPreview({ productIndex, imageIndex });
  const closePreview = () => setPreview({ productIndex: null, imageIndex: null });

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
      <h1 style={styles.title}>Concrete Admixtures</h1>
      <div style={styles.column}>
        {products.map((product, pIndex) => (
          <div key={pIndex} style={styles.card}>
            <div style={styles.imageSlider}>
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="image-wrapper"
                  onClick={() => openPreview(pIndex, i)}
                  style={styles.imageWrapper}
                >
                  <img src={img} alt={`${product.name}-${i}`} style={styles.img} loading="lazy" />
                </div>
              ))}
            </div>
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.detail}><strong>Price:</strong> {product.price}</p>
            {product.color && <p style={styles.detail}><strong>Color:</strong> {product.color}</p>}
            {product.weight && <p style={styles.detail}><strong>Weight:</strong> {product.weight}</p>}
            <p style={styles.description}>{product.description}</p>
          </div>
        ))}
      </div>

      {currentImage && (
        <div className="modal" onClick={closePreview} style={styles.modal}>
          <span style={styles.modalClose} onClick={closePreview}>&times;</span>
          <span style={{ ...styles.modalArrow, left: 20 }} onClick={(e) => { e.stopPropagation(); changeImage(-1); }}>&#10094;</span>
          <img src={currentImage} alt="Preview" style={styles.modalImage} onClick={(e) => e.stopPropagation()} />
          <span style={{ ...styles.modalArrow, right: 20 }} onClick={(e) => { e.stopPropagation(); changeImage(1); }}>&#10095;</span>
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
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    textAlign: 'center'
  },
  imageSlider: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    marginBottom: '1rem'
  },
  imageWrapper: {
    width: '100px',
    height: '100px',
    overflow: 'hidden',
    borderRadius: '12px',
    flexShrink: 0
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    cursor: 'pointer'
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
  },
  modal: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalImage: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    borderRadius: '16px',
    transition: 'transform 0.3s ease'
  },
  modalClose: {
    position: 'absolute',
    top: 20,
    right: 30,
    fontSize: '2.5rem',
    color: 'white',
    cursor: 'pointer'
  },
  modalArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '3rem',
    color: 'white',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '0 1rem'
  }
};

export default ProductShowcase;
