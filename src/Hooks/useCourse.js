import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
    const [coursesData, setCoursesData] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/solaiman5683/assignment9-json/main/course.json')
            .then(res => res.json())
            .then(data => setCoursesData(data))
    }, [setCoursesData])
    return [coursesData, setCoursesData];
}

export default useCourses;