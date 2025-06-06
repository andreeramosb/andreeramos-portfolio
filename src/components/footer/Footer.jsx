import './footer.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // 🆕 FaGithub añadido

const Footer = () => {
    return ( 
        <footer className='footer-container'>
            <div className='icon-container'>
                <a href='https://www.linkedin.com/in/andreeramosbenites/' target="_blank" rel="noopener noreferrer">
                    <div className='icon fb-bg'>
                        <FaLinkedin/>
                    </div>
                </a>
                <a href='mailto:andree.ramos.benites@gmail.com' target="_blank" rel="noopener noreferrer">
                    <div className='icon fb-bg'>    
                        <FaEnvelope/>
                    </div>
                </a>
                <a href='https://github.com/andreeramosb' target="_blank" rel="noopener noreferrer"> {/* GitHub agregado */}
                    <div className='icon fb-bg'>
                        <FaGithub />
                    </div>
                </a>
            </div>
            <div className='copy-data'>
                Copyright &copy;2025 {'<andreeramos />'} | Richard Andree Ramos Benites
            </div>
        </footer>
     );
}
 
export default Footer;
