import React from "react";
import Tilt from 'react-parallax-tilt';
import './Navigation.css';
import logo from './logo.png'

const Navigation = () => {
     return (
         <nav classname='ma4 mt0'>
        <div>
            <Tilt className="Tilt br2 pa2 ma3 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 400 }}>
                <div classname='Tilt-inner'>
                    <img style={{paddingTop: '3 px', paddingBottom: '3px', marginBottom:'5px'}} alt='kms.arise.ph' src={logo}/>
                </div>
            </Tilt>            
         </div>
         <div>
            <h3>You are logged in as username</h3>
         </div>
         </nav>
     );
}

export default Navigation;