import { Suspense } from "react";
import { Loading } from "./loading";

export default function SoundPlayer() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <iframe
          className="rounded-md soundCloud"
          width="100%"
          height="332"
          scrolling="yes"
          aria-label="Soundcloud playlist for Miro Radio"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1901635067&color=%236840c7&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </Suspense>
      {/* <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1901635067&color=%236840c7&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a
          href="https://soundcloud.com/dj-nice-rack"
          title="dj NicE RacK"
          target="_blank"
          style="color: #cccccc; text-decoration: none;"
        >
          dj NicE RacK
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/dj-nice-rack/sets/miro-radio-2024"
          title="Miro Radio 2024"
          target="_blank"
          style="color: #cccccc; text-decoration: none;"
        >
          Miro Radio 2024
        </a>
      </div> */}
    </>
  );
}
