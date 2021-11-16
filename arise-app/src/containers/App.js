
import React, {Component} from 'react';
import { projects } from '../projects';
import { sdg } from '../sdg';
import ProjectList from '../components/ProjectList';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrBoundry from '../components/ErrBoundry';
import Navigation from '../components/Navigation/Navigation';
import AddProjectForm from '../components/AddProjectForm/AddProjectForm';



class App extends Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            searchfield: '',
            input:''
        }
    }

    componentDidMount() {
        this.setState({projects: projects})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
       
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
        console.log('clicked Submit');
        alert('Form Submitted. Thank you!');

    }
    
    render () {
        const {projects, searchfield} = this.state;
        const filterProjects = projects.filter(project => {
            return project.project_title.toLowerCase()
            .includes(searchfield.toLowerCase());
        })

        return !projects.length ?
            <h1>Loading</h1> : 
            (
                <div className='App'>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Navigation />
                    {/* <SearchFilter /> */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    <p className='f3 link dim black underline pa3 pointer'>Sign Out</p></div>
                    <div className='tc'>
                        <h1 className='f2'>My Projects ({projects.length})</h1>
                        
                        <Scroll>
                            <ErrBoundry>
                                <ProjectList projects={filterProjects}/>
                            </ErrBoundry>    
                        </Scroll>
                        <Scroll>
                        <h1>The Sustainable Development Goals</h1>
                            <CardList sdg={sdg}/>
                        </Scroll>
                        <Scroll>
                        <h1>New Project Submission</h1>
                            <AddProjectForm 
                                onInputChange={this.onInputChange}
                                onButtonSubmit={this.onButtonSubmit}
                            />
                        </Scroll>  
                    </div>
                </div>
            );

        
        
    }

}

export default App;