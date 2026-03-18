import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// الكمبوننتس
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function AnimatedRoutes({ lang, dark }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home lang={lang} dark={dark} /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services lang={lang} dark={dark} /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects lang={lang} dark={dark} /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact lang={lang} dark={dark} /></PageWrapper>} />
      </Routes>
      <Footer lang={lang} dark={dark} />
    </AnimatePresence>
  );
}

export function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ar");
  const [dark, setDark] = useState(true);

  // تنسيق الألوان الموحد لكل الوضعين
  const colors = {
    dark: {
      bg: "#111827",
      text: "#f9fafb",
      accent: "#3b82f6",
      headerBg: "#1f2937",
      btnText: "#ffffff",
      btnBg: "#3b82f6",
      btnBorder: "#3b82f6",
    },
    light: {
      bg: "#f9fafb",
      text: "#111827",
      accent: "#3b82f6",
      headerBg: "#ffffff",
      btnText: "#ffffff",
      btnBg: "#3b82f6",
      btnBorder: "#3b82f6",
    },
  };

  const theme = dark ? colors.dark : colors.light;

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Router>
        <Header lang={lang} setLang={setLang} dark={dark} setDark={setDark} theme={theme} />
        <AnimatedRoutes lang={lang} dark={dark} theme={theme} />
      </Router>
    </div>
  );
}