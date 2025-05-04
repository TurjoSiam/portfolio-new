
import { MdOutlineFileDownload } from "react-icons/md";
import logo from "../../../src/assets/logo.png"


const Navbar = () => {

    const links = <>
        <li><a href="/">Home</a></li>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contactMe">Contact Me</a></li>
    </>



    return (
        <div className="navbar max-w-screen-2xl bg-[#D2D3C3] border-b backdrop:blur-2xl fixed top-0 z-10 lg:px-20 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl"><span className="text-3xl font-carter hidden md:block font-bold text-[#51733F]">SIAM</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-sm font-bold px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a target="_blank" href="https://drive.google.com/file/d/1yuazgobYn5TjSt_JKCpBQQhJ3mWpKigB/view?usp=drive_link" className="btn-main flex items-center gap-2"><MdOutlineFileDownload /> Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;