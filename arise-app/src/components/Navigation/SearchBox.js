import React from "react";

class SearchBox extends React.Component {

    constructor() {
        super()
        this.state = {
            keyword: ''

        }
   }

   onSearchChange = (event) => {
        this.setState({keyword: event.target.value})
        }

    render(){
        return (
        <div className= 'pa2 ma3 br2'>
            <input className='pa3 br2 ma3 ba b--blue bg-lightest-blue'
            id= 'searchfield'
            type='search'
            placeholder='search projects' 
            onChange={this.onSearchChange}
            />
        </div>
    );
    }
}

export default SearchBox;