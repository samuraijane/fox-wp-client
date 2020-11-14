import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { any } from "prop-types";
import Blog from "../../views/nav/blog";
import Compete from "../../views/nav/compete";
import Contact from "../../views/nav/contact";
import Gallery from "../../views/nav/gallery";
import Home from "../../views/nav/home";
import PageRoute from "../page";

const NavRoutes = (props) => {
  const routeMap = {
    blog: Blog,
    contact: Contact,
    compete: Compete,
    gallery: Gallery,
    home: Home
  };

  if (props.pages && props.navs && props.pages.length === props.navs.length) {
    const navRoutes = props.pages.map((route, index) => {
      const componentName = route.post_title.toLowerCase();
      // get the route.url value after the penultimate trailing slash TODO, this is not foolproof yet
      const re = /\/[^/]+\/$/gi;
      // const path = route.url.match(re)[0];
      // TODO find out why we have to do this – passing props.pageData down returns undefined in the child component
      const pageData = Object.assign({}, route);
      const NavPageComponent = routeMap[componentName];

      return (
        <Route
          exact={true}
          key={index}
          path={`/${route.post_name}`}
          render={(props) => <NavPageComponent componentName={componentName} pageData={pageData} />}
        />
      );
    });

    return (
      <main style={{ marginTop: props.topMargin }}>
        {navRoutes}
        <PageRoute />
      </main>
    );
  } else {
    return <p>loading...</p>
  }
};

NavRoutes.propTypes = {
  theComponent: any,
  pageData: any,
  path: any,
};

const mapStateToProps = state => ({
  navs: state.navs,
  pages: state.pages,
  topMargin: state.styles.headerHeight
});

export default connect(mapStateToProps)(NavRoutes);
