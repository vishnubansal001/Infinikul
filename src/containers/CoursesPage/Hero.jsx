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
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
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
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
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
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
        ],
    },
];

const Hero = () => {
    return (
        <div
            className={
                "h-screen w-full select-none grid"
                // + "grid-rows-[100px_calc(100vh - 100px)] grid-cols-[296px_calc(100vw - 296px)]"
            }
            style={{
                display: "grid",
                gridTemplateRows: "100px calc(100vh - 100px)",
                gridTemplateColumns: "296px calc(100vw - 296px)",
            }}
        >
            <TopBar />
            <SideBar />
            <div className="bg-[#fcfcfc] pl-20 overflow-y-auto">
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
