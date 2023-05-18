import logo from "../../assets/logoFull.svg";
import search from "../../assets/search.svg";

const TopBar = () => {
    return (
        <div className="col-span-2 w-full h-full grid grid-cols-3 content-center shadow-lg z-10 ">
            <a href="/" className="justify-self-start pl-5">
                <img src={logo} alt="" draggable={false} />
            </a>
            <div className="justify-self-center relative h-fit">
                <input
                    type="text"
                    name="search"
                    placeholder="search"
                    className="rounded-2xl w-[23em] border-2 border-[#d9d9d9] outline-none py-1.5 pl-12 pr-1.5 drop-shadow-xl"
                />
                <img
                    src={search}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    draggable={false}
                />
            </div>
            <div className="justify-self-end">
                <button className="w-14 h-14 " style={{ "--noti-count": "9+" }}>
                    N
                </button>
                <button className="w-14 h-14 outline-none rounded-full overflow-hidden">
                    <img src="" alt="" />
                </button>
            </div>
        </div>
    );
};
export default TopBar;
