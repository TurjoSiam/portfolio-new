import { Typewriter } from "react-simple-typewriter";
import photo from "../../../src/assets/photo.jpg"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-20 mx-auto lg:px-32 pb-14 pt-28">
            <div>
                <img className="w-72 rounded-xl shadow-md shadow-[#51733F]" src={photo} alt="profile photo" />
            </div>
            <div className="flex items-start flex-col gap-4">
                <h2 className="text-5xl text-teal-900 font-bold">Hello, I'm Siam - Frontend Web Developer</h2>
                <h2 className="text-3xl text-gray-700 font-bold">"
                    <Typewriter
                        words={['Crafting Code with Creativity', 'Turning Ideas into Reality', 'Where Creativity Meets Functionality']}
                        loop={5}
                        delaySpeed={1000}>
                    </Typewriter>"
                </h2>
                <p className="text-lg text-gray-600 mb-7">A passionate frontend developer with expertise in creating sleek, modern, and user-friendly web interfaces.</p>
                <div className="flex items-center text-[#51733F] gap-5 text-2xl">
                    <a href="https://github.com/TurjoSiam"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/siam-mohammed-abdulah-0193b4162"><FaLinkedin /></a>
                    <a href="https://x.com/SiamTurjo"><FaTwitter /></a>
                    <a href="https://www.facebook.com/tur.jo.9275"><FaFacebook /></a>
                </div>
                <a target="_blank" href="https://drive.google.com/file/d/1yuazgobYn5TjSt_JKCpBQQhJ3mWpKigB/view?usp=drive_link" className="btn-main">Download Resume</a>
            </div>
        </div>
    );
};

export default Banner;