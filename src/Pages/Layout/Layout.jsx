import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className="max-w-screen-2xl bg-[#e2e3d7] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;