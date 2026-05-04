// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import image1 from "../images/project1.jfif";
import image2 from "../images/project2.jfif";
import image3 from "../images/project3.jfif";
import image4 from "../images/project4.jfif";
import image5 from "../images/project5.jfif";
import image6 from "../images/project6.jfif";
import image7 from "../images/project7.jfif";
import image8 from "../images/project8.jfif";
import image9 from "../images/project9.jfif";
import image10 from "../images/project10.jfif";
import image11 from "../images/project11.jfif";
const projectData = [
  {
    name: { en: "Portfolio Website", ar: "موقع البورتفوليو" },
    desc: { en: "A modern personal portfolio to showcase skills and projects.", ar: "موقع شخصي حديث لعرض مهاراتي ومشاريعي بشكل احترافي." },
    img: image1,
    link: "https://adham422.github.io/My_Protofile/",
  },
  {
    name: { en: "Admin Dashboard", ar: "داش بورد" },
    desc: { en: "Interactive dashboard to manage data, analytics, and system performance.", ar: "لوحة تحكم تفاعلية لإدارة البيانات وتحليل الأداء بسهولة." },
    img: image2,
    link: "https://adham422.github.io/admin_dashboard/",
  },
  {
    name: { en: "Dice Challenge", ar: "تحدي النرد" },
    desc: { en: "Fun dice game where players race to reach 100 points first.", ar: "لعبة نرد ممتعة يتنافس فيها اللاعبون للوصول إلى 100 نقطة أولاً." },
    img: image3,
    link: "https://adham422.github.io/My_Protofile/javascript%20game/task-game.html",
  },
  {
    name: { en: "CRUD System", ar: "سيستم إدارة محل" },
    desc: { en: "Full CRUD system to manage products, data, and operations efficiently.", ar: "نظام متكامل لإدارة المنتجات والبيانات (إضافة، تعديل، حذف)." },
    img: image4,
    link: "https://adham422.github.io/product-system/",
  },
  {
    name: { en: "Movies Website", ar: "موقع أفلام" },
    desc: { en: "Browse and explore movies with a clean and responsive design.", ar: "تصفح الأفلام بسهولة من خلال واجهة جذابة وسريعة." },
    img: image5,
    link: "https://adham422.github.io/movies/",
  },
  {
    name: { en: "Task Management System", ar:"إدارة المهام" },
    desc: { en: "Organize and track your daily tasks with a simple system.", ar: "نظام بسيط لتنظيم ومتابعة المهام اليومية." },
    img: image6,
    link: "#",
  },
  {
    name: { en: "Fitness Tracker", ar: "تطبيق تتبع اللياقة" },
    desc: { en: "Track workouts, progress, and fitness goals بسهولة.", ar: "تتبع التمارين والتقدم لتحقيق أهداف اللياقة." },
    img: image7,
    link: "https://www.youtube.com/watch?v=v-FZHW4zQuU&t=2s",
  },
  {
    name: { en: "Restaurant Menu", ar: "قائمة مطعم" },
    desc: { en: "Digital restaurant menu with clean UI and smooth experience.", ar: "قائمة مطعم رقمية بواجهة سهلة وجذابة." },
    img: image8,
    link: "https://adham422.github.io/resturant_menu/",
  },
  {
    name: { en: "YouTube Channel", ar: "قناة يوتيوب" },
    desc: { en: "Educational programming content and tutorials for developers.", ar: "قناة تقدم محتوى تعليمي في البرمجة والمشاريع العملية." },
    img: image9,
    link: "https://www.youtube.com/@adhamhashem5303",
  },
  {
    name: { en: "Drag & Drop System", ar: "نظام السحب والإفلات" },
    desc: { en: "Interactive drag and drop interface for better user experience.", ar: "نظام تفاعلي للسحب والإفلات لتحسين تجربة المستخدم." },
    img: image10,
    link: "https://adham422.github.io/DragandDrop/",
  },
  {
    name: { en: "Organic Store", ar: "متجر منتجات طبيعية" },
    desc: { en: "E-commerce website for selling organic and healthy products.", ar: "متجر إلكتروني لبيع المنتجات الطبيعية والصحية." },
    img: image11,
    link: "https://adham422.github.io/Organic_Store/",
  },
  {
    name: { en: "YouTube Channel Courses", ar: "دورات قناة اليوتيوب" },
    desc: { en: "Educational programming content and tutorials for developers.", ar: "قناة تقدم محتوى تعليمي في البرمجة والمشاريع العملية." },
    img: image9,
    link: "https://youtu.be/fsOz4JeHvl0?si=0kBy82XTsJDkQTcP",
  }
];
export default function Projects({ lang = "en", dark = false }) {
  return (
    <section
      className={`projects-section ${dark ? "dark" : "light"}`}
      style={{ padding: "50px 20px", background: dark ? "#1f2937" : "#f9fafb" }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: dark ? "#f9fafb" : "#111827",
          }}
        >
          {lang === "ar" ? "مشاريعنا" : "Our Projects"}
        </h2>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {projectData.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                boxShadow: dark
                  ? "0 5px 20px rgba(0,0,0,0.5)"
                  : "0 5px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={project.img}
                alt={project.name[lang]}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>{project.name[lang]}</h3>
                <p style={{ marginBottom: "20px", fontSize: "0.95rem", lineHeight: "1.5" }}>{project.desc[lang]}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    background: "#6366f1",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#4f46e5")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#6366f1")}
                >
                  {lang === "ar" ? "عرض المشروع" : "View Project"}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}