import { FaGraduationCap } from "react-icons/fa";
import 'animate.css';

const AboutMe = () => {
    return (
        <div className="mx-auto bg-white flex flex-col items-center py-16 px-10 animate__animated animate__fadeInUp" id="aboutMe">
            <h2 className="text-4xl mx-auto font-bold underline flex items-center gap-2 text-teal-900 mb-5"><FaGraduationCap /> Education/Training</h2>
            <div className="w-full lg:w-10/12 mx-auto space-y-3">
                <div className="flex items-center py-4 rounded-lg px-8 bg-[#eff1ec] justify-between">
                    <div>
                        <h2 className="font-bold">Complete Web Development</h2>
                        <p>Programming Hero</p>
                    </div>
                    <div>
                        <h2>2024 - Running</h2>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 rounded-lg px-8 bg-[#eff1ec]">
                    <div>
                        <h2 className="font-bold">Masters in Marine Science</h2>
                        <p>Chittagong Veterinary and Animal Science University</p>
                    </div>
                    <div>
                        <h2>2019 - 2021</h2>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 rounded-lg px-8 bg-[#eff1ec]">
                    <div>
                        <h2 className="font-bold">Industrial Training</h2>
                        <p>University Malaysia Terengganu</p>
                    </div>
                    <div>
                        <h2>2018</h2>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 rounded-lg px-8 bg-[#eff1ec]">
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
    );
};

export default AboutMe;