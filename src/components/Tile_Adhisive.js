import React, { useState } from 'react';

import Tile_adhisive_silver from '../assets/Tile_adhisive_silver.png';
import Tile_adhisive_gold from '../assets/Tile_adhisive_gold.png';
import Tile_adhisive from '../assets/Tile_adhisive.png';

const products = [
  {
    name: "SARB TILE ADHESIVE SILVER -511. ( 5 STAR *****)",
    GRADE: "TYPE-I ,  5Star, *****",
    TILES_SIZE: `1’X1’ , 1’X2’, 2’X2’`,
    PACKING: "20 Kg Bags, 40 Kg Bags.",
    COVERAGE: "3.5 mtr2 / 20 Kg @3mm Thickness., 38ft2/20Kg@3 mm Thickness.",
    AVAILABLE_COLOUR: "Grey & White.",
    APPLICATION_AREA: "Bathroom, Kitchen, Floor & Wall.",
    RATIO_OF_WATER: "Measure out 3.6 liters of clean water and add it to 20 kg T.A.",
    USES: "Ceramic Tiles, Vitrified Tiles, Porcelain Tiles. Highly Porous Stone, Sand Stone.",
    BASE_SURFACE: "Cement Base Surface, RCC Surface, AAC Block surface, Cement Plaster, Mosaic Tiles Surface.",
    APPLICATION_PROCEDURE: "Begin by thoroughly cleaning the surface and tiles using a forceful stream of water. This will effectively remove any dust particles and debris that may interfere with adhesion. Once the area is clean, prepare the adhesive mixture. Measure out 3.6 liters of clean water and add it to 20 kg of Sarb T.A. Silver 511 Tile Adhesive. Mix the components together until they form a smooth and consistent paste.Next, using a steel trowel, apply the adhesive mixture evenly onto both the tiles and the surface where the tiles will be placed. Ensure that you spread the adhesive in a uniform layer to achieve optimal bonding. After applying the adhesive, carefully press each tile onto the surface, making sure to align them properly. It’s important to apply even pressure to ensure that each tile adheres securely and is level with the others. Take your time during this process to achieve the best results, and periodically check for alignment and proper adhesion as you work. Once all the tiles are in place, allow the adhesive to cure according to the manufacturer's instructions for a durable finish.",
    images: [Tile_adhisive_silver],
  },
  {
    name: "SARB TILE ADHESIVE GOLD -522. ( 7 STAR *******)",
    GRADE: "TYPE-II , 7Star *******",
    TILES_SIZE: `2’X2’ & 2’X4’, Granite & Marble Running Door & Window framing up to 3’ length.`,
    PACKING: "20 Kg Bag & 40 Kg Bag.",
    COVERAGE: "2 mtr2 /20kg @ 5mm Thickness. 22’/20kg @5mm Thickness.",
    AVAILABLE_COLOUR: "Grey & White.",
    APPLICATION_AREA: "Hall, Kitchen, Gallery, floor & wall, window frame, door frame.",
    RATIO_OF_WATER: "Measure out 3.7 liters of clean water and add it to 20 kg T.A.",
    USES: "Vitrified Tiles, Porcelain Tiles, Granite for Door Frame & Window Frame...",
    BASE_SURFACE: "RCC Surface, AAC Block Surface, Red Brick Surface, Natural Stone Surface, Cement Plaster, Mosaic Tiles",
    APPLICATION_PROCEDURE: "Begin by thoroughly cleaning the surface and tiles using a forceful stream of water. This will effectively remove any dust particles and debris that may interfere with adhesion. Once the area is clean, prepare the adhesive mixture. Measure out 3.7 liters of clean water and add it to 20 kg of Sarb T.A. Gold -522 Tile Adhesive. Mix the components together until they form a smooth and consistent paste.Next, using a steel trowel, apply the adhesive mixture evenly onto both the tiles and the surface where the tiles will be placed. Ensure that you spread the adhesive in a uniform layer to achieve optimal bonding. After applying the adhesive, carefully press each tile onto the surface, making sure to align them properly. It’s important to apply even pressure to ensure that each tile adheres securely and is level with the others. Take your time during this process to achieve the best results, and periodically check for alignment and proper adhesion as you work. Once all the tiles are in place, allow the adhesive to cure according to the manufacturer's instructions for a durable finish.",
    images: [Tile_adhisive_gold],
  },
  {
    name: "SARB Tile Adhesive Diamond-533 (9 STAR)",
    GRADE: "TYPE-III, 9Star *********",
    TILES_SIZE: `1’x2’, 2’X2’, 2’X4’, 2’X5’, Granite & Marble up to 5’ length`,
    PACKING: "20 Kg Bags, 40 Kg Bags.",
    COVERAGE: "2.1 mtr2 /20kg @ 5mm Thickness. 24’/20kg @5mm Thickness.",
    AVAILABLE_COLOUR: "Grey & White.",
    APPLICATION_AREA: "Hall, Kitchen, Room, Gallery, floor & wall, window frame, door frame.",
    RATIO_OF_WATER: "Measure out 3.8 liters of clean water and add it to 20 kg T.A.",
    USES: "Ceramic Tiles, Vitrified Tiles, Porcelain Tiles. Highly Porous Stone, Sand Stone.",
    BASE_SURFACE: "RCC Surface, AAC Block Surface, Red Brick Surface, Natural Stone Surface, Cement Plaster, Mosaic Tiles",
    APPLICATION_PROCEDURE: "Begin by thoroughly cleaning the surface and tiles using a forceful stream of water. This will effectively remove any dust particles and debris that may interfere with adhesion. Once the area is clean, prepare the adhesive mixture. Measure out 3.8 liters of clean water and add it to 20 kg of Sarb T.A. Dimond-533 Tile Adhesive. Mix the components together until they form a smooth and consistent paste.Next, using a steel trowel, apply the adhesive mixture evenly onto both the tiles and the surface where the tiles will be placed. Ensure that you spread the adhesive in a uniform layer to achieve optimal bonding. After applying the adhesive, carefully press each tile onto the surface, making sure to align them properly. It’s important to apply even pressure to ensure that each tile adheres securely and is level with the others. Take your time during this process to achieve the best results, and periodically check for alignment and proper adhesion as you work. Once all the tiles are in place, allow the adhesive to cure according to the manufacturer's instructions for a durable finish.",
    images: [Tile_adhisive],
  },
];

