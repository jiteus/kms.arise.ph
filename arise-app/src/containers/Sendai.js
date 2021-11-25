
import React, {Component} from 'react';
import { sdg } from '../sdg';
<<<<<<< Updated upstream:arise-app/src/containers/Sendai.js
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
=======
import CardList from './CardList';
>>>>>>> Stashed changes:arise-app/src/components/Sendai/Sendai.js
import './App.css';

class Sendai extends Component {
    constructor() {
        super()
        this.state = {
            sdg: sdg,
        }
    }
    
    render () {
        
        return (
            <div className='tc'>
                <h2 className='f2'>The Global Goals for Sustainable Development by 2030</h2>
                <CardList sdg={filterSdg}/>
            </div>
        );
    }

}

export default Sendai;