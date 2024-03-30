/* eslint-disable react/no-unescaped-entities */
import './banner.css'
import banner from '../../assets/banner-jurnal.jpg'
const Banner = () => {
    return (
        <div id="slide1" className=" w-full bg-fixed">
            <div className=" h-[100vh] relative" style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: '', }}>
                <div className=" bg-neutral-900 w-full min-h-screen bg-opacity-60"></div>
                <div className=" text-left text-neutral-content">
                    <div className=" top-40 left-4 lg:top-1/3 md:left-20  absolute  ">
                        <div>
                            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
                                <span className=''>Unlock the </span>  <br />
                                Secrets of   <span className='nav-text'> Journalism</span>  <br />
                                with <span className='nav-text'> Mr. Arun</span>
                            </h1>
                        </div>
                        <div>
                            <p className='w-full md:w-3/4 lg:w-1/3 my-4 text-neutral-300'>
                                This banner conveys a sense of opportunity and excitement, inviting visitors to explore further and enroll in the course. The language emphasizes the value of Mr. Arun's expertise and the practical knowledge students will gain from the course
                            </p>
                            <a href="#courses">
                                <button className='button-74 route-text-bg px-3 py-2 shadow-green-600 shadow-2xl my-5 border-green-700'>
                                    Get Courses
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;