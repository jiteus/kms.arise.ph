
import React, {Component} from 'react';
import { projects } from '../projects';
import ProjectList from '../components/ProjectList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
        const {projects, searchfield} = this.state;
        const filterProjects = projects.filter(project => {
            return project.project_title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(projects.length === 0 ){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h2 className='f2'>My Projects</h2>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ProjectList projects={filterProjects}/>
                    </Scroll>
                </div>
            );

        }
        
    }

}

export default App;