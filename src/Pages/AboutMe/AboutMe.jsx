import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import 'animate.css';

const AboutMe = () => {
    return (
        <div className="mx-auto bg-white py-16 px-10 animate__animated animate__fadeInUp" id="aboutMe">
            <h2 className="text-4xl font-bold text-teal-900 text-center mb-5">About Me</h2>
            <p className="text-center mb-10 px-5 md:px-10">Although my educational background isn't in web development, my passion for the field drove me to gain skills through dedicated courses and consistent practice. I’m committed to continuous learning and turning my enthusiasm for technology into impactful web solutions</p>
            <div className="gap-16 flex flex-col lg:flex-row items-start justify-between">
                <div className="space-y-7 w-full lg:w-1/2">
                    <h2 className="text-[#034951] text-3xl font-bold flex underline items-center gap-2"><FaLaptopCode /> Skills</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm">HTML & CSS</h2>
                            <h2 className="text-sm">90%</h2>
                        </div>
                        <div className="-mt-2">
                            <progress className="progress text-orange-800 w-full" value={90} max="100"></progress>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm">Tailwind CSS</h2>
                            <h2 className="text-sm">90%</h2>
                        </div>
                        <div className="-mt-2">
                            <progress className="progress text-orange-800 w-full" value={80} max="100"></progress>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm">JavaScript</h2>
                            <h2 className="text-sm">80%</h2>
                        </div>
                        <div className="-mt-2">
                            <progress className="progress text-orange-800 w-full" value={80} max="100"></progress>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm">React</h2>
                            <h2 className="text-sm">70%</h2>
                        </div>
                        <div className="-mt-2">
                            <progress className="progress text-orange-800 w-full" value={70} max="100"></progress>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-7">
                    <h3 className="text-[#034951] text-3xl font-bold underline flex items-center gap-2"><FaGraduationCap /> Education/Training</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">Complete Web Development</h2>
                            <p>Programming Hero</p>
                        </div>
                        <div>
                            <h2>2024 - Running</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">Masters in Marine Science</h2>
                            <p>Chittagong Veterinary and Animal Science University</p>
                        </div>
                        <div>
                            <h2>2019 - 2021</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">Industrial Training</h2>
                            <p>University Malaysia Terengganu</p>
                        </div>
                        <div>
                            <h2>2018</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">Bachelor of Science in Fisheries</h2>
                            <p>Chittagong Veterinary and Animal Science University</p>
                        </div>
                        <div>
                            <h2>2015 - 2018</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;