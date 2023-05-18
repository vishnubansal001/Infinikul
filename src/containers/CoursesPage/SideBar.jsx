import React from "react";

const SideBar = () => {
    return (
        <div className="w-full h-full">
            <div className="navs">
                <button>dashboard</button>
                <button>courses</button>
            </div>
            <div className="apply">
                <span className="msg">apply as a creator</span>
                <button className="applyBtn">get started</button>
            </div>
        </div>
    );
};

export default SideBar;
