import {
    useEffect,
    useState
} from 'react';

const useTeachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/solaiman5683/assignment9-json/main/teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data.results));
    }, [])
    return teachers;
}

export default useTeachers;