"use-client";
import React from "react";
import PropTypes from "prop-types";

interface YoutubeEmbedProps {
  embedId: string;
}
// m_qewI-1cEs?si=SCNc2VoV9mJGxacJ

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      className="rounded-md shadow-sm"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

//www.youtube.com/watch?v=m_qewI-1cEs&list=PLWAXBDf7xbeR_cbLB2lP-PDFlvUqhnAPz&ab_channel=BoilerRoom
// https: <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/m_qewI-1cEs?si=SCNc2VoV9mJGxacJ"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen
// ></iframe>;
