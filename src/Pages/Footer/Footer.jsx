import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content py-4 px-10">
                <div className="flex w-full items-center flex-col md:flex-row justify-between">
                    <Link className="btn btn-ghost text-xl"><img className="w-10" src={logo} alt="logo" /><span className="text-2xl font-bold text-[#964834]">TurJo Siam</span></Link>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;