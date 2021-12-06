import React from 'react';
import error from './ORFI0N0.jpg';

const Notfound = () => {
    return (
        <div className = 'notfound' style={{marginTop:"25px",margin:'auto'}}>
            <h1 className='text-danger text-center'>SORRY RESULT NOT FOUND!!!!!!!</h1>
            <img src={error} style={{height:450,width:400}}/>
        </div>
    );
};

export default Notfound;