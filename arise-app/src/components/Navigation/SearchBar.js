import React, {Component} from "react";
import './Navigation.css';
// import SearchBox from './SearchBox';
// import SearchFilter from './SearchFilter';



class SearchBar  extends Component {

      onRouteChange = () => {
          this.setState({route: 'searchresults'});
      }


      
          render(){
          return (
               <div>
                    {/* <SearchFilter filter={this.state.filter} /> */}
                    {/* <SearchBox keyword={this.state.keyword} /> */}
                    <button onClick={this.onRouteChange}>SEARCH</button>
               </div>                   
          );
          }
}
            
     

export default SearchBar;