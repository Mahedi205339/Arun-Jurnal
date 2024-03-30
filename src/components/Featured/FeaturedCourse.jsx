import { useEffect, useState } from "react";
import Title from "../Title/Title";
import CoursesCard from "./CoursesCard";

const FeaturedCourse = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // console.log(courses);
    const featuredCourse = courses?.filter(item => item?.category == 'featured');
    console.log(featuredCourse);
    console.log(featuredCourse);



    return (
        <div className="min-h-screen max-w-[1500px] mx-auto p-4">
            <Title
                headline={"Featured Courses"}
                subHeadline={"Explore Our Featured Courses"}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-8 md:my-24">
                {
                    featuredCourse?.map(item => (
                        <CoursesCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedCourse;