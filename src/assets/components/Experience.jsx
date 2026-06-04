import { Tick } from "../components/svgicon.jsx"

const Experience = () => {

    return (
        <>
            <section className="w-full flex justify-center lg:py-10 " id="experience">
                <div className="w-full max-w-6xl card bg-base-100 shadow-xl py-10 px-4" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Experience
                    </h2>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle ">
                                <Tick />
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-sans  ">July 2025</time>
                                <div className="font-bold ">Enjay IT Solution</div>
                                <p className="text-justify pe-2 lg:pe-0 lg:ps-3">Worked as a Web Developer, actively involved in designing and developing robust web applications. My role included crafting responsive, user-friendly front-end interfaces using HTML, CSS, and JavaScript, while simultaneously building and managing secure back-end functionality and databases using PHP and MySQL.</p>
                            </div>
                            <hr className="bg-accent" />
                        </li>
                        <li>
                            <hr className="bg-accent" />
                            <div className="timeline-middle">
                                <Tick />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-sans">Jan 2026 - May 2026</time>
                                <div className=" font-bold">IT IDOL Technologies</div>
                                <p className="text-justify pe-2 lg:pe-3">Specialized in front-end development with a strong focus on React.js. I effectively leveraged HTML, CSS, JavaScript, and Tailwind CSS to create highly interactive, modern, and responsive user interfaces, while implementing robust state management architectures using Redux.</p>

                            </div>

                        </li>

                    </ul>
                </div>
            </section>
        </>

    )
}

export default Experience;