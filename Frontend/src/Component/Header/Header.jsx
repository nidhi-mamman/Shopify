import '../../CSS/Header.css'
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FiInstagram } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="welome">
                    <p className="text-white font-serif font-bold">Welcome to my website</p>
                </div>
                <div className="social-links">
                    <div className=" text-white border-2 rounded-full border-white p-1"><TiSocialFacebook size={17} /></div>
                    <div className="text-white border-2 rounded-full border-white p-1"><FaTwitter /></div>
                    <div className=" text-white border-2 rounded-full border-white p-1"><MdOutlineEmail /></div>
                    <div className=" text-white border-2 rounded-full border-white p-1"><FiInstagram /></div>
                </div>
                <div className="login-form bg-white">
                    <NavLink className='text-blue-950 font-bold p-2 border-1' to='/myAcc'>Login</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header