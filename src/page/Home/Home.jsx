import Banner from "../../components/Banner/Banner";
import FeaturedCourse from "../../components/FeaturedCourse/FeaturedCourse";
import Choose from "../../components/Info/Choose";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Choose />
      <FeaturedCourse/>
    </div>
  );
};

export default Home;