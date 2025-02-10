import { BiSolidUserPin } from "react-icons/bi";


const About = () => {
    return (
        <div className="mx-auto bg-white flex flex-col items-center py-16 md:px-10 animate__animated animate__fadeInUp" id="aboutMe">
            <h2 className="text-4xl font-bold underline flex items-center gap-2 text-teal-900 mb-5"><BiSolidUserPin /> About me</h2>
            <div className="w-11/12 md:w-10/12 bg-[#eff1ec] shadow-lg rounded-2xl p-8">
                <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-700">
                        I'm Siam Mohammed Abdulah
                    </h3>
                    <ul className="list-disc">
                        <li className="mt-4 text-gray-600 leading-relaxed">
                            I'm a **Front-End Web Developer** with expertise in **React.js, Next.js, and Tailwind CSS**.
                            My journey into programming started with a deep curiosity about how websites work. Over the years, I have honed my skills in **building modern, scalable, and user-friendly web applications**.
                        </li>

                        <li className="mt-4 text-gray-600 leading-relaxed">
                            I truly enjoy working on **interactive UI/UX designs** and creating web experiences that are both **aesthetically pleasing and high-performing**. Problem-solving and continuous learning keep me motivated in this fast-paced industry.
                        </li>

                        <li className="mt-4 text-gray-600 leading-relaxed">
                            When I'm not coding, you can find me playing video games, travelling and riding bike.
                            I also enjoy **learning about new technologies, exploring open-source projects, and mentoring aspiring developers**.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;