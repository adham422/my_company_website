import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ServicesDetails = ({ lang = "ar", dark = true }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;
  if (!service) {
    return (
      <div style={{ textAlign: "center", padding: "60px" }}>
        <h2>Service not found</h2>
        <button
          onClick={() => navigate("/services")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    );
  }
  const isArabic = lang === "ar";
  const title = isArabic
    ? service.title_ar
    : service.title_en || service.title_ar;
  const shortDesc = isArabic
    ? service.description_ar
    : service.description_en || service.description_ar;
  const longDesc = isArabic
    ? service.details_ar
    : service.details_en || service.details_ar;
  const whatsappMsg = isArabic
    ? `مرحبا، أريد الاستفسار عن خدمة ${service.title_ar}`
    : `Hello, I want to ask about ${service.title_en}`;
  return (
    <div className={`service-details ${dark ? "dark" : "light"}`}>
      <div className="service-media">
        {service.video ? (
          <iframe
            width="100%"
            height="400"
            src={service.video}
            title="Service Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={service.image} alt={title} />
        )}
      </div>
      <h1 className="service-title">{title}</h1>
      <p className="service-short">{shortDesc}</p>
      <p className="service-description">{longDesc}</p>
      <a
        href={`https://wa.me/+201123105749?text=${encodeURIComponent(
          whatsappMsg
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="ri-whatsapp-line"></i>
      </a>

    </div>
  );
};
export default ServicesDetails;