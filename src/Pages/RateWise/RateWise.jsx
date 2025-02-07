import project1 from "../../assets/project1.png"

const RateWise = () => {
    return (
        <div className="w-10/12 min-h-screen lg:w-8/12 mx-auto font-spinnaker animate__animated animate__zoomIn flex items-center justify-center">

            <div className="bg-gradient-to-tr from-sky-100 to-orange-100 w-full mx-auto p-10 rounded-2xl flex flex-col pt-10 md:flex-row gap-5">
                
                <div>
                    <img className="w-[1000px] rounded-xl hover:scale-105 transition-all duration-300 ease-in mb-3" src={project1} alt="image" />
                </div>
                <div className="col-span-1 px-7 font-bold space-y-5">
                <h2 className="text-3xl lg:text-3xl font-bold">RateWise - A Service Reviewing Platform</h2>
                    <h1 className="text-xl underline font-bold md:mb-5">Project Details</h1>
                    <p>Overview: <span className="font-normal">RateWise is a service reviewing platform that allows customers to gain insights into the quality and reliability of services through unbiased feedback. It helps users compare services and make informed decisions based on reviews and ratings. Additionally, businesses can improve their offerings based on constructive criticism from users.</span></p>
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
                        <a className=" text-blue-500 underline" href="https://ratewise-turjosiam.netlify.app/">Live Demo</a>
                        <a className=" text-blue-500 underline" href="https://github.com/TurjoSiam/RateWise-ClientSide">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateWise;