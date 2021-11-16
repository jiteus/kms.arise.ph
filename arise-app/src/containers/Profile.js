
import React, {Component} from 'react';
import MemberList from '../components/MemberList';
import SearchBox from '../components/SearchBox';
import './App.css';


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            member: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json(); 
        })
        .then(users => { this.setState({member: users}) 
        });
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
       
    
    
    render () {
        const filterMembers = this.state.member.filter(member => {
            return member.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.member.length === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h2 className='f2'>My Profile</h2>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <MemberList member={filterMembers}/>
                </div>
            );

        }
        
    }

}

export default Profile;