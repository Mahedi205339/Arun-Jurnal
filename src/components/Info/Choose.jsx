/* eslint-disable react/no-unescaped-entities */
import Title from "../Title/Title";
import './choose.css'
import choseImage from '../../assets/imgDisenioWebMedida.ceefbcdb.svg'
const Choose = () => {
    return (
        <div className="min-h-screen py-7 max-w-[1500px] mx-auto">
            <div className="">
                <Title
                    headline={"Why you choose us?"}
                    subHeadline="Join Our Exclusive Online Course for Aspiring Journalists"
                ></Title>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-evenly items-center p-4">
                <div className="flex-1">
                    <div className="timeline flex flex-col items-center gap-4">
                        <div className="relative">
                            <div className="dot rounded-full">
                                <div className="dot absolute ml-[2px] -mt-[10px] animate-ping rounded-full">

                                </div>
                            </div>
                            {/* step1 */}
                            <div className="pl-10">
                                <span className="timeline-date">
                                    Step-1
                                </span>
                                <h3 className="chose-title text-lg lg:text-xl">
                                    Interactive Live & Recording Classes
                                </h3>
                                <p className="w-11/12 md:w-9/12 mx-auto md:mx-0 text-sm md:text-base lg:text-base">
                                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                                </p>
                            </div>

                        </div>
                        {/* step2 */}
                        <div className="relative">
                            <div className="dot rounded-full">
                                <div className="dot absolute ml-[2px] -mt-[10px] animate-ping rounded-full">

                                </div>
                            </div>
                            <div className="pl-10">
                                <span className="timeline-date">
                                    Step-2
                                </span>
                                <h3 className="chose-title text-lg lg:text-xl">
                                    Module Based Study Plan
                                </h3>
                                <p className="w-11/12 md:w-9/12 mx-auto md:mx-0 text-sm md:text-base lg:text-base">
                                    There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.
                                </p>
                            </div>

                        </div>
                        {/* step-3 */}
                        <div className="relative">
                            <div className="dot rounded-full">
                                <div className="dot absolute ml-[2px] -mt-[10px] animate-ping rounded-full">

                                </div>
                            </div>
                            <div className="pl-10">
                                <span className="timeline-date">
                                    Step-3
                                </span>
                                <h3 className="chose-title text-lg lg:text-xl">
                                    Conceptual Crash Course
                                </h3>
                                <p className="w-11/12 md:w-9/12 mx-auto md:mx-0 text-sm md:text-base lg:text-base">
                                    You Are Not Just Enrolling In One Course. It's A Mission To Learn Lifelong Programming Journey With Hablu Programmer.
                                </p>
                            </div>

                        </div>
                        <div className="relative">
                            <div className="dot rounded-full">
                                <div className="dot absolute ml-[2px] -mt-[10px] animate-ping rounded-full">

                                </div>
                            </div>
                            <div className="pl-10">
                                <span className="timeline-date">
                                    Step-4
                                </span>
                                <h3 className="chose-title text-lg lg:text-xl">

                                    Learning Process Track Record
                                </h3>
                                <p className="w-11/12 md:w-9/12 mx-auto md:mx-0 text-sm md:text-base lg:text-base">
                                    Track Your Progress In Real Time To See Your Position On The Leader Board And Get Ahead Of Everyone Else In The Competition.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="flex-1">
                    <img src={choseImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Choose;