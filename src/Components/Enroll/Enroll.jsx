import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Enroll = () => {
    return (
        <div>
            <Alert variant='success' className='text-center my-5 fs-1'>
                Congratulations! You have successfully Enrolled this Course.
            </Alert>
            <div className="text-center">
                <Link to="/home" className="btn btn-primary">Back to Home Page</Link>
            </div>
        </div>
    );
};

export default Enroll;