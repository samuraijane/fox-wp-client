import React from "react";
import { shape } from "prop-types";
import { EditorialLayout, ImageLayout, VideoLayout } from "../../layouts";

const Gallery = ({ pageData }) => {
  const layouts = pageData.acf.layouts.map((layout, index) => {
    if (layout.acf_fc_layout === "editorial_layout") {
      return <EditorialLayout key={index} text={layout.body_text} />;
    }
    if (layout.acf_fc_layout === "videos_layout") {
      const videos = layout.videos.map((video, videoIndex) => {
        const videoSpecs = {
          type: video.video_type,
          url: video.video_url
        };
        return <VideoLayout key={videoIndex} video={videoSpecs} />;
      });
      return <div key={index}>{videos}</div>;
    }
    if (layout.acf_fc_layout === "images_layout") {
      return <ImageLayout key={index} images={layout.images} />;
    }
    return <p key="blah">Error: Unknown layout</p>;
  });

  return <div>{layouts}</div>;
};

Gallery.propTypes = {
  pageData: shape({})
};

export default Gallery;
