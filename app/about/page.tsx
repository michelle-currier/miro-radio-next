// about
// "use client";
import YoutubePlaylist from "@/components/youtube";
export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6 gap-8">
        <h2 className="text-4xl font-bold">About</h2>
        <p>more info maybe</p>
        <YoutubePlaylist></YoutubePlaylist>
      </div>
    </div>
  );
}
