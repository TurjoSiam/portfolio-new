import { CgWebsite } from "react-icons/cg";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaTools, FaWordpress } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoLogoJavascript, IoLogoNodejs, IoServerOutline } from "react-icons/io5";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";


const Skills = () => {
    return (
        <div className="mx-auto flex flex-col items-center py-16 md:px-10 animate__animated animate__fadeInUp" id="skills">
            <h2 className="text-4xl mx-auto font-bold underline flex items-center gap-2 text-teal-900 mb-5"><GrTechnology /> Skills</h2>
            <div className="flex md:flex-row flex-wrap flex-col gap-5 lg:gap-0 items-center justify-around w-10/12">
                {/* Frontend */}
                <div className="bg-white h-[300px] w-[250px] rounded-lg p-10 shadow-md">
                    <div className="flex gap-2 items-center justify-center text-3xl font-bold mb-7">
                        <CgWebsite />
                        <h2 className="underline">Frontend</h2>
                    </div>
                    <div className="flex flex-col items-start ml-10 space-y-2">
                        <span className="font-bold flex items-center gap-1">
                            <FaHtml5 /> HTML
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <FaCss3Alt /> CSS
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <IoLogoJavascript /> JavaScript
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <SiTypescript /> TypeScript
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <TbBrandReact /> React
                        </span>
                    </div>
                </div>
                {/* Backend */}
                <div className="bg-white h-[300px] w-[250px] rounded-lg p-10 shadow-md">
                    <div className="flex gap-2 items-center justify-center text-3xl font-bold mb-7">
                        <IoServerOutline />
                        <h2 className="underline">Backend</h2>
                    </div>
                    <div className="flex flex-col items-start ml-10 space-y-2">
                        <span className="font-bold flex items-center gap-1">
                            <IoLogoNodejs /> Node.js
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <SiExpress /> Express.js
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <RiNextjsFill /> Next.js
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <SiMongodb /> MongoDB
                        </span>
                    </div>
                </div>
                {/* tools */}
                <div className="bg-white h-[300px] w-[250px] rounded-lg p-10 shadow-md">
                    <div className="flex gap-2 items-center justify-center text-3xl font-bold mb-7">
                        <FaTools />
                        <h2 className="underline">Tools</h2>
                    </div>
                    <div className="flex flex-col items-start ml-10 space-y-2">
                        <span className="font-bold flex items-center gap-1">
                            <FaGitAlt /> Git
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <FaGithub /> GitHub
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <RiTailwindCssFill /> Tailwind CSS
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <PiFigmaLogoDuotone /> Figma
                        </span>
                        <span className="font-bold flex items-center gap-1">
                            <FaWordpress /> WordPress
                        </span>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Skills;