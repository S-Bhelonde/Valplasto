import React, { useState } from 'react';


import fosroc_nitobond_sbr_300 from '../assets/fosroc_nitobond_sbr_300.png';
import fosroc_nitobond_sbr_300_1 from '../assets/fosroc_nitobond_sbr_300_1.png';
import fosroc_nitobond_sbr_300_2 from '../assets/fosroc_nitobond_sbr_300_2.png';
import redwop_hardfloor1 from '../assets/redwop_hardfloor1.png';
import redwop_hardfloor from '../assets/redwop_hardfloor.png';
import fosroc_conplast_X421IC from '../assets/fosroc_conplast_X421IC.png';
import fosroc_conplast_X421IC1 from '../assets/fosroc_conplast_X421IC1.png';
import REPAIR_MAX_ASIAN_PAINTS from "../assets/REPAIR_MAX_ASIAN_PAINTS.png";
import REPAIR_MAX_ASIAN_PAINTS1 from "../assets/REPAIR_MAX_ASIAN_PAINTS1.png";
import REPAIR_MAX_ASIAN_PAINTS2 from "../assets/REPAIR_MAX_ASIAN_PAINTS2.png";
import REPAIR_MAX_ASIAN_PAINTS3 from "../assets/REPAIR_MAX_ASIAN_PAINTS3.png";
import fosroc_hydroproof_xtra2 from '../assets/fosroc_hydroproof_xtra2.png';
import fosroc_hydroproof_xtra1 from '../assets/fosroc_hydroproof_xtra1.png';
import fosroc_hydroproof_xtra from '../assets/fosroc_hydroproof_xtra.png';
import Fosroc_Nitocote_Cm210_1 from '../assets/Fosroc_Nitocote_Cm210_1.png';
import Fosroc_Nitocote_Cm210_2 from '../assets/Fosroc_Nitocote_Cm210_2.png';
import Fosroc_Nitocote_Cm210 from '../assets/Fosroc_Nitocote_Cm210.png';
import Fosroc_Brushbond from '../assets/Fosroc_Brushbond.png';
import Fosroc_Brushbond_1 from '../assets/Fosroc_Brushbond_1.png';
import Fosroc_Brushbond_2 from '../assets/Fosroc_Brushbond_2.png';
import Fosroc_Brushbond_Rfx from '../assets/Fosroc_Brushbond_Rfx.png';
import Fosroc_Brushbond_Rfx_1 from '../assets/Fosroc_Brushbond_Rfx_1.png';
import Fosroc_Brushbond_Rfx_2 from '../assets/Fosroc_Brushbond_Rfx_2.png';


