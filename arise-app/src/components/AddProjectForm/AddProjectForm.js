
import React from "react";
import './AddProjectForm.css';

 class AddProjectForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: '',
            type: '',
            desc: '',
            status: '',
            category: '',
            sdg: '',
            location: '',
            start: '',
            end: '',
        }
    }



    onTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    onTypeChange = (event) => {
        this.setState({type: event.target.value})
    }

    onDescChange = (event) => {
        this.setState({desc: event.target.value})
    }

    onStatusChange = (event) => {
        this.setState({status: event.target.value})
    }

    onCategoryChange = (event) => {
        this.setState({category: event.target.value})
    }

    onSdgChange = (event) => {
        this.setState({sdg: event.target.value})
    }

    onLocationChange = (event) => {
        this.setState({location: event.target.value})
    }

    onStartChange = (event) => {
        this.setState({start: event.target.value})
    }

    onEndChange = (event) => {
        this.setState({end: event.target.value})
    }

    onClick = () => {
        this.props.onRouteChange('home');
    }
    
    //SUBMIT FORM FUNCTION
    // onSubmitForm = () => {
    //     fetch('http://localhost:3001/form', {
    //         method: 'put',
    //         header: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //                id: this.state.user.id
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(user => {
    //         if (user) {
    //             this.props.loadUser(user)
    //             this.props.onRouteChange('home');
    //         }
    //     })
        
    // }
  

    render(){
        
        return (
            <div>
                <p className='f3 black'>Please complete this form to add a New Project</p>
                
                <div className='center'>
                    <form className="form pa4 white">
                        <fieldset>
                        <div>
                            <label  htmlFor="project_title" className="f4 b db mb2">Project Title <span className="normal black-60">(required)</span></label>
                            <input id="inputTitle" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="title-desc"
                                onChange={this.onTitleChange}
                                />
                            <small id="title-desc" className="f6 black-60 db mb3">Helper text  htmlFor the form control.</small>

                            {/* <label  htmlFor="project_poc" className="f4 b db mb2">Project Contact Person </label>
                            <input id="inputName" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="poc-desc"
                                
                                />
                            <small id="name-desc" className="f6 black-60 db mb3">Name of Project Owner or Organizer</small>

                            <label  htmlFor="project_pocnum" className="f4 b db mb2">Project Contact Number <span className="normal black-60">(required)</span></label>
                            <input id="inputPOCNumber" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" aria-describedby="tel-desc"
                               
                                />
                            <small id="tel-desc" className="f6 black-60 db mb3">Please enter a valid number, no dashes, no spaces.</small>

                            <label  htmlFor="project_pocemail" className="f4 b db mb2">Project Contact Email <span className="normal black-60">(required)</span></label>
                            <input id="inputPOCEmail" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="email-desc"
                                 
                                />
                            <small id="email-desc" className="f6 black-60 db mb3">Please enter a valid email address</small> */}
                        </div>
                        </fieldset>
                        <fieldset>

                            <div>
                                <label  htmlFor="inputProjDesc"  className="f4 b db mb2">Project Description <span  className="normal black-60">(required)</span></label>
                                <small id="projdesc-desc"  className="f6 black-60">Enter a brief summary of your project. 
                                {/* Can use this text to <a href="#"  className="link underline black-80 hover-blue">link to more info.</a> */}
                                </small>
                                <textarea id="project_desc" name="inputProjDesc"  className="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2" aria-describedby="projdesc-desc"
                                onChange={this.onDescChange}></textarea>
                                
                            </div>

                            <label  htmlFor='selectProjType' className="f4 b db mb2">Project Type <span className="normal black-60">(required)</span></label>
                            <select className='ba b--black-20 pa2 mb2 db w-100'
                            onChange={this.onTypeChange}>
                                    <option value="">Select option from dropdown</option>
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="dialogue" value="dialogue">Dialogue</option>
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="document" value="document">Document</option>
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="education" value="education">Education</option>
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="fundraiser" value="fundraiser">Fundraiser</option>
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="campaign" value="campaign">Media Campaign</option>                            
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="training" value="training">Training</option>
                                    <option className="f4 mr2" type="dropdown" name='selectProjType' id="webinar" value="webinar">Webinar</option>
                            </select>

                            <label  htmlFor='selectProjCategory' className="f4 b db mb2">Project Category <span className="normal black-60">(required)</span></label>
                            <small id="pcategory-desc" className="f6 black-80 db mb3">Select one Work Theme or Priority Area</small>
                            <select className='ba b--black-20 pa2 mb2 db w-100'
                            onChange={this.onCategoryChange}>
                                    <option value="">Select option from dropdown</option>
                                    <option className="f4 mr2" type="dropdown" id="drr" value="wt1" name="selectProjCategory">Disaster Risk Management Strategies</option>
                                    <option className="f4 mr2" type="dropdown" id="educ" value="wt2" name="selectProjCategory">Education and Training</option>
                                    <option className="f4 mr2" type="dropdown" id="urr" value="wt3" name="selectProjCategory">Urban Risk Resilience</option>
                                    <option className="f4 mr2" type="dropdown" id="msmse" value="pa1" name="selectProjCategory">Small and Medium-size Businesses</option>
                                    <option className="f4 mr2" type="dropdown" id="inv" value="pa2" name="selectProjCategory">Investors and Investments</option>                            
                                    <option className="f4 mr2" type="dropdown" id="ins" value="pa3" name="selectProjCategory">Re-Insurance</option>
                                    <option className="f4 mr2" type="dropdown" id="rinf" value="pa3" name="selectProjCategory">Resilient Infrastructure</option>
                            </select>

                            <label  htmlFor='selectProjStatus' className="f4 b db mb2">Project Status <span className="normal black-60">(required)</span></label>
                            <small id="pstatus-desc" className="f6 black-80 db mb3"></small>
                            <select className='ba b--black-20 pa2 mb2 db w-100'
                            onChange={this.onStatusChange}>
                                    <option value="">Select option from dropdown</option>
                                    <option className="f4 mr2" type="dropdown" id="new" value="new" name="selectProjStatus">New (Scheduled)</option>
                                    <option className="f4 mr2" type="dropdown" id="ongoing" value="ongoing" name="selectProjStatus">Ongoing (Started)</option>
                                    <option className="f4 mr2" type="dropdown" id="completed" value="conpleted" name="selectProjStatus">Completed (Done)</option>
                            </select>

                            <label  htmlFor='selectProjGoal' className="f4 b db mb2">Sustainable Development Goal <span className="normal black-60">(required)</span></label>
                            <small id="pstatus-desc" className="f6 black-80 db mb3"></small>
                            <select className='ba b--black-20 pa2 mb2 db w-100'
                            onChange={this.onSdgChange}>
                                    <option value="">Select option from dropdown</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg1" value="sdg1" name="selectProjGoal">1 No Poverty</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg2" value="sdg2" name="selectProjGoal">2 Zero Hunger</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg3" value="sdg3" name="selectProjGoal">3 Good Health and Well-being</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg4" value="sdg4" name="selectProjGoal">4 Quality Education</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg5" value="sdg5" name="selectProjGoal">5 Gender Equality</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg6" value="sdg6" name="selectProjGoal">6 Clean Water and Sanitation</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg7" value="sdg7" name="selectProjGoal">7 Affordable and Clean Energy</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg8" value="sdg8" name="selectProjGoal">8 Decent Work and Economic Growth</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg9" value="sdg9" name="selectProjGoal">9 Industry, Innovation and Infrastructure</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg10" value="sdg10" name="selectProjGoal">10 Reduced Inequalities</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg11" value="sdg11" name="selectProjGoal">11 Sustainable Cities and Communities</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg12" value="sdg12" name="selectProjGoal">12 Responsible Consumption and Production</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg13" value="sdg13" name="selectProjGoal">13 Climate Action</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg14" value="sdg14" name="selectProjGoal">14 Life Below Water</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg15" value="sdg15" name="selectProjGoal">15 Life on Land</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg16" value="sdg16" name="selectProjGoal">16 Peace, Justice and Strong Institutions</option>
                                    <option className="f4 mr2" type="dropdown" id="sdg17" value="sdg17" name="selectProjGoal">17 Partnership  htmlFor the Goals</option>
                            </select>
                        </fieldset>

                        <fieldset>
                        <label  htmlFor="inputLocation" className="f4 b db mb2">Target Location <span className="normal black-60">(required)</span></label>
                            <input id="inputLocation" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="location-desc"
                                onChange={this.onLocationChange}
                            />
                            <small id="location-desc" className="f6 black-60 db mb3">Helper text  htmlFor the form control.</small>

                            <label  htmlFor="inputTStart" className="f4 b db mb2">Target Start Date <span className="normal black-60">(required)</span></label>
                            <input id="inputTStart" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="date" aria-describedby="tstart-desc"
                                onChange={this.onStartChange}
                            />
                            <small id="tstart-desc" className="f6 black-60 db mb3">Helper text  htmlFor the form control.</small>

                            <label  htmlFor="inputTEnd" className="f4 b db mb2">Target End Date <span className="normal black-60">(required)</span></label>
                            <input id="inputTEnd" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="date" aria-describedby="tenddate-desc"
                                onChange={this.onEndChange}
                            />
                            <small id="tend-desc" className="f6 black-60 db mb3">Helper text  htmlFor the form control.</small>

                            {/* <label  htmlFor="inputTPeople" className="f4 b db mb2">Target Beneficiaries <span className="normal black-60">(optional)</span></label>
                            <input id="inputTPeople" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" aria-describedby="tpeople-desc"/>
                            <small id="tpeople-desc" className="f6 black-60 db mb3">Please enter number of people to benefit</small>
                             */}
                        </fieldset>


                        <button onClick={this.onClick}>
                         Submit Project </button>
                    </form>
                </div>
            </div>
        
        );
    }
}


export default AddProjectForm;