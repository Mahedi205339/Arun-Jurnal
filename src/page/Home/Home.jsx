import Banner from "../../components/Banner/Banner";
import FeaturedCourse from "../../components/Featured/FeaturedCourse";
import Choose from "../../components/Info/Choose";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import Courses from "../Courses/Courses";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Choose />
      <FeaturedCourse/>
       <Courses/>
      <About/>
     
    </div>
  );
};

export default Home;