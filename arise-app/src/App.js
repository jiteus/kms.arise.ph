
import React, {Component} from 'react';
import { projects } from './projects';
import ProjectList from './ProjectList';
import SearchBox from './SearchBox';
import './Project.css';


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
        const filterProjects = this.state.projects.filter(projects => {
            return projects.project_title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h2 className='f2'>My Projects</h2>
                <SearchBox searchChange={this.onSearchChange}/>
                <ProjectList projects={filterProjects}/>
            </div>
        );
    }

}

export default App;