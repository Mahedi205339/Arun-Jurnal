import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import CoursesCard from "../../components/Featured/CoursesCard";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // console.log(courses);
    const allCourse = courses?.filter(item => item?.category == 'regular');
    console.log(allCourse);
    return (
        <div id="courses" className="min-h-screen max-w-[1500px] mx-auto p-4 ">
            <Title
                headline={"All Courses"}
                subHeadline={"Explore Our Courses "}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-8 md:my-24">
                {
                    allCourse?.map(item => (
                        <CoursesCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;