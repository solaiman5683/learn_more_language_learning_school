import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/solaiman5683/assignment9-json/main/teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data.results));
    }, [])
    console.log(teachers)
    return (
        <div>
            <h1 className="text-center p-5">
                This is the Teachers page
                Total Teachers: {teachers.length}
            </h1>
        </div>
    );
};

export default Teachers;