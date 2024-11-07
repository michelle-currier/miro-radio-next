"use client";
import React, { useEffect, useState } from "react";

interface VideoSnippet {
  title: string;
  resourceId: {
    videoId: string;
  };
  thumbnails: {
    maxres?: {
      url: string;
    };
    default: {
      url: string;
    };
  };
}

interface VideoItem {
  snippet: VideoSnippet;
}

interface YoutubeApiResponse {
  items: VideoItem[];
}
export default function YoutubePlaylist() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=23&playlistId=PLWAXBDf7xbeR_cbLB2lP-PDFlvUqhnAPz&key=AIzaSyB3qfokjvF6LqOt20DjezdJZAczdGnyymo"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.items) {
          setVideos(data.items);
        } else {
          throw new Error("No video items found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
        setError("Failed to load videos.");
      });
  }, []);

  return (
    <section>
      {error ? (
        <p>{error}</p>
      ) : (
        videos.map((video) => {
          // Check if snippet and required fields exist
          const { snippet } = video;
          if (!snippet || !snippet.resourceId || !snippet.thumbnails) {
            console.warn("Missing snippet data for video:", video);
            return null; // Skip rendering this item if required data is missing
          }

          const thumbnailUrl = snippet.thumbnails.maxres
            ? snippet.thumbnails.maxres.url
            : snippet.thumbnails.default.url;

          return (
            <a
              key={snippet.resourceId.videoId}
              href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-video"
            >
              <img src={thumbnailUrl} alt={snippet.title} />
              <h3>{snippet.title}</h3>
            </a>
          );
        })
      )}
    </section>
  );
}
