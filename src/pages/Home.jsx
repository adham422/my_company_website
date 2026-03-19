// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home({ lang = "en", dark = false }) {
  const content = {
    ar: {
      heroTitle: "شركة تطوير مواقع ويب و برمجة احترافية",
      heroDesc:
        "نحن نقدم حلول متكاملة لتصميم وبرمجة المواقع الإلكترونية، تطوير المشاريع الرقمية، وخدمات سلة نت.",
      features: [
        "تطوير مواقع ويب حديثة",
        "تصميم واجهات جذابة",
        "تحسين تجربة المستخدم",
        "دعم مشاريع سلة نت",
      ],
      btnServices: "خدماتنا",
      btnContact: "تواصل معنا",
    },
    en: {
      heroTitle: "Professional Web Development & Programming",
      heroDesc:
        "We provide complete solutions for web design, digital project development, and Salla Net services.",
      features: [
        "Modern web development",
        "Attractive UI design",
        "Enhanced user experience",
        "Support for Salla Net projects",
      ],
      btnServices: "Services",
      btnContact: "Contact Us",
    },
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <motion.section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "'Poppins', sans-serif",
        background: dark ? "#030712" : "#f9f9f9",
        color: dark ? "#fff" : "#111",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "40px",
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: lang === "ar" ? "right" : "left",
            alignItems: lang === "ar" ? "flex-end" : "flex-start",
          }}
        >
          <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", lineHeight: 1.2 }}>
            {content[lang].heroTitle}
          </h1>
          <p style={{ fontSize: "1.15rem", opacity: 0.8, maxWidth: "600px" }}>
            {content[lang].heroDesc}
          </p>

          {/* Features List */}
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "8px",
              color: "#3b82f6",
              fontWeight: 500,
              padding: 0,
              listStyle: "none",
            }}
          >
            {content[lang].features.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#3b82f6" }}>✔</span> {f}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
            <Link to="/services" style={btnPrimary}>
              {content[lang].btnServices}
            </Link>
            <Link to="/contact" style={btnSecondary}>
              {content[lang].btnContact}
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Kingdom Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: isMobile ? "200px" : "250px",
              height: isMobile ? "200px" : "250px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #3b82f6",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src="https://seeklogo.com/vector-logo/371353/kingdom-lion"
              alt="Kingdom Logo"
              style={{
                width: "80%",
                height: "80%",
                objectFit: "contain",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const btnPrimary = {
  padding: "12px 24px",
  background: "#3b82f6",
  color: "#fff",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
  boxShadow: "0 5px 15px rgba(59,130,246,0.4)",
};

const btnSecondary = {
  padding: "12px 24px",
  border: "2px solid #3b82f6",
  color: "#3b82f6",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
};