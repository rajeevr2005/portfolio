import { BlueTick } from "../components/svgicon.jsx";

const Education = () => {
    return (
        <section className="w-full flex justify-center lg:py-10 lg:px-4 my-5" id="education">
            <div className="w-full max-w-6xl card bg-base-100 shadow-xl py-10 px-4" data-aos="fade-up">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Education
                </h2>

                <ul className="timeline timeline-vertical lg:timeline-horizontal flex justify-center items-center">

                    {/* B.Tech */}
                    <li>
                        <div className="timeline-start timeline-box">
                            <h3 className="font-bold text-lg">
                                Laxmi Institute of Technology, Sarigam
                            </h3>
                            <p className="text-sm opacity-70">
                                2022 - 2026
                            </p>
                            <p className="mt-2">
                                Bachelor of Engineering (Computer Science)
                            </p>
                            <p className="font-semibold text-primary">
                                CGPA: 8.37
                            </p>
                        </div>

                        <div className="timeline-middle">
                            <BlueTick />
                        </div>

                        <hr className="bg-primary" />
                    </li>

                    {/* 12th */}
                    <li>
                        <hr className="bg-primary" />

                        <div className="timeline-middle">
                            <BlueTick />
                        </div>

                        <div className="timeline-end timeline-box">
                            <h3 className="font-bold text-lg">
                                RPS Public School
                            </h3>
                            <p className="text-sm opacity-70">
                                2020-2022
                            </p>
                            <p className="mt-2">
                                Higher Secondary Education (Class XII)
                            </p>
                            <p className="font-semibold text-primary">
                                70%
                            </p>
                        </div>

                        <hr className="bg-primary" />
                    </li>

                    {/* 10th */}
                    <li>
                        <hr className="bg-primary" />

                        <div className="timeline-start timeline-box">
                            <h3 className="font-bold text-lg">
                                DAV Public School
                            </h3>
                            <p className="text-sm opacity-70">
                                2020
                            </p>
                            <p className="mt-2">
                                Secondary Education (Class X)
                            </p>
                            <p className="font-semibold text-primary">
                                86.4%
                            </p>
                        </div>

                        <div className="timeline-middle">
                            <BlueTick />
                        </div>

                        <hr className="bg-primary" />
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Education;