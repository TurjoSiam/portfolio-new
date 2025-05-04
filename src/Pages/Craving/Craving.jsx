import project3 from "../../assets/project3.jpg"

const Craving = () => {
    return (
        <div className="w-10/12 min-h-screen lg:w-8/12 mx-auto font-spinnaker animate__animated animate__zoomIn flex items-center justify-center">

            <div className="bg-gradient-to-tr from-sky-100 to-orange-100 w-full mx-auto p-10 rounded-2xl flex flex-col md:flex-row gap-5 pt-32">

                <div>
                    <img className="w-[1000px] rounded-xl hover:scale-105 transition-all duration-300 ease-in mb-3" src={project3} alt="image" />
                </div>
                <div className="col-span-1 px-7 font-bold space-y-5">
                    <h2 className="text-3xl lg:text-3xl font-bold">Ripple - A Social Media Forum</h2>
                    <h1 className="text-xl underline font-bold md:mb-5">Project Details</h1>
                    <p>Overview: <span className="font-normal">Ripple is a social media platform where users can post, read, and share their thoughts on various topics. The platform aims to foster knowledge exchange, creativity, and healthy debates, creating a space for community engagement.</span></p>
                    <div className="flex items-center flex-wrap gap-3">
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">react</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">node.js</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">express.js</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">mongoDB</span>
                        <span className="bg-secondary rounded-full font-bold px-3 py-1 text-sm">tailwind CSS</span>
                    </div>
                    <h2>Challenges faced: <span className="font-normal"><ul className="list-disc ml-10">
                        <li>Some api was not working due to same route</li>
                        <li>Problem faced during vercel deploy</li></ul></span></h2>
                    <h2>Future plans: <span className="font-normal"><ul className="list-disc ml-10">
                        <li>Role based authentication</li>
                        <li>Dark mode</li>
                    </ul></span></h2>
                    <div className="flex items-center gap-5">
                        <a className=" text-blue-500 underline" href="https://ripple-turjosiam.netlify.app/">Live Demo</a>
                        <a className=" text-blue-500 underline" href="https://github.com/TurjoSiam/ripple-forum">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Craving;