
import React, {Component} from 'react';
import { sdg } from './sdg';
import CardList from './CardList';
import SearchBox from './SearchBox';

const state = {
    sdg: sdg,
    searchfield: ''
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            sdg: sdg,
            searchfield: ''
        }
    }

    onSearchChange(event){
        console.log(event.target.value);
    }
    
    render () {
        return (
            <div className='tc'>
                <h2>The Global Goals for Sustainable Development by 2030</h2>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList sdg={sdg}/>
            </div>
        );
    }
}


export default App;