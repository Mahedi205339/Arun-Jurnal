import banner from '../../assets/banner-jurnal.jpg'
const Banner = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
            <div className="hero h-[100vh] " style={{ backgroundImage: `url(${banner})` }}>
                <div className=" bg-black w-full h-full opacity-30"></div>
                <div className=" text-left text-neutral-content">
                    <div className="">
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;