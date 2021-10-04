import React from 'react';

const Contact = () => {
    return (
        <div className="text-center p-4 bg-light" >
            <h1>Contact Info</h1>
            <p>Welcome to our Website. We are glad to have you around.</p>
            <hr style={{ width: '40%', margin: 'auto' }} />
            <div className="container">
                <div className="row text-center p-4">
                    <div className="col-4"><h4>Phone: +8801701234506</h4></div>
                    <div className="col-4"><h4>Email: sulaiman5683@gmail.com</h4></div>
                    <div className="col-4"><h4>Address: Dhaka, Bangladesh</h4></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;