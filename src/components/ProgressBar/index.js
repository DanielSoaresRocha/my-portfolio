import React from 'react';
import './styles.css'


function ProgressBar ({ skill, width }) {

    return (
        <div className='progressBar'>
            <p>{skill}</p>
            <div data-anime='animate' className='progress' style={{ width: `${width}px` }} />
        </div>
    );
}

export default ProgressBar;
