import Image from "next/image";

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
