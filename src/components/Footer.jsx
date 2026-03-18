// Footer.jsx
import React from "react";

export default function Footer({ lang = "en", dark = false }) {
  const text = {
    ar: {
      company: "Kingdom for Programming",
      feature1: "أفضل الحلول البرمجية الحديثة",
      rights: "© 2026 جميع الحقوق محفوظة.",
    },
    en: {
      company: "Kingdom for Programming",
      feature1: "Best modern programming solutions",
      rights: "© 2026 All Rights Reserved.",
    },
  };

  const t = lang === "ar" ? text.ar : text.en;

  return (
    <footer
      style={{
        width: "100%",
        padding: "12px 20px",
        background: dark ? "#1f2937" : "#f5cbcb",
        color: dark ? "#f3f4f6" : "#111827",
        fontFamily: "sans-serif",
        fontSize: "0.85rem",
        borderTop: dark ? "1px solid #374151" : "1px solid #a7acb2",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "15px",
        textAlign: "center",
      }}
    >
      <span style={{ fontWeight: "600" }}>{t.company}</span>
      <span style={{ opacity: 0.7, fontSize: "0.75rem" }}>{t.rights}</span>
      <span style={{ opacity: 0.85 }}>{t.feature1}</span>
      
      
    </footer>
  );
}