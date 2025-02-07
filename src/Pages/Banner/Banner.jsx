import { Typewriter } from "react-simple-typewriter";
import photo from "../../../src/assets/photo.png"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-20 mx-auto px-14 pb-14 pt-28">
            <div className="photo-frame">
                <img className="w-72" src={photo} alt="profile photo" />
            </div>
            <div className="flex items-start flex-col gap-4">
                <h2 className="text-5xl font-bold">Hello, I'm Siam - Frontend Web Developer</h2>
                <h2 className="text-3xl font-bold">"
                    <Typewriter
                        words={['Crafting Code with Creativity', 'Turning Ideas into Reality', 'Where Creativity Meets Functionality']}
                        loop={5}
                        delaySpeed={1000}>
                    </Typewriter>"
                </h2>
                <p className="text-lg mb-10">A passionate frontend developer with expertise in creating sleek, modern, and user-friendly web interfaces.</p>
                <div className="flex items-center gap-5 text-2xl">
                    <a href="https://github.com/TurjoSiam"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/siam-mohammed-abdulah-0193b4162"><FaLinkedin /></a>
                    <a href="https://x.com/SiamTurjo"><FaTwitter /></a>
                    <a href="https://www.facebook.com/tur.jo.9275"><FaFacebook /></a>
                </div>
                <a target="_blank" href="https://docs.google.com/document/d/1eTWy8G7k76Buyvzg2_xjPeFhpWa-3KReiKgwYMVmsok/edit?usp=sharing" className="btn-main">Download Resume</a>
            </div>
        </div>
    );
};

export default Banner;