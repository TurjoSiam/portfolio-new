import { FaGithub } from "react-icons/fa";
import web1 from "../../../src/assets/web1.png"
import web2 from "../../../src/assets/web2.png"
import web3 from "../../../src/assets/web3.png"
import 'animate.css';

const Projects = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-10 animate__animated animate__fadeInUp" id="projects">
            <h2 className="text-4xl font-bold text-teal-900 text-center mb-5">Projects</h2>
            <p className="mb-10 text-center px-5 md:px-10">Most of my projects are built using React, enhanced with various npm packages, and styled with Tailwind CSS for modern, responsive designs. For backend functionality, I’ve utilized Node.js and Express.js in select projects to deliver full-stack solutions.</p>
            <div className="flex flex-col md:flex-row items-start gap-10">
                <div className='relative mx-auto group border border-teal-400 rounded-2xl p-2 flex flex-col gap-3 items-center'>
                    <div className='absolute hidden w-5/6 group-hover:block top-5 left-5 mx-3 p-7 bg-[#fefdfdd3] rounded-xl text-black'>
                        <h2 className='mb-3 text-xl font-bold text-center'>Service Review Website</h2>
                        <p></p>
                    </div>
                    <img className='object-cover rounded-xl' src={web1} alt="image" />
                    <div className="w-10/12 flex items-center justify-center gap-2">
                        <a className="btn w-1/6 bg-teal-800 hover:bg-teal-200 hover:text-teal-800 outline outline-teal-800 hover:outline-2 hover:outline-teal-800 text-white" href="https://github.com/TurjoSiam/RateWise-ClientSide"><FaGithub /></a>
                        <a className="btn bg-[#964734] w-5/6 text-white hover:text-[#964734] hover:bg-[#ffd3c8] outline outline-amber-800 hover:outline-2 hover:outline-amber-800" href="https://ratewise-turjosiam.netlify.app" target="_blank">Visit Website</a>
                    </div>
                </div>
                <div className='relative mx-auto group border border-teal-400 rounded-2xl p-2 flex flex-col gap-3 items-center'>
                    <div className='absolute hidden w-5/6 group-hover:block top-5 left-5 mx-3 p-7 bg-[#fefdfdd3] rounded-xl text-black'>
                        <h2 className='mb-3 text-xl font-bold text-center'>Movie Info Website</h2>
                        <p></p>
                    </div>
                    <img className='object-cover rounded-xl' src={web2} alt="image" />
                    <div className="w-10/12 flex items-center justify-center gap-2">
                        <a className="btn w-1/6 bg-teal-800 hover:bg-teal-200 hover:text-teal-800 outline outline-teal-800 hover:outline-2 hover:outline-teal-800 text-white" href="https://github.com/TurjoSiam/MovieSphere---ClientSide"><FaGithub /></a>
                        <a className="btn bg-[#964734] w-5/6 text-white hover:text-[#964734] hover:bg-[#ffd3c8] outline outline-amber-800 hover:outline-2 hover:outline-amber-800" href="https://movie-sphere-turjosiam.netlify.app" target="_blank">Visit Website</a>
                    </div>
                </div>
                <div className='relative mx-auto group border border-teal-400 rounded-2xl p-2 flex flex-col gap-3 items-center'>
                    <div className='absolute hidden w-5/6 group-hover:block top-5 left-5 mx-3 p-7 bg-[#fefdfdd3] rounded-xl text-black'>
                        <h2 className='mb-3 text-xl font-bold text-center'>Eco Adventure Website</h2>
                        <p></p>
                    </div>
                    <img className='object-cover rounded-xl' src={web3} alt="image" />
                    <div className="w-10/12 flex items-center justify-center gap-2">
                        <a className="btn w-1/6 bg-teal-800 hover:bg-teal-200 hover:text-teal-800 outline outline-teal-800 hover:outline-2 hover:outline-teal-800 text-white" href="https://github.com/TurjoSiam/Adveneco-EcoAdventure"><FaGithub /></a>
                        <a className="btn bg-[#964734] w-5/6 text-white hover:text-[#964734] hover:bg-[#ffd3c8] outline outline-amber-800 hover:outline-2 hover:outline-amber-800" href="https://adveneco.netlify.app" target="_blank">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;