import React, { useState } from 'react';

import butylAluminiumFlashingTape from '../assets/Butyl_Aluminium_Flashing_Tape.png';
import butylAluminiumFlashingTape1 from '../assets/Butyl_Aluminium_Flashing_Tape1.png';
import Butyl_Rubber_Tape1 from '../assets/Butyl_Rubber_Tape1.png';
import Butyl_Rubber_Tape from '../assets/Butyl_Rubber_Tape.png';
import Bituminous_flashtrip from '../assets/Bituminous_flashtrip.png';
import Bituminous_flashtrip1 from '../assets/Bituminous_flashtrip1.png';

const productGroups = [
  {
    category: 'Butyl Tapes',
    products: [
      {
        name: 'Butyl Aluminium Flashing Tape',
        price: '₹850/piece',
        tapeWidth: '>100 mm',
        tapeLength: '10 m',
        description: `STRONG BUTYL TAPE:- Heavy Duty & Strong Adhesive, the aluminum foil Butyl tape is made of highly tacky butyl glue, and has strong adhesive properties. The aluminum foil waterproof tape can stick on all kinds of surfaces, including glass, cement ground, concrete, metal roofing, tile, polyester, Polycarbonate sheets, metal and wood exposed to water, and so on. It is most suitable for Flashing applications and for stopping water leakages, providing a better sealing result and longer service time.
PRODUCT LENGTH:- 10mtr Wide – 100mm SIZE – 100mm x 10mtr
WIDE APPLICATION:-Leakage repair waterproof seal tape will provide professional and qualified sealing for RV, window, downpipe, boat sealing, glass, gutters, aluminum, tarps, PVC pipes, and EPDM rubber roof patching, and more. It secures your beloved house and cars from leaking problems, waterproof adhesive tape is excellent moisture and weather-resistant.
DURABLE & FLEXIBLE:- Unique size, safe, and durable with strict quality testing. Easily cut to any size and length you want! wear-resistant layers, non-slip & endurable. Waterproof tape for pipe leakage can maintain flexibility & adhesion, and withstand a certain degree of displacement, and deformation.
EASY INSTALLATION:- Our butyl rubber seal tape can be installed easily, quickly, and ideally on tight corners. Simply peel off the release film and apply butyl sealant tape wherever needed, for better performance, it is recommended to press the tape tightly on a clean, dry surface. No extra waterproof coating is required and you will find it simple and efficient but not suitable for high water pressure surfaces.
DUCT TAP:- Omega butyl aluminium flashing tape for asbestos roof leakage repair big size sink waterproof sealant flex foil rubber tape for water tank adhesive duct tape (omega flashing tape for asbestos roof repair, waterproof tape for pipe, aluminium rubber tape, omega adhesive for asbestos)`,
        images: [butylAluminiumFlashingTape, butylAluminiumFlashingTape1]
      },
      {
        name: 'Butyl Rubber Tape',
        price: '₹750/piece',
        tapeWidth: '50 mm',
        tapeLength: '5 m',
        description: `STRONG ADHESIVE TAPE: The aluminium foil tape adopts high polymer synthesis butyl glue, which owns strong adhesive ability. The aluminium foil tape waterproof can stick on all kinds of surface, including glass, cement ground, tile, plastic, metal and wood in water and so on.
EXCELLENT WATERPROOF: Leakage repair waterproof tape can be used for repairing, sealing, hose, pipe, surface crack etc. Aluminium tape also provides waterproof protection. Waterproof adhesive tape is excellent moisture and weather resistant. Water leakage tape
DURABLE & PERMANENT USE: Wear-resistant layers, non-slip & endurable. Waterproof tape for pipe leakage can maintain flexibility & adhesion, withstand a certain degree of displacement, and deformation. Roof water leakage solution has ageing resistance for many years. Water proof tape for roof leakage
EASY TO INSTALL: Our butyl rubber seal tape can be installed easily, quickly and ideally on tight corners, textured, uneven, and most jagged surfaces. You can also use sealing tape easily on unusual patterns. Installs without gaps and can reliably shut off wind, water, dust, oil, moisture, vapour, corrosive chemicals, and other leakages. Tape for water leakage in tank
WIDE APPLICATION: Suitable for roof water leakage solution , window sealing, RV awning, gutters, down spouts, boats, personal watercrafts, canoes, outdoor equipment, mobile homes, RV’S & campers, PVC & plumbing pipes, sprinkler systems, doors, walls, seams, vents, air ducts, HVAC systems, DIY projects, etc. Water proof tape for pipe leakage
EASY TO USE: Before attaching the water leak tape, keep the target surface clean, dry and oil-free. Peel off the released film and then apply this butyl sealant tape to the surface. Requires no extra glue. Works well in preventing shakes, sealing, waterproofing, fire retardant and insulation. Water tank leakage seal tape`,
        images: [Butyl_Rubber_Tape, Butyl_Rubber_Tape1]
      }
    ]
  },
  {
    category: 'Bituminous Tapes',
    products: [
      {
        name: 'Bituminous flashtrip',
        price: '₹850/piece',
        tapeWidth: '>100 mm',
        tapeLength: '10 m',
        description: `【Perfect Performance】Our Aluminum Bitumen Tar Tape super waterproof seal rubber tape is 1.5mm Thickness x 4" Width x 2 meters Length; Working Temperature: -40 ℉ to 248 ℉, Elongation rate of 1000%, stop the leak effectively aging resistance for 15 years.
【Widely Application】Magic tape patch Suitable for roof leaks, window sealing, rv awning, gutters, down spouts, boats, personal watercrafts, canoes, outdoor equipment, mobile homes, RV’S & campers, PVC & plumbing pipes, sprinkler systems, doors, walls, seams, vents, air ducts, HVAC systems, DIY projects, etc.
【Durable Material】Heavy Duty & Strong Adhesive, fowong seal tape is made of pure butyl rubber with upgraded aluminum foil cover, thicker and heavier than similar products, stronger adhesive, toxic-free, waterproof, UV resistant, vapor prevent, anti-aging and odorless; provides a better sealing result and longer service time.
【Easy To Use】Simply peel off the release film and apply the butyl sealant tape to anywhere needed. For better performance, tightly press the tape to a clean and dry surface is advised; store in cool place. No need to do Extra Waterproof Coating, you will find it is EASY and EFFICIENT.
【Buy With Confidence】We stand by our commitment to quality. Any product related problem, please feel free to contact us. We will try our best to help you to your satisfaction. High-quality products and service is our priority.`,
        images: [Bituminous_flashtrip, Bituminous_flashtrip1]
      }
    ]
  }
];

