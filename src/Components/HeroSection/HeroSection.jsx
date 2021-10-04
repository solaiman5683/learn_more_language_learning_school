import React from 'react';
import { Link } from 'react-router-dom';
import nootbookImg from './notebook.svg'

const HeroSection = () => {
    const style = {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        alignItems: 'center'
    }
    return (
        <div style={{background: 'linear-gradient(to right, #8360c3, #2ebf91)'}}>
            <div style={style} className='container text-light'>
                <div>
                    <h2 className="fs-1">Learn a language. Open your world.</h2>
                    <p>Get the language skills, cultural understanding and confidence to open up your world with Berlitz.</p>
                    <Link to="/courses" className="btn btn-dark px-4 py-2">Check Our Language Courses</Link>
                </div>
                <div className="text-center">
                    <img src={nootbookImg} alt="NootBook" className="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;