import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../Hooks/useCourse';
import Course from '../Course/Course';
import HeroSection from '../HeroSection/HeroSection';


const Home = () => {
    const [coursesData] = useCourses();
    return (
        <div>
            <HeroSection></HeroSection>
            <div className="container p-5">
                <h2 className='text-center'>Our Recent Courses</h2>
                <hr />
                <Row xs={1} md={3} className="g-4">
                    {coursesData.length && <Course course={coursesData[0]}></Course>}
                    {coursesData.length && <Course course={coursesData[4]}></Course>}
                    {coursesData.length && <Course course={coursesData[6]}></Course>}
                </Row>
                <div className='text-center pt-4'>
                    <Link to="/courses" className="btn btn-dark px-4 py-2">Check all Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;