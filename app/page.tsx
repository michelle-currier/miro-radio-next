import Image from "next/image";
import YoutubePlayer from "@/components/youtube";
import SoundPlayer from "@/components/sound-player";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <Image
          src="/miro-logo.png"
          width={264}
          height={230}
          priority
          alt="Miro Radio Logo"
        ></Image>
        <div className="flex gap-4 md:gap-8 flex-col items-center justify-around md:justify-between sm:flex-row">
          {/* <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-indigo-200 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
            >
              Play now
              <Image
                className="dark:invert rotate-90"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
            </a> */}
          {/* <SoundCloudPlayer playlistUrl="https://api.soundcloud.com/playlists/1901635067" /> */}

          <p className="bg-slate-900 rounded-md px-3 py-1 justify-self-center">
            <code>Music from the New Orleans Underground</code>
          </p>
          <Link
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-indigo-400  hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
            rel="noopener noreferrer"
          >
            Videos
          </Link>
        </div>
      </div>

      <SoundPlayer></SoundPlayer>
      <YoutubePlayer></YoutubePlayer>
      {/* <YoutubeEmbed embedId="videoseries?si=BfEOmnDEXpFy0meW&amp;list=PLWAXBDf7xbeR_cbLB2lP-PDFlvUqhnAPz"></YoutubeEmbed> */}
    </>
  );
}
