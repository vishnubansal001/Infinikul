import { ReactComponent as LogoIcon } from "../../assets/logoFull.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as BellIcon } from "../../assets/bell.svg";

const TopBar = () => {
    const notiCount = 10;
    return (
        <div className="col-span-2 w-full h-full grid grid-cols-3 content-center items-center shadow-lg z-20 ">
            <a href="/" className="justify-self-start ml-10">
                <LogoIcon />
            </a>
            <div className="justify-self-center relative h-fit">
                <input
                    type="text"
                    name="search"
                    placeholder="search"
                    className="rounded-2xl w-[23em] outline-none border-2 border-[#d9d9d9] p-2 pl-12 drop-shadow-xl focus:border-[#6921ef] transition-all duration-300 ease-in-out"
                />
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="justify-self-end flex gap-3 items-center mr-10">
                <button
                    className={`w-14 h-14 relative grid place-items-center outline-none rounded-full overflow-hidden before:absolute before:right-2 before:top-1.5 before:text-center before:text-sm before:bg-white before:rounded-full before:content-['${
                        notiCount > 9 ? "9+" : notiCount.toString()
                    }'] before:font-bold  before:w-5 before:h-5 ${
                        notiCount <= 0 ? "before:hidden" : ""
                    }`}
                >
                    <BellIcon />
                </button>
                <button className="w-14 h-14 bg-gray-300 outline-none rounded-full overflow-hidden">
                    {/* <img src="" alt="" /> */}
                </button>
            </div>
        </div>
    );
};
export default TopBar;
