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
    </>
  );
}
