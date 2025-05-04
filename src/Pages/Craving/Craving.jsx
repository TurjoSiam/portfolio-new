import project4 from "../../assets/project4.jpg"

const Craving = () => {
    return (
        <div className="w-10/12 min-h-screen lg:w-8/12 mx-auto font-spinnaker animate__animated animate__zoomIn flex items-center justify-center">

            <div className="bg-gradient-to-tr from-sky-100 to-orange-100 w-full mx-auto p-10 rounded-2xl flex flex-col md:flex-row gap-5 pt-32">

                <div>
                    <img className="w-[1000px] rounded-xl hover:scale-105 transition-all duration-300 ease-in mb-3" src={project4} alt="image" />
                </div>
                <div className="col-span-1 px-7 font-bold space-y-5">
                    <h2 className="text-3xl lg:text-3xl font-bold">Craving – Food Ordering Website</h2>
                    <h1 className="text-xl underline font-bold md:mb-5">Project Details</h1>
                    <p>Overview: <span className="font-normal">Craving is a full-stack food ordering platform featuring cart management, ordering and payment systems and role-based functionality. Advanced filtering and sorting system with location-based restaurant suggestion. Real time order management and introducing donation campaigns.</span></p>
                    <div className="flex items-center flex-wrap gap-3">
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">next.js</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">typescript</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">node.js</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">express.js</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">mongoDB</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">shadcn</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">next auth</span>
                    </div>
                    <h2>My contributions: <span className="font-normal"><ul className="list-disc ml-10">
                        <li>Created the main project documentation and planned the overall functionality and workflow of the website.</li>
                        <li>Implemented the complete ordering system, managing both frontend and backend logic.</li>
                        <li>Handled error resolution, conflict management, and took primary responsibility for project deployment.</li>
                    </ul>
                    </span>
                    </h2>
                    <h2>Challenges faced: <span className="font-normal"><ul className="list-disc ml-10">
                        <li>Difficulties faced exploring new technologies like next.js, typescript.</li>
                        <li>Had to solve numerous errors before deploying in vercel.</li>
                        <li>Solved a lot of conflicts in github collaborative repository.</li>
                    </ul>
                    </span>
                    </h2>
                    <h2>Future plans: <span className="font-normal"><ul className="list-disc ml-10">
                        <li>Real-time rider's location tracking in map.</li>
                        <li>Live texting and calling feature with rider and admin.</li>
                        <li>Weather based food suggestions.</li>
                    </ul></span></h2>
                    <div className="flex items-center gap-5">
                        <a target="_blank" className="text-blue-500 underline" href="https://craving-pied.vercel.app">Live Demo</a>
                        <a target="_blank" className="text-blue-500 underline" href="https://github.com/Shahriarkawsik/Craving">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Craving;