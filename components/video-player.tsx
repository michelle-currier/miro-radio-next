import React from "react";
import PropTypes from "prop-types";
import { Suspense } from "react";

interface YoutubeEmbedProps {
  embedId: string;
}
// m_qewI-1cEs?si=SCNc2VoV9mJGxacJ
// videoseries?si=BfEOmnDEXpFy0meW&amp;list=PLWAXBDf7xbeR_cbLB2lP-PDFlvUqhnAPz

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
  <div className="video-responsive">
    <Suspense fallback={<div>Loading the Video ...</div>}>
      <iframe
        className="rounded-md shadow-sm responsive-iframe"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        aria-label="Youtube playlist for Miro Radio "
      />
    </Suspense>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;


