import React from "react";
import { FaWhatsapp, FaYoutube, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ lang = "ar", dark = true }) {
  const text = {
    ar: {
      title: "تواصل معنا",
      desc: "اضغط على أي أيقونة للتواصل مباشرة أو اختر سؤال سريع للتواصل عبر واتساب",
      social: { whatsapp: "واتساب", youtube: "يوتيوب", email: "البريد الإلكتروني", linkedin: "لينكدإن" },
      suggestions: ["أريد معرفة أسعار الخدمات", "أحتاج دعم فني", "أريد التحدث مع مندوب", "أرسل لي التفاصيل"],
    },
    en: {
      title: "Contact Us",
      desc: "Click an icon to contact directly or choose a quick question to WhatsApp",
      social: { whatsapp: "WhatsApp", youtube: "YouTube", email: "Email", linkedin: "LinkedIn" },
      suggestions: ["I want to know service prices", "I need technical support", "I want to talk to a representative", "Send me the details"],
    },
  };

  const t = lang === "ar" ? text.ar : text.en;
  const whatsappNumber = "01123105749";
  const defaultMessage = "Hello, In KingDom For Programming, We will reply to your question within 24 hours";

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg || defaultMessage)}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    { icon: FaWhatsapp, link: `https://wa.me/${whatsappNumber}`, color: "#25D366" },
    { icon: FaYoutube, link: "https://www.youtube.com/@adhamhashem5303", color: "#FF0000" },
    { icon: FaEnvelope, link: `mailto:hashemadham64@gmail.com`, color: "#0EA5E9" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/adham-hashem-b39272239/", color: "#0A66C2" },
  ];

  return (
    <section
      style={{
        background: dark ? "#030712" : "#ffffff",
        color: dark ? "#fff" : "#111",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>{t.title}</h1>
        <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>{t.desc}</p>

        {/* Social Icons Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          {socialLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.1, rotate: 5 }}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "130px",       // الدائرة الخارجية كبيرة زي ما كانت
                  height: "130px",
                  borderRadius: "50%",
                  background: dark ? "#111827" : "#f9fafb",
                  textDecoration: "none",
                  boxShadow: dark
                    ? "0 0 20px rgba(0,0,0,0.5)"
                    : "0 5px 15px rgba(0,0,0,0.1)",
                  border: `2px solid ${item.color}`,
                  transition: "0.3s",
                }}
              >
                {/* الدائرة الداخلية للأيقونة */}
                <div
                  style={{
                    background: item.color,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                  }}
                >
                  <Icon size={28} color="#fff" />
                </div>
                <span style={{ fontWeight: "bold", color: dark ? "#fff" : "#111" }}>
                  {t.social[Object.keys(t.social)[idx]]}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Quick Questions */}
        <div style={{ marginTop: "60px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openWhatsApp(s)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background: "#6366f1",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0 0 10px rgba(99,102,241,0.5)",
                  transition: "0.3s",
                }}
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