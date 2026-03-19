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

  // Motion
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  const isMobile = window.innerWidth <= 768;

  return (
    <motion.section
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          maxWidth: "1200px",
          width: "100%",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <motion.div
          variants={fadeInLeft}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: lang === "ar" ? "flex-end" : "flex-start",
            textAlign: lang === "ar" ? "right" : "left",
            order: isMobile ? 2 : 1,
          }}
        >
          <motion.h1
            variants={fadeInUp}
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: dark ? "#fff" : "#111827",
            }}
          >
            {content[lang].heroTitle}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: "1.1rem",
              maxWidth: "600px",
              lineHeight: 1.6,
              color: dark ? "#e5e7eb" : "#374151",
            }}
          >
            {content[lang].heroDesc}
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "8px",
              color: "#3b82f6",
              fontWeight: 500,
            }}
          >
            {content[lang].features.map((feat, i) => (
              <li key={i}>✔ {feat}</li>
            ))}
          </motion.ul>

          {/* ✅ الأزرار بعد التعديل */}
          <motion.div
            variants={fadeInUp}
            style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="services" style={btnPrimary}>
                {content[lang].btnServices}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="contact" style={btnSecondary}>
                {content[lang].btnContact}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeInRight}
          style={{
            display: "flex",
            justifyContent: "center",
            order: isMobile ? 1 : 2,
          }}
        >
          <motion.div
            style={heroImage}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src="/2.jpeg"
              alt="Company"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Styles
const btnPrimary = {
  padding: "12px 24px",
  backgroundColor: "#3b82f6",
  color: "#fff",
  borderRadius: "50px",
  textDecoration: "none",
};

const btnSecondary = {
  padding: "12px 24px",
  border: "2px solid #3b82f6",
  color: "#3b82f6",
  borderRadius: "50px",
  textDecoration: "none",
};

const heroImage = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  border: "4px solid #3b82f6",
  overflow: "hidden",
};