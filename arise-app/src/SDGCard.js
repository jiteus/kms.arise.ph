import React from 'react';

const SDGCard = ({id, name}) => {
    return (
        
        <div className='bg-light-blue dib br2 pa2 ma1 grow bw2 shadow-5'>
            <div>
                
                <h1>{id}</h1>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default SDGCard;