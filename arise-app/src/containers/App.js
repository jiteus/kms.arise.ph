
import React, {Component} from 'react';
import { projects } from '../projects';
import { sdg } from '../sdg';
import ProjectList from '../components/Projects/ProjectList';
import CardList from '../components/Sendai/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrBoundry from '../components/ErrBoundry';
import Navigation from '../components/Navigation/Navigation';
import AddProjectForm from '../components/AddProjectForm/AddProjectForm';
import Footer from '../components/Footer';




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

    loadUser = (data) => {
        this.setState({user:{
            id: data.id,
            name: data.name,
            email: data.email,
            password: '*******',
            role: data.role,
            org: data.org,
            joined: data.joined,
            projects:data.projects
        }})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
       
    // onInputChange = (event) => {
    //     this.setState({input: event.target.value});
    // }

    // onButtonSubmit = () => {
    //     console.log('clicked Submit');
    //     alert('Form Submitted. Thank you!');

    // }

    onRouteChange = () => {
        this.setState({route: 'home'});
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
                
                <div >
                    <Navigation onRouteChange={this.onRouteChange}/>
                    
                </div>
                    <div className='tc'>
                    {/* <SearchFilter /> */}
                    <SearchBox searchChange={this.onSearchChange}/>
                        
                        
                        <Scroll style={{height:'400px'}}>
                            <ErrBoundry>
                                <h1 className='f2'>My Projects ({projects.length})</h1>
                                <ProjectList projects={filterProjects}/>
                            </ErrBoundry>    
                        </Scroll>
                        <Scroll style={{height:'200px'}}>
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
                        <Footer />  
                    </div>
                </div>
            );

        
        
    }

}

export default App;