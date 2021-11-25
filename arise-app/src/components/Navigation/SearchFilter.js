import React, {Component} from "react";
import './Navigation.css';

class SearchFilter extends Component {

    constructor() {
        super()
        this.state = {
             filter: 'Project Name',
        }
   }

   onFilterChange = (event) => {
        this.setState({selectFilter: event.target.value})
        }

    render () {
    return (
        <div className= 'pa2 ma3 br2'>
            <label  htmlFor='selectFilter' className="f4 b db mb2">Search by: <span className="normal black-60"></span></label>
            <select id='selectFilter' className='ba b--black-20 pa2 mb2 db w-100'
            onChange={this.onFilterChange}>
                <option className="f4 mr2" type="dropdown" name='selectFilterName' id="filtername" value="project_title">Project Name</option>
                <option className="f4 mr2" type="dropdown" name='selectFilterStatus' id="filterstatus" value="project_status">Project Status</option>
                <option className="f4 mr2" type="dropdown" name='selectFilterCat' id="filtercat" value="project_category">Project Category</option>
                <option className="f4 mr2" type="dropdown" name='selectFilterLoc' id="filterloc" value="project_location">Project Location</option>
                <option className="f4 mr2" type="dropdown" name='selectFilterPAWT' id="filterpawt" value="sendai_id">Sendai Goal</option>
                <option className="f4 mr2" type="dropdown" name='selectFilterOrg' id="filterorg" value="project_memorg">Member Organization</option>                            
                
                {/* <option className="f4 mr2" type="dropdown" name='selectProjType' id="webinar" value="webinar">Webinar</option> */}
            </select>
        </div>
    );
    }
}

export default SearchFilter;