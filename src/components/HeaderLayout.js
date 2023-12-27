import { useState } from 'react';
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
                    <li>Home</li>
                    <li>About Us-It is</li>
                    <li>Contact</li>
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
