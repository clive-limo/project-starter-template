import {
  IoIosAdd,
  IoIosQrScanner,
  IoIosSearch,
  IoLogoReddit,
  IoMdSearch,
} from "react-icons/io";

import { AiFillRedditCircle, AiOutlineMenu } from "react-icons/ai";
import { LuMoreHorizontal } from "react-icons/lu";
export default function NavBar() {
  return (
    <nav className="flex flex-row bg-zinc-900 sticky top-0">
      <div className=" flex flex-row w-full mx-2 px-3 bg-zinc-900 border-b-[1px] border-zinc-600">
        <div className="flex flex-row gap-3">
          <AiOutlineMenu className="visible text-white text-[25px] my-auto xl:hidden" />
          <AiFillRedditCircle className="bg-white rounded-full text-purple-700 text-[30px] my-auto" />
          <div className="invisible w-0 md:w-auto md:visible h-full">
            <span className="text-xl text-white my-auto">not</span>
            <span className="text-4xl text-purple-700 my-auto">.</span>
            <span className="text-xl text-white my-auto">reddit</span>
          </div>
        </div>
        <div className="py-2 bg-zinc-800 my-2 mx-auto rounded-full flex flex-row px-3 xl:w-[650px]">
          <IoIosSearch className="text-2xl text-zinc-600 my-auto mx-1" />
          <input
            placeholder="Search Not.Reddit"
            className="text-sm text-zinc-600 pr-12 bg-zinc-800 my-auto placeholder-zinc-600 xl:w-[350px]"
          />
        </div>
        <div className="flex flex-row gap-3">
          <button className="invisible w-0 bg-white flex flex-row rounded-full md:my-auto justify-center py-1 px-2 md:visible md:w-auto">
            <IoIosQrScanner className="text-black text-lg my-auto" />
            <p className="text-black text-sm font-bold my-auto">Get App</p>
          </button>
          <button className=" font-bold text-sm my-auto bg-purple-800 rounded-full py-1 px-2">
            Log In
          </button>
          <LuMoreHorizontal className="text-white my-auto text-2xl" />
        </div>
      </div>
    </nav>
  );
}
