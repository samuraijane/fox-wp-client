import React from "react";
import { shape } from "prop-types";
import { HeroLayout, EditorialLayout } from "../../layouts";

const Home = ({ pageData }) => {
  const layouts = pageData.acf.layouts.map((layout, index) => {
    if (layout.acf_fc_layout === "hero_layout") {
      return <HeroLayout graphic={layout.images[0].image.url} key={index} />;
    }
    if (layout.acf_fc_layout === "editorial_layout") {
      return <EditorialLayout key={index} text={layout.body_text} />;
    }
    return <p key="blah">Error: Unknown layout</p>;
  });

  return <div>{layouts}</div>;
};

Home.propTypes = {
  pageData: shape({})
};

export default Home;
