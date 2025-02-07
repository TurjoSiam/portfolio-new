import { MdOutlineReadMore } from "react-icons/md";
import web1 from "../../assets/web1.jpg"
import web2 from "../../assets/web2.jpg"
import web3 from "../../assets/web3.jpg"
import 'animate.css';
import { GoProjectSymlink } from 'react-icons/go';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="mx-auto flex flex-col items-center py-16 px-10 animate__animated animate__fadeInUp" id="projects">
            <h2 className="text-4xl mx-auto font-bold underline flex items-center gap-2 text-teal-900 mb-10"><GoProjectSymlink /> Projects</h2>
            <div className='w-full lg:w-10/12 mx-auto space-y-10'>
                {/* project 1 */}
                <div className="flex p-5 rounded-xl shadow-custom items-start gap-10">
                    <img className="w-1/2 shadow-md rounded-lg" src={web1} alt="web page 1" />
                    <div className="w-1/2 space-y-5">
                        <h2 className="text-2xl font-bold underline">RateWise - A Service Reviewing Platform</h2>
                        <p className="text-gray-700">
                            RateWise is a service reviewing platform that allows customers to gain insights into the quality and reliability of services through unbiased feedback. It helps users compare services and make informed decisions based on reviews and ratings. Additionally, businesses can improve their offerings based on constructive criticism from users.
                        </p>
                        <div className="flex items-center flex-wrap gap-3">
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">react</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">node.js</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">express.js</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">mongoDB</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">tailwind CSS</span>
                        </div>
                        <Link to="/project/ratewise" className="btn-main flex items-center gap-2"><MdOutlineReadMore /> View Details</Link>
                    </div>
                </div>
                {/* project 2 */}
                <div className="flex p-5 rounded-xl shadow-custom items-start gap-10">
                    <div className="w-1/2 flex flex-col gap-5 items-end">
                        <h2 className="text-2xl font-bold underline">Movie Sphere - A Movie Information Platform</h2>
                        <p className="text-gray-700 text-right">
                            Movie Sphere is a platform that allows users to register, log in, and manage movie data. Users can add, update, delete, and manage their favorite movies. The platform also includes a search functionality to easily browse through the movies.
                        </p>
                        <div className="flex items-center flex-wrap gap-3">
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">react</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">node.js</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">express.js</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">mongoDB</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">tailwind CSS</span>
                        </div>
                        <Link to="/project/moviesphere" className="btn-main flex items-center gap-2"><MdOutlineReadMore />View Details</Link>
                    </div>
                    <img className="w-1/2 shadow-md rounded-lg" src={web2} alt="web page 1" />
                </div>
                {/* project 3 */}
                <div className="flex items-start gap-10 p-5 rounded-xl shadow-custom">
                    <img className="w-1/2 shadow-md rounded-lg" src={web3} alt="web page 1" />
                    <div className="w-1/2 space-y-5">
                        <h2 className="text-2xl font-bold underline">Ripple - A Social Media Forum</h2>
                        <p className="text-gray-700">
                        Ripple is a social media platform where users can post, read, and share their thoughts on various topics. The platform aims to foster knowledge exchange, creativity, and healthy debates, creating a space for community engagement.
                        </p>
                        <div className="flex items-center flex-wrap gap-3">
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">react</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">node.js</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">express.js</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">mongoDB</span>
                            <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">tailwind CSS</span>
                        </div>
                        <Link to="/project/ripple" className="btn-main flex items-center gap-2"><MdOutlineReadMore /> View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;