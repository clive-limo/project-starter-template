import Image from "next/image";
import Link from "next/link";
import { GiCrystalShine } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";

export function TrendingCard() {
  return (
    <div className="w-[280px] h-[211px] bg-gray-300 rounded-lg">
      <p>TrendingTopic</p>
      <p>TrendingDescription</p>
    </div>
  );
}

export function CommunitiesCard() {
  return (
    <div className="w-full flex flex-row p-1 ml-5">
      <GiCrystalShine className="text-white text-3xl p-1 my-auto" />
      <div className="ml-2">
        <p className="text-sm text-zinc-500 font-semibold">r/Community</p>
        <p className="text-sm text-zinc-500">100,000 members</p>
      </div>
    </div>
  );
}

export function postCard() {
  return (
    <div>
      <p>d</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="px-5 h-screen flex flex-col mt-14 overflow-y-auto">
      <section className="my-2 flex flex-row gap-5 overflow-x-auto">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </section>
      <section className="mt-10 flex-1 flex flex-row gap-3 overflow-x-hidden">
        <div className="flex-1 ">
          <Link
            href="/submit"
            className="w-20 border-[1px] border-white text-white font-bold text-[12px] rounded-full mx-1 my-2 hover:bg-zinc-700 text-center py-1"
          >
            Create Post
          </Link>
        </div>
        <div className="invisible lg:visible lg:flex-[0.5]">
          <div className="h-[380px] flex flex-col bg-zinc-900 ml-2 rounded-lg">
            <p className="p-3">POPULAR COMMUNITIES</p>
            <CommunitiesCard />
            <CommunitiesCard />
            <CommunitiesCard />
            <CommunitiesCard />
          </div>
        </div>
      </section>
    </main>
  );
  return (
    <main className="px-5 h-screen flex flex-col mt-14 overflow-y-auto">
      <section className="my-2 flex flex-row gap-5 overflow-x-auto">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </section>
      <section className="mt-10 flex-1 flex flex-row gap-3 overflow-x-hidden">
        <div className="flex-1 ">
          <Link
            href="/submit"
            className="my-2 w-20 border-[1px] border-white text-white font-bold text-[12px] rounded-full px-1 hover:bg-zinc-700 text-center py-1"
          >
            Create Post
          </Link>
        </div>
        <div className="invisible lg:visible lg:flex-[0.5]">
          <div className="h-[380px] flex flex-col bg-zinc-900 ml-2 rounded-lg">
            <p className="p-3">POPULAR COMMUNITIES</p>
            <CommunitiesCard />
            <CommunitiesCard />
            <CommunitiesCard />
            <CommunitiesCard />
          </div>
        </div>
      </section>
    </main>
  );
}
