import ContactMe from '../components/contact/Contact';
import Banner from "../components/banner/Banner";

const Contact = () => {
  return (
    <div>
      <Banner 
        text2=" Contact me 📝" 
        text3="Send me a message"
        button= {false}/>
      <ContactMe/>
    </div>
  )
}

export default Contact