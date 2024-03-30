/* eslint-disable react/no-unescaped-entities */
import Title from "../../components/Title/Title";
import journalistPic from '../../assets/journalist.jpg'

const About = () => {
    return (
        <div id="about" className="min-h-[70vh] max-w-[1500px] mx-auto p-4 ">
            <Title headline={"About Us"} subHeadline={"Let us tell you why we are different"} />
            <div className="flex flex-col md:flex-row-reverse justify-between items-center my-10 md:my-14 lg:my-20">
                <div className="w-2/5">
                    <img src={journalistPic} alt="" />
                </div>
                <div className="w-2/5 text-neutral-500">
                    <p className="my-3">
                        Welcome to our platform, where journalism enthusiasts and aspiring writers come together to hone their craft and unlock their potential.
                    </p>
                    <p>
                        Our website is dedicated to providing comprehensive online journalism courses taught by seasoned professionals like Mr. Arun, a retired journalist with decades of experience in the field. Whether you're a beginner looking to grasp the basics of news reporting or an experienced writer aiming to delve into specialized topics such as investigative journalism or multimedia storytelling, our platform offers a diverse range of courses to suit your interests and goals.
                    </p>

                    <p className="my-3">
                        Our mission is to empower individuals with the knowledge and skills needed to thrive in the ever-evolving landscape of journalism. Join us on this journey of discovery, learning, and growth as we navigate the fascinating world of storytelling, truth-seeking, and media excellence.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;