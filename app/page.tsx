"use-client";
import Image from "next/image";
import YoutubeEmbed from "@/components/video-player";
import SoundPlayer from "@/components/sound-player";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-items-center min-h-screen gap-4 sm:px-10 font-[family-name:var(--font-geist-sans)] fun-bg">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-8 pb-10">
        <div className="flex flex-row justify-between w-full">
          <Image
            src="/miro-logo.png"
            width={264}
            height={230}
            priority
            alt="Miro Radio Logo"
          ></Image>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
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
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
        <p className="bg-slate-900 rounded-md px-3 py-1">
          <code>Music from the New Orleans Underground</code>
        </p>
        <SoundPlayer></SoundPlayer>
        <YoutubeEmbed embedId="m_qewI-1cEs?si=SCNc2VoV9mJGxacJ"></YoutubeEmbed>
      </main>
      <Footer></Footer>
    </div>
  );
}
