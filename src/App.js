import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { arrayOf, func, shape } from "prop-types";
import { CustomRoute } from "./routes";
import { Navigation, Page404 } from "./components";
import { fetch, loadPaypal } from "./sstore/actions";
import styled from "styled-components";
import loadingGif from "./assets/motorcycle.gif";

const StyledGif = styled.div`
  height: 100px;
  margin: 0 auto;
  width: 140px;
`;

const App = props => {
  useEffect(() => {
    if (!window.paypal) props.loadPaypal();
    if (!props.token.authToken) props.fetch("token");
    if (props.pages && props.pages.length === 0) props.fetch("navs");
  }, [props.pages]);

  if (props.pages.length !== props.navsCount) {
    return (
      <StyledGif>
        <img src={loadingGif} />
      </StyledGif>
    );
  } else {
    const routes = props.pages.map((route, index) => {
      console.log("rat", route);
      return (
        <CustomRoute
          exact={true}
          key={index}
          path={`/${route.post_name}`}
          pageData={route}
          theComponent={route.post_name}
        />
      );
    });
    return (
      <div className="y-buffer y-wrap">
        <Navigation navs={props.navs} />
        <Switch>
          {routes}
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
};

App.defaultProps = {
  fetch: null,
  navs: []
};

App.propTypes = {
  fetch: func,
  navs: arrayOf(shape({})).isRequired
};

const mapDispatchToProps = {
  fetch,
  loadPaypal
};

const mapStateToProps = state => ({
  navs: state.navs,
  navsCount: state.stats.navsCount,
  pages: state.pages,
  token: state.token
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
