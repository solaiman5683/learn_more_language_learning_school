import React from 'react';

const Teacher = (props) => {
    const {teacher} = props;
    console.log(teacher);
    return (
        <div>
            <div className="text-center shadow p-3 h-100" style={{borderRadius: '25px'}}>
                <img src={teacher.picture.large} className='rounded-pill' alt='teacher' />
                <h3 className='py-2'>{teacher.name.title} {teacher.name.first} {teacher.name.last}</h3>
                <p>Email: { teacher.email }</p>
                <p>Phone: { teacher.phone }</p>
                <p>Country: { teacher.location.country }</p>
            </div>
        </div>
    );
};

export default Teacher;