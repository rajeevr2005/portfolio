import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaBootstrap,FaJava,FaPhp} from "react-icons/fa";

import {SiTailwindcss,SiMysql} from "react-icons/si";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 size={50} color="#E34F26" />,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt size={50} color="#1572B6" />,
    },
    {
        name: "JavaScript",
        icon: <FaJs size={50} color="#F7DF1E" />,
    },
    {
        name: "ReactJS",
        icon: <FaReact size={50} color="#61DAFB" />,
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap size={50} color="#7952B3" />,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={50} color="#06B6D4" />,
    },
    {
        name: "React Native",
        icon: <FaReact size={50} color="#61DAFB" />,
    },
    {
        name: "PHP",
        icon: <FaPhp size={50} color="#777BB4" />,
    },
    {
        name: "Java",
        icon: <FaJava size={50} color="#ED8B00" />,
    },
    {
        name: "MySQL",
        icon: <SiMysql size={50} color="#4479A1" />,
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full lg:px-4 flex justify-center py-4"
        >
            <div className="w-full card bg-base-100 shadow-xl py-10" data-aos="fade-up">
                
                <h2 className="text-3xl font-bold text-center mb-8">
                    Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <div className="card-body items-center text-center">

                                <div className="mb-2">
                                    {skill.icon}
                                </div>

                                <h3 className="font-semibold text-base">
                                    {skill.name}
                                </h3>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;