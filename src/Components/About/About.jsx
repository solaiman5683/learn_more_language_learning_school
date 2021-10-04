import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center py-3">About Us</h1>
            <hr />
            {/* < to="/about">About</> */}
            <div className="row">
                <div className="col-6 p-5">
                    <h3 style={{ borderLeft: "5px solid #FFB606", padding: "15px" }}>Who We Are</h3>
                    <p className="text-secondary">We are a Team to help you to improve your Language skills with some best Teachers from around the world. Our Teachers are heighly qualified and everyone is a native Speaker.</p>
                </div>
                <div className="col-6 p-5">
                    <h3 style={{ borderLeft: "5px solid #FFB606", padding: "10px" }}>What we do?</h3>
                    <p className="text-secondary">We theaches people from very begaining stage to active a strong language skills. You can improve your language skills by following our respective instructors. As they are specialist in thair own area.</p>
                </div>
            </div>
        </div>
    );
};

export default About;