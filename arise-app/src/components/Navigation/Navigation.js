import React from "react";
import Tilt from 'react-parallax-tilt';
import './Navigation.css';
import logo from './logo.png';
// import avatar from './avatar.png';

const Navigation = ({onRouteChange}) => {
     return (
         <header>
            {/* <div>
                <a class="pa4 mr3 db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="https://arise.ph" title="Profile">
                    <img src={avatar} className="icon br-100 h3 w3 dib" alt="avatar"></img></a>
            </div> */}

            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <div>                                
                    <a href="https://arise.ph" title="Home">
                        <Tilt className="Tilt br2 pa2 ma3 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 400 }}>
                            <div className='Tilt-inner'>
                                <img style={{paddingTop: '3 px', paddingBottom: '3px', marginBottom:'5px'}} alt='kms.arise.ph' src={logo}/>
                            </div>
                        </Tilt>
                    </a>            
                </div>
                        
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Profile">Profile</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Dashboard">Dashboard</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Projects">Projects</a>
                    <a className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Forum">Forum</a>
                    <p onClick={() => onRouteChange('signin')} className="link dim black f3 f4-l dib mr2 mr3-l" href="https://arise.ph" title="Sign Out">Sign Out</p>
                </div>
               
            </nav>
            
         </header>
     );
}

export default Navigation;