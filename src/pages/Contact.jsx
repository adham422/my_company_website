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
  const defaultMessage = "Hello , In KingDom For Programming, We will reply about your Question through 24 hours";

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg || defaultMessage)}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    { icon: FaWhatsapp, link: `https://wa.me/${whatsappNumber}`, color: "#25D366" },
    { icon: FaYoutube, link: "https://www.youtube.com/@adhamhashem5303", color: "#FF0000" },
    { icon: FaEnvelope, link: `mailto:hashemadham64@gmail.com`, color: "#0EA5E9" },
    { icon: FaTelegram, link: "t.me/ADHAM_ShOoma", color: "#0088cc" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/adham-hashem-b39272239/", color: "#0A66C2" }
  ];

  return (
    <section
      className="contact-page"
      style={{
        background: dark ? "#030712" : "#ffffff",
        color: dark ? "#fff" : "#111",
        minHeight: "100vh",
        padding: "60px 20px"
      }}
    >
      <div className="container" style={{ maxWidth: "1100px", margin: "auto", textAlign: "center" }}>
        
        <h1 className="title" style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          {t.title}
        </h1>

        <p className="desc" style={{ opacity: 0.7 }}>
          {t.desc}
        </p>

        {/* Social Links */}
        <div
          className="social-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >
          {socialLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.1, rotate: 1 }}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "25px",
                  borderRadius: "16px",
                  background: dark ? "#111827" : "#f9fafb",
                  color: dark ? "#fff" : "#111",
                  textDecoration: "none",
                  border: "1px solid #1f2937",
                  transition: "0.3s",
                  boxShadow: dark
                    ? "0 0 20px rgba(0,0,0,0.5)"
                    : "0 5px 15px rgba(0,0,0,0.1)"
                }}
              >
                <div
                  style={{
                    background: item.color,
                    padding: "14px",
                    borderRadius: "50%",
                    marginBottom: "12px",
                    boxShadow:
                      item.color === "#FF0000"
                        ? "0 0 25px red"
                        : "0 0 10px rgba(0,0,0,0.3)"
                  }}
                >
                  <Icon size={30} color="#fff" />
                </div>

                <span style={{ fontWeight: "bold" }}>
                  {t.social[Object.keys(t.social)[idx]]}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Quick Questions */}
        <div style={{ marginTop: "60px" }}>
          <h3>
            {lang === "ar" ? "اختر سؤالاً سريعاً:" : "Quick Questions:"}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "20px"
            }}
          >
            {t.suggestions.map((s, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background: "#6366f1",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0 0 10px rgba(99,102,241,0.5)"
                }}
                onClick={() => openWhatsApp(s)}
              >
                {s}
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}