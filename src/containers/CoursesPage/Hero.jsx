import React, { useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import CardCont from "./CardCont";

const DATA = [
    {
        category: "🚀physics",
        courses: [
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
        ],
    },
    {
        category: "🚀physics",
        courses: [
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
        ],
    },
    {
        category: "🚀physics",
        courses: [
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
            },
        ],
    },
];

const Hero = () => {
    return (
        <div
            className="min-h-screen min-w-full select-none grid grid-rows-[100px_auto] grid-cols-[296px_auto]"
            style={{
                display: "grid",
                gridTemplateRows: "100px auto",
                gridTemplateColumns: "",
            }}
        >
            <TopBar />
            <SideBar />
            <div className="bg-[#fcfcfc]">
                <h1 className="font-bold text-[2em] py-3">hey, Mayank !</h1>
                {DATA.map((data, i) => (
                    <CardCont
                        courseCategory={data.category}
                        courses={data.courses}
                        key={data.category + "-" + i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
