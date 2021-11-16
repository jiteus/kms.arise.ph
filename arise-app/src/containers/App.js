
import React, {Component} from 'react';
import { projects } from '../projects';
import ProjectList from '../components/ProjectList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './Project.css';
import ErrBoundry from '../components/ErrBoundry';

class App extends Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({projects: projects})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
       
    
    
    render () {
        const {projects, searchfield} = this.state;
        const filterProjects = projects.filter(project => {
            return project.project_title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return !projects.length ?
            <h1>Loading</h1> : 
            (
                <div className='tc'>
                    <h2 className='f2'>My Projects ({projects.length})</h2>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <ErrBoundry>
                        <ProjectList projects={filterProjects}/>
                    </ErrBoundry>    
                    </Scroll>
                </div>
            );

        
        
    }

}

export default App;