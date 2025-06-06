import { Link } from 'react-router-dom';
import './card.css'

const Card = ({item}) => {
    return ( 
        <article className="card-container">
            <header className="header-card">
                {
                    item.name.toUpperCase()?
                    item.name.toUpperCase():
                    "i'm sorry this has happened to yo"
                }
            </header>
            <section>
                <p>Description: {item.description? item.description : "This is a awesome app"}</p><br/>
                <p>{item.language} / {item.visibility}</p>
            </section>
           
            <a href={item.html_url} target='_blank'>
                <div className='btn-card btn-bg'>
                        SOURCE
                </div>
            </a>
        </article>
     );
}
 
export default Card;