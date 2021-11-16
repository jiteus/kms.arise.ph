import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className= 'pa2 ma3 br2'>
        <input className='pa3 br2 ma3 ba b--blue bg-lightest-blue'
        type='search'
        placeholder='search projects' 
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;