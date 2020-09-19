import React from "react";
import { arrayOf, shape, string } from "prop-types";
import { EditorialLayout, ImageLayout } from "../../../layouts";

const SinglePost = ({ layouts, title }) => {
  const processLayouts = layouts.map((layout, index) => {
    switch (layout.acf_fc_layout) {
      case "editorial_layout":
        return <EditorialLayout key={index} text={layout.body_text} />;
      case "images_layout":
        return <ImageLayout key={index} images={layout.images} />;
      default:
        console.error("Unknown layout type.");
    }
  });
  return (
    <div className="event">
      <h1>{title}</h1>
      {processLayouts}
    </div>
  );
};

SinglePost.propTypes = {
  layouts: arrayOf(shape({})),
  title: string
};

export default SinglePost;
