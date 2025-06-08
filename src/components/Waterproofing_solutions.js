import React from 'react';
import {
    FaTint,
    FaHome,
    FaRupeeSign,
    FaCog,
    FaHouseDamage,
    FaHandHoldingMedical
} from 'react-icons/fa';
import new_construction from '../assets/new_construction.png';
import repair_renovate from '../assets/repair_renovate.png';
import waterproofing from '../assets/waterproofing.png';


const WaterproofingSolutions = () => {
    console.log("Rendering Waterproofing Solutions Page");

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Top Section */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                flexWrap: 'wrap'
            }}>
                <div style={{ width: '100%', maxWidth: '600px', padding: '20px' }}>
                    <h2>Waterproofing Solutions by Valplasto Enterprises</h2>
                    <p>
                        Waterproofing one’s home is an essential part of any home building project.
                        Waterproofing products and solutions are essential for protecting various surfaces
                        from water damage and moisture infiltration...
                    </p>
                </div>
                <div style={{ width: '100%', maxWidth: '500px', padding: '20px' }}>
                    <img
                        src={waterproofing}
                        alt="Waterproofing Solutions"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            {/* Why and When to Use Section */}
            <div style={{ padding: '40px' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '40px'
                }}>
                    Why And When To Use Waterproofing Product
                </h2>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {/* New Construction Box */}
                    <div style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '20px',
                        flex: '0 0 45%',
                        textAlign: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        minWidth: '300px'
                    }}>
                        <img
                            src={new_construction}
                            alt="New Construction Icon"
                            style={{ width: '80px', marginBottom: '20px' }}
                        />
                        <h3 style={{ fontWeight: 'bold' }}>New Construction</h3>
                        <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
                            For new constructions, incorporating waterproofing products from the beginning is essential.
                        </p>
                        <a href="#" style={{
                            display: 'inline-block',
                            marginTop: '20px',
                            fontWeight: 'bold',
                            color: '#000',
                            textDecoration: 'underline'
                        }}>
                            KNOW MORE
                        </a>
                    </div>

                    {/* Repair / Renovation Box */}
                    <div style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '20px',
                        flex: '0 0 45%',
                        textAlign: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        minWidth: '300px'
                    }}>
                        <img
                            src={repair_renovate}
                            alt="Repair Renovation Icon"
                            style={{ width: '80px', marginBottom: '20px' }}
                        />
                        <h3 style={{ fontWeight: 'bold' }}>Repair / Renovation</h3>
                        <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
                            Cracks, gaps, and weakened surfaces can compromise the integrity of your home's waterproofing.
                        </p>
                        <a href="#" style={{
                            display: 'inline-block',
                            marginTop: '20px',
                            fontWeight: 'bold',
                            color: '#000',
                            textDecoration: 'underline'
                        }}>
                            KNOW MORE
                        </a>
                    </div>
                </div>
            </div>

            {/* Who Should Use Waterproofing Section */}
            <div style={{ padding: '40px' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '30px'
                }}>
                    Who Should Use Waterproofing?
                </h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '30px'
                }}>
                    {/* New Homeowners */}
                    <div style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '30px',
                        width: '100%',
                        maxWidth: '500px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}>
                        <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>New Homeowners</h2>
                        <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>
                            Why waterproofing is great for new homeowners:
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <FaTint size={24} style={{ color: '#007BFF', marginRight: '10px' }} />
                            <span>Prevents frequent leakages and ensures a dry living space.</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <FaHome size={24} style={{ color: '#007BFF', marginRight: '10px' }} />
                            <span>Improves structural durability over the years.</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaRupeeSign size={24} style={{ color: '#007BFF', marginRight: '10px' }} />
                            <span>Reduces future repair costs significantly.</span>
                        </div>
                    </div>

                    {/* Existing Homeowners */}
                    <div style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '30px',
                        width: '100%',
                        maxWidth: '500px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}>
                        <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Existing Homeowners</h2>
                        <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>
                            Why waterproofing helps existing homeowners:
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <FaCog size={24} style={{ color: '#007BFF', marginRight: '10px' }} />
                            <span>Eliminates the need for frequent repair work.</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <FaHouseDamage size={24} style={{ color: '#007BFF', marginRight: '10px' }} />
                            <span>Prevents further interior damage from leaks.</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaHandHoldingMedical size={24} style={{ color: '#007BFF', marginRight: '10px' }} />
                            <span>Supports a healthy home by eliminating dampness.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterproofingSolutions;
