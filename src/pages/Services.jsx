import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ser1 from "../images/Artboard 1.jpeg";
import ser2 from "../images/Artboard 2.jpeg";
import ser3 from "../images/Artboard 3.jpeg";
import ser4 from "../images/Artboard 4.jpeg";
import ser5 from "../images/Artboard 5.jpeg";
import ser6 from "../images/Artboard 6.jpeg";
import ser7 from "../images/Artboard 7.jpeg";
import ser8 from "../images/Artboard 8.jpeg";
import ser9 from "../images/Artboard 9.jpeg";
import ser10 from "../images/Artboard 10.jpeg";
import ser11 from "../images/Artboard 11.jpeg";
import { video } from "framer-motion/client";
const servicesData = [
  {
    title_ar: "إنشاء متجر إلكتروني ",
    title_en: "Professional E-commerce Store",
    description_ar: "تصميم وتطوير متجر إلكتروني.",
    description_en: "Designing and developing an e-commerce store.",
    
    details_ar: `نختصر عليك المشوار ونجهز لك متجرك في سلة من الألف للياء.
    
نضبط لك خيارات الشحن، بوابات الدفع، والسياسات القانونية بشكل احترافي.
    
نرتب واجهة المتجر بحيث تكون جاهزة للبيع من أول يوم بدون أي تعقيد.
    
نضمن لك تجربة مستخدم سلسة وسريعة على جميع الأجهزة.
    
هدفنا إنك تبدأ البيع فورًا بدون وجع دماغ.`,
    
    details_en: `We build your Salla store from A to Z.
    
We configure shipping options, payment gateways, and legal policies professionally.
    
We organize your store interface so you can start selling from day one without complications.
    
We ensure a smooth and fast user experience across all devices.
    
Our goal is to help you launch and start selling immediately with zero hassle.`,
    
    image: ser1,
    video: "https://www.youtube.com/embed/1hHzeRxnpa8",
    icon: "🛒",
  },
  
  {
    title_ar: "تصميم لوجو",
    title_en: "Logo Design",
    description_ar: "تصميم شعارات احترافية.",
    description_en: "Creating professional logos.",
    
    details_ar: `في سلة، التميز يبدأ من شعارك.
    
نصمم لك لوجو احترافي يعكس هوية البراند ويثبت في ذهن العميل.
    
نراعي استخدامه في الموقع والتطبيقات والسوشيال ميديا.
    
هدفنا إنك تظهر كبراند قوي وموثوق من أول نظرة.`,
    
    details_en: `Your brand identity starts with a strong logo.
    
We design a professional logo that reflects your brand and stays memorable.
    
Optimized for websites, apps, and social media platforms.
    
Our goal is to give your business a strong and trustworthy first impression.`,
    
    image: ser2,
    video: "https://www.youtube.com/embed/v-FZHW4zQuU",
    icon: "🎨",
  },
  
  {
    title_ar: "تصميم بنرات وصور",
    title_en: "Banners & Graphics Design",
    description_ar: "تصميم بنرات وصور.",
    description_en: "Designing banners and visuals.",
    
    details_ar: `نصمم لك بنرات متوافقة مع أبعاد منصة سلة.
    
بنخلي التصميم يعبر عن هويتك ويشد العميل.
    
تنسيق صور الأقسام بطريقة احترافية لتحسين تجربة التصفح.
    
نحول الزائر من متفرج إلى مشتري.`,
    
    details_en: `We design banners optimized for Salla platform dimensions.
    
Our designs reflect your brand identity and attract customers.
    
We organize category visuals to enhance browsing experience.
    
We help turn visitors into actual buyers.`,
    
    image: ser3,
    video: "https://www.youtube.com/embed/v-FZHW4zQuU",
    icon: "🖼️",
  },
  
  {
    title_ar: "تحسين محركات البحث (SEO)",
    title_en: "SEO",
    description_ar: "تحسين ظهور موقعك.",
    description_en: "Improve your ranking.",
    
    details_ar: `نضبط السيو الداخلي لمتجرك على سلة.
    
نكتب وصف منتجات بالكلمات المفتاحية الصح.
    
نحسن ظهورك في جوجل بدون إعلانات.
    
نساعدك توصل لعملاء جدد بشكل مجاني ومستمر.`,
    
    details_en: `We optimize your store’s internal SEO.
    
We write product descriptions using the right keywords.
    
Improve your Google visibility without paid ads.
    
Help you reach new customers organically and consistently.`,
    
    image: ser4,
    video: "https://www.youtube.com/embed/v-FZHW4zQuU",
    icon: "📈",
  },
  
  {
    title_ar: "برمجة ثيم خاص",
    title_en: "Custom Theme",
    description_ar: "برمجة ثيم مخصص.",
    description_en: "Develop a custom theme.",
    
    details_ar: `نعدل على CSS الخاص بثيمات سلة.
    
نغير الألوان والخطوط والأزرار حسب هويتك.
    
نخلي متجرك مختلف 100% عن أي متجر تاني.
    
نركز على الجمال وسهولة الاستخدام.`,
    
    details_en: `We customize your store using CSS.
    
We adjust colors, fonts, and buttons to match your brand.
    
Make your store completely unique.
    
Focus on both design quality and user experience.`,
    
    image: ser5,
    video: "https://www.youtube.com/embed/XtcB4cGW2kQ",
    icon: "💻",
  },
  
  {
    title_ar: "تعديلات HTML / CSS / JS",
    title_en: "Code Modifications",
    description_ar: "تعديلات على الموقع.",
    description_en: "Modify your website.",
    
    details_ar: `نبرمج ميزات مخصصة باستخدام JavaScript.
    
زي عداد الخصومات أو تنبيهات العروض.
    
نضيف تفاعل يخلي العميل يقعد أكتر في الموقع.
    
كل ده بهدف زيادة المبيعات.`,
    
    details_en: `We develop custom JavaScript features.
    
Such as discount counters and promotional alerts.
    
Add interactivity to keep users engaged longer.
    
All aimed at increasing your sales.`,
    
    image: ser6,
    video: "https://www.youtube.com/embed/eaDug7uG6Ik",
    icon: "⚙️",
  },
  
  {
    title_ar: "تصميم ملفات الأعمال",
    title_en: "Business Profile",
    description_ar: "تصميم بروفايل.",
    description_en: "Create business profile.",
    
    details_ar: `نصمم لك Company Profile احترافي PDF.
    
يعرض قصة البراند والخدمات بشكل مقنع.
    
مناسب للشركات والتعاقدات B2B.
    
يساعدك تكسب ثقة العملاء الكبار.`,
    
    details_en: `We design a professional company profile in PDF format.
    
Showcase your brand story and services clearly.
    
Perfect for B2B and partnerships.
    
Helps you build trust with big clients.`,
    
    image: ser7,
    video: "https://www.youtube.com/embed/v-FZHW4zQuU",
    icon: "📄",
  },
  
  {
    title_ar: "إدارة السوشيال ميديا",
    title_en: "Social Media",
    description_ar: "إدارة حساباتك.",
    description_en: "Manage your accounts.",
    
    details_ar: `نربط متجرك مع انستجرام وتيك توك.
    
ندير المحتوى بطريقة ذكية.
    
نحول التفاعل لمبيعات فعلية.
    
نخلي حساباتك شغالة لصالحك 24 ساعة.`,
    
    details_en: `We connect your store with Instagram and TikTok.
    
Manage your content strategically.
    
Convert engagement into real sales.
    
Keep your accounts working for you 24/7.`,
    
    image: ser8,
    video: "https://www.youtube.com/embed/v-FZHW4zQuU",
    icon: "📱",
  },
  
  {
    title_ar: "حجز دومين",
    title_en: "Domain",
    description_ar: "حجز دومين.",
    description_en: "Register domain.",
    
    details_ar: `نحجز لك دومين احترافي (.com أو .sa).
    
نربطه بمتجرك على سلة بدون مشاكل.
    
نخلي الرابط سهل وحلو للعميل.
    
ده بيزود ثقة البراند بشكل كبير.`,
    
    details_en: `We register a professional domain (.com or .sa).
    
Connect it smoothly to your Salla store.
    
Make your link simple and memorable.
    
Boost your brand credibility significantly.`,
    
    image: ser9,
    video: "https://www.youtube.com/embed/v-FZHW4zQuU",
    icon: "🌐",
  },
  {
    title_ar: "مشاريع طلابية",
    title_en: "Student Assignments",
    description_ar: "تنفيذ ومساعدة في المشاريع والواجبات.",
    description_en: "Helping with assignments and academic tasks.",
    
    details_ar: `بنساعدك في تنفيذ الواجبات والمشاريع الدراسية بشكل احترافي.
نشرح لك الفكرة قبل التنفيذ عشان تفهم مش تحفظ.
نلتزم بالمواعيد النهائية للتسليم بدون تأخير.
نغطي مجالات مختلفة زي البرمجة والتقارير والعروض.
هدفنا إنك تسلم شغلك بأعلى جودة وتفهمه كمان.`,
    
    details_en: `We help you complete assignments and academic tasks professionally.
We explain the concept before execution so you truly understand it.
We always meet deadlines without delays.
We cover multiple fields like programming, reports, and presentations.
Our goal is to help you submit high-quality work while actually learning.`,
    
    image: ser10,
    video: "https://www.youtube.com/embed/fsOz4JeHvl0",
    icon: "📚",
  },
  
  {
    title_ar: "مشاريع التخرج",
    title_en: "Graduation Projects",
    description_ar: "تنفيذ مشاريع التخرج باحتراف.",
    description_en: "Professional graduation project development.",
    
    details_ar: `بننفذ معاك مشروع التخرج من الفكرة لحد التسليم.
نساعدك في اختيار فكرة قوية ومناسبة لسوق العمل.
نبرمج ونصمم المشروع بشكل احترافي وقابل للتطوير.
نوفر شرح كامل + عرض تقديمي (Presentation) جاهز.
هدفنا إن مشروعك يطلع بشكل يبهّر الدكاترة ويخدمك بعد التخرج.`,
    
    details_en: `We help you build your graduation project from idea to final delivery.
We assist in choosing a strong idea relevant to the job market.
We develop and design the project professionally and scalable.
We provide full explanation plus a ready-to-use presentation.
Our goal is to make your project stand out and benefit you after graduation.`,
    
    image: ser11,
    video: "https://www.youtube.com/embed/alxSqW_05eM",
    icon: "🎓",
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
    <section className={`services-section ${dark ? "dark" : "light"}`}>
    <h2 style={{ marginBottom: "50px" }}>
    {lang === "ar" ? "خدماتنا البرمجية" : "Our Services"}
    </h2>
    
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
      <h3>
      {lang === "ar" ? service.title_ar : service.title_en}
      </h3>
      
      <p>
      {lang === "ar"
        ? service.description_ar
        : service.description_en}
        </p>
        
        <Link to={`/services/${index}`} state={{ service }}>
        {lang === "ar" ? "اكتشف الخدمة" : "Discover Service"}
        </Link>
        </div>
        </div>
      ))}
      </div>
      </section>
    );
  };
  
  export default Services;