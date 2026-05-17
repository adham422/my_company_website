import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgcode from "../images/code.jpeg";

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

      {/* صورة ثابتة */}
      <div
        className="service-media"
        style={{
          width: "100%",
          height: 1200 ,
          objectFit: "cover",
          overflow: "hidden",
        }}
      >
        <img
          src={imgcode}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <h1 className="service-title">{title}</h1>
      <p className="service-short">{shortDesc}</p>
      <p className="service-description">{longDesc}</p>

      <a
        href={`https://wa.me/+201027027724?text=${encodeURIComponent(
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