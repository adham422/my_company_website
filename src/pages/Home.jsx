// src/pages/Home.jsx
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
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: lang === "ar" ? "right" : "left",
            alignItems: lang === "ar" ? "flex-end" : "flex-start",
          }}
        >
          <h1>{content[lang].heroTitle}</h1>
          <p>{content[lang].heroDesc}</p>

          <ul>
            {content[lang].features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          {/* ✅ نفس طريقة الهيدر بالظبط */}
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <Link to="/services" style={btnPrimary}>
              {content[lang].btnServices}
            </Link>

            <Link to="/contact" style={btnSecondary}>
              {content[lang].btnContact}
            </Link>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://drive.google.com/file/d/1utuRD1Jy4ash4JsAYbWFGDSbZmCq_YlQ/view?usp=drive_link"
            alt="hero"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #3b82f6",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}

const btnPrimary = {
  padding: "10px 20px",
  background: "#3b82f6",
  color: "#fff",
  borderRadius: "25px",
  textDecoration: "none",
};

const btnSecondary = {
  padding: "10px 20px",
  border: "2px solid #3b82f6",
  color: "#3b82f6",
  borderRadius: "25px",
  textDecoration: "none",
};