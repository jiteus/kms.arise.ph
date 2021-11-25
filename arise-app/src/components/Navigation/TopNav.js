import React from "react";
import './Navigation.css';
import Tilt from 'react-parallax-tilt';
import logo from './arise-white-logo.png';

const TopNav = () => {
    return (
        <nav className="flex justify-between bb b--white-10 bg-black">
            <Tilt className="Tilt v-mid pa4 link dim w-100 w-25-l tc mr3 db mid-gray" options={{ max : 25 }} >
                <div className='Tilt-inner'>
                    <img className = 'pa3 tc mr2 ma3' alt='kms.arise.ph' src={logo}/>
                </div>
            </Tilt>
            
            <div className="flex-grow pa3 flex items-center">
                <button className="f6 link dib black dim mr3 mr4-ns" >My Profile</button>
                <button className="f6 link dib black dim mr3 mr4-ns">My Dashboard</button>
                <button className="f6 link dib black dim mr3 mr4-ns" >My Projects</button>
                <button className="f6 link dib black dim mr3 mr4-ns" >Arise Forum</button>
                <p className="f6 dib white bg-animate hover-bg-white link
                hover-black no-underline pv2 ph4 br-pill ba b--white-20">Sign Out</p>
            </div>
            </nav>

    )
}

export default TopNav;