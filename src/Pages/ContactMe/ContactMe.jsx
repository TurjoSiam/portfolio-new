
import { FaWhatsapp } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import 'animate.css';


const ContactMe = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-10 bg-gradient-to-tr from-teal-300 to-teal-200 animate__animated animate__fadeInUp" id="contactMe">
            <h2 className="text-4xl font-bold text-teal-900 text-center">Contact Me</h2>
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-2/3">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Query</span>
                            </label>
                            <textarea type="password" placeholder="Write your query" className="input input-bordered h-14" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#964734] text-white hover:text-[#964734] hover:bg-[#ffd3c8] outline outline-amber-800 hover:outline-2 hover:outline-amber-800">Send</button>
                        </div>
                    </form>
                </div>
                <div className="w-full lg:w-1/3 space-y-5 bg-[#034951] text-white px-7 py-10 rounded-xl">
                    <h2 className="text-xl flex items-center gap-2"><span className="font-bold flex items-center gap-2"><FaMapLocationDot /> Address: </span><span>Feni, Bangladesh</span></h2>
                    <h2 className="text-xl flex items-center gap-2"><span className="font-bold flex items-center gap-2"><MdEmail /> Email: </span><span>turjosiam@gmail.com</span></h2>
                    <h2 className="text-xl flex items-center gap-2"><span className="font-bold flex items-center gap-2"><IoCall />Phone: </span><span>01832104421</span></h2>
                    <h2 className="text-xl flex items-center gap-2"><span className="font-bold flex items-center gap-2"><FaWhatsapp /> Whatsapp: </span><span>01832104421</span></h2>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactMe;