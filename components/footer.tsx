import Link from "next/link";

import { FaHeadphones } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container row-start-3 flex gap-6 flex-wrap items-center justify-between px-2 lg:px-16 pb-10 max-xl ">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-teal-200"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        title=""
      >
        <FaHeadphones />
        Discover
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-pink-200"
        href="/"
        rel="noopener noreferrer"
      >
        <IoLibrary />
        Acrhives
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-lime-200"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCircleInfo />
        Terms and Conditions
      </Link>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">Watch the latest</li>
        <li>Listen</li>
      </ol>
    </footer>
  );
}
