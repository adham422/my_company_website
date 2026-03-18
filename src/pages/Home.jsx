// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

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

  // Motion Variants
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  // Responsive Styles
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: "1200px",
    width: "100%",
    gap: "48px",
    alignItems: "center",
  };
  const mobileGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "32px",
    alignItems: "center",
  };
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
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div style={isMobile ? mobileGridStyle : gridStyle}>
        {/* Left Column: Content */}
        <motion.div
          variants={fadeInLeft}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "center",
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
              color: dark ? "#ffffff" : "#111827",
            }}
          >
            {content[lang].heroTitle}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: "1.125rem",
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

          {/* Buttons with hover animation */}
          <motion.div
            variants={fadeInUp}
            style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}
          >
            <motion.a
              href="/services"
              style={btnPrimary(dark)}
              whileHover={{
                scale: 1.1,
                backgroundColor: dark ? "#2563eb" : "#1d4ed8",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {content[lang].btnServices}
            </motion.a>

            <motion.a
              href="/contact"
              style={btnSecondary(dark)}
              whileHover={{
                scale: 1.1,
                backgroundColor: dark ? "#1f2937" : "#3b82f6",
                color: dark ? "#3b82f6" : "#ffffff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {content[lang].btnContact}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
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
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0 0 40px rgba(59,130,246,0.6)",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.img
              src="/2.jpeg"
              alt="Company"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Button Styles
const btnPrimary = (dark) => ({
  padding: "12px 24px",
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  fontWeight: 600,
  borderRadius: "50px",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

const btnSecondary = (dark) => ({
  padding: "12px 24px",
  backgroundColor: "transparent",
  color: "#3b82f6",
  fontWeight: 600,
  borderRadius: "50px",
  border: `2px solid #3b82f6`,
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

// Hero Image Styles
const heroImage = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  border: "4px solid #3b82f6",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};