import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ lang, setLang, dark, setDark }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = {
    ar: ["الرئيسية", "خدماتنا", "المشاريع", "تواصل معنا"],
    en: ["Home", "Services", "Projects", "Contact"],
  };
  const paths = ["/", "/services", "/projects", "/contact"];

  // Theme colors for header (distinct from page background)
  const theme = {
    headerBg: dark ? "#1f2937" : "#4b4b4b39", // Dark = غامق أكثر من الباقي، Light = أفتح
    text: dark ? "#f9fafb" : "#111827",
    accent: "#3b82f6",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        color: theme.text,
        transition: "all 0.3s ease",
        backgroundColor: theme.headerBg,
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 50,
        boxShadow: dark
          ? "0 2px 10px rgba(0,0,0,0.5)"
          : "0 2px 10px rgba(59,130,246,0.1)",
      }}
    >
      {/* Desktop: Logo أول الهيدر */}
      {!isMobile && (
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {lang === "ar" ? "KingDoM" : "KingDoM"}
        </div>
      )}

      {/* Mobile: Hamburger */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            fontSize: "1.5rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: theme.text,
          }}
        >
          ☰
        </button>
      )}

      {/* Desktop: Nav في الوسط */}
      {!isMobile && (
        <nav
          style={{
            display: "flex",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {navItems[lang].map((item, i) => (
            <Link
              key={i}
              to={paths[i]}
              style={{
                color: theme.text,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}

      {/* Logo Mobile وسط */}
      {isMobile && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
            flex: 1,
          }}
        >
          {lang === "ar" ? "KingDom" : "KingDom"}
        </div>
      )}

      {/* Icons */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            backgroundColor: theme.accent,
            color: dark ? "#111827" : "#ffffff",
            fontWeight: 600,
          }}
        >
          {dark ? "🌙" : "☀️"}
        </button>
        <button
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: `1px solid ${theme.accent}`,
            backgroundColor: "transparent",
            color: theme.text,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {lang === "ar" ? "EN" : "AR"}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                opacity: 0.5,
                zIndex: 99,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "250px",
                height: "100vh",
                backgroundColor: theme.headerBg,
                display: "flex",
                flexDirection: "column",
                padding: "24px",
                gap: "16px",
                zIndex: 100,
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSidebarOpen(false)}
                style={{
                  alignSelf: "flex-end",
                  background: "transparent",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: theme.text,
                }}
              >
                ✖
              </button>
              {navItems[lang].map((item, i) => (
                <Link
                  key={i}
                  to={paths[i]}
                  onClick={() => setSidebarOpen(false)}
                  style={{ textDecoration: "none", color: theme.text, fontWeight: 500 }}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