const ProductShowcase = () => {
  const [preview, setPreview] = useState({
    groupIndex: null,
    productIndex: null,
    imageIndex: null
  });

  const openPreview = (groupIndex, productIndex, imageIndex) => {
    setPreview({ groupIndex, productIndex, imageIndex });
  };

  const closePreview = () => {
    setPreview({ groupIndex: null, productIndex: null, imageIndex: null });
  };

  const changeImage = (direction) => {
    const { groupIndex, productIndex, imageIndex } = preview;
    const images = productGroups[groupIndex].products[productIndex].images;
    let newIndex = imageIndex + direction;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setPreview({ groupIndex, productIndex, imageIndex: newIndex });
  };

  const currentImage =
    preview.groupIndex !== null
      ? productGroups[preview.groupIndex].products[preview.productIndex].images[preview.imageIndex]
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

      {productGroups.map((group, gIndex) => (
        <div key={gIndex}>
          <h1 style={styles.title}>{group.category}</h1>
          <div style={styles.grid}>
            {group.products.map((product, pIndex) => (
              <div key={pIndex} style={styles.card}>
                <div style={styles.imageSlider}>
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="image-wrapper"
                      onClick={() => openPreview(gIndex, pIndex, i)}
                    >
                      <img src={img} alt={`${product.name}-${i}`} loading="lazy" />
                    </div>
                  ))}
                </div>
                <h2 style={styles.name}>{product.name}</h2>
                <p style={styles.detail}><strong>Price:</strong> {product.price}</p>
                <p style={styles.detail}><strong>Width:</strong> {product.tapeWidth}</p>
                <p style={styles.detail}><strong>Length:</strong> {product.tapeLength}</p>
                <p style={styles.description}>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

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
