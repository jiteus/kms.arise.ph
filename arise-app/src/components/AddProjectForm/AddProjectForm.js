import React from "react";

const AddProjectForm = () => {
    return (
        <div className='ma4 mt0'>
            <p className='f3'>Please complete this form to add a New Project</p>
            <div className='center'>
                <input classname='f4 pa2 w-100 center' type='tex' />
            </div>
            <div className='center'>
            <button className='w-10 grow link ph3 pv2 dib white bg-light-green'> Save </button>
            </div>

        </div>
    );
}

export default AddProjectForm;