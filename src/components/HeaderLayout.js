import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

//header

export const HeaderLayout = () =>{
    const [AuthBtn,setAuthBtn] = useState("login");
    return (
        <div className='header'>
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home
                        </Link></li>
                    <li>
                        <Link to='/about'>About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                       AuthBtn=='login'? setAuthBtn('logout'):setAuthBtn('login');
                    }}>{AuthBtn}</button>
                </ul>
            </div>
        </div>
    )
};

export default HeaderLayout;
