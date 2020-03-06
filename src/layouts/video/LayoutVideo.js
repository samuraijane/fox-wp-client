import React from "react";
import { shape } from "prop-types";

const Video = ({ video }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${video.url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

Video.propTypes = {
  video: shape({})
};

export default Video;
