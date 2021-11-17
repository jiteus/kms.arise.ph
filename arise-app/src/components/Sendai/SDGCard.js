import React from 'react';

const SDGCard = ({tracker, logo}) => {
    return (
        
        <div className='bg-light-blue dib br2 pa2 ma1 grow bw2 shadow-5'>
            <div>
            <a href={tracker} target='_blank' rel='noreferrer'>
            <img src={logo} alt='{desc}'/>
            </a>

            </div>
        </div>
    );
}

export default SDGCard;