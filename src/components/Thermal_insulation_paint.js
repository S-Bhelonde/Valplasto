import React, { useState } from 'react';

import Fosroc_Nitocote_Wall_Guard from '../assets/Fosroc_Nitocote_Wall_Guard.png';
import Fosroc_Nitocote_Wall_Guard1 from '../assets/Fosroc_Nitocote_Wall_Guard1.png';
import Fosroc_Nitocote_Wall_Guard2 from '../assets/Fosroc_Nitocote_Wall_Guard2.png';
import Nitocote_Wallguard_premium from '../assets/Nitocote_Wallguard_premium.png';
import Nitocote_Wallguard_premium1 from '../assets/Nitocote_Wallguard_premium1.png';
import Nitocote_Wallguard_premium2 from '../assets/Nitocote_Wallguard_premium2.png';
import Brushbond_Roofguard from '../assets/Brushbond_Roofguard.png';
import Brushbond_Roofguard1 from '../assets/Brushbond_Roofguard1.png';
import Brushbond_Roofguard2 from '../assets/Brushbond_Roofguard2.png';


import PremiumPDF from '../assets/WallGuard_Premium_Details.pdf';
import brushbond_roofguardPDF from '../assets/brushbond_roofguard.pdf';

const products = [
  {
    name: "Fosroc Nitocote Wall Guard",
    price: "₹8850/piece",
    weight: "20 kg",
    description: `Nitocote Wallguard is water based polymer coating composed of high quality acrylic polymer, with weather resistant pigments, properly selected & graded fine fillers. It is used as a waterproofing & decorative coating for protection of exterior walls of the buildings from heavy wind driven rain.`,
    images: [Fosroc_Nitocote_Wall_Guard, Fosroc_Nitocote_Wall_Guard1, Fosroc_Nitocote_Wall_Guard2],
    
  },
  {
    name: "Fosroc Nitocote Wall Guard Premium",
    price: "₹8850/piece",
    weight: "20 kg",
    description: `Uses
Nitocote® Wallguard Premium is a high performance,
Decorative acrylic and waterproof coating with strong
inter-coat adhesion with the substrate and long term
protection.
Typical applications include:
■ High-quality waterproof decorative coating for exterior walls
■ Suitable for coastal environments
■ Can be used on masonry surfaces, concrete, cement renderings etc.

Technical Details:
- Appearance: Emulsion (white, mid-tone, dark bases)
- Density: 1.30 ± 0.03 g/cc
- Breathability: 22 gm/m2/day (ASTM E96)
- Rapid chloride penetration: Very low (ASTM C1202-97)
- UV Resistance: No defects after 1500 hrs (ASTM D 4587)
- Tensile strength: ≥ 2.5 N/mm² (ASTM D412-02)
- Crack bridging: Passes > 0.5mm (ASTM C836)
- Adhesion strength: ≥ 2.0N/mm² (ASTM D4541)
- Coating thickness: 110 microns (2 coats)
- Solar Reflectance Index: 95 (white shade)`,
    images: [Nitocote_Wallguard_premium, Nitocote_Wallguard_premium1, Nitocote_Wallguard_premium2],
    pdf: PremiumPDF
  },

   {
    name: "Brushbond Roofguard",
    price: "₹8850/piece",
    weight: "20 kg",
    description: `High build fibre Reinforced Acrylic Waterproofing
render for roofing
Uses
Brushbond Roof Guard is high build fibre reinforced
seamless waterproofing render suitable for waterproofing of
old & new roofs, it is a polymer base product applied in three
OR more coats & each coat with different colours for
monitoring correct thickness.
The product can be applied directly on existing concrete,
brickbat coba, and screed concrete even without removal
provided the substrates are sound enough for application of
the coating avoiding the risk of damage to the old roof
associated while removing of the existing overlays. The
product provides a seamless, tough durable water resistant
coating which can withstand light pedestrian traffic and also
has excellent weather resistance for exterior applications.
Physical Properties
Solid Content : 70 %
Tensile strength
ASTM D 412 : 1.10 Mpa
Elongation
ASTM D12 : 100%
Resistance to ageing due to : 1000 hours
UV radiation ASTM D4587 E : No Change
Rapid Chloride :
Penetration ASTM C 1202-03 : Very low
Pull off adhesion
ASTM D4541 : 0.92 Mpa
Resistance to Algae growth
ASTM D 5589-97 : Passes, Zero rating
Permeability (mm)
(BSEN 12390 part 8) : 5.0
Water vapour transmission
(ASTM E96) : 6.0g/m² h`,
    images: [Brushbond_Roofguard, Brushbond_Roofguard1, Brushbond_Roofguard2],
    pdf:brushbond_roofguardPDF
    
  },
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
      <style>{modalStyles}</style>
      <h1 style={styles.title}>Thermal Insulation Paint Products</h1>
      <div style={styles.columnLayout}>
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
            <p style={styles.detail}><strong>Weight:</strong> {product.weight}</p>
            <p style={styles.description}>{product.description}</p>
            <a
              href={product.pdf}
              download
              style={styles.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Product PDF
            </a>
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
  columnLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
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
  },
  pdfLink: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#0066cc',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

const modalStyles = `
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
`;

export default ProductShowcase;
