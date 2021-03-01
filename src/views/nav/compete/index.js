import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from "react-redux";
import { arrayOf, func, shape } from "prop-types";
import { EditorialLayout, HeroLayout, ImageLayout } from "../../../layouts";
import Result from '../../page/result';
import SignUp from '../../page/signup';

// eslint-disable-next-line react/prop-types
const Compete = (props) => {

  // const { RouteComponentProps } = history;

  const layouts = props.pageData.acf.layouts.map((layout, index) => {
    switch (layout.acf_fc_layout) {
      case "editorial_layout":
        return <EditorialLayout key={index} text={layout.body_text} />;
      case "images_layout":
        return <ImageLayout key={index} images={layout.images} />;
      case "hero_layout":
        return <HeroLayout isFull graphic={layout.images[0].image.url} key={index} />;

      default:
        console.error("Unknown layout type.");
    }
  });

  return (
    <>
      {layouts}
      <div className="y-button">
        <button onClick={() => props.history.push('/compete/result')}>See Results</button>
        <button onClick={() => props.history.push('/compete/signup')}>Sign up</button>
      </div>
    </>
  );
};

Compete.propTypes = {
  classes: arrayOf(shape({})),
  fetch: func,
  pageData: shape({}),
  registerFields: shape({}),
};

const mapStateToProps = (state) => ({
  classes: state.classes,
  navs: state.navs,
  pages: state.pages,
  registerFields: state.registerFields,
  token: state.token,
});

export default withRouter(connect(mapStateToProps)(Compete));
