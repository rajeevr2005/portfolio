const projects = [
    {
        title: "Inventory & Ticketing Management System",
        description:
            "Developed responsive frontend interfaces using ReactJS and Tailwind CSS for inventory tracking and support ticket management. Integrated frontend with backend APIs and built reusable UI components.",
        tech: ["ReactJS", "Tailwind CSS", "REST API"],
    },
    {
        title: "Global Explorer Dashboard",
        description:
            "Built an interactive dashboard using ReactJS to fetch and display real-time country data from REST APIs. Implemented search, filtering, and responsive card-based UI.",
        tech: ["ReactJS", "REST API", "JavaScript"],
    },
    {
        title: "Job Portal Dashboard",
        description:
            "Developed a responsive job portal with login/logout functionality, state management using Context API, and dynamic job listings fetched from APIs.",
        tech: ["ReactJS", "Context API", "React Router"],
    },
    {
        title: "Product Management System",
        description:
            "Implemented CRUD operations for product management with responsive tables, toast notifications, and optimized user interactions.",
        tech: ["ReactJS", "CRUD", "Bootstrap"],
    },
    {
        title: "PHP CRUD Application",
        description:
            "Developed a web application using PHP and MySQL to perform Create, Read, Update, and Delete operations with proper validation and database integration.",
        tech: ["PHP", "MySQL", "Bootstrap"],
    },
];

const Project = () => {
    return (
        <div className="w-full px-4 flex justify-center py-10" id="projects">
            <div className="w-full card bg-base-100 shadow-xl py-10" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6 px-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="card bg-base-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20 relative overflow-hidden"
                        >
                            <div className="card-body z-10">
                                <h3 className="card-title text-lg">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-base-content/80">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="badge badge-primary badge-outline"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;