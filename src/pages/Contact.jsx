// Contact.jsx
import React from "react";
import { FaWhatsapp, FaYoutube, FaEnvelope, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ lang = "ar", dark = true }) {

  const text = {
    ar: {
      title: "تواصل معنا",
      desc: "اضغط على أي أيقونة للتواصل مباشرة أو اختر سؤال سريع للتواصل عبر واتساب",
      social: { whatsapp: "واتساب", youtube: "يوتيوب", email: "البريد الإلكتروني", telegram: "تيليجرام", linkedin: "لينكدإن" },
      suggestions: ["أريد معرفة أسعار الخدمات", "أحتاج دعم فني", "أريد التحدث مع مندوب", "أرسل لي التفاصيل"],
    },
    en: {
      title: "Contact Us",
      desc: "Click an icon to contact directly or choose a quick question to WhatsApp",
      social: { whatsapp: "WhatsApp", youtube: "YouTube", email: "Email", telegram: "Telegram", linkedin: "LinkedIn" },
      suggestions: ["I want to know service prices", "I need technical support", "I want to talk to a representative", "Send me the details"],
    },
  };

  const t = lang === "ar" ? text.ar : text.en;

  const whatsappNumber = "01123105749";
  const defaultMessage = "Hello, In KingDom For Programming, We will reply about your Question within 24 hours";

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg || defaultMessage)}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    { icon: FaWhatsapp, link: `https://wa.me/${whatsappNumber}`, color: "#25D366" },
    { icon: FaYoutube, link: "https://www.youtube.com/@adhamhashem5303", color: "#FF0000" },
    { icon: FaEnvelope, link: `mailto:hashemadham64@gmail.com`, color: "#0EA5E9" },
    // { icon: FaTelegram, link: "t.me/ADHAM_ShOoma", color: "#0088cc" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/adham-hashem-b39272239/", color: "#0A66C2" }
  ];

  return (
    <section
      className="contact-page"
      style={{
        background: dark ? "#030712" : "#f9f9f9",
        color: dark ? "#fff" : "#111",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px", margin: "auto", textAlign: "center" }}>
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="title" 
          style={{ fontSize: "3rem", marginBottom: "10px", fontWeight: "700", letterSpacing: "1px" }}
        >
          {t.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="desc" 
          style={{ fontSize: "1.1rem", lineHeight: "1.8", color: dark ? "#ccc" : "#555" }}
        >
          {t.desc}
        </motion.p>

        {/* Social Links */}
        <div
          className="social-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "25px",
            marginTop: "50px"
          }}
        >
          {socialLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.95 }}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "30px",
                  borderRadius: "20px",
                  background: dark ? "#111827" : "#fff",
                  color: dark ? "#fff" : "#111",
                  textDecoration: "none",
                  border: dark ? "1px solid #1f2937" : "1px solid #e2e8f0",
                  boxShadow: dark
                    ? "0 15px 30px rgba(0,0,0,0.5)"
                    : "0 10px 25px rgba(0,0,0,0.1)",
                  transition: "0.3s all ease"
                }}
              >
                <div
                  style={{
                    background: item.color,
                    padding: "16px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                    boxShadow: `0 0 20px ${item.color}`,
                  }}
                >
                  <Icon size={32} color="#fff" />
                </div>

                <span style={{ fontWeight: "700", fontSize: "1rem" }}>
                  {t.social[Object.keys(t.social)[idx]]}
                </span>
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
          <h3 style={{ marginBottom: "20px", fontWeight: "600" }}>
            {lang === "ar" ? "اختر سؤالاً سريعاً:" : "Quick Questions:"}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              justifyContent: "center",
            }}
          >
            {t.suggestions.map((s, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08, backgroundColor: "#4f46e5" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "14px 24px",
                  borderRadius: "18px",
                  cursor: "pointer",
                  background: "#6366f1",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  boxShadow: "0 0 15px rgba(99,102,241,0.5)",
                  transition: "all 0.3s ease"
                }}
                onClick={() => openWhatsApp(s)}
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