import React from "react";
import rocket from "../../assets/rocket-dynamic-gradient.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard_icon.svg";
import { ReactComponent as CoursesIcon } from "../../assets/coursesIcon.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

const mainAnchorClassName =
    "font-bold flex flex-row gap-2 items-center p-2 rounded-r-2xl bg-white mr-10" +
    " ";

const SideBar = () => {
    return (
        <div className="w-full h-full shadow-[1px_0_15px_1px_rgba(0,0,0,0.1)] z-10 flex flex-col">
            <div className="flex flex-col gap-3 mt-10">
                <a
                    href="#"
                    className={mainAnchorClassName + " hover:drop-shadow-xl"}
                >
                    <DashboardIcon />
                    dashboard.
                </a>
                <a href="#" className={mainAnchorClassName + "drop-shadow-xl "}>
                    <CoursesIcon />
                    courses.
                </a>
            </div>
            <div className="w-9/12 m-auto p-5 bg-[#6921ef] rounded-3xl mb-10">
                <p
                    className="text-white text-2xl font-bold pb-10 bg-no-repeat bg-right-bottom"
                    style={{
                        backgroundImage: `url(${rocket})`,
                    }}
                >
                    apply as a <br />
                    creator.
                </p>
                <button className="text-[#6921ef] text-xs w-full py-3 uppercase bg-white rounded-2xl font-bold flex items-center justify-center gap-2">
                    get started <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default SideBar;
