import { LuHouse, LuBriefcase, LuGraduationCap, LuFolderKanban, LuPhone } from "react-icons/lu";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Sunicon, Moonicon } from "./svgicon";

const ListItem = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <li>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-90}
                >
                    <LuHouse size={20} color="#3B82F6" />
                    Home
                </Link>
            </li>

            <li>
                <Link
                    to="experience"
                    smooth={true}
                    duration={1500}
                    offset={-90}
                >
                    <LuBriefcase size={20} color="#6366F1" />
                    Experience
                </Link>
            </li>

            <li>
                <Link
                    to="education"
                    smooth={true}
                    duration={1500}
                    offset={-110}
                >
                    <LuGraduationCap size={20} color="#A855F7" />
                    Education
                </Link>
            </li>

            <li>
                <Link
                    to="projects"
                    smooth={true}
                    duration={1500}
                    offset={-40}
                >
                    <LuFolderKanban size={20} color="#F97316" />
                    Project
                </Link>
            </li>

            <li>
                <Link
                    to="skills"
                    smooth={true}
                    duration={1800}
                    offset={-90}
                >
                    <LuFolderKanban size={20} color="#EAB308" />
                    Skill
                </Link>
            </li>
            <li>
                <Link
                    to="contact"
                    smooth={true}
                    duration={2000}
                    offset={-60}
                >
                    <LuPhone size={20} color="#EF4444" />
                    Contact
                </Link>
            </li>

            <li>
                <label className="cursor-pointer">
                    <div className="swap swap-rotate text-[#10B981]">
                        <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                        <Sunicon />
                        <Moonicon />
                    </div>
                    Theme
                </label>
            </li>
        </>
    )
}

export default ListItem;