import './banner.css'
import { Link } from 'react-router-dom'

const Banner = (props) => {
    return ( 
        <div className="banner-container">
            <div className='banner-content'>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p className='rol'>{props.text3}</p>
            </div>
        </div>
     );
}
 
export default Banner;