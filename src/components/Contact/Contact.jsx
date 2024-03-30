import Title from "../Title/Title";
import './contact.css'
const Contact = () => {
    return (
        <section id="contact">
            <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className=" max-w-[1500px] px-0 md:px-10 lg:px-20 py-10 mx-auto"
            >
                <div className="flex px-5 h-full items-center justify-start bg-white dark:bg-transparent">
                    <div className="mx-auto w-full max-w-lg">
                        <Title headline={"Contact Us"} />

                        <form
                            className="mt-10 py-5"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="relative z-0">
                                    <input
                                        type="text"
                                        name="from_name"
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                        Your name
                                    </label>
                                </div>
                                <div className="relative z-0">
                                    <input
                                        type="text"
                                        name="email"
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                        Your email
                                    </label>
                                </div>

                                <div className="relative z-0 col-span-2 my-6">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                        Subject
                                    </label>
                                </div>

                                <div className="relative z-0 col-span-2">
                                    <textarea
                                        name="message"
                                        rows="3"
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                        required
                                    ></textarea>
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                        Your message
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="button my-5 text-center"

                                >
                                    Send Message
                                </button>
                                 </div>

                        </form>
                   


                </div>
            </div>
        </div>
        </section >
    );
};

export default Contact;