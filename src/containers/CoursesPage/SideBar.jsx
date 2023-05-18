import React from "react";
import rocket from "../../assets/rocket-dynamic-gradient.svg";
import dashIcon from "../../assets/dashboard_icon.svg";
import coursesIcon from "../../assets/coursesIcon.svg";

const mainAnchorClassName =
    "font-bold flex flex-row gap-2 items-center p-2 rounded-r-2xl bg-white mr-10" +
    " ";

const SideBar = () => {
    return (
        <div className="w-full h-full shadow-[5px_0_15px_3px_rgba(0,0,0,0.1)] z-10">
            <div className="flex flex-col gap-3 mt-10">
                <a
                    href="#"
                    className={mainAnchorClassName + " hover:drop-shadow-xl"}
                >
                    <img src={dashIcon} draggable={false} />
                    dashboard.
                </a>
                <a href="#" className={mainAnchorClassName + "drop-shadow-xl "}>
                    <img src={coursesIcon} draggable={false} />
                    courses.
                </a>
            </div>
            <div
                className="w-10/12 m-auto p-5 bg-[#6921ef] rounded-3xl bg-no-repeat bg-left "
                // style={{
                //     backgroundImage: `url(${rocket})`,
                // }}
            >
                <p className="text-white text-2xl font-bold ">
                    apply as a creator
                </p>
                <img src={rocket} className="float-right" />
                <button className="text-[#6921ef] text-xs w-full py-3 uppercase bg-white rounded-2xl font-bold">
                    get started {"->"}
                </button>
            </div>
        </div>
    );
};

export default SideBar;
