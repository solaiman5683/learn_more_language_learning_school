import React from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../../Hooks/useCourse';


const Courses = () => {
    const [coursesData] = useCourses();
    return (
        <div className="container p-4 mb-5">
            <h1 className='text-center'>All Courses</h1>
            <hr />
            <Row xs={1} md={3} className="g-4">
                {coursesData.map(cs => <Course course={cs} key={cs._id}></Course>)}
            </Row>
        </div>
    );
};

export default Courses;