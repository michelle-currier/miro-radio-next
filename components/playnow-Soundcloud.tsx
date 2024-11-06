"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaPlay, FaPause } from "react-icons/fa"; // Import play and pause icons

interface SoundCloudPlayerProps {
  playlistUrl?: string;
}
declare global {
  interface Window {
    SC: {
      Widget: (iframe: HTMLIFrameElement) => {
        load: (url: string, options?: { auto_play?: boolean }) => void;
        play: () => void;
        pause: () => void;
        isPaused: () => boolean;
      };
    };
  }
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({
  playlistUrl = "https://api.soundcloud.com/playlists/1901635067",
}) => {
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const widgetRef = useRef<any>(null); // Ref to store the SoundCloud widget
  const [isPlaying, setIsPlaying] = useState(false); // State for play/pause

  useEffect(() => {
    const loadWidgetScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.SC) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://w.soundcloud.com/player/api.js";
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load SoundCloud API script"));
        document.body.appendChild(script);
      });
    };

    const initializeWidget = async () => {
      try {
        await loadWidgetScript();
        if (window.SC && playerRef.current) {
          widgetRef.current = new window.SC.Widget(playerRef.current);
          widgetRef.current.load(playlistUrl, { auto_play: false });
        }
      } catch (error) {
        console.error("Error initializing SoundCloud widget:", error);
      }
    };

    initializeWidget();
  }, [playlistUrl]);

  const handleTogglePlay = () => {
    if (widgetRef.current) {
      if (widgetRef.current.isPaused()) {
        widgetRef.current.play();
        setIsPlaying(true);
      } else {
        widgetRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      <iframe
        ref={playerRef}
        width="100"
        height="100"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          playlistUrl
        )}&auto_play=false`}
        title="SoundCloud Player"
      ></iframe>

      <button
        onClick={handleTogglePlay}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-indigo-200 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        {isPlaying ? <FaPause /> : <FaPlay />} {/* Toggle icon */}
        <span className="ml-2">{isPlaying ? "Pause" : "Play Now"}</span>
      </button>
    </div>
  );
};

export default SoundCloudPlayer;
