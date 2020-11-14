import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { arrayOf, func, shape } from "prop-types";
import Footer from './views/footer';
import Navigation from './layouts/navigation';
import NavRoute from "./routes/nav";
import Payment from './components/payment/Payment';
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
    return (
      <div className="y-wrap">
        <Navigation navs={props.navs} />
        <Switch>
          <NavRoute />
        </Switch>
        <Footer />
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

/**
  nav items coming from WP via props
    home
    blog
    gallery
    contact
    compete
*/
