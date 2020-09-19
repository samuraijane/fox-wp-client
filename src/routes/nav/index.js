import React from "react";
import { Route } from "react-router-dom";
import { any } from "prop-types";
import Blog from "../../views/blog";
import Compete from "../../views/compete";
import Contact from "../../views/contact";
import Gallery from "../../views/gallery";
import Home from "../../views/home";

const NavRoutes = (props) => {
  const routeMap = {
    blog: Blog,
    contact: Contact,
    compete: Compete,
    gallery: Gallery,
    home: Home,
  };

  const TheComponent = routeMap[props.componentName];
  // TODO find out why we have to do this – passing props.pageData down returns undefined in the child component
  const pageData = Object.assign({}, props.pageData);
  return (
    <Route
      path={props.path}
      render={(props) => <TheComponent {...props} pageData={pageData} />}
    />
  );
};

NavRoutes.propTypes = {
  theComponent: any,
  pageData: any,
  path: any,
};

export default NavRoutes;
