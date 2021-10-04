import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimg from './404.svg';

const NotFound = () => {
    return (
        <div>
            <img src={notfoundimg} alt="Page Not Found" style={{ width: '40%', display: 'block', margin: '30px auto' }} />
            <div className="text-center">
                <Link to="/home" className="btn btn-primary">Back to Home Page</Link>
            </div>
        </div>
    );
};

export default NotFound;