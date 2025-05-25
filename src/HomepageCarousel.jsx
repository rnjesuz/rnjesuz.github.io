import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Home from "./HomepageCarousel/sections/Home";
import Journey from "./HomepageCarousel/sections/Journey";
import Articles from "./HomepageCarousel/sections/Articles";
import Contacts from "./HomepageCarousel/sections/Contacts";

const sections = ["Home", "Journey", "Articles", "Contacts"];

const HomepageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', message: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMailtoClick = (e) => {
    e.preventDefault();
    const { name, message } = contactForm;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
    window.location.href = `mailto:ricardo.n.jesus+homepagecontact@outlook.com?subject=${subject}&body=${body}`;
  };

  const goTo = (index) => setActiveIndex(index);
  const next = () => setActiveIndex((prev) => (prev + 1) % sections.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderSection = (section) => {
    switch (section) {
      case "Home":
        return <Home />;
      case "Journey":
        return <Journey />;
      case "Articles":
        return <Articles />;
      case "Contacts":
        return (
          <Contacts
            contactForm={contactForm}
            handleFormChange={handleFormChange}
            handleMailtoClick={handleMailtoClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white text-black relative overflow-hidden">
      <div className="flex justify-center space-x-6 py-4 absolute top-0 w-full bg-white border-b z-10">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => goTo(index)}
            className={`text-sm font-medium hover:underline ${
              activeIndex === index ? "underline text-black" : "text-gray-500"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="w-full max-w-5xl h-full flex items-center justify-center px-4 pt-24 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[activeIndex]}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center justify-center text-center overflow-y-auto"
          >
            {renderSection(sections[activeIndex])}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomepageCarousel;
