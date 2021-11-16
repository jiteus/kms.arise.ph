import React from 'react';

const SDGCard = ({id, name, desc}) => {
    return (
        
        <div className='bg-light-blue dib br2 pa2 ma1 grow bw2 shadow-5'>
            {/* <h2>The Global Goals for Sustainable Development by 2030</h2> */}
            <img alt='SDG' src={'https://robohash.org/${id}?100x100'} />
            <div>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default SDGCard;