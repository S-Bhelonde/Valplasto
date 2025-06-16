import React from "react";

const About = () => {
  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    color: "#333",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "Segoe UI, sans-serif",
    lineHeight: "1.7",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#0b3d91",
    textAlign: "center",
    marginBottom: "30px",
  };

  const subHeadingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#0b3d91",
    marginTop: "40px",
    marginBottom: "15px",
  };

  const paragraphStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const listStyle = {
    fontSize: "18px",
    paddingLeft: "20px",
    marginBottom: "20px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About Valplasto Enterprises</h2>

      <p style={paragraphStyle}>
        <strong>Valplasto Enterprises</strong> is a leading provider of waterproofing chemical solutions, based in <strong>Nagpur</strong>. With a strong commitment to innovation, quality, and sustainability, we serve the construction industry with high-performance materials tailored for long-lasting protection. Our customer-centric approach ensures personalized service and long-term partnerships with clients across residential, commercial, and industrial sectors.
      </p>

      <p style={paragraphStyle}>
        At Valplasto, we understand that reliable and durable construction materials are key to the longevity of every structure. Our team of dedicated professionals — including engineers, chemical specialists, and construction experts — work together to deliver state-of-the-art solutions backed by technical support and research-driven design.
      </p>


      <h3 style={subHeadingStyle}>What is Waterproofing?</h3>
      <p style={paragraphStyle}>
        Waterproofing is the process of making a structure water-resistant to prevent water ingress and moisture damage. It plays a critical role in maintaining structural integrity and preventing issues like leaks, mold growth, wall dampness, paint peeling, and concrete deterioration.
      </p>

      <h3 style={subHeadingStyle}>Our Solutions</h3>
      <p style={paragraphStyle}>Our product portfolio includes:</p>
      <ul style={listStyle}>
        <li><strong>Waterproofing Solutions:</strong> Designed for basements, terraces, roofs, and walls, our systems protect against water ingress, seepage, and humidity damage. We use multi-component solutions that combine membranes with reinforcing layers for superior durability.</li>
        <li><strong>Tile & Stone Fixing Systems:</strong> High-performance adhesives, grouts, and cleaners that offer long-lasting adhesion and water resistance, ideal for both indoor and outdoor applications.</li>
        <li><strong>Concrete Repair & Industrial Flooring:</strong> Advanced repair mortars and flooring systems that restore and strengthen aging or damaged structures, ensuring long-term performance.</li>
        <li><strong>Admixtures & Surface Treatments:</strong> Additives that improve workability, strength, and resistance of concrete. Our protective coatings and sealants shield surfaces from weathering, chemical attack, and UV radiation.</li>
      </ul>

      <h3 style={subHeadingStyle}>Where is Waterproofing Applied?</h3>
      <p style={paragraphStyle}>
        Waterproofing is essential in various parts of a structure, including:
      </p>
      <ul style={listStyle}>
        <li>Foundations, basements, and retaining walls</li>
        <li>Roofs, podiums, and terraces</li>
        <li>Wet areas: bathrooms, kitchens, balconies</li>
        <li>Water storage systems: tanks, swimming pools, OHTs</li>
        <li>Industrial floors, expansion joints, and concrete surfaces</li>
      </ul>

      <h3 style={subHeadingStyle}>Sustainability & Innovation</h3>
      <p style={paragraphStyle}>
        Valplasto is committed to sustainability. Our products are formulated to minimize environmental impact while maximizing performance. We rigorously test each solution to ensure it meets industry standards and safety guidelines, providing long-term protection with minimal maintenance.
      </p>

      <h3 style={subHeadingStyle}>Request a Quotation</h3>
      <p style={paragraphStyle}>
        You can reach out to us via <strong>phone or email</strong>. Our team will schedule a site visit, assess your requirements, and share a customized quotation within a few working days. Upon confirmation, the product delivery or application support will be promptly initiated.
      </p>

      <h3 style={subHeadingStyle}>Why Choose Valplasto Enterprises?</h3>
      <p style={paragraphStyle}>
        Valplasto stands apart for its commitment to product performance, expert guidance, and customer satisfaction. We prioritize high-quality solutions, field-tested techniques, and adaptable services. Whether you’re a builder, architect, or engineer, we are your reliable partner in structural protection.
      </p>

      <h3 style={subHeadingStyle}>Estimated Project Timeline</h3>
      <p style={paragraphStyle}>
        Timelines depend on the size and nature of the project. For instance, terrace waterproofing under 2000 sq. ft. can usually be completed within <strong>5–7 business days</strong>, depending on weather and site conditions.
      </p>

      <h3 style={subHeadingStyle}>Our Vision</h3>
      <p style={paragraphStyle}>
        To offer qualitative, eco-friendly, and flexible waterproofing solutions that protect structures from water leakage and its damaging effects. We aim to lead the waterproofing chemicals industry with sustainable innovation, customer trust, and continuous improvement.
      </p>

    </section>
  );
};

export default About;
