import { Mux } from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID as string,
  tokenSecret: process.env.MUX_TOKEN_SECRET as string,
});

const asset = await mux.video.assets.create({
  input: [{ url: "https://muxed.s3.amazonaws.com/leds.mp4" }],
  playback_policy: ["public"],
  video_quality: "basic",
});

export default function Mux() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6 gap-8">
        <h2 className="text-4xl font-bold">mux</h2>
        <p>https://www.mux.com/docs/core/stream-video-files</p>
      </div>
    </div>
  );
}
