import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import FeaturedCourse from "../../components/Featured/FeaturedCourse";
import Footer from "../../components/Footer/Footer";
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
      <Contact/>
      <Footer/>
     
    </div>
  );
};

export default Home;