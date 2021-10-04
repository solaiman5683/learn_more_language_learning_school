import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { course } = props;
    console.log(props.course);
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.course_name}</Card.Title>
                    <Card.Text>
                        {course.description.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <p className='text-center px-3 py-2 m-0'>Duration: {course.duration}weeks</p>
                            <span className="btn btn-dark my-2 d-block">Price: {course.fees} </span>
                        </div>
                        <div className="col-6" style={{ textAlign: "right" }}>
                            <p className="text-center px-3 py-2 m-0">Total Students: {course.enroled}</p>
                            <Link to="/enroll" className="my-2 btn btn-primary d-block">Enroll Course</Link>
                        </div>
                    </div>
                    
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;