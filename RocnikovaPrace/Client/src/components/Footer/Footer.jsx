import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Footer.css'
import main_logo from '../../assets/slapshot_logo_transparent.png'
import Instagram_icon from '../../assets/Instagram_icon.png'
import X_icon from '../../assets/X_icon.png'
import Facebook_icon from '../../assets/Facebook_icon.png'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="footer-box">
                <div>
                    <img className="main_logo" src={main_logo} alt="" />
                    <p className="slogan">Collect cards of your favorite players, the best to ever play the game and
                        the greatest moments in hockey history.</p>
                </div>
                <div className="category-links">
                    <ul>
                        <h1>Categories</h1> <br />
                        <li><NavLink to='/products'>All Products</NavLink></li>
                        <li><NavLink to='/products/worldchampionship'>World Championship</NavLink></li>
                        <li><NavLink to='/products/nhl'>NHL</NavLink></li>
                        <li><NavLink to='/products/extraliga'>Extraliga</NavLink></li>
                        <li><NavLink to='/products/accesories'>Accesories</NavLink></li>
                    </ul>
                    
                </div>
                <div className='contact-links'>
                <ul>
                        <h1>Contact Us</h1> <br />
                        <li><p>Email: SlapShot@gmail.com</p></li>
                        <li><p>Instagram: <img onClick={() => { navigate("/") }} src={Instagram_icon} alt="" className="icon" /></p></li>
                        <li><p>X: <img onClick={() => { navigate("/") }} src={X_icon} alt="" className="icon" /></p></li>
                        <li><p>Facebook: <img onClick={() => { navigate("/") }} src={Facebook_icon} alt="" className="icon" /></p></li>
                    </ul>
                </div>
            </div>
            <p className="copyright">
                Copyright {new Date().getFullYear()} ©  All Right Reserved.
            </p>
        </div>
    );
};

export default Footer