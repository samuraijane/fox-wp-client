import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Compete, Home, Navigation } from "../components";
import { Contact } from "../components/contact";
import { Blog } from "../components/events";
import { Gallery } from "../components/gallery";

const CustomRoute = props => {
  const routeMap = {
    blog: Blog,
    contact: Contact,
    compete: Compete,
    gallery: Gallery,
    home: Home
  };

  const TheComponent = routeMap[props.theComponent];
  // TODO find out why we have to do this – passing props.pageData down is returns undefined in the child component
  const pageData = Object.assign({}, props.pageData);
  return (
    <Route
      path={props.path}
      render={props => <TheComponent {...props} pageData={pageData} />}
    />
  );
};

export default CustomRoute;
