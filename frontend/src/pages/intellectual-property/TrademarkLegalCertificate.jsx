import React, { useEffect, useState } from "react";
import ServiceForm from "../../components/ServiceForm";
import Carousel from "../../components/Carousel";
import ProcessFlow from "../../components/ProcessFlow";
import DocumentsRequired from "../../components/DocumentsRequired";
import ConsultModal from "../../components/ConsultModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TrademarkLegalCertificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clientList = [
    "Haja Bawa", "D-Tech Medical", "Kodhi Hot Chips", "Legs Go", "Salala Gold & Diamonds",
    "Bengaluru Talks", "Jr Souls", "Ofigen", "Tharavaatamma", "Owtlander", "Mummy Days",
    "Weavers Home", "Hippie Williams", "IR Concepts and Constructions", "Eduance International",
    "Gear Four", "Shaheen Scientific School", "Juvecure", "Easy West", "Pulse Spice Acromart",
    "Greenvibe Restaurant and Bakers", "Sri Saravana Cements", "Ec Find", "Hajar Natural Laterite Tiles",
    "Firecream Sizzlers", "Tanvo", "ABDebt Receivables", "Thamizh.com"
  ];

  const colorThemes = [
    { bg: "#f3e8ff", text: "#9333ea", border: "#e9d5ff" }, // Purple
    { bg: "#eff6ff", text: "#3b82f6", border: "#dbeafe" }, // Blue
    { bg: "#fef2f2", text: "#dc2626", border: "#fee2e2" }, // Red
    { bg: "#f0fdfa", text: "#0d9488", border: "#ccfbf1" }, // Teal
    { bg: "#f0fdf4", text: "#16a34a", border: "#dcfce7" }, // Green
    { bg: "#ecfeff", text: "#0891b2", border: "#cffafe" }, // Cyan
  ];

  const documents = [
    { title: "Trademark Registration Certificate", icon: "fa-certificate" },
    { title: "Power of Attorney", icon: "fa-file-signature" },
    { title: "Government Fee Payment Receipt", icon: "fa-receipt" },
    { title: "Application Number", icon: "fa-hashtag" },
    { title: "Identity Proof", icon: "fa-id-card" },
  ];

  const cards = [
    {
      title: "What is a Legal Certificate?",
      icon: "fa-file-contract",
      desc: "A Certified Copy (Legal Certificate) is an official document from the registrar that serves as primary evidence in legal proceedings for trademark infringement.",
    },
    {
      title: "Evidence in Court",
      icon: "fa-gavel",
      desc: "Courts require a Certified Copy of the trademark entry for any litigation. It proves your ownership and the status of the mark conclusively.",
    },
    {
      title: "Necessary for Amazon/Flipkart",
      icon: "fa-cart-shopping",
      desc: "Many e-commerce platforms and brand registries require a legal certificate to verify brand ownership and grant access to brand protection tools.",
    },
    {
      title: "International Use",
      icon: "fa-earth-americas",
      desc: "If you are applying for trademark registration abroad using your Indian mark as a basis, a legal certificate is often required as proof of domestic registration.",
    },
    {
      title: "Official Verification",
      icon: "fa-stamp",
      desc: "The certificate is stamped and signed by the registrar's office, making it a verified public document that is admissible in any legal forum.",
    },
    {
      title: "Fast-Track Retrieval",
      icon: "fa-bolt",
      desc: "We facilitate the process of obtaining these certified copies from the trademark registry efficiently, saving you from administrative delays.",
    },
  ];

  const faqs = [
    {
      id: 1,
      title: "Is it different from the registration certificate?",
      description:
        "Yes, the registration certificate is issued automatically. A Legal Certificate (Certified Copy) is applied for separately for legal purposes.",
      icon: <i className="fa-solid fa-circle-question"></i>,
    },
    {
      id: 2,
      title: "How long does it take to get?",
      description:
        "It usually takes 15-30 days to receive the certified copy from the Trademark Registry.",
      icon: <i className="fa-solid fa-clock"></i>,
    },
    {
      id: 3,
      title: "Can I use it for police complaints?",
      description:
        "Absolutely. A legal certificate is essential for filing police complaints against counterfeiters and for search and seizure operations.",
      icon: <i className="fa-solid fa-shield-halved"></i>,
    },
    {
      id: 4,
      title: "Is there a government fee?",
      description:
        "Yes, there is a prescribed government fee for obtaining certified copies from the trademark registry.",
      icon: <i className="fa-solid fa-money-bill-1"></i>,
    },
    {
      id: 5,
      title: "Can I apply for it anytime?",
      description:
        "Yes, as long as your trademark is registered or has a record in the registry, you can apply for a certified copy anytime.",
      icon: <i className="fa-solid fa-calendar-days"></i>,
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#1a2b1f]">
      {/* Hero Section */}
      <div
        className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/logo/Trade-Mark.jpg')",
        }}
      >
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
          {/* Left Content */}
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Trademark Legal Certificate
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
              Official proof of your trademark ownership
            </h2>
            <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
              Certified Copies of Mark | Primary Legal Evidence | Official
              Verification
            </p>

            <div className="mb-4 sm:mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
              >
                <i className="fa-solid fa-video"></i>
                Connect with us
              </button>
            </div>
          </div>

          {/* Right Content - Reusable Form Component */}
          <ServiceForm title="Trademark Legal Certificate" />
        </div>
      </div>

      {/* Carousel Content Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Need a Legal Certificate?
            </h2>
            <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 proprietorship-swiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                    <i
                      className={`fa-solid ${card.icon} text-4xl text-theme-black`}
                    ></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-5">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {card.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <DocumentsRequired documents={documents} />

      {/* Process Flow Section */}
      <ProcessFlow />

      {/* Our Clients Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-400 tracking-tight">
              Our <span className="text-gray-900 font-medium">Clients</span>
            </h2>
          </div>

          {/* Logo Scroll Container */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-seamless gap-8 items-center py-4">
                {/* First set of clients */}
                {clientList.map((client, index) => {
                  const theme = colorThemes[index % colorThemes.length];
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center gap-4 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50/50 transition-all duration-300 hover:scale-105 hover:border-theme-primary group whitespace-nowrap shadow-sm hover:shadow-md"
                    >
                      <img
                        src={`/images/clients/client-${(index % 8) + 1}.png`}
                        alt=""
                        className="w-8 h-8 object-contain transition-all duration-300"
                      />
                      <span
                        className="text-lg font-semibold transition-colors"
                        style={{ color: theme.text }}
                      >
                        {client}
                      </span>
                    </div>
                  );
                })}
                {/* Duplicate for seamless loop */}
                {clientList.map((client, index) => {
                  const theme = colorThemes[index % colorThemes.length];
                  return (
                    <div
                      key={`dup-${index}`}
                      className="flex-shrink-0 flex items-center gap-4 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50/50 transition-all duration-300 hover:scale-105 hover:border-theme-primary group whitespace-nowrap shadow-sm hover:shadow-md"
                    >
                      <img
                        src={`/images/clients/client-${(index % 8) + 1}.png`}
                        alt=""
                        className="w-8 h-8 object-contain transition-all duration-300"
                      />
                      <span
                        className="text-lg font-semibold transition-colors"
                        style={{ color: theme.text }}
                      >
                        {client}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-seamless {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-seamless {
            animation: scroll-seamless 80s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-scroll-seamless:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* FAQ Carousel Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. Explore our common queries about
              Trademark Legal Certificates.
            </p>
            <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
          </div>

          <Carousel items={faqs} autoplay={true} />
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      

      <ConsultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Trademark Legal Certificate Consultation"
      />
    </div>
  );
};

export default TrademarkLegalCertificate;
