import React from "react";
import './AddProjectForm.css';

const AddProjectForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>Please complete this form to add a New Project</p>
            <div className='center'>
            <div className='form center pa3 br2 shadow-5'>
                <input  type='tex' onInputChange={onInputChange}/>
                <button onClick={onButtonSubmit}> Submit </button>
            </div>
            </div>

            
         

        </div>
    );
}

export default AddProjectForm;