const ProductShowcase = () => {
  const [preview, setPreview] = useState({ productIndex: null, imageIndex: null });

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
      <h1 style={styles.title}>Tile Adhesive Products</h1>
      {products.map((product, pIndex) => (
        <div key={pIndex} style={styles.productCard}>
          <div className="image-wrapper" onClick={() => openPreview(pIndex, 0)}>
            <img src={product.images[0]} alt={product.name} style={styles.productImage} loading="lazy" />
          </div>
          <h2 style={styles.productName}>{product.name}</h2>
          <table style={styles.table}>
            <tbody>
              <tr><td><strong>Grade</strong></td><td>{product.GRADE}</td></tr>
              <tr><td><strong>Tile Size</strong></td><td>{product.TILES_SIZE}</td></tr>
              <tr><td><strong>Packing</strong></td><td>{product.PACKING}</td></tr>
              <tr><td><strong>Coverage</strong></td><td>{product.COVERAGE}</td></tr>
              <tr><td><strong>Available Colour</strong></td><td>{product.AVAILABLE_COLOUR}</td></tr>
              <tr><td><strong>Application Area</strong></td><td>{product.APPLICATION_AREA}</td></tr>
              <tr><td><strong>Ratio of Water</strong></td><td>{product.RATIO_OF_WATER}</td></tr>
              <tr><td><strong>Uses</strong></td><td>{product.USES}</td></tr>
              <tr><td><strong>Base Surface</strong></td><td>{product.BASE_SURFACE}</td></tr>
            </tbody>
          </table>
          <p style={styles.procedure}><strong>Application Procedure:</strong><br />{product.APPLICATION_PROCEDURE}</p>
        </div>
      ))}

      {currentImage && (
        <div style={styles.modal} onClick={closePreview}>
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
    backgroundColor: '#fef9f4',
    fontFamily: 'sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#6a3900',
  },
  productCard: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    padding: '1.5rem',
  },
  productImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '1rem',
    cursor: 'pointer',
  },
  productName: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    color: '#5a2d00',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1rem',
  },
  procedure: {
    background: '#f4f1eb',
    padding: '1rem',
    borderRadius: '12px',
    color: '#444',
    fontSize: '0.95rem',
  },
  modal: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalImage: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    borderRadius: '12px',
  },
  modalClose: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    fontSize: '2.5rem',
    color: '#fff',
    cursor: 'pointer',
  },
  modalArrow: {
    position: 'absolute',
    top: '50%',
    fontSize: '2.5rem',
    color: '#fff',
    cursor: 'pointer',
    userSelect: 'none',
    transform: 'translateY(-50%)',
  },
};

export default ProductShowcase;
