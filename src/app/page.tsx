import Link from "next/link";
import Hover from "./components/hover";
import { pages } from "./content/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 lg:pb-24 lg:px-24 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          If interested in technology
          <a
            className="font-bold"
            // open in new tab
            target="_blank"
            href="https://forms.gle/igAzcJaCd4ohQczd9"
          >
            &nbsp; apply here &nbsp;
          </a>
          !
        </p>
      </div>

      <div className="hover-scroll px-2 lg:px-8 overflow-y-auto">
        {/* should reveal a scroll down message */}
        <Hover color="transparent" page="DiversaTech" arrow={true} />
        <div className="hidden md:block lg:block">
          {/* add a down error below this */}
          {pages.map((page, i) => {
            return <Hover key={i} page={page} bottomContent={true} />;
          })}
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {pages.map((page, i) => {
          return (
            <Link
              href={{
                pathname: "/pages",
                query: {
                  page,
                },
              }}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-light-orange hover:bg-light-blue"
              replace={true}
              key={i}
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {page + " "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