const products = [

  {
    name: "Fosroc Nitobond SBR 300 ",
    price: "₹175/L",
    weight: "20g",
    description: `SBR based Mortar and Screed modifi er & cum bonding agent
Uses
For making of polymer modifi ed mortar and screeds , bonding agent, repair of worn, damaged and spalled concrete, slurry coat as base for waterproofing.
Advantages
 Simple to use - Single component, gauged as required.
 Provides excellent bond to concrete, adhesion plaster, masonry, stone work, etc.
 Provides mortar with improved durability impermeability to chlorides and other harmful agents.
 Provides waterproof and cohesive screeds, plasters and impermeable slurry coat.
 Improves tensile and fl exural properties of cement thereby reduces cracking.
 Compatible with all common hydraulic cements.
 Cost eff ective and economica `,
    images: [fosroc_nitobond_sbr_300, fosroc_nitobond_sbr_300_1, fosroc_nitobond_sbr_300_2]
  },

  {
    name: "Redwop Chemical Hardfloor ",
    price: "₹85/L",
    color: "Sky Blue",
    weight: "200g",
    description: `NON METALIC FLOOR HARDENER
APPLICATION AREA
*specialprovide a highly abrasion resistant surface to concrerte floors
*They are ideally suited for all industrial areas subject to the heavist traffic
*Loading bays,trucking lanes,car parks,workshops,machine shops,ramps and spilways.`,
    images: [
    redwop_hardfloor1.png,
    redwop_hardfloor.png
]
  },
  {
    name: "Fosroc Conplast X421IC",
    price: "₹175/L",
    color: "Sky Blue",
    weight: "200g",
    description: `Established in the year at 2019 at Nagpur, Maharashtra, We "Val Plasto Enterprises" a Proprietorship Firm, engaged as the foremost Wholesale Trader of Waterproofing Chemical, Tile Adhesive And many more. `,
    images: [
      fosroc_conplast_X421IC,
      fosroc_conplast_X421IC1

    ]
  },

  {
    name: "REPAIR MAX ASIAN PAINTS",
    price: "₹450/L",
    weight: "1L",
    description: ` A high performance binder is what SmartCare RepairMax 200 does. It is recommended as a repairing and bonding agent for concrete/mortar in repair like spalled concrete - floors, chajjas, beams, slabs as it bonds old and new concrete surfaces strongly with plasters. It can also be used for waterproofing of toilets, bathrooms and small terraces. `,
    images: [REPAIR_MAX_ASIAN_PAINTS, REPAIR_MAX_ASIAN_PAINTS1, REPAIR_MAX_ASIAN_PAINTS2, REPAIR_MAX_ASIAN_PAINTS3
    ]
  },

   {
    name: "Fosroc Hydroproof Xtra",
    price: "₹4900/L",
    weight: "20L",
    description: ` Established in the year at 2019 at Nagpur, Maharashtra, We "Val Plasto Enterprises" a Proprietorship Firm, engaged as the foremost Wholesale Trader of Waterproofing Chemical, Tile Adhesive And many more. `,
    images: [fosroc_hydroproof_xtra, fosroc_hydroproof_xtra1, fosroc_hydroproof_xtra2]
  },

   {
    name: "Fosroc Nitocote Cm210",
    price: "₹2500/kg",
    weight: "23kg",
    description: ` Elastomeric cementitious waterproof coating
Uses Nitocote CM210 provides a cementitious, elastomeric waterproof coating with inherent crack-bridging ability.
Typical applications include:
 Potable water retaining structures.
 Swimming Pools.
 Internal basement waterproofing.
 Drainage culverts.
 Wet areas: Kitchens, bathrooms, shower rooms
 Foundations in contact with ground water under saline conditions.
 Vapour barrier.
 Damp proofing for facades.`,
    images: [Fosroc_Nitocote_Cm210, Fosroc_Nitocote_Cm210_1, Fosroc_Nitocote_Cm210_2]
  },

    {
    name: "Fosroc Brushbond",
    price: "₹90/kg",
    weight: "27kg",
    description: `Acrylic polymer modified protective and waterproofing coating for concrete and masonry

To protect atmospherically exposed reinforced concrete structures from attack by acid gases, chloride ions, oxygen, water and water vapour and can be used to produce vapour barriers . The product is also recommended to protect other cementitious substrates and masonry for new and existing structures.
Typical applications include :
 Re-facing and reprofiling concrete & masonry surfaces
 Flexible coating to bridge shrinkage cracks
 Waterproof coating for water tanks and reservoirs
 Vapour barriers
 Robust coating which can withstand light pedestrian traffic
 Backing to marble and granite, preventing water ingress and alleviate staining
coverage

Theoretical 14 m²/ pack 1mm thickness - Due to wastage factors and the variety and nature of possible substrates, practical coverage figures will be reduced. `,
    images: [Fosroc_Brushbond, Fosroc_Brushbond_1, Fosroc_Brushbond_2]
  },

    {
    name: "Fosroc Brushbond RFX",
    price: "₹2200/kg",
    weight: "20kg",
    description: `High performance elastomeric cementitious waterproof coating Uses Brushbond RFX is an high performance elastomeric cementitious coating used for waterproofi ng and to protect atmospherically exposed reinforced concrete structures from attack by acid gases, chloride ions, oxygen & water. Brushbond RFX is suitable for all types of structures including those in coastal environments. The product can be used on concrete, brick and blockwork substrates and is equally suitable for new and existing structures. The product is designed to reface and even out variations in concrete and masonry surfaces and bridge shrinkage cracks. It provides a seamless, fl exible waterproof coating suitable for water tanks, reservoirs, drainage culverts basements, roofs, toilets & wet areas. The product provides a tough durable water resistant coating which can withstand light pedestrian traffi c and also has excellent weather resistance for exterior application `,
    images: [Fosroc_Brushbond_Rfx, Fosroc_Brushbond_Rfx_1, Fosroc_Brushbond_Rfx_2]
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

      <h1 style={styles.title}>Waterproofing Chemicals</h1>
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
