import React, { useEffect, useRef } from "react";

const servicesData = [
  {
    title_ar: "مشاريع فريلانسر",
    title_en: "Freelancer Projects",
    description_ar: "تنفيذ مشاريع برمجية للشركات والأفراد بأعلى جودة.",
    description_en: "Executing high-quality programming projects for companies and individuals.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    link: "https://youtu.be/v-FZHW4zQuU?si=klcEEwPYpo3e_BH6",
    icon: "🛠️",
  },
  {
    title_ar: "تطوير تطبيقات موبايل",
    title_en: "Mobile App Development",
    description_ar: "إنشاء تطبيقات Android و iOS بجودة عالية وسرعة تنفيذ.",
    description_en: "Building Android and iOS apps with high quality and fast delivery.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    link: "https://youtu.be/alxSqW_05eM?si=KucvMWJ3KRB9Rtlw",
    icon: "📱",
  },
   {
    title_ar: "تطوير مواقع ويب",
    title_en: "Web Development",
    description_ar: "تصميم وبرمجة مواقع متجاوبة وحديثة باستخدام أحدث التقنيات.",
    description_en: "Designing and developing responsive modern websites using latest technologies.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "https://youtu.be/v-FZHW4zQuU?si=LAPk32Wr21KKtoEM",
    icon: "🌐",
  },
  {
    title_ar: "تصميم واجهات UI/UX",
    title_en: "UI/UX Design",
    description_ar: "تصميم واجهات مستخدم جذابة وتجربة مستخدم سلسة.",
    description_en: "Designing attractive user interfaces and smooth user experiences.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    link: "https://www.linkedin.com/",
    icon: "🎨",
  },
  {
    title_ar: "دروس برمجة أونلاين",
    title_en: "Online Programming Courses",
    description_ar: "تعلم البرمجة خطوة بخطوة مع شروحات عملية لكل لغة وأساسيات.",
    description_en: "Learn programming step by step with practical tutorials for all languages and basics.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    link: "https://youtu.be/b4nyCZ-MNe0?si=rucbCo6dJZNnGn0s",
    icon: "💻",
  },
  {
    title_ar: "قناة يوتيوب تعليمية",
    title_en: "Educational YouTube Channel",
    description_ar: "فيديوهات مشاريع برمجية وتاسكات للطلاب والمطورين.",
    description_en: "Videos of programming projects and tasks for students and developers.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    link: "https://www.youtube.com/@adhamhashem5303",
    icon: "🎥",
  },
];

const Services = ({ lang = "ar", dark = true }) => {
  const cardsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <section
      className={`services-section ${dark ? "dark" : "light"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <h2>{lang === "ar" ? "خدماتنا البرمجية" : "Our Programming Services"}</h2>
      <p>
        {lang === "ar"
          ? "اكتشف مجموعة خدماتنا المتنوعة لتطوير مهاراتك وتنفيذ مشاريع برمجية عالية الجودة."
          : "Explore our diverse services to develop your skills and execute high-quality programming projects."}
      </p>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="service-card"
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={lang === "ar" ? service.title_ar : service.title_en}
              />
              <span className="service-icon">{service.icon}</span>
            </div>
            <div className="service-content">
              <h3>{lang === "ar" ? service.title_ar : service.title_en}</h3>
              <p>
                {lang === "ar" ? service.description_ar : service.description_en}
              </p>
              <a href={service.link}>
                {lang === "ar" ? "اكتشف الخدمة" : "Discover Service"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;