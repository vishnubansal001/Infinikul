import React from "react";
import previewPlaceholder from "../../assets/coursesPreviewPlaceholder.png";
import star from "../../assets/Star_1.svg";

const Card = ({ preview, courseName, courseCreator, rating, price }) => {
    return (
        <a
            href="#"
            style={{
                boxShadow: "inset 0 0 0 0.5px #8c8c8c",
            }}
            className="relative w-[344px] h-[262px] rounded-[2rem] grid grid-rows-[64%_36%] bg-white"
        >
            <div className="w-full h-full">
                <img src={preview || previewPlaceholder} alt="" />
                <span className="p-1.5 py-1 rounded-xl absolute top-3 right-3 text-sm bg-white flex gap-1 items-center flex-row">
                    {rating}
                    <img src={star} alt="⭐" />
                </span>
            </div>
            <div className="p-3 px-5 grid grid-cols-[70%_30%] gap-1 border-t-2 border-t-purple-600">
                <span className="font-bold leading-4">{courseName}</span>
                <span className="row-span-2 font-semibold justify-self-end self-end">
                    &#8377;{price}
                </span>
                <span className="text-xs">{courseCreator}</span>
            </div>
        </a>
    );
};
export default Card;