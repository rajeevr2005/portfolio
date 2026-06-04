import AboutImage from '../images/About_img.png';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const HeroSection = () => {
    return (
        <>
            <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10" id="home">

                <div className="flex-1" data-aos="fade-right">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-red-500">Rajeev Ranjan</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-semibold mb-6 flex items-center h-10">
                        <TypeAnimation
                            sequence={[
                                'Software Developer', 1000,
                                'Frontend Developer', 1000,
                                'React Developer', 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-accent"
                        />
                    </div>

                    <p className="text-lg leading-relaxed text-justify mb-8 text-base-content/80">
                        I am a passionate Software Developer with experience in building
                        responsive and user-friendly web applications. I enjoy working with
                        modern technologies such as React.js, JavaScript, PHP, MySQL, and REST APIs.
                        I am always eager to learn new technologies and create solutions that
                        deliver a great user experience.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="/Rajeev_Ranjan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-accent rounded-full shadow-lg hover:shadow-accent/50 transition-all hover:border hover:border-white text-white px-8">
                            Download Resume
                        </a>

                        <div className="flex gap-4 ml-2">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-3xl transition-colors hover:-translate-y-1">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/rajeevranjan7909" target="_blank" rel="noopener noreferrer" className="text-3xl transition-colors hover:-translate-y-1">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hover-3d" data-aos="fade-left">
                    <figure className="w-full lg:w-120 lg:h-120 rounded-2xl flex items-center">
                        <img src={AboutImage} alt="Profile Image" />
                    </figure>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

        </>
    )
}
export default HeroSection;