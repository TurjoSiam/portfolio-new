
import { MdEmail, MdOutlineContactPhone } from "react-icons/md";
import 'animate.css';
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import Swal from "sweetalert2";



const ContactMe = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Email send successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          e.target.reset();
    }


    return (
        <div className="bg-white mx-auto flex flex-col items-center py-16 md:px-10 animate__animated animate__fadeInUp" id="contactMe">
            <h2 className="text-4xl mx-auto font-bold underline flex items-center gap-2 text-teal-900 mb-10"><MdOutlineContactPhone /> Contact Me</h2>
            <div className="w-11/12 lg:w-10/12 mx-auto gap-5 lg:gap-0 flex lg:flex-row flex-col items-center">
                {/* contact info */}
                <div className="grid grid-cols-2 lg:w-1/3 lg:-mr-16 z-10 gap-5">
                    {/* address */}
                    <div className="p-8 flex flex-col bg-secondary w-48 h-40 items-center justify-center">
                        <FaMapLocationDot className="text-4xl" />
                        <h2 className="text-xl font-bold">Address</h2>
                        <h2 className="mt-3">Feni, Bangladesh</h2>
                    </div>
                    {/* email*/}
                    <div className="p-3 flex flex-col bg-secondary w-48 h-40 items-center justify-center">
                        <MdEmail className="text-4xl" />
                        <h2 className="text-xl font-bold">Email</h2>
                        <h2 className="mt-3">siam.m.abdulah <br /> @gmail.com</h2>
                    </div>
                    {/* phone */}
                    <div className="p-8 flex flex-col bg-secondary w-48 h-40 items-center justify-center">
                        <FaPhoneVolume className="text-4xl" />
                        <h2 className="text-xl font-bold">Phone</h2>
                        <h2 className="mt-3">+880 1832104421</h2>
                    </div>
                    {/* whatsapp */}
                    <div className="p-8 flex flex-col bg-secondary w-48 h-40 items-center justify-center">
                        <IoLogoWhatsapp className="text-4xl" />
                        <h2 className="text-xl font-bold">WhatsApp</h2>
                        <h2 className="mt-3">+880 1832104421</h2>
                    </div>
                </div>
                {/* form */}
                <div className="w-full lg:w-2/3 bg-[#E2E3D7] rounded-lg lg:pl-20">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Enter a subject" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Query</span>
                            </label>
                            <textarea type="text" placeholder="Write your query" className="input input-bordered min-h-16" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn-main flex items-center gap-2"><FiSend />Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;