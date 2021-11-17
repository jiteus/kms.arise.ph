import React from "react";
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Instagram from '../images/instagram.png';
import Email from '../images/email.png';


const Footer = () => {
    return (
    
    <footer className="pv4 ph3 ph5-m ph6-l black tc">
        <small className="f6 db tc">© 2022 <b className="ttu">ARISE PHILIPPINES</b>., All Rights Reserved</small>
        <div className="tc mt3 w-100">
                       
            <a href="mailto:secretariat@arise.ph"  title="Email" className="link f6 dib ph2 link dim">
            <img className='icon'src={Email} alt='Email'></img></a>
            <a href="https://facebook.com"  title="Facebook" className="link f6 dib ph2 link dim">
            <img className='icon'src={Facebook} alt='Facebook'></img></a>
            <a href="https://twitter.com"  title="Twitter" className="link f6 dib ph2 link dim">
            <img className='icon'src={Twitter} alt='Twitter'></img></a>
            <a href="https://instagram.com"  title="Instagram" className="f6 dib ph2 link dim">
            <img className='icon'src={Instagram} alt='Instagram'></img></a>

            
        </div>

    </footer>
    );
}

export default Footer;