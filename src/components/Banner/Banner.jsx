import banner from '../../assets/banner-jurnal.jpg'
const Banner = () => {
    return (
        <div id="slide1" className="carousel-item w-full fixed">
            <div className=" h-[100vh] relative" style={{ backgroundImage: `url(${banner})` }}>
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;