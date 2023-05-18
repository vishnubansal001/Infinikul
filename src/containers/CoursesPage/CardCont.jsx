import React from "react";
import Card from "./Card";

const CardCont = ({ courseCategory, courses }) => {
    return (
        <div className="py-4 relative">
            <div className="py-3 text-2xl font-semibold">{courseCategory}</div>
            <div className="flex flex-row gap-5 w-full overflow-hidden">
                <button className="absolute top-1/2 w-10 h-10 p-1 rounded-xl bg-white">
                    {"<"}
                </button>
                {courses.map((course, i) => (
                    <Card
                        courseCreator={course.courseCreator}
                        courseName={course.courseName}
                        preview={course.preview}
                        price={course.price}
                        rating={course.rating}
                        key={course.courseName + "-" + i}
                    />
                ))}
                <button className="absolute top-1/2 w-10 h-10 p-1 rounded-xl bg-white">
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default CardCont;
