import React, {Component} from 'react';
import ProjectItems from './ProjectItems';
import axios from 'axios';

class ProjectList extends Component {
    constructor(){
        super();
        this.setState({
            loading: true,
            projects: {}
        })
    }

    componentDidMount () {
        axios.get('/proxy/projects').then(response => {
            console.log(response);
        })
    }

    render(){
        if (this.state.loading === true){
            return(<h1>Loading. Please wait...</h1>);
        } else {
            return (
                <div><ProjectItems /></div>
            );
        }
        
    }

}

export default ProjectList;
