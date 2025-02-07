import { BiSolidUserPin } from "react-icons/bi";


const About = () => {
    return (
        <div className="mx-auto bg-white flex flex-col items-center py-16 px-10 animate__animated animate__fadeInUp" id="aboutMe">
                <h2 className="text-4xl font-bold underline flex items-center gap-2 text-teal-900 mb-5"><BiSolidUserPin /> About me</h2>
                <div className="w-10/12 bg-[#eff1ec] dark:bg-gray-800 shadow-lg rounded-2xl p-8">
                    <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                            I'm Siam Mohammed Abdulah
                        </h3>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            I'm a **Front-End Web Developer** with expertise in **React.js, Next.js, and Tailwind CSS**.
                            My journey into programming started with a deep curiosity about how websites work. Over the years, I have honed my skills in **building modern, scalable, and user-friendly web applications**.
                        </p>

                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            I truly enjoy working on **interactive UI/UX designs** and creating web experiences that are both **aesthetically pleasing and high-performing**. Problem-solving and continuous learning keep me motivated in this fast-paced industry.
                        </p>

                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me playing video games, travelling and riding bike.
                            I also enjoy **learning about new technologies, exploring open-source projects, and mentoring aspiring developers**.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default About;