// about
// "use client";
import YoutubePlaylist from "@/components/youtube";
export default function About() {
  return (
    <div className="text-white flex flex-col">
      <div className="justify-start items-center p-6 gap-8">
        <h2 className="text-4xl font-bold">About/Videos</h2>
        <p>more info maybe</p>
        <YoutubePlaylist maxResults={23}></YoutubePlaylist>
      </div>
    </div>
  );
}
