import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTeachers from '../../Hooks/useTeachers';
import useCourses from '../../Hooks/useCourse';
import Course from '../Course/Course';
import HeroSection from '../HeroSection/HeroSection';
import Teacher from '../Teacher/Teacher';


const Home = () => {
    const [coursesData] = useCourses();
    const teachers = useTeachers();
    return (
        <div className="mb-5">
            <HeroSection></HeroSection>
            <div className="container p-5">
                <h2 className='text-center'>Our Recent Courses</h2>
                <hr />
                <Row xs={1} md={2} lg={3} className="g-4 py-4">
                    {coursesData.length && <Course course={coursesData[0]}></Course>}
                    {coursesData.length && <Course course={coursesData[4]}></Course>}
                    {coursesData.length && <Course course={coursesData[6]}></Course>}
                    {coursesData.length && <Course course={coursesData[9]}></Course>}
                </Row>
                <div className='text-center pt-4'>
                    <Link to="/courses" className="btn btn-dark px-4 py-2">Check all Courses</Link>
                </div>
            </div>
            <div className="container p-5">
                <h2 className='text-center'>Our Best Teachers</h2>
                <hr />
                <Row xs={1} md={2} lg={3} className="g-4 py-4">
                    {teachers.length && <Teacher teacher={teachers[0]}></Teacher>}
                    {teachers.length && <Teacher teacher={teachers[3]}></Teacher>}
                    {teachers.length && <Teacher teacher={teachers[5]}></Teacher>}
                </Row>
                <div className='text-center pt-4'>
                    <Link to="/teachers" className="btn btn-dark px-4 py-2">All Teachers</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;