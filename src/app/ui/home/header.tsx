import { greatvibes } from "../../ui/fonts";
import Link from "next/link";

export default function Header() {
  const headerButtonsClassNames =
    "w-14 cursor-pointer flex justify-center align-center items-center hover:bg-neutral-800 active:bg-neutral-800";
  const verticalDivider = <div className="w-px my-2 h-10 bg-blue-400 dark:bg-gray-300"></div>;

  return (
    <div className="w-screen min-w-full h-14 flex flex-row bg-white text-black dark:bg-black dark:text-white">
      <Link href="/" className={headerButtonsClassNames}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 active:stroke-blue-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </Link>

      {verticalDivider}
      <div
        className={`${greatvibes.className} antialiased text-blue-400 text-[2rem] flex-10 text-center content-center`}
      >
        Cesar's Front-end Desk
      </div>
      {verticalDivider}
      <div className={headerButtonsClassNames}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 active:stroke-blue-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  );
}
