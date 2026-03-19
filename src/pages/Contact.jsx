// Contact.jsx
import React from "react";
import { FaWhatsapp, FaYoutube, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ lang = "ar", dark = true }) {

  const text = {
    ar: {
      title: "تواصل معنا",
      desc: "اضغط على أي أيقونة للتواصل مباشرة أو اختر سؤال سريع للتواصل عبر واتساب",
      suggestions: ["أريد معرفة أسعار الخدمات", "أحتاج دعم فني", "أريد التحدث مع مندوب", "أرسل لي التفاصيل"],
    },
    en: {
      title: "Contact Us",
      desc: "Click an icon to contact directly or choose a quick question to WhatsApp",
      suggestions: ["I want to know service prices", "I need technical support", "I want to talk to a representative", "Send me the details"],
    },
  };

  const t = lang === "ar" ? text.ar : text.en;

  const whatsappNumber = "+201123105749";
  const defaultMessage = "Hello, In KingDom For Programming, We will reply within 24 hours";

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg || defaultMessage)}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    { icon: FaWhatsapp, link: `https://wa.me/${whatsappNumber}`, color: "#25D366" },
    { icon: FaYoutube, link: "https://www.youtube.com/@adhamhashem5303", color: "#FF0000" },
    { icon: FaEnvelope, link: `mailto:hashemadham64@gmail.com`, color: "#0EA5E9" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/adham-hashem-b39272239/", color: "#0A66C2" }
  ];

  return (
    <section
      style={{
        background: dark ? "#030712" : "#f9f9f9",
        color: dark ? "#fff" : "#111",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto", textAlign: "center" }}>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ fontSize: "3rem", marginBottom: "10px", fontWeight: "700" }}
        >
          {t.title}
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ fontSize: "1.1rem", lineHeight: "1.8", color: dark ? "#ccc" : "#555" }}
        >
          {t.desc}
        </motion.p>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "35px",
            marginTop: "60px"
          }}
        >
          {socialLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 35px ${item.color}`
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "10px",
                  border: `3px solid ${item.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: dark ? "#111827" : "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                  padding: "5px"
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    boxShadow: [
                      `0 0 10px ${item.color}`,
                      `0 0 20px ${item.color}`,
                      `0 0 10px ${item.color}`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    background: item.color,
                    padding: "18px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Icon size={28} color="#fff" />
                </motion.div>
              </motion.a>
            );
          })}
        </div>

        {/* Quick Questions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ marginTop: "70px" }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            {lang === "ar" ? "اختر سؤالاً سريعاً:" : "Quick Questions:"}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {t.suggestions.map((s, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, backgroundColor: "#4f46e5" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openWhatsApp(s)}
                style={{
                  padding: "14px 22px",
                  borderRadius: "20px",
                  background: "#6366f1",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  boxShadow: "0 0 15px rgba(99,102,241,0.5)"
                }}
              >
                {s}
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}