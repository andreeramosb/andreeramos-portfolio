import Banner from "../components/banner/Banner";
import AboutMe from '../components/about/About';

const About = () => {
  return (
    <div>
        <Banner 
          text1="About Me 🧑" 
          text3="Know me"
          button= {false} />
        <AboutMe/>
    </div>
  )
}

export default About