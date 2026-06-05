import AboutImage from "../images/AboutImage.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home"
      className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-5 lg:py-15 gap-10"
    >
      {/* Left Content */}
      <div
        className="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-right">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Hi, I'm <br />
          <span className="text-red-500">Rajeev Ranjan</span>
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 min-h-12.5">
          <TypeAnimation
            sequence={[
              "Software Developer",
              1500,
              "Frontend Developer",
              1500,
              "React Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent"
          />
        </div>

        <p className="text-base md:text-lg text-justify leading-relaxed text-base-content/80 max-w-2xl mx-auto lg:mx-0 mb-8">
          I am a passionate Software Developer with experience in building
          responsive and user-friendly web applications. I enjoy working with
          modern technologies such as React.js, JavaScript, PHP, MySQL, and REST
          APIs. I am always eager to learn new technologies and create solutions
          that deliver a great user experience.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <a
            href="/Rajeev_Ranjan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent rounded-full text-white px-6 shadow-lg hover:scale-105 transition-all"
          >
            Download Resume
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent transition-all hover:-translate-y-1"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajeevranjan7909"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent transition-all hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-left"
      >
        <img
          src={AboutImage}
          alt="Developer Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;