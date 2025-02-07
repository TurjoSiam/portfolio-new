import { Link } from "react-router-dom";

const Footer = () => {

    const links = <>
        <li><a href="/">Home</a></li>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contactMe">Contact Me</a></li>
    </>

    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content py-4 px-10">
                <div className="flex w-full items-center flex-col md:flex-row justify-between">
                    <Link className="btn btn-ghost text-xl"><span className="text-2xl font-bold text-[#9cd07f] font-carter">SIAM</span></Link>
                    <ul className="menu menu-horizontal text-sm font-bold px-1">
                        {links}
                    </ul>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;