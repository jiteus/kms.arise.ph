import React from "react";
import Tilt from 'react-parallax-tilt';
import './Navigation.css';
import logo from './logo.png'

const Navigation = () => {
     return (
         <header>

            <div classname='pa4 mr3'>
                <h3>You are logged in as <span>
                <a className='link dim black f3 f4-l dib mr2 mr3-l'
                href='https://arise.ph' rel='profile'>Username</a></span></h3>
            </div>

            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a href="https://arise.ph" title="Home">
                <Tilt className="Tilt br2 pa2 ma3 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 400 }}>
                    <div classname='Tilt-inner'>
                        <img style={{paddingTop: '3 px', paddingBottom: '3px', marginBottom:'5px'}} alt='kms.arise.ph' src={logo}/>
                    </div>
                </Tilt>
                </a>            
         

         
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Profile">Profile</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Dashboard">Dashboard</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Projects">Projects</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Forum">Forum</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Sign Out">Sign Out</a>
                </div>
               
            </nav>
            
         </header>
     );
}

export default Navigation;