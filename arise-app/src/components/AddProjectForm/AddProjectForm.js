import React from "react";
import './AddProjectForm.css';

const AddProjectForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 black'>Please complete this form to add a New Project</p>
            
            <div className='center'>
                <form className="form pa4 white">
                    <fieldset>
                    <div>
                        <label for="project_title" className="f4 b db mb2">Project Title <span className="normal black-60">(required)</span></label>
                        <input id="inputTitle" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="title-desc"
                            // onInputChange={onTitleInputChange} 
                            />
                        <small id="title-desc" className="f6 black-60 db mb3">Helper text for the form control.</small>

                        <label for="project_poc" className="f4 b db mb2">Project Contact Person </label>
                        <input id="inputName" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="poc-desc"
                            // onInputChange={onNameInputChange} 
                            />
                        <small id="name-desc" className="f6 black-60 db mb3">Name of Project Owner or Organizer</small>

                        <label for="project_pocnum" className="f4 b db mb2">Project Contact Number <span className="normal black-60">(required)</span></label>
                        <input id="inputPOCNumber" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" aria-describedby="tel-desc"
                            // onInputChange={onTelInputChange}
                            />
                        <small id="tel-desc" className="f6 black-60 db mb3">Please enter a valid number, no dashes, no spaces.</small>

                        <label for="project_pocemail" className="f4 b db mb2">Project Contact Email <span className="normal black-60">(required)</span></label>
                        <input id="inputPOCEmail" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="email-desc"
                            // onInputChange={onEmailInputChange} 
                            />
                        <small id="email-desc" className="f6 black-60 db mb3">Please enter a valid email address</small>
                    </div>
                    </fieldset>
                    <fieldset>
                        <label for='selectProjType' className="f4 b db mb2">Project Type <span className="normal black-60">(required)</span></label>
                        <select className='ba b--black-20 pa2 mb2 db w-100'>
                                <option value="">Select option from dropdown</option>
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="dialogue" value="dialogue">Dialogue</option>
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="document" value="document">Document</option>
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="education" value="education">Education</option>
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="fundraiser" value="fundraiser">Fundraiser</option>
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="campaign" value="campaign">Media Campaign</option>                            
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="training" value="training">Training</option>
                                <option className="f4 mr2" type="dropdown" name='selectProjType' id="webinar" value="webinar">Webinar</option>
                        </select>

                        <label for='selectProjCategory' className="f4 b db mb2">Project Category <span className="normal black-60">(required)</span></label>
                        <small id="pcategory-desc" className="f6 black-80 db mb3">Select one Work Theme or Priority Area</small>
                        <select className='ba b--black-20 pa2 mb2 db w-100'>
                                <option value="">Select option from dropdown</option>
                                <option className="f4 mr2" type="dropdown" id="drr" value="wt1" name="selectProjCategory">Disaster Risk Management Strategies</option>
                                <option className="f4 mr2" type="dropdown" id="educ" value="wt2" name="selectProjCategory">Education and Training</option>
                                <option className="f4 mr2" type="dropdown" id="urr" value="wt3" name="selectProjCategory">Urban Risk Resilience</option>
                                <option className="f4 mr2" type="dropdown" id="msmse" value="pa1" name="selectProjCategory">Small and Medium-size Businesses</option>
                                <option className="f4 mr2" type="dropdown" id="inv" value="pa2" name="selectProjCategory">Investors and Investments</option>                            
                                <option className="f4 mr2" type="dropdown" id="ins" value="pa3" name="selectProjCategory">Re-Insurance</option>
                                <option className="f4 mr2" type="dropdown" id="rinf" value="pa3" name="selectProjCategory">Resilient Infrastructure</option>
                        </select>

                        <label for='selectProjStatus' className="f4 b db mb2">Project Status <span className="normal black-60">(required)</span></label>
                        <small id="pstatus-desc" className="f6 black-80 db mb3"></small>
                        <select className='ba b--black-20 pa2 mb2 db w-100'>
                                <option value="">Select option from dropdown</option>
                                <option className="f4 mr2" type="dropdown" id="new" value="new" name="selectProjStatus">New (Scheduled)</option>
                                <option className="f4 mr2" type="dropdown" id="ongoing" value="ongoing" name="selectProjStatus">Ongoing (Started)</option>
                                <option className="f4 mr2" type="dropdown" id="completed" value="conpleted" name="selectProjStatus">Completed (Done)</option>
                        </select>

                        <label for='selectProjGoal' className="f4 b db mb2">Sustainable Development Goal <span className="normal black-60">(required)</span></label>
                        <small id="pstatus-desc" className="f6 black-80 db mb3"></small>
                        <select className='ba b--black-20 pa2 mb2 db w-100'>
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
                                <option className="f4 mr2" type="dropdown" id="sdg17" value="sdg17" name="selectProjGoal">17 Partnership for the Goals</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label for="inputProjDesc" class="f4 b db mb2">Project Description <span class="normal black-60">(required)</span></label>
                            <textarea id="project_desc" name="inputProjDesc" class="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2" aria-describedby="projdesc-desc"></textarea>
                            <small id="projdesc-desc" class="f6 black-60">Enter a brief summary of your project. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small>
                        </div>
                    </fieldset>


                    <button onClick={onButtonSubmit}> Submit </button>
                </form>
            </div>
        </div>
    );
}

export default AddProjectForm;