import { FaCode, FaGraduationCap } from "react-icons/fa";
import 'animate.css';
import { MdBuild, MdCastForEducation } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";

const AboutMe = () => {
    return (
        <div className="mx-auto bg-white flex flex-col items-center py-16 md:px-10 animate__animated animate__fadeInUp" id="education">
            <h2 className="text-4xl mx-auto font-bold underline flex items-center gap-2 text-teal-900 mb-5"><MdCastForEducation /> Education/Training</h2>
            <div className="w-11/12 md:w-full lg:w-10/12 mx-auto space-y-3">
                <div className="flex items-center py-4 gap-5 md:gap-0 rounded-lg px-5 md:px-8 bg-[#eff1ec] justify-between">
                    <div className="flex items-center gap-4">
                        <AiFillCode className="text-4xl" />
                        <div>
                            <h2 className="font-bold">Next Level Web Development</h2>
                            <p>Programming Hero</p>
                        </div>
                    </div>
                    <div>
                        <h2>2025 - Running</h2>
                    </div>
                </div>
                <div className="flex items-center py-4 gap-5 md:gap-0 rounded-lg px-5 md:px-8 bg-[#eff1ec] justify-between">
                    <div className="flex items-center gap-4">
                        <FaCode className="text-4xl" />
                        <div>
                            <h2 className="font-bold">Complete Web Development</h2>
                            <p>Programming Hero</p>
                        </div>
                    </div>
                    <div>
                        <h2>2024 - 2025</h2>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 rounded-lg px-8 bg-[#eff1ec]">
                    <div className="flex items-center gap-4">
                        <FaGraduationCap className="text-4xl" />
                        <div>
                            <h2 className="font-bold">Masters in Marine Science</h2>
                            <p>Chittagong Veterinary and Animal Science University</p>
                        </div>
                    </div>
                    <div>
                        <h2>2019 - 2021</h2>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 rounded-lg px-8 bg-[#eff1ec]">
                    <div className="flex items-center gap-4">
                        <MdBuild className="text-4xl" />
                        <div>
                            <h2 className="font-bold">Industrial Training</h2>
                            <p>University Malaysia Terengganu</p>
                        </div>
                    </div>
                    <div>
                        <h2>2018</h2>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 rounded-lg px-8 bg-[#eff1ec]">
                    <div className="flex items-center gap-4">
                        <FaGraduationCap className="text-4xl" />
                        <div>
                            <h2 className="font-bold">Bachelor of Science in Fisheries</h2>
                            <p>Chittagong Veterinary and Animal Science University</p>
                        </div>
                    </div>
                    <div>
                        <h2>2015 - 2018</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;