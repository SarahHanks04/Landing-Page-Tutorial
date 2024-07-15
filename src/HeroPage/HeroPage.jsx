import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeroPage = () => {
  const slides = [
    {
      title: "We are a",
      subtitle: "Tech Talent Incubator",
      description:
        "We nurture, equip & build Africa's rising tech talents through immersive training programs designed to meet the innovations of the future.",
      button: "Learn More",
      video: "https://www.youtube.com/embed/FSTzqzwYfF0?si=IGQPlTvJqLIMRrc4",
    },
    {
      title: "Building Sustainable",
      subtitle: "Business Leveraging Technology",
      description:
        "We incubate, accelerate, and provide funding for mission-driven early-stage African tech startups.",
      button: "Build The Next Big Thing",
      src: "https://www.thebulb.africa/static/media/hero1.31aaaa093328a58086e8.jpg",
    },
    {
      title: "Bridging The Talent Gap In Africa",
      subtitle: "",
      description:
        "We educate and connect tech talents from Africa to job opportunities in Africa and across the globe.",
      button: "Hire Our Talents",
      video: "https://www.youtube.com/embed/LkSKJ3EXIus?si=fuoyGGTe3q5hM1lK",
    },
    {
      title: "Building Scalable Products With Top Tech Talents",
      subtitle: "",
      description:
        "We transform your fascinating ideas into leading-edge web and mobile applications. Design, build, and launch digital solutions.",
      button: "Let Build With You",
      src: "https://www.thebulb.africa/static/media/hero2.5de043f6b411b98fcf84.jpg",
    },
    {
      title: "Empowering Women In Tech",
      subtitle: "",
      description:
        "We run programs that inspire and boost female participation in tech.",
      button: "Learn More",
      video: "https://www.youtube.com/embed/22jRoSCSFhM?si=6fs54hpu9Lffu9Nj",
    },
    {
      title: "Building The World's Largest Community For African Tech Talents",
      subtitle: "",
      description:
        "We provide communities and co-working spaces for tech enthusiasts at all levels to inspire, build and collaborate.",
      button: "Come Hangout With Us",
      src: "https://www.thebulb.africa/static/media/hero3.b8dd425e22f6539dcd86.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="bg-[#f7f8fa] px-6 pb-4">
      <article className="relative overflow-hidden pt-0">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-full flex flex-col lg:flex-row justify-between gap-8 p-5  lg:p-10 md:p-4"
            >
              <div className="lg:w-1/2 pt-16">
                <p className="font-medium text-[#13162D] text-3xl py-4">
                  {slide.title}
                </p>

                <h1 className="text-[#13162D] font-medium text-4xl pb-6">
                  {slide.subtitle}
                </h1>

                <p className="text-xl leading-normal text-gray-500">
                  {slide.description}
                </p>

                <button className="bg-[#FDBF17] text-lg text-gray-700 p-2 md:w-40 lg:w-60 my-10 rounded-3xl">
                  {slide.button}
                </button>
              </div>

              <div className="img py-4 pb-16 lg:w-[50%]">
                {slide.video ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={slide.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img src={slide.src} width="100%" height="150px" alt="" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FOR CHEVRON LEFT */}
        <button
          className="absolute top-3/4 left-5 mt-14 transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="lg"
            className="text-gray-700 p-3 w-5 h-5 rounded-full border-2 border-black"
          />
        </button>

        {/* FOR CHEVRON RIGHT */}
        <button
          className="absolute top-3/4 right-5 mt-14 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            className="text-gray-700 p-3 w-5 h-5 rounded-full border-2 border-black"
          />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#FDBF17]" : "bg-gray-400"}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default HeroPage;
