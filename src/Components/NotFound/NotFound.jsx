import React from 'react';
import { Button } from 'react-bootstrap';
import notfoundimg from './404.svg';

const NotFound = () => {
    return (
        <div>
            <img src={notfoundimg} alt="Page Not Found" style={{ width: '40%', display: 'block', margin: '30px auto' }} />
            <div className="text-center">
                <Button variant="primary" className="">Back to Home Page</Button>
            </div>
        </div>
    );
};

export default NotFound;