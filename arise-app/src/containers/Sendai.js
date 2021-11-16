
import React, {Component} from 'react';
import { sdg } from '../sdg';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

const state = {
    sdg: sdg,
    searchfield: ''
}

class Sendai extends Component {
    constructor() {
        super()
        this.state = {
            sdg: sdg,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
       
    
    
    render () {
        const filterSdg = this.state.sdg.filter(sdg => {
            return sdg.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h2 className='f2'>The Global Goals for Sustainable Development by 2030</h2>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList sdg={filterSdg}/>
            </div>
        );
    }

}

export default Sendai;