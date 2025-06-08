import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Roof Waterproofing Treatment",
      description:
        "Protect your roof from leaks and structural damage with our complete waterproofing system using crack treatments, fiberglass mesh, and top coats.",
    },
    {
      title: "Bathroom/Toilet Waterproofing",
      description:
        "Prevent water seepage in wet areas using high-quality nozzle grouting, elastomeric coatings, and Brick Bat Coba techniques for lasting protection.",
    },
    {
      title: "Basement Waterproofing",
      description:
        "Secure basements from water ingress and foundation damage using RCC grouting, crystalline compound coatings, and plaster finishes.",
    },
    {
      title: "APP/HDPE Membrane Application",
      description:
        "Install APP membranes with hot torch on RCC slabs and apply HDPE sheets before raft casting to ensure waterproofing and longevity.",
    },
    {
      title: "Anti-Corrosive Coating",
      description:
        "Extend metal surface life by applying coal tar epoxy, zinc-rich coatings, and industrial epoxy to resist corrosion and environmental effects.",
    },
    {
      title: "Heat Resistant Treatment",
      description:
        "Reduce internal temperatures with our thermal insulation paint using acrylic and polyurethane, ideal for industrial roofs and walls.",
    },
    {
      title: "Epoxy/PU Flooring",
      description:
        "Durable, seamless epoxy and PU floor coatings for industrial and commercial use with high resistance to chemicals and wear.",
    },
    {
      title: "Water Tank/Swimming Pool Waterproofing",
      description:
        "Ensure water safety with food-grade elastomeric and epoxy waterproofing for tanks and swimming pools.",
    },
    {
      title: "Exterior Wall Waterproofing",
      description:
        "Protect exterior walls from water infiltration and cracks with high-performance waterproof coatings.",
    },
    {
      title: "Hard Floor Application",
      description:
        "Durable and wear-resistant hard floor coatings for industrial and commercial environments.",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Services (Industrial & Residential)</h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    color: "#333333",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "30px",
    color: "#1E3A8A",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    flex: "1 1 calc(50% - 20px)",
    backgroundColor: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#1D4ED8",
  },
  cardText: {
    fontSize: "16px",
    color: "#4B5563",
  },
};

// Media Query using plain JS
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  styles.card.flex = "1 1 100%";
}

export default ServicesSection;
