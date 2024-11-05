"use-client";
import React from "react";

// const SoundCloudAudio = require("soundcloud-audio");

// // create new instance of audio
// // clientId is optional but without it you cannot play tracks directly from SoundCloud API
// const scPlayer = new SoundCloudAudio("YOUR_CLIENT_ID"); // there is a waiting list for this right now

// // if you have a SoundCloud api stream url you can just play it like that
// scPlayer.play({
//  streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'
// });

// // OR if you want to play a NON-SoundCloud audio
// scPlayer.play({ streamUrl: 'https://example.com/plain/audio/file' });

// // OR if you need to load a SoundCloud track and resolve it's data
//  scPlayer.resolve('https://soundcloud.com/djangodjango/first-light', function(
//    track
//  ) {
// // do smth with track object
// // e.g. display data in a view etc.
//    console.log(track);

// // once track is loaded it can be played
//    scPlayer.play();

// // stop playing track and keep silence
//    scPlayer.pause();
//  });

// // OR a SoundCloud playlist and resolve it's data
// scPlayer.resolve(
//   "http://soundcloud.com/jxnblk/sets/yello",
//   function (playlist) {
//     // do smth with array of `playlist.tracks` or playlist's metadata
//     // e.g. display playlist info in a view etc.
//     console.log(playlist);

//     // once playlist is loaded it can be played
//     scPlayer.play();

//     // for playlists it's possible to switch to another track in queue
//     // e.g. we do it here when playing track is finished
//     scPlayer.on("ended", function () {
//       scPlayer.next();
//     });

//     // play specific track from playlist by it's index
//     scPlayer.play({ playlistIndex: 2 });
//   }
// );
export default function SoundPlayer() {
  return (
    <>
      <iframe
        className="rounded-md"
        width="100%"
        height="166"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1901635067&color=%236840c7&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

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
