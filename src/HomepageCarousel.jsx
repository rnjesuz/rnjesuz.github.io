import { useState } from "react";
// import { Button } from "./components/ui/button";
import Button from "./components/ui/button";
import {
  Linkedin,
  Github,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Medal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["Home", "Journey", "Articles", "Contacts"];

const educationData = [
  {
    school: "Instituto Superior Técnico",
    degrees: [
      {
        title: "Bachelor of Science",
        subtititle: "Information Systems and Computer Engineering",
        date: "2011 - 2015",
        description:
          "Leading design strategy for core products, managing a team of junior designers.",
        keywords: ["Leadership", "Strategy", "Mentorship"],
        icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      },
      {
        title: "Master of Science",
        subtititle: "Information Systems and Computer Engineering",
        date: "2015 - 2019",
        description:
          "Leading design strategy for core products, managing a team of junior designers.",
        keywords: ["Leadership", "Strategy", "Mentorship"],
        icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      },
    ],
  },
];

const accreditationData = [
  {
    accreditation: "",
    certifications: [
      {
        title: "Spring Boot 3: Learn Spring 6, Spring Core, Spring REST, Spring MVC, Spring Security, Thymeleaf, JPA, Hibernate, MySQL",
        issuer: "Udemy",
        date: "December 2024",
        keywords: ["Spring Boot 3", "Spring 6", "Spring Core", "Spring REST", "Spring MVC", "Spring Securit", "Thymeleaf", "JPA", "Hibernate", "MySQL", "Spring Boot Unit Testing"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Functional Program Design in Scala",
        issuer: "Coursera",
        date: "September 2024",
        keywords: ["Functional Programming", "Scala", "Software Development"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Functional Programming Principles in Scala",
        issuer: "Coursera",
        date: "November 2023",
        keywords: ["Recursion", "High-order Functions", "Scala", "Pattern Matching", "Functional Programming", "Software Development"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Software Architecture Security",
        issuer: "Udemy",
        date: "November 2023",
        keywords: ["Software Development Life Cycle (SDLC)", "Software Development Security", "Security", "Threat Modeling", "Software Architecture"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Architecture: The Hard Parts",
        issuer: "O'Reilly",
        date: "March 2023",
        keywords: ["Saga", "Software Architecture"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Spring and Spring Boot Fundamentals",
        issuer: "O'Reilly",
        date: "January 2023",
        keywords: ["Spring Boot", "Spring Framework", "Spring MVC"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Introduction to leadership skills",
        issuer: "O'Reilly",
        date: "November 2022",
        keywords: ["Priority Management", "Leadership", "Strategic Planning", "Team Leadership", "Team Management"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
      {
        title: "Clean Agile",
        issuer: "O'Reilly",
        date: "",
        keywords: ["Agile Methodologies", "Pair Programming", "Scrum", "Test-Driven Development"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },      {
        title: "Leadership Communication Skills for Managers",
        issuer: "O'Reilly",
        date: "",
        keywords: ["Empowerment", "Inspire", "Strategic Vision"],
        icon: <Medal className="w-5 h-5 text-green-500" />,
      },
    ]
  }
];

const careerData = [
  {
    company: "Wellhub",
    roles: [
      {
        title: "Senior Product Designer",
        date: "Aug 2024 - Present",
        description:
          "Leading design strategy for core products, managing a team of junior designers.",
        keywords: ["Leadership", "Strategy", "Mentorship"],
        icon: <Briefcase className="w-5 h-5 text-black" />,
      },
      {
        title: "Software Engineer",
        date: "Apr 2023 - Aug 2024",
        description:
          "Leading design strategy for core products, managing a team of junior designers.",
        keywords: ["Kotlin", "Go", "Spring Security", "Kubernetes", "Functional Programming", "Spring Framework", "Backend Development", "Frontend Development", "Spring MVC", "Kafka", "CI/CD"],
        icon: <Briefcase className="w-5 h-5 text-black" />,
      },
    ],
  },
  {
    company: "BJSS",
    roles: [
      {
        title: "Software Engineer",
        date: "Sep 2022 - Feb 2023",
        description:
          "Redesigned legacy systems, improving usability and accessibility.",
        keywords: ["Go", "Agile Methodologies", "Solution Architecture", "MySQL", "Waterfall Project  Management", "CI/CD"],
        icon: <Briefcase className="w-5 h-5 text-black" />,
      },
    ],
  },
  {
    company: "Premium Minds",
    roles: [
      {
        title: "Software Engineer",
        date: "Jun 2019 - Aug 2022",
        description:
          "Worked across mobile and web platforms, creating cohesive design systems.",
        keywords: ["AWS", "Maven", "Java", "PostgreSQL", "Docker", "Kafka", "CI/CD"],
        icon: <Briefcase className="w-5 h-5 text-black" />,
      },
      {
        title: "Agile Coach",
        date: "Sep 2020 - Aug 2021",
        description:
          "Worked across mobile and web platforms, creating cohesive design systems.",
        keywords: ["Agile Metjodologies"],
        icon: <Briefcase className="w-5 h-5 text-black" />,
      },
    ],
  },
];

const articles = [
  {
    title: "Topic Conventions",
    url: "https://medium.com/wellhub-tech-team/topic-conventions-07c66b953e94",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YC6z7vU-bh7KoCPibSVScA.png",
    description:
      "What's the best name for a topic? What should be included in an event? This is a guideline attempting to create some consistency.",
  },
  {
    title: "Improving Error Handling",
    url: "https://medium.com/wellhub-tech-team/improving-error-handling-errors-as-return-values-edd3eff791dc",
    image: "https://miro.medium.com/v2/resize:fit:3584/format:webp/1*z4hG9Q2D6rrjfc9MT_6tsw.png",
    description:
      "Explore an explicit, transparent, and exhaustive approach to error handling that improves reliability and maintainability without adding code maintenance.",
  },
];

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
            {sections[activeIndex] === "Home" && (
              <div className="space-y-6">
                <h1 className="text-4xl font-bold">Welcome to My Homepage</h1>
                <p className="text-base">
                  I'm a Software Engineer with a passion for humane design. I love creating clean,
                  efficient, and user-centric digital experiences.
                </p>
                <div className="flex justify-center gap-6">
                  <a href="https://github.com/rnjesuz" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/rnjesus" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://medium.com/@ricardo.n.jesus" target="_blank" rel="noopener noreferrer">
                    <span className="text-sm font-medium">Medium</span>
                  </a>
                </div>
              </div>
            )}

            {sections[activeIndex] === "Journey" && (
              <div className="w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left overflow-y-auto">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <div className="mt-12">
                    {educationData.map((school, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
                        <h3 className="text-lg font-semibold mb-2">{school.school}</h3>
                        {school.degrees.map((degree, i) => (
                          <div key={i} className="relative pl-8 pb-8">
                            <div className="absolute left-[-12px] top-0 bg-white z-10">{degree.icon}</div>
                            <h4 className="text-md font-semibold">{degree.title}</h4>
                            <h5 className="text-sm font-semibold">{degree.subtittle}</h5>
                            <p className="text-xs text-gray-400 italic mb-1">{degree.date}</p>
                            <p className="text-sm mb-2">{degree.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {degree.keywords.map((kw, idx) => (
                                <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{kw}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    {accreditationData.map((accreditation, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
                        <h3 className="text-lg font-semibold mb-2">{accreditation.accreditation}</h3>
                        {accreditation.certifications.map((certification, i) => (
                          <div key={i} className="relative pl-8 pb-8">
                            <div className="absolute left-[-12px] top-0 bg-white z-10">{certification.icon}</div>
                            <h4 className="text-md font-semibold">{certification.title}</h4>
                            <p className="text-sm text-gray-500">{certification.issuer}</p>
                            <p className="text-xs text-gray-400 italic mb-1">{certification.date}</p>
                            <div className="flex flex-wrap gap-2">
                              {certification.keywords.map((kw, idx) => (
                                <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{kw}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Career</h2>
                  <div className="relative pl-8 border-l border-gray-300">
                    {careerData.map((company, index) => (
                      <div key={index} className="mb-8">
                        <h3 className="text-lg font-semibold mb-2">{company.company}</h3>
                        {company.roles.map((role, i) => (
                          <div key={i} className="relative pl-8 pb-8">
                            <div className="absolute left-[-12px] top-0 bg-white z-10">{role.icon}</div>
                            <h4 className="text-md font-semibold">{role.title}</h4>
                            <p className="text-xs text-gray-400 italic mb-1">{role.date}</p>
                            <p className="text-sm mb-2">{role.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {role.keywords.map((kw, idx) => (
                                <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{kw}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {sections[activeIndex] === "Articles" && (
              <div className="w-full h-full p-8 grid place-items-center overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 text-left">
                  {articles.map((article, index) => (
                    <a
                      key={index}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-md mx-auto border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
                    >
                      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {sections[activeIndex] === "Contacts" && (
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Get In Touch</h2>
                <p>Location: Lisbon, Portugal</p>
                <p>
                  Email: <a href="mailto:ricardo.n.jesus+homepagecontact@outlook.com" className="underline">ricardo.n.jesus+homepagecontact@outlook.com</a>
                </p>
                <form onSubmit={handleMailtoClick} className="flex flex-col gap-2 mt-4">
                  <input className="border p-2 rounded" type="text" name="name" value={contactForm.name} onChange={handleFormChange} placeholder="Your Name" required />
                  <textarea className="border p-2 rounded" name="message" value={contactForm.message} onChange={handleFormChange} placeholder="Your Message" rows={4} required></textarea>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HomepageCarousel;
