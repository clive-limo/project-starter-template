import {
  IoIosAdd,
  IoIosQrScanner,
  IoIosSearch,
  IoLogoReddit,
  IoMdSearch,
} from "react-icons/io";
export default function NavBar() {
  return (
    <header className="flex flex-row px-6 bg-zinc-900 border-b-[1px] border-zinc-600">
      <div className="flex flex-1 flex-row">
        <IoLogoReddit className="text-purple-700 text-[30px] my-2 mr-3" />
        <p className="text-xl text-white my-auto">not.reddit</p>
      </div>
      <div className="flex-[3]">
        <div className=" w-4/5 py-2 bg-zinc-800 my-1 mx-auto rounded-full border-[.5px] border-zinc-600 flex flex-row px-3">
          <IoIosSearch className="text-2xl text-zinc-600 my-auto mx-1" />
          <input
            placeholder="Search Not.Reddit"
            className="text-sm text-zinc-600 bg-zinc-800 my-auto placeholder-zinc-600"
          />
        </div>
      </div>
      <div className="flex flex-[1.5] flex-row gap-2">
        <button className="flex-[.7] bg-white flex flex-row rounded-full my-2 justify-center">
          <IoIosQrScanner className="text-black text-xl my-auto" />
          <p className="text-black font-bold my-auto">Get App</p>
        </button>
        <button className="flex-[.7] font-bold text-sm my-2 bg-purple-800 rounded-full">
          Log In
        </button>
      </div>
    </header>
  );
}
