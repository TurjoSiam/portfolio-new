import Divider from "../../Shared/Divider/Divider";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Divider></Divider>
            <Projects></Projects>
            <Divider></Divider>
            <ContactMe></ContactMe>
            <Divider></Divider>
            <Footer></Footer>
        </div>
    );
};

export default Home;