import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { arrayOf, func, shape } from "prop-types";
import { EventRegistration, Home, Navigation, Page404 } from "./components";
import { Contact } from "./components/contact";
import { Events } from "./components/events";
import { Gallery } from "./components/gallery";
import { fetch, loadPaypal } from "./sstore/actions";
import styled from "styled-components";
import loadingGif from "./assets/motorcycle.gif";

const StyledGif = styled.div`
  height: 100px;
  margin: 0 auto;
  width: 140px;
`;

const App = props => {
  const [pages, setPages] = useState({});
  useEffect(() => {
    props.loadPaypal();
    if (!props.token.authToken) props.fetch("token");
    if (props.pages && props.pages.length === 0) {
      props.fetch("navs");
    } else if (
      props.pages &&
      props.pages.length > 0 &&
      // TODO Find a better solution than hardcoding an expected value for pages that have associated nav items
      props.pages.length !== 4
    ) {
      // do nothing
    } else if (props.pages) {
      const contact = props.pages.find(x => x.post_name === "contact");
      const events = props.pages.find(x => x.post_name === "events");
      const gallery = props.pages.find(x => x.post_name === "gallery");
      const landing = props.pages.find(x => x.post_name === "landing");
      const all = Object.assign(
        {},
        {
          contact,
          events,
          gallery,
          landing
        }
      );
      setPages(all);
    }
  }, [props.pages]);

  if (Object.getOwnPropertyNames(pages).length !== 4) {
    return (
      <StyledGif>
        <img src={loadingGif} />
      </StyledGif>
    );
  } else {
    return (
      <div className="y-buffer">
        <Navigation navs={props.navs} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} pageData={pages.landing} />}
          />
          <Route
            path="/contact"
            render={props => <Contact {...props} pageData={pages.contact} />}
          />
          <Route
            path="/events"
            render={props => <Events {...props} pageData={pages.events} />}
          />
          <Route
            path="/gallery"
            render={props => <Gallery {...props} pageData={pages.gallery} />}
          />
          <Route
            path="/landing"
            render={props => <Home {...props} pageData={pages.landing} />}
          />
          <Route path="/register" component={EventRegistration} />
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
  pages: state.pages,
  token: state.token
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
