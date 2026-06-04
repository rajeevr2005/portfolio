import { LuMenu } from "react-icons/lu";
import ListItem from "./ListItem";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 fixed top-0 left-0 w-full z-50">
            {/* Left Side */}
            <div className="navbar-start">
                <h4 className="text-[26px] font-bold cursor-pointer ps-2 lg:ps-12">
                    Rajeev Ranjan
                </h4>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                   <ListItem />
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle">
                        <LuMenu size={24} />
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                        <ListItem />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;