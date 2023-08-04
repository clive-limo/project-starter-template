"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { PiTelevisionLight, PiShootingStar } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbBallTennis } from "react-icons/tb";
import { GiCrystalShine } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="h-screen w-72 bg-zinc-900 pt-14 pr-8 pl-2 py-2 flex flex-col overflow-y-auto">
      <div className="flex flex-row text-white px-2 py-1 hover:bg-zinc-700 rounded-r-lg mt-2">
        <LiaHomeSolid className="text-white text-3xl p-1" />
        <Link href={""} className="text-sm my-auto font-light px-1">
          Home
        </Link>
      </div>
      <div className="flex flex-row text-white px-2 py-1 hover:bg-zinc-700 rounded-r-lg mb-2">
        <BsFillArrowUpRightCircleFill className="text-white text-3xl p-1" />
        <Link href={""} className="text-sm my-auto font-light px-1">
          Popular
        </Link>
      </div>
      <span className="h-[1px] bg-zinc-600 my-1"></span>
      <div className="relative flex flex-row w-full rounded-lg hover:bg-zinc-700 mt-2">
        <p className="text-sm font-light text-zinc-400 p-2">TOPICS</p>
        <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
      </div>
      <div>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <IoGameControllerOutline className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Gaming</p>
          <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <TbBallTennis className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Sports</p>
          <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <AiOutlineLineChart className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Business</p>
          <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <GiCrystalShine className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Crypto</p>
          <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <PiTelevisionLight className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">
            Television
          </p>
          <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <PiShootingStar className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">
            Celebrity
          </p>
          <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
        </button>
      </div>
      <p className="w-20 text-white font-bold text-[12px] rounded-full mx-1 my-2 hover:bg-zinc-700 text-center py-1">
        See more
      </p>
      <span className="h-[1px] bg-zinc-600 my-1"></span>
      <div className="relative flex flex-row w-full rounded-lg hover:bg-zinc-700 mt-2">
        <p className="text-sm font-light text-zinc-400 p-2">RESOURCES</p>
        <RiArrowDropDownLine className="absolute text-white font-light text-3xl mx-2 inset-y-0 right-0 my-auto" />
      </div>
      <div>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <IoGameControllerOutline className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Gaming</p>
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <TbBallTennis className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Sports</p>
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <AiOutlineLineChart className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Business</p>
        </button>
        <button className="relative flex flex-row w-full rounded-lg px-2 py-1 hover:bg-zinc-700">
          <GiCrystalShine className="text-white font-light text-3xl p-1 my-auto" />
          <p className="text-sm my-auto font-light text-white ml-1">Crypto</p>
        </button>
      </div>
    </div>
  );
}
