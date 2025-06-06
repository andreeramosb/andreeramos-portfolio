import './about.css';
import Foto from '../../assets/foto.png';

const About = () => {
    return (
        <section className="about-container">
            <div className="aboutme-container">
                <div className='description'>
                    <h2>About me 🤙 __ </h2><br />
                    <p>My name is Richard, I live in Chiclayo, Perú. I am a simple
                        person, who like to learn new things, especially referred to
                        technology (software development).
                    </p>
                    <p>I love to share knowledge, to work in a team, be friendly.
                        I consider myself a person easy to relate, mainly listen to
                        others, this is very important for me.
                    </p>
                </div>
                <div className="photo">
                    <img src={Foto} alt="Me" />
                </div>
            </div>

            <div className="skills-container">
                <div className='description'>
                    <h2>Knowledge 🔧 __</h2>
                    <div className='tech'>
                        <span className="pill red">Java</span>
                        <span className="pill green">Spring Boot</span>
                        <span className="pill purple">RxJava</span>
                        <span className="pill green">WebFlux</span>
                        <span className="pill blue">Camunda</span>
                        <span className="pill orange">JWT</span>
                        <span className="pill blue">OAuth2</span>
                        <span className="pill orange">XML</span>
                        <span className="pill red">Oracle</span>
                        <span className="pill blue">SQL Server</span>
                        <span className="pill gray">MVC</span>
                        <span className="pill purple">BPMN</span>
                        <span className="pill green">SOLID</span>
                        <span className="pill blue">Scrum</span>
                        <span className="pill yellow">Microservices</span>
                        <span className="pill purple">Bamboo</span>
                        <span className="pill blue">Lens</span>
                        <span className="pill blue">HTML</span>
                        <span className="pill blue">CSS</span>
                        <span className="pill yellow">JavaScript</span>
                        <span className="pill blue">React</span>
                        <span className="pill red">Git</span>
                        <span className="pill blue">GitHub</span>
                        <span className="pill blue">Bitbucket</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
