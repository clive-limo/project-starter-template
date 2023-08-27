"use client";

import { useState } from "react";
import clsx from "clsx";
import { BsImage, BsImageFill } from "react-icons/bs";
import { PiLinkSimpleBold, PiLinkSimpleBreakBold } from "react-icons/pi";
import { RiPagesFill, RiPagesLine } from "react-icons/ri";

export default function Submit() {
  const [communityListOpen, setCommunityListOpen] = useState(false);
  const [selectedPostType, setSelectedPostType] = useState("post");

  const HandleListStateChange = (listState: boolean) => {
    setCommunityListOpen(!listState);
  };

  return (
    <section className="mt-[100px] w-[750px] flex flex-col mx-6">
      <p className="text-lg font-bold my-4">Create a post</p>
      <span className="w-full h-[1px] my-1 bg-zinc-600" />
      <div className="relative my-2 flex flex-col">
        <div
          className={clsx(
            "w-[300px] p-2 border-[1px] bg-zinc-900 border-zinc-600",
            communityListOpen ? "rounded-b-md" : "rounded-md"
          )}
        >
          <input
            placeholder="Choose a community"
            className="bg-zinc-900"
            onFocus={() => HandleListStateChange(communityListOpen)}
            onBlur={() => HandleListStateChange(communityListOpen)}
          />
        </div>
        <div
          className={clsx(
            "mt-14 absolute w-[300px] h-[350px] z-10 border-[1px] border-zinc-600 bg-zinc-900 rounded-md",
            communityListOpen ? "visible" : "invisible w-0"
          )}
        >
          <span className="w-full h-[1px] my-1 bg-zinc-600" />
        </div>
      </div>
      <div>
        <div className="flex flex-row bg-zinc-900 rounded-t-md">
          <button
            onClick={() => setSelectedPostType("post")}
            className={clsx(
              "flex flex-row flex-1 justify-center border-r-0 hover:bg-zinc-800",
              selectedPostType === "post"
                ? "border-b-4 border-white bg-zinc-800"
                : "border-b-[1px] border-zinc-600"
            )}
          >
            <RiPagesLine
              className={clsx(
                "text-xl my-auto text-zinc-600",
                selectedPostType === "post" ? "invisible w-0" : "visible"
              )}
            />
            <RiPagesFill
              className={clsx(
                "text-xl my-auto text-white",
                selectedPostType === "post" ? "visible" : "invisible w-0"
              )}
            />
            <p
              className={clsx(
                "text-center p-2 text-base font-bold my-auto",
                selectedPostType === "post" ? "text-white" : "text-zinc-600"
              )}
            >
              Post
            </p>
          </button>
          <button
            onClick={() => setSelectedPostType("image")}
            className={clsx(
              "flex flex-row flex-1 justify-center  border-l-[1px] border-zinc-600 hover:bg-zinc-800",
              selectedPostType === "image"
                ? "border-b-4 border-b-white bg-zinc-800"
                : "border-b-[1px] border-zinc-600"
            )}
          >
            <BsImage
              className={clsx(
                "text-xl my-auto text-zinc-600",
                selectedPostType === "image" ? "invisible w-0" : "visible"
              )}
            />
            <BsImageFill
              className={clsx(
                "text-xl my-auto text-white",
                selectedPostType === "image" ? "visible" : "invisible w-0"
              )}
            />
            <p
              className={clsx(
                "text-center p-2 text-base font-bold my-auto",
                selectedPostType === "image" ? "text-white" : "text-zinc-600"
              )}
            >
              Images & Videos
            </p>
          </button>
          <button
            onClick={() => setSelectedPostType("link")}
            className={clsx(
              "flex flex-row flex-1 justify-center  border-l-[1px] border-l-zinc-600 hover:bg-zinc-800",
              selectedPostType === "link"
                ? "border-b-4 border-white bg-zinc-800"
                : "border-b-[1px] border-zinc-600"
            )}
          >
            <PiLinkSimpleBreakBold
              className={clsx(
                "text-xl my-auto text-zinc-600",
                selectedPostType === "link" ? "invisible w-0" : "visible"
              )}
            />
            <PiLinkSimpleBold
              className={clsx(
                "text-xl my-auto text-white",
                selectedPostType === "link" ? "visible" : "invisible w-0"
              )}
            />
            <p
              className={clsx(
                "text-center p-2 text-base font-bold my-auto",
                selectedPostType === "link" ? "text-white" : "text-zinc-600"
              )}
            >
              Link
            </p>
          </button>
        </div>
        <section
          className={clsx(
            "w-full bg-zinc-900",
            selectedPostType === "post" ? "visible p-3" : "invisible h-0 p-0"
          )}
        >
          <input
            placeholder="Title"
            className="w-full my-2 border-[1px] bg-zinc-900 rounded-sm border-zinc-600 py-1 px-3"
          />
          <textarea
            placeholder="Write your post"
            className="w-full h-36 my-2 border-[1px] bg-zinc-900 rounded-sm border-zinc-600 py-1 px-3"
          />
        </section>
        <section
          className={clsx(
            "w-full bg-zinc-900",
            selectedPostType === "link" ? "visible p-3" : "invisible h-0 m-0"
          )}
        >
          <input
            placeholder="Title"
            className="w-full my-2 border-[1px] bg-zinc-900 rounded-sm border-zinc-600 py-1 px-3"
          />
          <textarea
            placeholder="Enter a URL"
            className="w-full my-2 border-[1px] bg-zinc-900 rounded-sm border-zinc-600 py-1 px-3"
          />
        </section>
        <section className="w-full gap-2 flex flex-row bg-zinc-900 rounded-b-md p-3 justify-end">
          <button className="px-4 py-1 rounded-full text-base font-bold bg-gray-300 hover:bg-red-300">
            Cancel
          </button>
          <button className="px-4 py-1 rounded-full text-base font-bold bg-zinc-600 hover:bg-zinc-800">
            Post
          </button>
        </section>
      </div>
    </section>
  );
}
