import React from 'react';
import { Row } from 'react-bootstrap';
import useTeachers from '../../Hooks/useTeachers';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const teachers = useTeachers()
    return (
        <div className='container mb-5 pb-5'>
            <h1 className="text-center p-4">
                Total Teachers: {teachers.length}
            </h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {teachers.map(teacher => <Teacher teacher={teacher} key={teacher.cell}></Teacher>)}
            </Row>
        </div>
    );
};

export default Teachers;