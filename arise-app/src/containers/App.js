
import React, {Component} from 'react';
<<<<<<< Updated upstream
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
=======
// import ProjectList from '../components/ViewProject/ProjectList';
// import CardList from '../components/Sendai/CardList';
import SearchBar from '../components/Navigation/SearchBar';
import Scroll from '../components/Scroll';
import './App.css';
import ErrBoundry from '../components/ErrBoundry';
import AddProjectForm from '../components/AddProject/AddProjectForm';
>>>>>>> Stashed changes
import Footer from '../components/Footer';
import TopNav from '../components/Navigation/TopNav';




class App extends Component {
    constructor() {
        super()
        this.state = {
            input:''
        }
    }


    // componentDidMount() {
    //     this.setState({projects: projects})
    // }

//TRACK 1 USER
    // loadUser = (data) => {
    //     this.setState({user:{
    //         id: data.id,
    //         name: data.name,
    //         email: data.email,
    //         password: '*******',
    //         role: data.role,
    //         org: data.org,
    //         joined: data.joined,
    //         projects:data.projects
    //     }})
    // }
    onRouteChange = () => {
         this.setState({route: 'home'});
     }
       
    // onInputChange = (event) => {
    //     this.setState({input: event.target.value});
    // }

    // onButtonSubmit = () => {
    //     console.log('clicked Submit');
    //     alert('Form Submitted. Thank you!');

    // }


    
render (){
        return (
                <div className='App'>
                <div>
                    <TopNav onRouteChange={this.onRouteChange}/>
                </div>
                    <div className='pa3 ma3'><SearchBar /></div>
                    <div className='tc'>                   
                        <Scroll style={{height:'400px'}}>
                            <ErrBoundry>
                                <h1 className='f2'>My Projects</h1>
                                {/* <ProjectList projects={projects}/> */}
                            </ErrBoundry>    
                        </Scroll>
                        <Scroll style={{height:'200px'}}>
                        <h1>The Sustainable Development Goals</h1>
                            {/* <CardList sdg={sdg}/> */}
                        </Scroll>
                        <Scroll>
                        <h1>New Project Submission</h1>
                            <AddProjectForm 
                                onInputChange={this.onInputChange}
                                onButtonSubmit={this.onRouteChange}
                            />
                        </Scroll>
                        <Footer />  
                    </div>
                </div>
            );

        
        
    }

}

export default App;